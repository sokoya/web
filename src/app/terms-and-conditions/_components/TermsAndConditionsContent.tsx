import Link from "next/link";

export function TermsAndConditionsContent() {
	return (
		<section id='terms-content' className='bg-white py-16'>
			<div className='mx-auto max-w-5xl px-5 text-secondary'>
				<h2 className='text-3xl font-semibold'>Payscribe&apos;s Terms and Conditions</h2>
				<p className='mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500'>
					Terms of Service
				</p>

				<div className='mt-8 space-y-10 text-sm leading-relaxed text-slate-700 md:text-base'>

					{/* 1. Who We Are */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>1. Who We Are</h3>
						<p>
							These Terms and Conditions (&quot;Terms&quot;) govern your access to and use
							of the services, platform, website, and applications provided by{" "}
							<strong>Payscribe Limited</strong>, a private limited company
							incorporated in England and Wales under company number{" "}
							<strong>17196544</strong>, with its registered office at 12 Beverley
							Road, Hull, HU5 1LU, United Kingdom (&quot;Payscribe&quot;, &quot;we&quot;, &quot;us&quot;,
							or &quot;our&quot;).
						</p>
						<p>
							Where services are provided to users in Nigeria and other African
							markets, those services are operated by our affiliated entity,{" "}
							<strong>Pscribe Digital Services Limited</strong> (RC1946239), 95
							Oreta Road, Igbogbo, Ikorodu, Lagos, Nigeria (&quot;Payscribe Nigeria&quot;).
						</p>
						<p>
							By accessing or using the Payscribe platform &mdash; including our
							website at{" "}
							<Link href='https://www.payscribe.co' className='text-primary underline'>
								www.payscribe.co
							</Link>
							, our web application at{" "}
							<Link href='https://app.payscribe.ng' className='text-primary underline'>
								app.payscribe.ng
							</Link>
							, and any related mobile applications (collectively the
							&quot;Platform&quot;) &mdash; you agree to be bound by these Terms.
						</p>
						<p>
							If you do not agree with any part of these Terms, you must stop
							using the Platform immediately.
						</p>
					</div>

					{/* 2. Regulatory Status */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>2. Regulatory Status</h3>
						<p>
							Payscribe Limited is registered as a Money Services Business with HM
							Revenue &amp; Customs (HMRC) and is in the process of obtaining
							authorisation from the Financial Conduct Authority (FCA) as a Small
							Payment Institution under the Payment Services Regulations 2017.
						</p>
						<p>
							Payscribe Nigeria (Pscribe Digital Services Limited) operates under
							applicable Nigerian financial services regulations.
						</p>
						<p className='text-sm italic text-slate-500'>
							This section will be updated as our regulatory status changes. Always
							refer to the latest version of these Terms for our current status.
						</p>
					</div>

					{/* 3. Eligibility */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>3. Eligibility</h3>
						<p>To use the Platform, you must:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Be at least <strong>18 years of age</strong></li>
							<li>Have the legal capacity to enter into a binding contract</li>
							<li>
								Not be a resident of a jurisdiction where the use of our services
								is prohibited by law
							</li>
							<li>
								Comply with all applicable laws and regulations in your
								jurisdiction
							</li>
						</ul>
						<p>
							If you are using the Platform on behalf of a business or
							organisation, you represent and warrant that you have the authority
							to bind that entity to these Terms.
						</p>
					</div>

					{/* 4. Account Registration */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>4. Account Registration</h3>
						<p className='font-semibold text-secondary'>4.1 Creating an Account</p>
						<p>
							To access certain features, you must register for an account and
							provide accurate, current, and complete information. You agree to
							update your information promptly if it changes.
						</p>
						<p className='font-semibold text-secondary'>4.2 Identity Verification</p>
						<p>
							As a regulated financial services business, we are legally required
							to verify your identity before providing services. You authorise us
							(directly or through third-party providers) to conduct identity
							verification, KYC (Know Your Customer), and KYB (Know Your Business)
							checks. This may include:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Verifying government-issued identification documents</li>
							<li>
								Screening against sanctions and PEP (Politically Exposed Persons)
								lists
							</li>
							<li>Verifying business registration and ownership details</li>
							<li>
								Conducting ongoing monitoring as required by anti-money laundering
								legislation
							</li>
						</ul>
						<p>
							Failure to provide satisfactory verification may result in restricted
							or suspended access to the Platform.
						</p>
						<p className='font-semibold text-secondary'>4.3 Account Security</p>
						<p>
							You are solely responsible for maintaining the confidentiality of
							your login credentials and for all activity that occurs under your
							account. You must:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Use a strong, unique password</li>
							<li>Not share your credentials with any third party</li>
							<li>
								Notify us immediately at{" "}
								<Link
									href='mailto:security@payscribe.co'
									className='text-primary underline'
								>
									security@payscribe.co
								</Link>{" "}
								if you suspect unauthorised access to your account
							</li>
						</ul>
						<p>
							We will never ask you for your password by email, phone, or any
							other unsolicited communication.
						</p>
					</div>

					{/* 5. Our Services */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>5. Our Services</h3>
						<p>
							Payscribe provides a financial technology infrastructure platform
							that may include, depending on your account type and jurisdiction:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Payment processing and money transmission</li>
							<li>Foreign exchange and multi-currency operations</li>
							<li>Virtual card issuance</li>
							<li>Stablecoin payment rails</li>
							<li>Business payment APIs and white-label infrastructure</li>
							<li>Treasury and payout services</li>
							<li>Bill payments and collections</li>
						</ul>
						<p>
							The availability of specific services may vary by jurisdiction,
							account type, and regulatory status. We reserve the right to modify,
							suspend, or discontinue any service at any time, with reasonable
							notice where possible.
						</p>
					</div>

					{/* 6. Payments, Fees, and Pricing */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>6. Payments, Fees, and Pricing</h3>
						<p className='font-semibold text-secondary'>6.1 Fees</p>
						<p>
							Fees for using the Platform are set out on our website or disclosed
							to you at the point of transaction. Fees are subject to change. We
							will provide reasonable advance notice of material fee changes.
						</p>
						<p className='font-semibold text-secondary'>6.2 Taxes</p>
						<p>
							All fees are exclusive of any applicable taxes, levies, or duties.
							You are responsible for any taxes applicable to your use of the
							Platform.
						</p>
						<p className='font-semibold text-secondary'>6.3 Payment Authorisation</p>
						<p>
							By initiating a transaction on the Platform, you authorise Payscribe
							to process that transaction on your behalf. You are responsible for
							ensuring sufficient funds are available.
						</p>
					</div>

					{/* 7. Refunds and Cancellations */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>7. Refunds and Cancellations</h3>
						<p className='font-semibold text-secondary'>7.1 Business Users</p>
						<p>
							For business accounts, our fees are generally non-refundable once a
							transaction has been processed, except where a transaction has failed
							due to an error on our part, in which case we will refund the
							transaction amount in full.
						</p>
						<p className='font-semibold text-secondary'>7.2 Consumer Users</p>
						<p>
							If you are a consumer (an individual using the Platform for
							personal, non-business purposes), your statutory rights under the{" "}
							<strong>Consumer Rights Act 2015</strong> and the{" "}
							<strong>Payment Services Regulations 2017</strong> are not affected
							by these Terms. These rights include protections for misdirected or
							unauthorised transactions.
						</p>
						<p className='font-semibold text-secondary'>7.3 Failed Transactions</p>
						<p>
							Where a payment fails due to technical error on our part, we will
							endeavour to reverse or refund the transaction within{" "}
							<strong>5 business days</strong>. Where the failure is attributable
							to a third party (e.g. a receiving bank), resolution timelines may
							vary.
						</p>
					</div>

					{/* 8. Unauthorised Transactions and Disputes */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							8. Unauthorised Transactions and Disputes
						</h3>
						<p className='font-semibold text-secondary'>
							8.1 Reporting Unauthorised Transactions
						</p>
						<p>
							If you believe an unauthorised transaction has been made on your
							account, you must notify us as soon as reasonably possible by
							contacting{" "}
							<Link
								href='mailto:hello@payscribe.co'
								className='text-primary underline'
							>
								hello@payscribe.co
							</Link>
							. Under the UK Payment Services Regulations 2017, you generally have
							up to <strong>13 months</strong> from the date of a transaction to
							report it as unauthorised.
						</p>
						<p className='font-semibold text-secondary'>8.2 Investigation Process</p>
						<p>On receiving a dispute, we will:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Acknowledge your report within <strong>2 business days</strong>
							</li>
							<li>Investigate the matter promptly and in good faith</li>
							<li>
								Provide you with a resolution or update within{" "}
								<strong>15 business days</strong> (or up to{" "}
								<strong>35 business days</strong> in exceptional circumstances)
							</li>
						</ul>
						<p className='font-semibold text-secondary'>
							8.3 Liability for Unauthorised Transactions
						</p>
						<p>
							Our liability for unauthorised transactions is governed by the
							Payment Services Regulations 2017. You may bear limited liability
							(up to &pound;35) for transactions arising from your failure to keep
							your account credentials secure, unless the transaction arose from
							our gross negligence or fraud.
						</p>
					</div>

					{/* 9. Prohibited Activities */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>9. Prohibited Activities</h3>
						<p>You must not use the Platform for any of the following:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Any illegal, fraudulent, or unauthorised activity</li>
							<li>Money laundering, terrorist financing, or sanctions evasion</li>
							<li>Processing payments for prohibited goods or services</li>
							<li>Circumventing our AML, KYC, or fraud prevention controls</li>
							<li>
								Exploiting technical errors, glitches, or vulnerabilities for
								financial gain
							</li>
							<li>
								Manipulating foreign exchange rates or transaction systems for
								personal gain
							</li>
							<li>
								Using virtual cards for fraudulent or chargeback abuse purposes
							</li>
							<li>Impersonating any person or entity</li>
							<li>Uploading or transmitting malware or malicious code</li>
							<li>
								Any activity that violates applicable laws or regulations in any
								jurisdiction where you operate
							</li>
						</ul>
						<p>
							Breach of this clause may result in immediate account suspension,
							termination, legal action, and reporting to relevant regulatory and
							law enforcement authorities.
						</p>
					</div>

					{/* 10. Intellectual Property */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>10. Intellectual Property</h3>
						<p>
							All content, software, designs, trademarks, logos, and technology on
							the Platform are the intellectual property of Payscribe Limited or
							its licensors. Nothing in these Terms grants you any rights to use
							our intellectual property other than to access and use the Platform
							in accordance with these Terms.
						</p>
						<p>
							You must not copy, reproduce, distribute, or create derivative works
							from any part of the Platform without our prior written consent.
						</p>
					</div>

					{/* 11. Limitation of Liability */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>11. Limitation of Liability</h3>
						<p className='font-semibold text-secondary'>
							11.1 To the fullest extent permitted by applicable law, Payscribe
							shall not be liable for:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Indirect, incidental, special, consequential, or punitive damages
							</li>
							<li>Loss of profits, revenue, or anticipated savings</li>
							<li>Loss of data or business interruption</li>
							<li>
								Damages arising from third-party actions, including receiving
								banks, payment networks, or blockchain networks
							</li>
						</ul>
						<p className='font-semibold text-secondary'>
							11.2 Our total liability to you in connection with the Platform shall
							not exceed the greater of:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								The total fees paid by you to Payscribe in the{" "}
								<strong>3 months</strong> immediately preceding the event giving
								rise to the claim, or
							</li>
							<li>
								<strong>&pound;100</strong>
							</li>
						</ul>
						<p className='font-semibold text-secondary'>
							11.3 Nothing in these Terms limits or excludes our liability for:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Death or personal injury caused by our negligence</li>
							<li>Fraud or fraudulent misrepresentation</li>
							<li>
								Any liability that cannot lawfully be excluded under English law
								or the Consumer Rights Act 2015
							</li>
						</ul>
					</div>

					{/* 12. Indemnification */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>12. Indemnification</h3>
						<p>
							You agree to indemnify, defend, and hold harmless Payscribe Limited
							and its directors, officers, employees, contractors, and affiliates
							from and against any claims, liabilities, damages, losses, costs, or
							expenses (including reasonable legal fees) arising from:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Your use of the Platform in violation of these Terms</li>
							<li>Your violation of any applicable law or regulation</li>
							<li>
								Any content or information you submit through the Platform
							</li>
							<li>
								Any dispute between you and a third party arising from your use of
								the Platform
							</li>
						</ul>
					</div>

					{/* 13. Force Majeure */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>13. Force Majeure</h3>
						<p>
							We will not be liable for any failure or delay in performing our
							obligations under these Terms where such failure or delay results
							from circumstances beyond our reasonable control, including acts of
							God, natural disasters, war, civil unrest, government action,
							regulatory changes, power outages, internet service disruptions, or
							blockchain network failures.
						</p>
					</div>

					{/* 14. Third-Party Links */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							14. Third-Party Links and Services
						</h3>
						<p>
							The Platform may contain links to third-party websites or integrate
							with third-party services. We do not endorse and are not responsible
							for the content, practices, or privacy policies of any third
							parties. Your dealings with third parties are solely between you and
							them.
						</p>
					</div>

					{/* 15. Suspension and Termination */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>15. Suspension and Termination</h3>
						<p className='font-semibold text-secondary'>15.1 By Payscribe</p>
						<p>
							We may suspend or terminate your access to the Platform at any time:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Where we reasonably suspect a breach of these Terms</li>
							<li>Where required by law or regulatory obligation</li>
							<li>Where we are required to do so by a competent authority</li>
							<li>
								Where we reasonably suspect fraudulent, illegal, or harmful
								activity
							</li>
						</ul>
						<p>
							We will provide advance notice of suspension or termination where
							legally and operationally possible. Where immediate action is
							required for regulatory or security reasons, we may act without
							prior notice.
						</p>
						<p className='font-semibold text-secondary'>15.2 By You</p>
						<p>
							You may close your account at any time by contacting{" "}
							<Link
								href='mailto:hello@payscribe.co'
								className='text-primary underline'
							>
								hello@payscribe.co
							</Link>
							. Closure will not affect any rights or obligations that arose prior
							to termination.
						</p>
					</div>

					{/* 16. Complaints */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>16. Complaints</h3>
						<p>
							We take complaints seriously. If you are unhappy with any aspect of
							our service, please contact us:
						</p>
						<p>
							<strong>Email:</strong>{" "}
							<Link
								href='mailto:hello@payscribe.co'
								className='text-primary underline'
							>
								hello@payscribe.co
							</Link>
							<br />
							<strong>Post:</strong> Complaints, Payscribe Limited, 12 Beverley
							Road, Hull, HU5 1LU, United Kingdom
						</p>
						<p>
							We will acknowledge your complaint within{" "}
							<strong>5 business days</strong> and aim to provide a full response
							within <strong>15 business days</strong>. If we cannot resolve your
							complaint within this timeframe, we will write to you explaining why
							and provide an updated resolution date.
						</p>
						<p>
							If you remain dissatisfied after our internal process, you may have
							the right to refer your complaint to an appropriate external dispute
							resolution scheme. Details will be provided with our final response.
						</p>
					</div>

					{/* 17. Changes to These Terms */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>17. Changes to These Terms</h3>
						<p>
							We may update these Terms from time to time. We will notify you of
							material changes by:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Posting the updated Terms on our website</li>
							<li>
								Sending you a notification by email (where you have provided an
								email address)
							</li>
						</ul>
						<p>
							Your continued use of the Platform after the effective date of any
							changes constitutes acceptance of the revised Terms. If you do not
							agree with any changes, you must stop using the Platform.
						</p>
					</div>

					{/* 18. Governing Law */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							18. Governing Law and Jurisdiction
						</h3>
						<p>
							These Terms are governed by and construed in accordance with the
							laws of <strong>England and Wales</strong>.
						</p>
						<p>
							For disputes arising from services provided to users in Nigeria, the
							laws of the <strong>Federal Republic of Nigeria</strong> apply to
							the extent relevant to those specific services.
						</p>
						<p>
							Any dispute, claim, or controversy arising out of or in connection
							with these Terms shall be subject to the{" "}
							<strong>
								exclusive jurisdiction of the courts of England and Wales
							</strong>
							, except where applicable consumer protection law entitles you to
							bring proceedings in another jurisdiction.
						</p>
					</div>

					{/* 19. Severability */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>19. Severability</h3>
						<p>
							If any provision of these Terms is found to be unenforceable or
							invalid, that provision shall be limited or eliminated to the
							minimum extent necessary so that these Terms shall otherwise remain
							in full force and effect.
						</p>
					</div>

					{/* 20. Entire Agreement */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>20. Entire Agreement</h3>
						<p>
							These Terms, together with our Privacy Policy and Cookie Policy,
							constitute the entire agreement between you and Payscribe in
							relation to your use of the Platform and supersede all prior
							agreements and understandings.
						</p>
					</div>

					{/* 21. Contact Us */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>21. Contact Us</h3>
						<p>For any questions about these Terms:</p>
						<p>
							<strong>Email:</strong>{" "}
							<Link
								href='mailto:compliance@payscribe.co'
								className='text-primary underline'
							>
								compliance@payscribe.co
							</Link>
							<br />
							<strong>Post:</strong> Legal, Payscribe Limited, 12 Beverley Road,
							Hull, HU5 1LU, United Kingdom
						</p>
						<p className='text-sm text-slate-500'>
							Date of last revision: 23 May 2026 &mdash; Version 2.0
						</p>
					</div>

					{/* Addendum A */}
					<div className='space-y-4 rounded-md border border-slate-200 bg-slate-50 p-6'>
						<p className='text-xs font-semibold uppercase tracking-[0.18em] text-primary'>
							Addendum A
						</p>
						<h3 className='text-2xl font-semibold'>
							Additional Terms for Users in Nigeria
						</h3>
						<p className='text-sm text-slate-500'>
							<strong>Applicable law:</strong> Laws of the Federal Republic of
							Nigeria &mdash; <strong>Entity:</strong> Pscribe Digital Services
							Limited (RC1946239)
						</p>
						<p>
							This Addendum applies to you if you are located in Nigeria or if you
							are accessing services operated by{" "}
							<strong>Pscribe Digital Services Limited</strong>, our Nigerian
							affiliated entity. It supplements the main body of these Terms and,
							in the event of any conflict relating specifically to Nigerian
							operations, this Addendum takes precedence for Nigerian users.
						</p>

						<p className='font-semibold text-secondary'>A1. Nigerian Operating Entity</p>
						<p>
							Services provided to Nigerian users are operated by:{" "}
							<strong>Pscribe Digital Services Limited</strong>, RC1946239, 95
							Oreta Road, Igbogbo, Ikorodu, Lagos, Nigeria. Email:{" "}
							<Link
								href='mailto:hello@payscribe.ng'
								className='text-primary underline'
							>
								hello@payscribe.ng
							</Link>
						</p>

						<p className='font-semibold text-secondary'>A2. Regulatory Status in Nigeria</p>
						<p>
							Pscribe Digital Services Limited operates in compliance with
							applicable Nigerian financial services regulations including
							guidelines issued by the{" "}
							<strong>Central Bank of Nigeria (CBN)</strong> and the{" "}
							<strong>Nigerian Financial Intelligence Unit (NFIU)</strong> as they
							apply to our business activities.
						</p>

						<p className='font-semibold text-secondary'>
							A3. Governing Law for Nigerian Users
						</p>
						<p>
							For Nigerian users, the services provided by Pscribe Digital
							Services Limited are governed by the laws of the{" "}
							<strong>Federal Republic of Nigeria</strong>. Any dispute arising
							specifically from services rendered by Pscribe Digital Services
							Limited to Nigerian users shall be subject to the jurisdiction of
							the <strong>courts of Lagos State, Nigeria</strong>.
						</p>

						<p className='font-semibold text-secondary'>
							A4. Consumer Protection &mdash; Nigerian Users
						</p>
						<p>
							Your statutory rights as a consumer under Nigerian law are not
							affected by these Terms, including rights under the Federal
							Competition and Consumer Protection Act (FCCPA) 2018, the CBN
							Consumer Protection Framework, and the CBN Guidelines on Electronic
							Banking.
						</p>

						<p className='font-semibold text-secondary'>
							A5. Dispute Resolution &mdash; Nigerian Users
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Contact us first</strong> at{" "}
								<Link
									href='mailto:hello@payscribe.co'
									className='text-primary underline'
								>
									hello@payscribe.co
								</Link>{" "}
								&mdash; we will acknowledge within <strong>2 business days</strong>{" "}
								and aim to resolve within <strong>15 business days</strong>
							</li>
							<li>
								If unresolved, you may escalate to the Consumer Protection
								Department of the CBN
							</li>
							<li>
								For formal legal proceedings, the courts of{" "}
								<strong>Lagos State, Nigeria</strong> have jurisdiction
							</li>
						</ul>

						<p className='font-semibold text-secondary'>
							A6. Transaction Disputes &mdash; Nigerian Users
						</p>
						<p>
							Nigerian users may dispute unauthorised or erroneous transactions
							within <strong>90 days</strong> of the transaction date by
							contacting{" "}
							<Link
								href='mailto:hello@payscribe.co'
								className='text-primary underline'
							>
								hello@payscribe.co
							</Link>{" "}
							with the transaction details. This is consistent with CBN dispute
							resolution guidelines.
						</p>

						<p className='font-semibold text-secondary'>
							A7. Prohibited Activities &mdash; Nigerian Specific
						</p>
						<p>
							In addition to the prohibited activities listed in the main Terms,
							Nigerian users must not use the Platform in violation of CBN foreign
							exchange regulations, conduct transactions that contravene the Money
							Laundering (Prevention and Prohibition) Act 2022, or engage in any
							activity that violates NFIU reporting obligations.
						</p>

						<p className='font-semibold text-secondary'>A8. Language</p>
						<p>
							These Terms are provided in English, which is the official language
							of Nigeria and the language of legal effect for Nigerian users.
						</p>

						<p className='font-semibold text-secondary'>
							A9. Contact for Nigerian Users
						</p>
						<p>
							<strong>Email:</strong>{" "}
							<Link
								href='mailto:hello@payscribe.co'
								className='text-primary underline'
							>
								hello@payscribe.co
							</Link>
							<br />
							<strong>WhatsApp:</strong> +234 703 806 7493
							<br />
							<strong>Post:</strong> Pscribe Digital Services Limited, 95 Oreta
							Road, Igbogbo, Ikorodu, Lagos, Nigeria
						</p>
					</div>

				</div>
			</div>
		</section>
	);
}
