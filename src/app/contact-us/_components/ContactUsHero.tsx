"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop, inViewZoom } from "@/lib/animations";

export function ContactUsHero() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [reason, setReason] = useState<"" | "Support" | "Sales" | "Partnership" | "Other">("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

	const canSubmit = useMemo(() => {
		return (
			fullName.trim().length >= 2 &&
			email.trim().includes("@") &&
			reason !== "" &&
			description.trim().length >= 2
		);
	}, [description, email, fullName, reason]);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus(null);
		setLoading(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ fullName, email, reason, description }),
			});
			const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
			if (!res.ok || !data.ok) {
				setStatus({ type: "error", message: data.error || "Something went wrong. Please try again." });
				return;
			}
			setStatus({ type: "success", message: "Thanks — we’ve received your message and will get back to you shortly." });
			setFullName("");
			setEmail("");
			setReason("");
			setDescription("");
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className='business-hero px-5 py-24 md:py-32'>
			<motion.div
				{...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })}
				className='mx-auto max-w-2xl text-center'
			>
				<motion.h1
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.14, duration: 0.95 })}
					className='text-3xl font-semibold text-white sm:text-4xl'
				>
					Get in touch with us
				</motion.h1>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.26, duration: 0.9 })}
					className='mt-4 text-sm leading-relaxed text-slate-300 md:text-base'
				>
					We want to send your question directly to the correct department and
					answer your questions as quickly as possible. To help us with this, we
					ask that you please complete the form below. Include any details you
					think may be helpful.
				</motion.p>
			</motion.div>

			<motion.div
				{...inViewZoom({ reduced: reducedMotion, delay: 0.12, duration: 0.95, amount: 0.25 })}
				className='mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-700 bg-[#FFFFFF0D] p-6 shadow-xl md:p-8'
			>
				<form onSubmit={onSubmit} className='space-y-6'>
					<div className='grid gap-6 sm:grid-cols-2'>
						<div className='space-y-2'>
							<label
								htmlFor='fullName'
								className='block text-sm font-medium text-slate-200'
							>
								Full Name
							</label>
							<input
								id='fullName'
								type='text'
								placeholder='Enter'
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								className='w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-primary'
							/>
						</div>
						<div className='space-y-2'>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-slate-200'
							>
								Email
							</label>
							<input
								id='email'
								type='email'
								placeholder='Enter'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className='w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-primary'
							/>
						</div>
					</div>

					<div className='space-y-2'>
						<label
							htmlFor='reason'
							className='block text-sm font-medium text-slate-200'
						>
							Reason
						</label>
						<select
							id='reason'
							value={reason}
							onChange={(e) => setReason(e.target.value as typeof reason)}
							className='w-full appearance-none rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-slate-300 focus:border-primary focus:outline-none'
						>
							<option value=''>Select Option</option>
							<option value='Support'>Support</option>
							<option value='Sales'>Sales</option>
							<option value='Partnership'>Partnership</option>
							<option value='Other'>Other</option>
						</select>
					</div>

					<div className='space-y-2'>
						<label
							htmlFor='description'
							className='block text-sm font-medium text-slate-200'
						>
							Description
						</label>
						<textarea
							id='description'
							rows={4}
							placeholder='Type here...'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className='w-full resize-none rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-primary'
						/>
					</div>

					{status ? (
						<div
							className={[
								"rounded-xl border px-4 py-3 text-sm",
								status.type === "success"
									? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
									: "border-rose-500/30 bg-rose-500/10 text-rose-100",
							].join(" ")}
						>
							{status.message}
						</div>
					) : null}

					<div className='flex justify-center pt-2'>
						<motion.button
							{...heroCtaPulse(reducedMotion)}
							type='submit'
							disabled={!canSubmit || loading}
							className='inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-secondary transition disabled:cursor-not-allowed disabled:opacity-50'
						>
							{loading ? "Sending…" : "Submit"}
							<svg
								className='h-4 w-4'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M14 5l7 7m0 0l-7 7m7-7H3'
								/>
							</svg>
						</motion.button>
					</div>
				</form>
			</motion.div>
		</main>
	);
}
