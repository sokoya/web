"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const REGION_PREFERENCE_KEY = "payscribe-region-preference";
const REGION_DETECTION_KEY = "payscribe-detected-region";
const REGION_CACHE_TTL = 7 * 24 * 60 * 60 * 1000;

const regionalRoutes = new Set([
	"/",
	"/acceptable-use-policy",
	"/complaints-policy",
	"/cookies-policy",
	"/privacy-policy",
	"/terms-and-conditions",
]);

type Region = "ng" | "uk";

type CachedRegion = {
	region: Region;
	expiresAt: number;
};

const LOG_PREFIX = "[Payscribe region]";
let ipRegionRequest: Promise<Region | null> | null = null;

function log(message: string, details?: unknown) {
	if (details === undefined) {
		console.info(LOG_PREFIX, message);
		return;
	}
	console.info(LOG_PREFIX, message, details);
}

function detectRegionFromIp(): Promise<Region | null> {
	if (ipRegionRequest) return ipRegionRequest;

	ipRegionRequest = fetch("/api/region", { cache: "no-store" })
		.then(async (response) => {
			if (!response.ok) throw new Error(`Region endpoint returned HTTP ${response.status}`);
			const result = (await response.json()) as {
				country?: string | null;
				region?: Region | null;
			};
			log("IP-based region response received.", result);
			if (result.region === "uk" || result.region === "ng") return result.region;

			log("Hosting country header is unavailable; checking the public IP.");
			const publicIpResponse = await fetch(
				"https://ipwho.is/?fields=success,country_code,message",
				{ cache: "no-store" },
			);
			if (!publicIpResponse.ok) {
				throw new Error(`Public IP lookup returned HTTP ${publicIpResponse.status}`);
			}
			const publicIpResult = (await publicIpResponse.json()) as {
				success?: boolean;
				country_code?: string;
				message?: string;
			};
			if (publicIpResult.success === false || !publicIpResult.country_code) {
				throw new Error(publicIpResult.message || "Public IP lookup returned no country");
			}

			const region: Region = publicIpResult.country_code.toUpperCase() === "GB" ? "uk" : "ng";
			log("Public IP country resolved.", {
				country: publicIpResult.country_code,
				region,
			});
			return region;
		})
		.catch((error) => {
			console.warn(LOG_PREFIX, "IP-based detection unavailable.", error);
			return null;
		});

	return ipRegionRequest;
}

function getCachedRegion(): Region | null {
	try {
		const value = window.localStorage.getItem(REGION_DETECTION_KEY);
		if (!value) {
			log("No cached detection found.");
			return null;
		}

		const cached = JSON.parse(value) as CachedRegion;
		if (
			(cached.region === "uk" || cached.region === "ng") &&
			cached.expiresAt > Date.now()
		) {
			log("Using cached detection.", {
				region: cached.region,
				expiresAt: new Date(cached.expiresAt).toISOString(),
			});
			return cached.region;
		}

		log("Cached detection is invalid or expired; removing it.");
		window.localStorage.removeItem(REGION_DETECTION_KEY);
	} catch (error) {
		console.warn(LOG_PREFIX, "Could not read the region cache.", error);
		return null;
	}

	return null;
}

function cacheRegion(region: Region) {
	const value: CachedRegion = {
		region,
		expiresAt: Date.now() + REGION_CACHE_TTL,
	};
	try {
		window.localStorage.setItem(REGION_DETECTION_KEY, JSON.stringify(value));
		log("Cached detection for seven days.", value);
	} catch (error) {
		console.warn(LOG_PREFIX, "Could not cache the detected region.", error);
		// Continue routing when storage is unavailable.
	}
}

function basePath(pathname: string) {
	if (pathname === "/uk") return "/";
	return pathname.startsWith("/uk/") ? pathname.replace(/^\/uk/, "") : pathname;
}

function pathForRegion(pathname: string, region: Region) {
	const path = basePath(pathname);
	if (!regionalRoutes.has(path)) return pathname;
	if (region === "uk") return path === "/" ? "/uk" : `/uk${path}`;
	return path;
}

function regionFromBrowserTimezone(): Region {
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const region = timezone === "Europe/London" ? "uk" : "ng";
	log("Using browser timezone fallback.", { timezone, region });
	return region;
}

