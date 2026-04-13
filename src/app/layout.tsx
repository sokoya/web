import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/app-icon.ico'
					sizes='any'
					type='image/png'
				></link>
			</head>
			<body className='antialiased'>{children}</body>
		</html>
	);
}
