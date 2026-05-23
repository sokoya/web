import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/assets/images/logo-white.png";
import ndprlogo from "@/assets/images/footer-logo.png";

const year = new Date().getFullYear();

export function Footer() {
	return (
		<footer className='bg-secondary text-slate-200'>
			<div className='mx-auto flex w-full container flex-col gap-12 px-8 py-16 lg:flex-row lg:items-start lg:justify-between'>
				{/* Left: Logo + description + social */}
				<div className='lg:max-w-sm space-y-6'>
					<Image
						src={footerLogo}
						alt='Payscribe'
						className='w-[116px] object-contain'
						priority
					/>
					<p className='text-sm leading-relaxed text-slate-300'>
						Payscribe offers a robust payment infrastructure enabling businesses
						to securely accept payments, issue USD/NGN cards for seamless
						cross-border transactions, and provide comprehensive financial
						services to their customers. Also available for individuals.
					</p>
					<p className='text-xs leading-relaxed text-slate-400'>
						Payscribe (Pscribe Digital Services Ltd RC1946239) is a fintech
						company, not a bank. Banking services are provided by licensed banks
						and financial institutions in their respective jurisdictions.
					</p>

					<div className='flex gap-3 pt-2'>
						{/* Facebook */}
						<a
							href='https://www.facebook.com/payscribe/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Payscribe on Facebook'
							className='grid h-12 w-12 place-items-center rounded-full bg-slate-800/60 transition hover:bg-slate-800/80'
						>
							<svg
								className='h-5 w-5 text-slate-300'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
							</svg>
						</a>
						{/* Instagram */}
						<a
							href='https://www.instagram.com/payscribe/?hl=en'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Payscribe on Instagram'
							className='grid h-12 w-12 place-items-center rounded-full bg-slate-800/60 transition hover:bg-slate-800/80'
						>
							<svg
								className='h-5 w-5 text-slate-300'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								viewBox='0 0 24 24'
							>
								<rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
								<circle cx='12' cy='12' r='4' />
								<circle cx='17.5' cy='6.5' r='0.5' fill='currentColor' />
							</svg>
						</a>
						{/* YouTube */}
						{/* <button className='grid h-12 w-12 place-items-center rounded-full bg-slate-800/60'>
							<svg
								className='h-5 w-5 text-slate-300'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' />
							</svg>
						</button> */}
						{/* WhatsApp */}
						<a
							href='https://wa.me/+2347038067493'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Chat with Payscribe on WhatsApp'
							className='grid h-12 w-12 place-items-center rounded-full bg-slate-800/60 transition hover:bg-slate-800/80'
						>
							<svg
								className='h-5 w-5 text-slate-300'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z' />
								<path d='M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.103 1.523 5.824L.057 23.5l5.808-1.453A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.001-1.368l-.36-.214-3.716.929.976-3.617-.235-.371A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z' />
							</svg>
						</a>
						{/* LinkedIn */}
						<a
							href='https://ng.linkedin.com/company/payscribe'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Payscribe on LinkedIn'
							className='grid h-12 w-12 place-items-center rounded-full bg-slate-800/60 transition hover:bg-slate-800/80'
						>
							<svg
								className='h-5 w-5 text-slate-300'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.2 8.2h4.6V24H0.2V8.2zM8.2 8.2h4.4v2.2h0.1c0.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.6 3.1 5.6 7.1V24h-4.6v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 3.9V24H8.2V8.2z' />
							</svg>
						</a>
					</div>
				</div>

				{/* Right: Nav columns */}
				<div className='grid grid-cols-2 sm:grid-cols-4 gap-12 text-sm'>
					<div className='space-y-5'>
						<h4 className='font-semibold text-white'>Products</h4>
						<ul className='space-y-4 text-slate-300'>
							<li>
								<Link href='/cards-issuing' className='hover:text-white'>
									Cards Issuing
								</Link>
							</li>
							<li>
								<Link
									href='/?integration=bills#integration'
									className='hover:text-white'
								>
									Bills Payments
								</Link>
							</li>
							<li>
								<Link href='/digital-payments' className='hover:text-white'>
									Digital Payments
								</Link>
							</li>
							<li>
								<Link href='/stable-coin-rails' className='hover:text-white'>
									Stablecoin Rails
								</Link>
							</li>
							<li>
								<Link href='/savings-as-a-service' className='hover:text-white'>
									Savings as a Service
								</Link>
							</li>
							<li>
								<Link href='/payment-link' className='hover:text-white'>
									Payment Link
								</Link>
							</li>
							<li>
								<Link href='/invoicing' className='hover:text-white'>
									Invoicing
								</Link>
							</li>
						</ul>
					</div>

					<div className='space-y-5'>
						<h4 className='font-semibold text-white'>For Businesses</h4>
						<ul className='space-y-4 text-slate-300'>
							<li>Why Payscribe</li>
						</ul>
					</div>

					<div className='space-y-5'>
						<h4 className='font-semibold text-white'>Resources</h4>
						<ul className='space-y-4 text-slate-300'>
							<li>
								<Link href='/faqs' className='hover:text-white'>
									FAQs
								</Link>
							</li>
							<li>Compliance</li>
							<li>
								<Link href='/book-a-demo' className='hover:text-white'>
									Book a demo
								</Link>
							</li>
							<li>
								<Link href='/use-case' className='hover:text-white'>
									Use case
								</Link>
							</li>
							<li>
								<Link href='/case-studies' className='hover:text-white'>
									Case-studies
								</Link>
							</li>
						</ul>
					</div>

					<div className='space-y-5'>
						<h4 className='font-semibold text-white'>Company</h4>
						<ul className='space-y-4 text-slate-300'>
							<li>
								<Link href='/blog' className='hover:text-white'>
									Blog
								</Link>
							</li>
							<li>
								<Link href='/press' className='hover:text-white'>
									Press
								</Link>
							</li>
							<li>
								<Link href='/privacy-policy' className='hover:text-white'>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href='/terms-and-conditions' className='hover:text-white'>
									Terms and Conditions
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className='mx-auto flex w-full max-w-7xl flex-col items-center gap-6 border-t border-slate-800 px-8 py-6 sm:flex-row sm:justify-between'>
				{/* Copyright */}
				<div className='flex items-center gap-2 text-xs text-slate-400'>
					<svg
						className='h-4 w-4'
						fill='none'
						stroke='currentColor'
						strokeWidth='1.5'
						viewBox='0 0 24 24'
					>
						<circle cx='12' cy='12' r='10' />
						<path d='M14.83 14.83a4 4 0 1 1 0-5.66' />
					</svg>
					<span>{year} Payscribe. All Rights reserved.</span>
				</div>

				{/* Badges */}
				<Image
					src={ndprlogo}
					alt='NDPR Audit'
					className='w-[210px] object-contain'
				/>

				{/* App buttons */}
				<div className='flex items-center gap-3'>
					<button className='flex items-center gap-2 rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white'>
						<svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M3 20.5v-17c0-.83 1-.83 1.5-.5l14 8.5-14 8.5c-.5.33-1.5.33-1.5-.5z' />
						</svg>
						Android
					</button>
					<button className='flex items-center gap-2 rounded-full bg-slate-700 px-5 py-3 text-sm font-semibold text-white'>
						<svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
						</svg>
						iOS
					</button>
				</div>
			</div>
		</footer>
	);
}