function regionFromCoordinates(latitude: number, longitude: number): Region {
	// Approximate the UK locally without transmitting coordinates to another service.
	const greatBritain =
		latitude >= 49.8 && latitude <= 60.9 && longitude >= -6.5 && longitude <= 1.8;
	const northernIreland =
		latitude >= 54 && latitude <= 55.4 && longitude >= -8.3 && longitude <= -5.3;
	const westernScottishIslands =
		latitude >= 56.5 && latitude <= 60.9 && longitude >= -8.7 && longitude < -6.5;
	const region = greatBritain || northernIreland || westernScottishIslands ? "uk" : "ng";
	log("Using browser-coordinate fallback.", { region });
	return region;
}

async function detectRegion(apiKey?: string): Promise<Region> {
	log("Requesting browser location permission.");
	const position = await new Promise<GeolocationPosition>((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, {
			enableHighAccuracy: false,
			timeout: 8000,
			maximumAge: 60 * 60 * 1000,
		});
	});
	const { latitude, longitude } = position.coords;
	if (apiKey) {
		try {
			log("Browser location received; requesting country from Google.");
			const response = await fetch(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=country&key=${encodeURIComponent(apiKey)}`,
			);
			if (!response.ok) throw new Error(`Google returned HTTP ${response.status}`);

			const result = (await response.json()) as {
				status?: string;
				error_message?: string;
				results?: Array<{
					address_components?: Array<{ short_name?: string; types?: string[] }>;
				}>;
			};
			log("Google geocoding response received.", {
				status: result.status,
				errorMessage: result.error_message,
			});
			if (result.status !== "OK") {
				throw new Error(
					result.error_message ||
						`Location lookup failed with status ${result.status ?? "unknown"}`,
				);
			}

			const country = result.results
				?.flatMap((item) => item.address_components ?? [])
				.find((item) => item.types?.includes("country"))?.short_name;
			const region = country === "GB" ? "uk" : "ng";
			log("Country resolved through Google.", { country, region });
			return region;
		} catch (error) {
			console.warn(LOG_PREFIX, "Google lookup failed; using browser coordinates.", error);
		}
	} else {
		console.warn(LOG_PREFIX, "Google API key is unavailable; using browser coordinates.");
	}

	return regionFromCoordinates(latitude, longitude);
}

export function RegionRedirect() {
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const path = basePath(pathname);
		log("Evaluating route.", { pathname, regionalPath: path });
		if (!regionalRoutes.has(path)) {
			log("Route has no UK-specific equivalent; leaving it unchanged.");
			return;
		}

		const applyRegion = (region: Region) => {
			const destination = pathForRegion(pathname, region);
			if (destination !== pathname) {
				log("Redirecting to regional page.", { region, from: pathname, to: destination });
				router.replace(destination, { scroll: false });
			} else {
				log("Already on the correct regional page.", { region, pathname });
			}
		};

		const preference = window.localStorage.getItem(REGION_PREFERENCE_KEY);
		if (preference === "uk" || preference === "ng") {
			log("Using saved manual preference.", { region: preference });
			applyRegion(preference);
			return;
		}

		let active = true;
		detectRegionFromIp()
			.then(async (ipRegion) => {
				if (!active) return;
				if (ipRegion) {
					log("Using IP-based region (VPN-aware).", { region: ipRegion });
					cacheRegion(ipRegion);
					applyRegion(ipRegion);
					return;
				}

				const detected = getCachedRegion();
				if (detected) {
					applyRegion(detected);
					return;
				}

				if (!("geolocation" in navigator)) {
					console.warn(LOG_PREFIX, "Browser geolocation is unavailable; using timezone.");
					const region = regionFromBrowserTimezone();
					cacheRegion(region);
					applyRegion(region);
					return;
				}

				const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;
				log("IP detection unavailable and no valid cache found; starting browser detection.");
				const region = await detectRegion(apiKey);
				if (!active) return;
				cacheRegion(region);
				applyRegion(region);
			})
			.catch((error) => {
				if (!active) return;
				console.warn(LOG_PREFIX, "Browser location failed; using timezone.", error);
				const region = regionFromBrowserTimezone();
				cacheRegion(region);
				applyRegion(region);
			});

		return () => {
			active = false;
		};
	}, [pathname, router]);

	return null;
}

export { REGION_PREFERENCE_KEY };
