import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Home } from "lucide-react";
import { Nav } from "./_components/Nav";
import { Footer } from "./_components/Footer";

export const metadata: Metadata = {
	title: "Page not found",
	description: "The page you requested could not be found.",
	robots: {
		index: false,
		follow: false,
	},
};

const helpfulLinks = [
	{ href: "/for-business", label: "For businesses" },
	{ href: "/for-developers", label: "For developers" },
	{ href: "/contact-us", label: "Contact support" },
];

export default function NotFound() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav />

			<main className='relative isolate overflow-hidden border-t border-slate-100'>
				<div
					aria-hidden='true'
					className='absolute inset-0 -z-20 bg-[linear-gradient(to_right,#214dc00a_1px,transparent_1px),linear-gradient(to_bottom,#214dc00a_1px,transparent_1px)] bg-[size:44px_44px]'
				/>
				<div
					aria-hidden='true'
					className='absolute -top-48 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl'
				/>

				<section className='mx-auto flex min-h-[680px] w-full max-w-5xl flex-col items-center justify-center px-5 py-20 text-center md:py-28'>
					<div className='mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur'>
						<span className='h-2 w-2 rounded-full bg-primary' />
						Error 404
					</div>

					<div className='relative'>
						<p
							aria-hidden='true'
							className='select-none bg-linear-to-b from-primary to-[#10379f] bg-clip-text text-[clamp(7rem,25vw,15rem)] font-bold leading-[0.72] tracking-[-0.08em] text-transparent opacity-10'
						>
							404
						</p>
						<div className='absolute inset-0 flex flex-col items-center justify-center pt-5'>
							<h1 className='max-w-2xl text-3xl font-semibold tracking-tight text-secondary sm:text-5xl'>
								This page wandered off
							</h1>
						</div>
					</div>

					<p className='mt-10 max-w-xl text-base leading-7 text-slate-600 sm:text-lg'>
						The page may have moved, the address might be incorrect, or the
						link may have expired. Let&apos;s get you back on track.
					</p>

					<div className='mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row'>
						<Link
							href='/'
							className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#193fa5]'
						>
							<Home className='h-4 w-4' aria-hidden='true' />
							Return home
						</Link>
						<Link
							href='/contact-us'
							className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary'
						>
							<ArrowLeft className='h-4 w-4' aria-hidden='true' />
							Get help
						</Link>
					</div>

					<div className='mt-14 w-full max-w-2xl border-t border-slate-200 pt-7'>
						<p className='mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400'>
							You might be looking for
						</p>
						<nav aria-label='Helpful links' className='flex flex-wrap justify-center gap-x-7 gap-y-3'>
							{helpfulLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className='inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-primary'
								>
									{link.label}
									<ArrowUpRight className='h-3.5 w-3.5' aria-hidden='true' />
								</Link>
							))}
						</nav>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
