export function CorridorVisual() {
	return (
		<div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8'>
			<svg
				viewBox='0 0 360 160'
				xmlns='http://www.w3.org/2000/svg'
				role='img'
				aria-label='A line connecting London and Lagos, showing GBP converting to NGN'
				className='h-auto w-full'
			>
				<path
					d='M50,40 C140,40 220,120 310,120'
					fill='none'
					stroke='#CBD5E1'
					strokeWidth='2'
					strokeDasharray='2 6'
				/>
				<circle cx='50' cy='40' r='6' fill='#214dc0' />
				<circle cx='310' cy='120' r='6' fill='#16a34a' />
				<circle
					r='4'
					fill='#020413'
					className='uk-corridor-pulse'
					style={{
						offsetPath:
							"path('M50,40 C140,40 220,120 310,120')",
					}}
				/>
				<text
					x='50'
					y='22'
					fontFamily='var(--font-sans)'
					fontSize='11'
					fill='#020413'
					textAnchor='middle'
				>
					LONDON
				</text>
				<text
					x='50'
					y='60'
					fontFamily='var(--font-sans)'
					fontSize='11'
					fill='#214dc0'
					textAnchor='middle'
					fontWeight='600'
				>
					GBP
				</text>
				<text
					x='310'
					y='142'
					fontFamily='var(--font-sans)'
					fontSize='11'
					fill='#020413'
					textAnchor='middle'
				>
					LAGOS
				</text>
				<text
					x='310'
					y='102'
					fontFamily='var(--font-sans)'
					fontSize='11'
					fill='#16a34a'
					textAnchor='middle'
					fontWeight='600'
				>
					NGN
				</text>
			</svg>
			<div className='mt-4 flex flex-col gap-1 text-xs text-slate-500 sm:flex-row sm:justify-between'>
				<span>
					Sent via <strong className='font-semibold text-slate-700'>Faster Payments</strong>
				</span>
				<span>
					Received via <strong className='font-semibold text-slate-700'>NIP, near-instant</strong>
				</span>
			</div>
		</div>
	);
}
