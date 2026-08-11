import type { Metadata } from "next";
import "./globals.css";
import { CookiesBanner } from "./_components/CookiesBanner";
import { StructuredData } from "./_components/StructuredData";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.payscribe.co"),
	applicationName: "Payscribe",
	title: {
		default: "Payscribe",
		template: "%s | Payscribe",
	},
	description:
		"Payscribe provides robust payment infrastructure for businesses: digital payments, stablecoin rails, card issuing, invoicing, and more.",
	keywords: [
		"Payscribe",
		"payments",
		"payment infrastructure",
		"fintech",
		"card issuing",
		"digital payments",
		"stablecoin rails",
		"invoicing",
		"payment links",
		"wallets",
		"API",
	],
	icons: {
		icon: [
			{ url: "/app-icon.ico", sizes: "32x32", type: "image/x-icon" },
			{ url: "/app-icon.png", sizes: "360x360", type: "image/png" },
		],
		shortcut: "/app-icon.ico",
		apple: [{ url: "/app-icon.png", sizes: "360x360", type: "image/png" }],
	},
	openGraph: {
		type: "website",
		url: "/",
		siteName: "Payscribe",
		title: "Payscribe",
		description:
			"Payscribe provides robust payment infrastructure for businesses: digital payments, stablecoin rails, card issuing, invoicing, and more.",
		images: [
			{
				url: "/opengraph-image?v=2",
				width: 1200,
				height: 630,
				alt: "Payscribe payment infrastructure",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Payscribe",
		description:
			"Payment infrastructure for digital payments, stablecoin rails, card issuing, invoicing, and more.",
		images: ["/opengraph-image?v=2"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<StructuredData
					data={[
						{
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Payscribe",
							url: SITE_URL,
							logo: `${SITE_URL}/app-icon.png`,
							sameAs: [
								"https://www.facebook.com/payscribe/",
								"https://www.instagram.com/payscribe/",
								"https://ng.linkedin.com/company/payscribe",
							],
						},
						{
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "Payscribe",
							url: SITE_URL,
						},
					]}
				/>
				{children}
				<CookiesBanner />
				{/* <script
					src='https://payscribe-crm.vercel.app/support-widget.js'
					data-merchant-id='BIZ-00003'
				></script> */}
			</body>
		</html>
	);
}
