"use client";

import { motion, useReducedMotion } from "framer-motion";
import { inViewFadeUp } from "@/lib/animations";

export function UkEntitySeparation() {
	const reducedMotion = !!useReducedMotion();

	return (
		<section id='scope' className='container mx-auto px-5 py-16 md:py-24'>
			<motion.div
				{...inViewFadeUp({ reduced: reducedMotion })}
				className='mb-10 max-w-2xl'
			>
				<p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary'>
					About this page
				</p>
				<h2 className='text-3xl font-semibold text-secondary sm:text-4xl'>
					One brand, two companies
				</h2>
			</motion.div>

			<motion.div
				{...inViewFadeUp({ reduced: reducedMotion, delay: 0.08 })}
				className='rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm md:p-8'
			>
				<p className='mb-4 leading-relaxed'>
					<strong className='text-secondary'>Payscribe Limited</strong> (Company
					No. 17196544) is the UK company behind this page. It&apos;s applying
					to the Financial Conduct Authority to register as a Small Payment
					Institution, so it can offer money remittance between the UK and
					Nigeria as described above.
				</p>
				<p className='mb-4 leading-relaxed'>
					You may also come across{" "}
					<strong className='text-secondary'>
						Pscribe Digital Services Limited
					</strong>
					, a separate company registered in Nigeria (RC1946239), which offers a
					wider range of products — including cards and stablecoin services —
					to customers in Nigeria. Pscribe Digital Services Limited acts as
					Payscribe Limited&apos;s technology and payments infrastructure
					provider under a services agreement, but it is a separate,
					independently owned company, and its products are not offered to UK
					customers.
				</p>
				<p className='leading-relaxed'>
					If you&apos;re a UK customer, a banking partner, or a regulator — this
					page, and the Payscribe Limited entity described above, is what&apos;s
					relevant to you.
				</p>
			</motion.div>
		</section>
	);
}
