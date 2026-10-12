"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroCtaPulse, heroDropFromTop, inViewZoom } from "@/lib/animations";
import {
	TRANSACTION_PRODUCTS,
	TRANSACTION_REPORT_REASON_LABELS,
	TRANSACTION_REPORT_REASONS,
	type TransactionProduct,
	type TransactionReportReason,
} from "@/lib/transactionReport";

type FormStatus = null | { type: "success" | "error"; message: string };

const inputClass =
	"w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-primary";

export function ReportTransactionForm() {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;

	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [reference, setReference] = useState("");
	const [amount, setAmount] = useState("");
	const [transactionDate, setTransactionDate] = useState("");
	const [product, setProduct] = useState<"" | TransactionProduct>("");
	const [reason, setReason] = useState<"" | TransactionReportReason>("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState<FormStatus>(null);

	const canSubmit = useMemo(() => {
		const hasReference = reference.trim().length >= 3;
		const hasAmountAndDate = amount.trim().length > 0 && transactionDate.trim().length > 0;
		return (
			fullName.trim().length >= 2 &&
			email.trim().includes("@") &&
			product !== "" &&
			reason !== "" &&
			description.trim().length >= 2 &&
			(hasReference || hasAmountAndDate)
		);
	}, [amount, description, email, fullName, product, reason, reference, transactionDate]);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus(null);
		setLoading(true);
		try {
			const res = await fetch("/api/report-transaction", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					fullName,
					email,
					phone,
					reference,
					amount,
					transactionDate,
					product,
					reason,
					description,
				}),
			});
			const data = (await res.json().catch(() => ({}))) as {
				ok?: boolean;
				error?: string;
			};
			if (!res.ok || !data.ok) {
				setStatus({
					type: "error",
					message: data.error || "Something went wrong. Please try again.",
				});
				return;
			}
			setStatus({
				type: "success",
				message:
					"Thanks — we’ve received your report. Our team will look this up and get back to you. Please don’t report it as fraud to your bank until we respond, unless you are sure the debit was unauthorised.",
			});
			setFullName("");
			setEmail("");
			setPhone("");
			setReference("");
			setAmount("");
			setTransactionDate("");
			setProduct("");
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
					Report a transaction
				</motion.h1>
				<motion.p
					{...heroDropFromTop({ reduced: reducedMotion, delay: 0.26, duration: 0.9 })}
					className='mt-4 text-sm leading-relaxed text-slate-300 md:text-base'
				>
					Didn’t get value, charged the wrong amount, or you don’t recognise a
					debit? Tell us here before contacting your bank. We’ll match it to the
					transaction and update you.
				</motion.p>
			</motion.div>

			<motion.div
				{...inViewZoom({
					reduced: reducedMotion,
					delay: 0.12,
					duration: 0.95,
					amount: 0.25,
				})}
				className='mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-700 bg-[#FFFFFF0D] p-6 shadow-xl md:p-8'
			>
				<form onSubmit={onSubmit} className='space-y-6'>
					<div className='grid gap-6 sm:grid-cols-2'>
						<div className='space-y-2'>
							<label htmlFor='fullName' className='block text-sm font-medium text-slate-200'>
								Full name
							</label>
							<input
								id='fullName'
								type='text'
								placeholder='Enter'
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								className={inputClass}
							/>
						</div>
						<div className='space-y-2'>
							<label htmlFor='email' className='block text-sm font-medium text-slate-200'>
								Email
							</label>
							<input
								id='email'
								type='email'
								placeholder='Enter'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={inputClass}
							/>
						</div>
					</div>

					<div className='space-y-2'>
						<label htmlFor='phone' className='block text-sm font-medium text-slate-200'>
							Phone <span className='font-normal text-slate-400'>(optional)</span>
						</label>
						<input
							id='phone'
							type='tel'
							placeholder='Enter'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className={inputClass}
						/>
					</div>

					<div className='grid gap-6 sm:grid-cols-2'>
						<div className='space-y-2'>
							<label htmlFor='product' className='block text-sm font-medium text-slate-200'>
								Product
							</label>
							<select
								id='product'
								value={product}
								onChange={(e) => setProduct(e.target.value as typeof product)}
								className='w-full appearance-none rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-slate-300 focus:border-primary focus:outline-none'
							>
								<option value=''>Select option</option>
								{TRANSACTION_PRODUCTS.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</select>
						</div>
						<div className='space-y-2'>
							<label htmlFor='reason' className='block text-sm font-medium text-slate-200'>
								What happened
							</label>
							<select
								id='reason'
								value={reason}
								onChange={(e) => setReason(e.target.value as typeof reason)}
								className='w-full appearance-none rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-slate-300 focus:border-primary focus:outline-none'
							>
								<option value=''>Select option</option>
								{TRANSACTION_REPORT_REASONS.map((item) => (
									<option key={item} value={item}>
										{TRANSACTION_REPORT_REASON_LABELS[item]}
									</option>
								))}
							</select>
						</div>
					</div>

					{reason === "delayed_value" ? (
						<div className='rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm leading-relaxed text-amber-50'>
							Some networks and banks take a few minutes to complete. Check your
							in-app history first. Reporting a pending debit as fraud at your
							bank can lock the funds even after the transaction succeeds.
						</div>
					) : null}

					<div className='space-y-2'>
						<label htmlFor='reference' className='block text-sm font-medium text-slate-200'>
							Transaction reference
						</label>
						<input
							id='reference'
							type='text'
							placeholder='e.g. PS-123456'
							value={reference}
							onChange={(e) => setReference(e.target.value)}
							className={inputClass}
						/>
						<p className='text-xs text-slate-400'>
							If you don’t have a reference, provide both the amount and the date
							below.
						</p>
					</div>

					<div className='grid gap-6 sm:grid-cols-2'>
						<div className='space-y-2'>
							<label htmlFor='amount' className='block text-sm font-medium text-slate-200'>
								Amount
							</label>
							<input
								id='amount'
								type='text'
								placeholder='e.g. 5000'
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
								className={inputClass}
							/>
						</div>
						<div className='space-y-2'>
							<label
								htmlFor='transactionDate'
								className='block text-sm font-medium text-slate-200'
							>
								Date of transaction
							</label>
							<input
								id='transactionDate'
								type='date'
								value={transactionDate}
								onChange={(e) => setTransactionDate(e.target.value)}
								className={inputClass}
							/>
						</div>
					</div>

					<div className='space-y-2'>
						<label htmlFor='description' className='block text-sm font-medium text-slate-200'>
							What should we know
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
							{loading ? "Sending…" : "Submit report"}
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
