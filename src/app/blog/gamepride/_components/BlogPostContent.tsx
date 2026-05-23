const quoteCards = [
	{
		quote:
			"3 things are important to an average gamer - play & compete, connect and purchase gaming items easily, and that's why we built Gamepride.",
		author: "Uchenna Uzoma",
		role: "CEO/Co-Founder, Gamepride",
	},
	{
		quote:
			"Payscribe saves us time and stress; I can go to bed knowing users can safely perform transactions with ease.",
		author: "Uchenna Uzoma",
		role: "CEO/Co-Founder, Gamepride",
	},
	{
		quote:
			"Payscribe's infrastructure gave us the flexibility to build our solution in a way that gives our users the best experience.",
		author: "Uchenna Uzoma",
		role: "CEO/Co-Founder, Gamepride",
	},
];

function QuoteCard({
	quote,
	author,
	role,
}: {
	quote: string;
	author: string;
	role: string;
}) {
	return (
		<div className='mt-10 rounded-2xl bg-[#E8F2FF] px-6 py-8 text-center shadow-sm'>
			<p className='text-4xl leading-none text-primary'>&ldquo;</p>
			<p className='mx-auto mt-2 max-w-2xl text-2xl font-medium leading-snug text-secondary'>
				{quote}
			</p>
			<p className='mt-6 text-sm font-semibold text-slate-700'>{author}</p>
			<p className='text-xs text-slate-500'>{role}</p>
		</div>
	);
}

export function BlogPostContent() {
	return (
		<section className='bg-white pb-24'>
			<div className='mx-auto max-w-4xl px-5 text-secondary'>
				<div className='space-y-8 text-sm leading-relaxed text-slate-600 sm:text-base'>
					<p>
						Gamepride is not just a platform; they are a thriving community of gamers
						united by the passion for eSports and gaming. They understand that
						gaming is more than just a hobby; it&apos;s a way of life for many. That&apos;s
						why they built a home where gamers can connect, compete, and turn their
						love for gaming into a livelihood.
					</p>
				</div>

				<div className='mt-10'>
					<h2 className='text-xl font-semibold text-primary'>
						Built for gamers and by gamer
					</h2>
					<div className='mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base'>
						<p>
							For gamers, enjoying their favourite hobby often means juggling between
							different platforms. They chat on social messaging channels like Discord,
							organise tournaments on platforms like Challonge, and buy gaming items
							from various websites, encountering multiple stops which makes the process
							cumbersome and frustrating.
						</p>
						<p>
							Who better to build a solution for this than a gamer, one who understands
							the struggle only too well? Uchenna, CEO/Co-founder of Gamepride, thought,
							&quot;Surely there should be a better way.&quot;
						</p>
						<p>
							And there, the idea for Gamepride was born - a simple solution that cuts
							through everything together, making the gaming experience smoother and
							more enjoyable.
						</p>
					</div>
				</div>

				<QuoteCard {...quoteCards[0]} />

				<div className='mt-12'>
					<h2 className='text-xl font-semibold text-primary'>
						Partnering with Payscribe: Simplifying Financial Transactions for Gamers
					</h2>
					<div className='mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base'>
						<p>
							Averagely, a gamer in Nigeria spends about $5-$25 on gaming-related items
							a month. We needed to make financial transactions smoother and easier for
							our users, and that&apos;s when we reached out to Payscribe.
						</p>
						<p>
							Payscribe provided a robust solution, integrating all essentials for
							Gamepride to power seamless transactions:
						</p>
						<ol className='list-decimal space-y-3 pl-5'>
							<li>
								<span className='font-semibold text-secondary'>Accounts API:</span>{" "}
								This API allows Gamepride to give gamers their own wallets for easy
								transactions.
							</li>
							<li>
								<span className='font-semibold text-secondary'>Bills Payments API:</span>{" "}
								Gamepride integrated this to handle airtime/data top-ups and bill
								payments right in-app.
							</li>
							<li>
								<span className='font-semibold text-secondary'>Collections:</span>{" "}
								Gamepride helps gamers complete in-game purchases without leaving the
								platform.
							</li>
						</ol>
					</div>
				</div>

				<QuoteCard {...quoteCards[1]} />

				<div className='mt-12'>
					<h2 className='text-xl font-semibold text-primary'>A Winning Partnership</h2>
					<div className='mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base'>
						<p>
							Integrating with Payscribe has provided a reliable financial foundation
							for Gamepride&apos;s all-in-one user-friendly platform for gamers.
						</p>
						<ol className='list-decimal space-y-3 pl-5'>
							<li>
								<span className='font-semibold text-secondary'>Reliability:</span> Gamers
								can now easily perform transactions with confidence.
							</li>
							<li>
								<span className='font-semibold text-secondary'>Efficiency:</span> Manual
								reconciliation is reduced and payouts happen faster.
							</li>
							<li>
								<span className='font-semibold text-secondary'>Security:</span> Users&apos;
								funds and data are protected with bank-grade controls.
							</li>
							<li>
								<span className='font-semibold text-secondary'>Compliance:</span> All
								financial operations remain aligned with regulatory requirements.
							</li>
						</ol>
					</div>
				</div>

				<QuoteCard {...quoteCards[2]} />
			</div>
		</section>
	);
}

