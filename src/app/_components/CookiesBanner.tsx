"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function CookiesBanner() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookie_consent");
		if (!consent) setVisible(true);
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookie_consent", "accepted");
		setVisible(false);
	};

	const handleDismiss = () => {
		localStorage.setItem("cookie_consent", "dismissed");
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div className='fixed bottom-0 left-0 right-0 z-50 w-full border-t border-slate-200 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.06)]'>
			<div className='mx-auto max-w-7xl px-5 py-4'>
				<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
					<p className='text-sm leading-relaxed text-slate-600'>
						We use cookies on our website to improve your experience and
						analyse site performance. You can accept or manage your
						preferences.{" "}
						<Link
							href='/cookies-policy'
							className='font-semibold text-primary underline underline-offset-2 hover:opacity-80'
						>
							View our Cookie Policy.
						</Link>
					</p>

					<div className='flex shrink-0 items-center gap-3'>
						<Link
							href='/cookie-policy#manage'
							onClick={handleDismiss}
							className='whitespace-nowrap rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
						>
							Cookie settings
						</Link>
						<button
							onClick={handleAccept}
							className='whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90'
						>
							Accept all
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
