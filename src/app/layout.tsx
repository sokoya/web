import type { Metadata } from "next";
import "./globals.css";
import { CookiesBanner } from "./_components/CookiesBanner";

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
				url: "/opengraph-image",
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
		images: ["/opengraph-image"],
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
