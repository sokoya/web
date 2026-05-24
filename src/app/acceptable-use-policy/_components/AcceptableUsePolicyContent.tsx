import Link from "next/link";

export function AcceptableUsePolicyContent() {
	return (
		<section id='aup-content' className='bg-white py-16'>
			<div className='mx-auto max-w-5xl px-5 text-secondary'>
				<h2 className='text-3xl font-semibold'>
					Payscribe&apos;s Acceptable Use Policy
				</h2>
				<p className='mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500'>
					Acceptable Use Policy
				</p>

				<div className='mt-8 space-y-10 text-sm leading-relaxed text-slate-700 md:text-base'>

					{/* 1. Introduction */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>1. Introduction</h3>
						<p>
							This Acceptable Use Policy (&quot;AUP&quot;) sets out the rules governing
							how you may use the Payscribe platform, services, APIs, and
							infrastructure (collectively the &quot;Platform&quot;) provided by:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Payscribe Limited</strong> (Company No. 17196544), 12
								Beverley Road, Hull, HU5 1LU, United Kingdom
							</li>
							<li>
								<strong>Pscribe Digital Services Limited</strong> (RC1946239), 95
								Oreta Road, Igbogbo, Ikorodu, Lagos, Nigeria
							</li>
						</ul>
						<p>
							This AUP forms part of our{" "}
							<Link
								href='/terms-and-conditions'
								className='text-primary underline'
							>
								Terms and Conditions
							</Link>
							. By using the Platform, you agree to comply with this policy at
							all times. Violation of this AUP may result in immediate suspension
							or termination of your account and access to our services.
						</p>
					</div>

					{/* 2. Permitted Use */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>2. Permitted Use</h3>
						<p>
							You may use the Platform only for{" "}
							<strong>
								lawful, legitimate business or personal financial purposes
							</strong>
							, including:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Sending and receiving payments in supported currencies</li>
							<li>
								Converting between supported currencies or stablecoins
							</li>
							<li>
								Issuing and managing virtual cards for legitimate business
								expenses
							</li>
							<li>
								Integrating our APIs into your own compliant products and
								services
							</li>
							<li>
								Managing treasury and payout operations for your business
							</li>
							<li>Accessing account information and transaction history</li>
						</ul>
					</div>

					{/* 3. Prohibited Use */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>3. Prohibited Use</h3>

						<p className='font-semibold text-secondary'>
							3.1 Illegal and Fraudulent Activities
						</p>
						<p>You must not use the Platform to:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Engage in, facilitate, or promote any activity that is illegal
								under the laws of the United Kingdom, Nigeria, or any
								jurisdiction in which you operate
							</li>
							<li>
								Commit or facilitate fraud, identity theft, or financial crime
								of any kind
							</li>
							<li>
								Launder money, finance terrorism, or evade sanctions
							</li>
							<li>
								Circumvent applicable foreign exchange controls or capital
								restrictions
							</li>
							<li>Impersonate any person, business, or entity</li>
							<li>
								Use stolen, fraudulent, or unauthorised payment credentials
							</li>
							<li>
								Conduct Ponzi schemes, pyramid schemes, or any fraudulent
								investment operations
							</li>
						</ul>

						<p className='font-semibold text-secondary'>
							3.2 Sanctions and Restricted Parties
						</p>
						<p>You must not use the Platform if you are:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Listed on the UK HM Treasury sanctions list</li>
							<li>Listed on the US OFAC sanctions list</li>
							<li>Listed on the UN Security Council sanctions list</li>
							<li>
								Located in or transacting with sanctioned countries or
								territories
							</li>
							<li>
								Acting on behalf of any sanctioned individual or entity
							</li>
						</ul>

						<p className='font-semibold text-secondary'>
							3.3 Prohibited Business Categories
						</p>
						<p>
							The Platform must not be used to process payments for the following
							categories of goods or services:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Weapons, firearms, ammunition, or explosives</li>
							<li>Narcotics, controlled substances, or illegal drugs</li>
							<li>
								Counterfeit goods or intellectual property infringement
							</li>
							<li>
								Child exploitation material or any content that sexualises
								minors
							</li>
							<li>Human trafficking or exploitation services</li>
							<li>
								Gambling or betting services (unless properly licensed in your
								jurisdiction)
							</li>
							<li>Escort or prostitution services</li>
							<li>
								Unlicensed financial services including unlicensed
								cryptocurrency exchanges
							</li>
							<li>Multi-level marketing (MLM) or pyramid schemes</li>
							<li>
								Malware, spyware, hacking tools, or cybercrime services
							</li>
							<li>
								Dark web marketplaces or anonymous transaction services designed
								to evade law enforcement
							</li>
						</ul>

						<p className='font-semibold text-secondary'>3.4 Technical Misuse</p>
						<p>You must not:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Attempt to gain unauthorised access to any part of the Platform
								or its underlying infrastructure
							</li>
							<li>
								Conduct penetration testing, vulnerability scanning, or security
								testing without our prior written consent
							</li>
							<li>
								Introduce malware, viruses, ransomware, or any malicious code
								into the Platform
							</li>
							<li>
								Use automated bots, scrapers, or scripts to access or interact
								with the Platform without authorisation
							</li>
							<li>
								Reverse engineer, decompile, or disassemble any part of the
								Platform
							</li>
							<li>
								Circumvent any security, authentication, or access control
								mechanism
							</li>
							<li>
								Overload or disrupt the Platform through denial of service
								attacks or excessive API calls beyond agreed rate limits
							</li>
							<li>
								Exploit any bug, error, or vulnerability in the Platform for
								financial gain or any other purpose &mdash; any such discovery
								must be reported to{" "}
								<Link
									href='mailto:security@payscribe.co'
									className='text-primary underline'
								>
									security@payscribe.co
								</Link>{" "}
								immediately
							</li>
						</ul>

						<p className='font-semibold text-secondary'>3.5 API Misuse</p>
						<p>
							If you access the Platform through our API, you must not:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Use the API in a manner that exceeds agreed rate limits or usage
								thresholds
							</li>
							<li>Share your API keys with unauthorised parties</li>
							<li>
								Use the API to build products or services that themselves violate
								this AUP
							</li>
							<li>
								Use the API to aggregate or resell our services without a written
								agreement with Payscribe
							</li>
							<li>
								Store sensitive cardholder data beyond what is permitted under
								your agreement and applicable PCI-DSS requirements
							</li>
						</ul>

						<p className='font-semibold text-secondary'>3.6 Data Misuse</p>
						<p>You must not:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Use data obtained through the Platform to build competing
								products or services
							</li>
							<li>
								Harvest, scrape, or collect other users&apos; data without
								authorisation
							</li>
							<li>
								Use the Platform to send unsolicited commercial communications
								(spam)
							</li>
							<li>
								Process personal data through the Platform in a manner
								inconsistent with our{" "}
								<Link
									href='/privacy-policy'
									className='text-primary underline'
								>
									Privacy Policy
								</Link>{" "}
								and applicable data protection law
							</li>
						</ul>
					</div>

					{/* 4. Your Responsibilities */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>4. Your Responsibilities</h3>

						<p className='font-semibold text-secondary'>
							4.1 Know Your Customers
						</p>
						<p>
							If you are a business user integrating Payscribe&apos;s infrastructure
							into your own products, you are responsible for:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Conducting appropriate KYC/KYB checks on your own customers
							</li>
							<li>Ensuring your customers comply with this AUP</li>
							<li>Not onboarding customers in prohibited categories</li>
							<li>
								Maintaining your own AML/CTF compliance programme as required by
								applicable law
							</li>
						</ul>

						<p className='font-semibold text-secondary'>
							4.2 Keeping Credentials Secure
						</p>
						<p>You are responsible for:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Keeping your login credentials, API keys, and authentication
								tokens secure
							</li>
							<li>
								Not sharing access credentials with unauthorised individuals
							</li>
							<li>
								Reporting any suspected compromise of your credentials to{" "}
								<Link
									href='mailto:security@payscribe.co'
									className='text-primary underline'
								>
									security@payscribe.co
								</Link>{" "}
								immediately
							</li>
						</ul>

						<p className='font-semibold text-secondary'>
							4.3 Accurate Information
						</p>
						<p>
							You must provide accurate and complete information when registering
							for and using the Platform. Providing false or misleading
							information is a violation of this AUP and our Terms and
							Conditions.
						</p>
					</div>

					{/* 5. Monitoring and Enforcement */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							5. Monitoring and Enforcement
						</h3>
						<p>
							Payscribe monitors Platform activity for compliance with this AUP,
							applicable laws, and our regulatory obligations. This includes
							automated transaction monitoring for suspicious activity, AML and
							sanctions screening, fraud detection systems, and API usage
							monitoring.
						</p>
						<p>
							Where we identify a potential violation of this AUP, we may take
							any of the following actions depending on the severity:
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-50'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Action
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											When Applied
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										["Warning", "Minor or first-time violations"],
										["Transaction suspension", "Pending investigation of suspected violations"],
										["Account restriction", "Repeated or moderate violations"],
										["Account termination", "Serious, wilful, or repeated violations"],
										["Reporting to authorities", "Where required by law or where criminal activity is suspected"],
										["Legal action", "Where Payscribe has suffered loss or damage"],
									].map(([action, when], i) => (
										<tr key={i} className={i % 2 === 1 ? "bg-slate-50/50" : ""}>
											<td className='border border-slate-200 px-4 py-3 font-semibold'>
												{action}
											</td>
											<td className='border border-slate-200 px-4 py-3'>{when}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p>
							We will provide notice of enforcement action where legally and
							operationally possible. In cases involving fraud, financial crime,
							or regulatory requirements, we may act without prior notice.
						</p>
					</div>

					{/* 6. Reporting Violations */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>6. Reporting Violations</h3>
						<p>
							If you become aware of any misuse of the Platform &mdash; including
							by another user &mdash; please report it to us immediately:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Security issues:</strong>{" "}
								<Link
									href='mailto:security@payscribe.co'
									className='text-primary underline'
								>
									security@payscribe.co
								</Link>
							</li>
							<li>
								<strong>Fraud or financial crime:</strong>{" "}
								<Link
									href='mailto:compliance@payscribe.co'
									className='text-primary underline'
								>
									compliance@payscribe.co
								</Link>
							</li>
							<li>
								<strong>General AUP violations:</strong>{" "}
								<Link
									href='mailto:support@payscribe.co'
									className='text-primary underline'
								>
									support@payscribe.co
								</Link>
							</li>
						</ul>
						<p>Reports made in good faith will be treated confidentially.</p>
					</div>

					{/* 7. Consequences of Violation */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							7. Consequences of Violation
						</h3>
						<p>Violating this AUP may result in:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Immediate suspension or permanent termination of your account
							</li>
							<li>
								Forfeiture of funds held in your account where required by law or
								court order
							</li>
							<li>
								Reporting to HMRC, FCA, the National Crime Agency (NCA), NFIU,
								or other relevant authorities
							</li>
							<li>Civil or criminal legal action</li>
							<li>
								Liability for any losses, costs, or damages suffered by Payscribe
								or third parties as a result of your violation
							</li>
						</ul>
					</div>

					{/* 8. Changes to This Policy */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							8. Changes to This Policy
						</h3>
						<p>
							We may update this AUP from time to time to reflect changes in our
							services, applicable law, or industry standards. We will notify you
							of material changes by posting the updated policy on our website.
							Your continued use of the Platform after changes take effect
							constitutes acceptance of the revised AUP.
						</p>
					</div>

					{/* 9. Contact Us */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>9. Contact Us</h3>
						<p>
							For any questions about this Acceptable Use Policy:
						</p>
						<p>
							<strong>UK:</strong>{" "}
							<Link
								href='mailto:compliance@payscribe.co'
								className='text-primary underline'
							>
								compliance@payscribe.co
							</Link>
							<br />
							<strong>Nigeria:</strong>{" "}
							<Link
								href='mailto:compliance@payscribe.ng'
								className='text-primary underline'
							>
								compliance@payscribe.ng
							</Link>
							<br />
							<strong>Post:</strong> Legal, Payscribe Limited, 12 Beverley Road,
							Hull, HU5 1LU, United Kingdom
						</p>
						<p className='text-sm text-slate-500'>
							Date of last revision: 23 May 2026 &mdash; Version 1.0
						</p>
					</div>

				</div>
			</div>
		</section>
	);
}
