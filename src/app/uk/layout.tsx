import { UkNav } from "@/app/uk/_components/UkNav";
import { UkFooter } from "@/app/uk/_components/UkFooter";

export default function UkLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='min-h-screen bg-gray-50 text-secondary'>
			<UkNav />
			{children}
			<UkFooter />
		</div>
	);
}
