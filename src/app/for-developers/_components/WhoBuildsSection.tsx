const items = [
	{ label: "Fintech startups", bg: "bg-[#E8F0FE]", text: "text-[#1a73e8]" },
	{ label: "Marketplaces", bg: "bg-[#E6F4EA]", text: "text-[#1e8e3e]" },
	{ label: "SaaS platforms", bg: "bg-[#F3E8FD]", text: "text-[#9334e6]" },
	{ label: "E-commerce apps", bg: "bg-[#F3E8FD]", text: "text-[#9334e6]" },
	{ label: "Digital creators", bg: "bg-[#E8F0FE]", text: "text-[#1a73e8]" },
	{ label: "Service platforms", bg: "bg-[#E6F4EA]", text: "text-[#1e8e3e]" },
];

export function WhoBuildsSection() {
	return (
		<section className='bg-white py-16'>
			<div className='mx-auto container px-5'>
				<h2 className='text-center text-2xl font-medium text-secondary sm:text-3xl'>
					Who Builds with Payscribe?
				</h2>
				<div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{items.map((item) => (
						<div
							key={item.label}
							className={`rounded-2xl px-6 py-5 text-center ${item.bg} ${item.text}`}
						>
							<span className='text-base font-medium'>{item.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
