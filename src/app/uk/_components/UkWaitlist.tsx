"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { inViewZoom } from "@/lib/animations";
import { ArrowRight, Mail, MessageSquareText, ShieldCheck } from "lucide-react";

export function UkWaitlist() {
	const reducedMotion = !!useReducedMotion();

	return (
		<section
			id='waitlist'
			className='relative overflow-hidden bg-secondary py-16 md:py-20'
		>
			<div
				aria-hidden
				className='absolute inset-0 opacity-70'
				style={{
					background:
						"radial-gradient(circle at 18% 20%, rgba(33,77,192,0.55), transparent 30%), radial-gradient(circle at 85% 18%, rgba(16,185,129,0.25), transparent 26%), linear-gradient(135deg, #10379F 0%, #020413 58%, #04172d 100%)",
				}}
			/>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-0 opacity-[0.10]'
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
					backgroundSize: "42px 42px",
				}}
			/>
			<div className='container relative mx-auto px-5'>
				<motion.div
					{...inViewZoom({ reduced: reducedMotion })}
					className='mx-auto grid max-w-5xl gap-8 rounded-[2rem] border border-white/15 bg-white/[0.08] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur md:grid-cols-[1fr_0.76fr] md:p-8 lg:p-10'
				>
					<div>
						<div className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100'>
							<ShieldCheck className='h-4 w-4' aria-hidden />
							Pre-launch UK remittance
						</div>
						<h2 className='max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl'>
							Be first to know when UK to Nigeria transfers go live.
						</h2>
						<p className='mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base'>
							We&apos;re not yet open for customers. Leave your details and
							we&apos;ll let you know when onboarding, pricing, and live transfers
							are available.
						</p>
						<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
							<Link
								href='/contact-us'
								className='inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-[0_16px_36px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5'
							>
								Contact us to join the waitlist
								<ArrowRight className='h-4 w-4' aria-hidden />
							</Link>
							<a
								href='mailto:complaints@payscribe.co'
								className='inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10'
							>
								<Mail className='h-4 w-4' aria-hidden />
								complaints@payscribe.co
							</a>
						</div>
					</div>

					<div className='rounded-3xl border border-white/12 bg-white/10 p-5 text-white'>
						<div className='mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary'>
							<MessageSquareText className='h-5 w-5' aria-hidden />
						</div>
						<p className='text-sm font-semibold uppercase tracking-[0.14em] text-blue-100'>
							What we will send
						</p>
						<ul className='mt-4 space-y-3 text-sm leading-relaxed text-white/80'>
							<li>Launch date and supported customer types.</li>
							<li>Indicative pricing, fees, and transfer limits.</li>
							<li>How to verify Payscribe Limited before sending money.</li>
						</ul>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
