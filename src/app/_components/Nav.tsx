"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import logoWhite from "@/assets/images/logo-white.png";
import Link from "next/link";

const SIGNUP_URL = "https://app.payscribe.ng/auth/create";
const LOGIN_URL = "https://app.payscribe.ng/login";

export const Nav = ({
	variant = "default",
}: {
	variant?: "default" | "white";
}) => {
	const [open, setOpen] = useState(false);

	const toggle = () => setOpen((prev) => !prev);

	return (
		<header className='sticky top-0 z-40 w-full bg-white/50 backdrop-blur-2xl supports-backdrop-filter:bg-white/90'>
			<div className='mx-auto container flex items-center justify-between py-6 px-5'>
				<Link
					href='/'
					className='flex items-center gap-2 text-xl font-semibold'
				>
					<Image
						src={logo}
						alt='Payscribe Logo'
						className='w-[120px] object-contain'
					/>
				</Link>

				<nav className='hidden items-center gap-8 text-sm lg:flex text-slate-700'>
					<Link href='/'>Home</Link>
					<Link href='/for-business'>For Businesses</Link>
					<Link href='/for-developers'>For Developers</Link>
					<Link href='/contact-us'>Contact Us</Link>
					<Link href='/faqs'>FAQs</Link>
					<Link href='/blog'>Blog</Link>
				</nav>

				<div className='hidden items-center gap-4 sm:flex'>
					<Link
						href={SIGNUP_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white'
					>
						Create A Free Account
					</Link>
					<Link
						href={LOGIN_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='rounded-full bg-blue-100 px-8 py-3 text-sm font-semibold text-primary'
					>
						Sign In
					</Link>
				</div>

				<button
					type='button'
					className='inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm sm:hidden'
					aria-label='Toggle navigation'
					aria-expanded={open}
					onClick={toggle}
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
				<div className='mx-auto mt-2 w-full max-w-6xl space-y-4 rounded-2xl bg-white p-5 text-sm shadow-lg sm:hidden'>
					<nav className='flex flex-col gap-3'>
						<Link href='/'>Home</Link>
						<Link href='/for-business'>For Businesses</Link>
						<Link href='/for-developers'>For Developers</Link>
						<Link href='/contact-us'>Contact Us</Link>
						<Link href='/faqs'>FAQs</Link>
						<Link href='/blog'>Blog</Link>
					</nav>
					<div className='mt-4 flex flex-col gap-3'>
						<Link
							href={SIGNUP_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='w-full rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white text-center'
						>
							Create A Free Account
						</Link>
						<Link
							href={LOGIN_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='w-full rounded-full bg-blue-100 px-8 py-3 text-sm font-semibold text-primary text-center'
						>
							Sign In
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};
