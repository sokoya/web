"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type Country = "ng" | "uk";

const countries: Array<{
	value: Country;
	label: string;
	flag: string;
}> = [
	{ value: "ng", label: "Nigeria", flag: "🇳🇬" },
	{ value: "uk", label: "UK", flag: "🇬🇧" },
];

const ukRoutes = new Set([
	"/acceptable-use-policy",
	"/complaints-policy",
	"/cookies-policy",
	"/privacy-policy",
	"/terms-and-conditions",
]);

function getCountryPath(country: Country, pathname: string) {
	if (country === "ng") {
		if (pathname === "/uk") return "/";
		if (pathname.startsWith("/uk/")) return pathname.replace(/^\/uk/, "");
		return pathname || "/";
	}

	if (pathname === "/" || pathname === "/uk") return "/uk";
	if (pathname.startsWith("/uk")) return pathname;
	if (ukRoutes.has(pathname)) return `/uk${pathname}`;
	return "/uk";
}

export function CountrySwitcher({
	defaultCountry = "ng",
}: {
	defaultCountry?: Country;
}) {
	const pathname = usePathname();
	const router = useRouter();
	const activeCountry = pathname.startsWith("/uk") ? "uk" : defaultCountry;

	return (
		<label className='relative inline-flex items-center'>
			<span className='sr-only'>Select country</span>
			<select
				value={activeCountry}
				onChange={(event) => {
					const nextCountry = event.target.value as Country;
					router.push(getCountryPath(nextCountry, pathname));
				}}
				className='h-11 appearance-none rounded-full border border-slate-700 bg-slate-900/70 py-2 pl-4 pr-10 text-sm font-semibold text-white outline-none transition hover:border-slate-500 focus:border-white'
			>
				{countries.map((country) => (
					<option key={country.value} value={country.value}>
						{country.flag} {country.label}
					</option>
				))}
			</select>
			<ChevronDown
				aria-hidden='true'
				className='pointer-events-none absolute right-3 h-4 w-4 text-slate-300'
			/>
		</label>
	);
}
