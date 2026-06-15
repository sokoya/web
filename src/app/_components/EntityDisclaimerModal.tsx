"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useMemo, useState } from "react";
import { Info } from "lucide-react";

const STORAGE_KEY = "entity_disclaimer_acknowledged";

export function EntityDisclaimerModal() {
	const [visible, setVisible] = useState(false);
	const canUseDom = useMemo(() => typeof document !== "undefined", []);

	useEffect(() => {
		const acknowledged = localStorage.getItem(STORAGE_KEY);
		if (!acknowledged) setVisible(true);
	}, []);

	const handleDismiss = () => {
		localStorage.setItem(STORAGE_KEY, "true");
		setVisible(false);
	};

	useEffect(() => {
		if (!visible) return;

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") handleDismiss();
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [visible]);

	if (!visible || !canUseDom) return null;

	return createPortal(
		<div
			className='fixed inset-0 z-60 grid place-items-center bg-black/40 p-5'
			onClick={handleDismiss}
			role='dialog'
			aria-modal='true'
			aria-labelledby='entity-disclaimer-title'
		>
			<div
				className='w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl'
				onClick={(event) => event.stopPropagation()}
			>
				<div className='flex items-start gap-4'>
					<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary'>
						<Info className='h-5 w-5' aria-hidden />
					</div>
					<div className='min-w-0'>
						<h2
							id='entity-disclaimer-title'
							className='text-base font-semibold text-secondary'
						>
							Important information about our services
						</h2>
						<p className='mt-3 text-sm leading-relaxed text-slate-600'>
							<strong>Payscribe Limited</strong> (UK, FCA Small Payment
							Institution applicant, Co. No. 17196544) currently provides money
							remittance services between the UK and Nigeria. Other products
							shown on this site — including card issuance and stablecoin
							services — are provided by{" "}
							<strong>Pscribe Digital Services Limited</strong> in Nigeria and are
							not offered to, or available for, UK customers.{" "}
							<Link
								href='/uk'
								className='font-semibold text-primary underline underline-offset-2 hover:opacity-80'
							>
								Visit our UK site
							</Link>
							.
						</p>
					</div>
				</div>

				<div className='mt-6 flex justify-end'>
					<button
						type='button'
						onClick={handleDismiss}
						className='rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95'
					>
						I understand
					</button>
				</div>
			</div>
		</div>,
		document.body,
	);
}
