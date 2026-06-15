"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

const NAV_LINKS = [
	{ href: "/uk#how", label: "How it works" },
	{ href: "/uk#regulation", label: "Regulation" },
	{ href: "/uk#scope", label: "About this entity" },
] as const;

export function UkNav() {
	const [open, setOpen] = useState(false);

	return (
		<header className='sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/50 backdrop-blur-2xl supports-backdrop-filter:bg-white/90'>
			<div className='mx-auto container flex items-center justify-between gap-4 py-5 px-5'>
				<Link href='/uk' className='flex items-center gap-3'>
					<Image
						src={logo}
						alt='Payscribe'
						className='w-[110px] object-contain'
						priority
					/>
				</Link>

				<nav className='hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex'>
					{NAV_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className='hover:text-primary'
						>
							{link.label}
						</Link>
					))}
				</nav>

				<Link
					href='/uk#waitlist'
					className='hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white sm:inline-flex'
				>
					Get notified
				</Link>

				<button
					type='button'
					className='inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm lg:hidden'
					aria-label='Toggle navigation'
					aria-expanded={open}
					onClick={() => setOpen((prev) => !prev)}
				>
					<span className='relative block h-4 w-5'>
						<span
							className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-slate-700 transition-transform ${
								open ? "translate-y-1.5 rotate-45" : ""
							}`}
						/>
						<span
							className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-slate-700 transition-opacity ${
								open ? "opacity-0" : "opacity-100"
							}`}
						/>
						<span
							className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-slate-700 transition-transform ${
								open ? "-translate-y-1.5 -rotate-45" : ""
							}`}
						/>
					</span>
				</button>
			</div>

			{open && (
				<div className='border-t border-slate-100 bg-white px-5 py-4 lg:hidden'>
					<nav className='flex flex-col gap-3 text-sm font-medium text-slate-700'>
						{NAV_LINKS.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</nav>
					<Link
						href='/uk#waitlist'
						onClick={() => setOpen(false)}
						className='mt-4 block w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white'
					>
						Get notified
					</Link>
				</div>
			)}
		</header>
	);
}
