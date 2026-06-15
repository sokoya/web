export function CorridorVisual() {
	return (
		<div className='relative overflow-hidden rounded-[28px] border border-white/70 bg-white/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.16)] ring-1 ring-slate-900/5 backdrop-blur sm:p-6'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-blue-50 to-transparent'
			/>

			<div className='relative z-10 rounded-3xl border border-slate-100 bg-slate-950 p-4 text-white shadow-inner sm:p-5'>
				<div className='mb-5 flex items-center justify-between gap-4'>
					<div>
						<p className='text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-blue-200'>
							Transfer preview
						</p>
						<p className='mt-1 text-sm text-slate-300'>UK to Nigeria corridor</p>
					</div>
					<span className='rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200'>
						Rate locked
					</span>
				</div>

				<div className='grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center'>
					<div className='rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10'>
						<p className='text-xs text-slate-400'>You send</p>
						<p className='mt-2 text-3xl font-semibold tracking-tight'>£250.00</p>
						<p className='mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200'>
							Faster Payments
						</p>
					</div>

					<div className='mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold text-white sm:h-12 sm:w-12'>
						→
					</div>

					<div className='rounded-2xl bg-emerald-400/10 p-4 ring-1 ring-emerald-300/20'>
						<p className='text-xs text-emerald-100/80'>They receive</p>
						<p className='mt-2 text-3xl font-semibold tracking-tight'>₦492,500</p>
						<p className='mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200'>
							Nigerian bank account
						</p>
					</div>
				</div>

				<div className='mt-5 grid gap-3 text-xs text-slate-300 sm:grid-cols-3'>
					<div className='rounded-2xl bg-white/[0.05] p-3'>
						<p className='text-slate-500'>Fee</p>
						<p className='mt-1 font-semibold text-white'>Shown upfront</p>
					</div>
					<div className='rounded-2xl bg-white/[0.05] p-3'>
						<p className='text-slate-500'>Speed</p>
						<p className='mt-1 font-semibold text-white'>Usually minutes</p>
					</div>
					<div className='rounded-2xl bg-white/[0.05] p-3'>
						<p className='text-slate-500'>Status</p>
						<p className='mt-1 font-semibold text-white'>Live tracking</p>
					</div>
				</div>
			</div>

			<div className='relative z-10 mt-5 rounded-3xl border border-slate-100 bg-white p-4'>
				<svg
					viewBox='0 0 360 138'
					xmlns='http://www.w3.org/2000/svg'
					role='img'
					aria-label='A line connecting London and Lagos, showing GBP converting to NGN'
					className='h-auto w-full'
				>
					<defs>
						<linearGradient id='uk-corridor-line' x1='0' x2='1' y1='0' y2='1'>
							<stop offset='0%' stopColor='#214dc0' />
							<stop offset='100%' stopColor='#16a34a' />
						</linearGradient>
					</defs>
					<path
						d='M46,42 C132,20 222,118 314,96'
						fill='none'
						stroke='#E2E8F0'
						strokeWidth='12'
						strokeLinecap='round'
					/>
					<path
						d='M46,42 C132,20 222,118 314,96'
						fill='none'
						stroke='url(#uk-corridor-line)'
						strokeWidth='2.5'
						strokeLinecap='round'
						strokeDasharray='4 7'
					/>
					<circle cx='46' cy='42' r='16' fill='#DBEAFE' />
					<circle cx='46' cy='42' r='6' fill='#214dc0' />
					<circle cx='314' cy='96' r='16' fill='#DCFCE7' />
					<circle cx='314' cy='96' r='6' fill='#16a34a' />
					<circle
						r='5'
						fill='#020413'
						className='uk-corridor-pulse'
						style={{
							offsetPath: "path('M46,42 C132,20 222,118 314,96')",
						}}
					/>
					<text x='46' y='20' fontFamily='var(--font-sans)' fontSize='11' fill='#020413' textAnchor='middle' fontWeight='700'>
						London
					</text>
					<text x='46' y='70' fontFamily='var(--font-sans)' fontSize='10' fill='#214dc0' textAnchor='middle' fontWeight='700'>
						GBP
					</text>
					<text x='314' y='82' fontFamily='var(--font-sans)' fontSize='11' fill='#020413' textAnchor='middle' fontWeight='700'>
						Lagos
					</text>
					<text x='314' y='122' fontFamily='var(--font-sans)' fontSize='10' fill='#16a34a' textAnchor='middle' fontWeight='700'>
						NGN
					</text>
				</svg>
				<div className='mt-2 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:justify-between'>
					<span>
						Sent via <strong className='font-semibold text-slate-700'>Faster Payments</strong>
					</span>
					<span>
						Paid out via <strong className='font-semibold text-slate-700'>NIP rails</strong>
					</span>
				</div>
			</div>
		</div>
	);
}
