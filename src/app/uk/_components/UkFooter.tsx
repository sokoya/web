import Image from "next/image";
import Link from "next/link";
import { CountrySwitcher } from "@/app/_components/CountrySwitcher";
import footerLogo from "@/assets/images/logo-white.png";

const POLICY_LINKS = [
	{ href: "/uk/terms-and-conditions", label: "Terms & Conditions" },
	{ href: "/uk/privacy-policy", label: "Privacy Policy" },
	{ href: "/uk/complaints-policy", label: "Complaints Policy" },
	{ href: "/uk/cookies-policy", label: "Cookie Policy" },
	{ href: "/uk/acceptable-use-policy", label: "Acceptable Use Policy" },
] as const;

export function UkFooter() {
	return (
		<footer className='bg-secondary text-slate-200'>
			<div className='container mx-auto px-5 py-12 md:py-16'>
				<div className='flex flex-col gap-8 border-b border-slate-800 pb-10 lg:flex-row lg:items-start lg:justify-between'>
					<div className='space-y-4'>
						<Image
							src={footerLogo}
							alt='Payscribe'
							className='w-[110px] object-contain'
						/>
						<p className='text-sm text-slate-400'>
							<a
								href='mailto:complaints@payscribe.co'
								className='hover:text-white'
							>
								complaints@payscribe.co
							</a>
							<br />
							Payscribe Limited · Co. No. 17196544
						</p>
					</div>

					<nav className='flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-300'>
						{POLICY_LINKS.map((link) => (
							<Link key={link.href} href={link.href} className='hover:text-white'>
								{link.label}
							</Link>
						))}
					</nav>
				</div>

				<p className='mt-8 max-w-3xl text-xs leading-relaxed text-slate-400'>
					Payscribe is the trading name of Payscribe Limited (registered in
					England and Wales, Company No. 17196544, ICO Registration No.
					ZC155519) and its affiliated Nigerian entity, Pscribe Digital
					Services Limited (RC1946239). Payscribe is a fintech company, not a
					bank. Banking and safeguarding services are provided by licensed banks
					and authorised financial institutions in their respective
					jurisdictions.
				</p>

				<div className='mt-8'>
					<CountrySwitcher defaultCountry='uk' />
				</div>
			</div>
		</footer>
	);
}
