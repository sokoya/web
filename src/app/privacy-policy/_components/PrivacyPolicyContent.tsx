import Link from "next/link";

export function PrivacyPolicyContent() {
	return (
		<section id='privacy-content' className='bg-white py-16'>
			<div className='mx-auto max-w-5xl px-5 text-secondary'>
				<h2 className='text-3xl font-semibold'>Payscribe&apos;s Privacy Policy</h2>
				<p className='mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500'>
					Privacy Policy
				</p>

				<div className='mt-8 space-y-10 text-sm leading-relaxed text-slate-700 md:text-base'>

					{/* 1. Who We Are */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>1. Who We Are</h3>
						<p>
							This Privacy Policy applies to <strong>Payscribe Limited</strong>, a
							private limited company incorporated in England and Wales under
							company number <strong>17196544</strong>, with its registered office
							at 12 Beverley Road, Hull, HU5 1LU, United Kingdom (&quot;Payscribe&quot;,
							&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
						</p>
						<p>
							Payscribe Limited is registered with the UK Information
							Commissioner&apos;s Office (ICO) under registration number{" "}
							<strong>C1940873</strong>.
						</p>
						<p>
							Where services are provided to users in Nigeria and other African
							markets, those services are operated by our affiliated entity,{" "}
							<strong>Pscribe Digital Services Limited</strong> (RC1946239), 95
							Oreta Road, Igbogbo, Ikorodu, Lagos, Nigeria (&quot;Payscribe
							Nigeria&quot;). References to &quot;we&quot; or &quot;our&quot; in this policy cover
							both entities where context requires.
						</p>
						<p>
							We are the <strong>data controller</strong> responsible for your
							personal data collected through our website at{" "}
							<Link href='https://www.payscribe.co' className='text-primary underline'>
								www.payscribe.co
							</Link>
							, our web application at{" "}
							<Link href='https://app.payscribe.ng' className='text-primary underline'>
								app.payscribe.ng
							</Link>
							, and any related mobile applications (collectively, the
							&quot;Platform&quot;).
						</p>
					</div>

					{/* 2. The Law That Applies */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>2. The Law That Applies</h3>
						<p>
							For users in the United Kingdom, this policy is governed by:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								The <strong>UK General Data Protection Regulation (UK GDPR)</strong>
							</li>
							<li>
								The <strong>Data Protection Act 2018</strong>
							</li>
							<li>
								The{" "}
								<strong>
									Privacy and Electronic Communications Regulations 2003 (PECR)
								</strong>
							</li>
						</ul>
						<p>
							For users in Nigeria and other African jurisdictions, this policy is
							also governed by:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								The{" "}
								<strong>Nigeria Data Protection Act 2023 (NDPA)</strong>
							</li>
							<li>
								The{" "}
								<strong>Nigeria Data Protection Regulation 2019 (NDPR)</strong>
							</li>
						</ul>
						<p>
							Where both sets of laws apply, we apply the higher standard of
							protection.
						</p>
					</div>

					{/* 3. What Personal Data We Collect */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							3. What Personal Data We Collect
						</h3>
						<p>
							We collect the following categories of personal data depending on
							how you interact with our Platform:
						</p>

						<p className='font-semibold text-secondary'>
							3.1 Identity and Contact Data
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Full name</li>
							<li>Date of birth</li>
							<li>Email address</li>
							<li>Phone number</li>
							<li>Residential address</li>
							<li>Nationality</li>
							<li>
								Government-issued identification (National ID, passport,
								driver&apos;s licence)
							</li>
						</ul>

						<p className='font-semibold text-secondary'>3.2 Financial Data</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Bank account details</li>
							<li>
								Payment card information (tokenised &mdash; we do not store raw
								card numbers)
							</li>
							<li>Transaction history</li>
							<li>Wallet balances and stablecoin addresses</li>
							<li>Source of funds information</li>
						</ul>

						<p className='font-semibold text-secondary'>
							3.3 Business Data (for business accounts)
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Business name and registration number</li>
							<li>Director and beneficial owner details</li>
							<li>Business address</li>
							<li>KYB (Know Your Business) documentation</li>
						</ul>

						<p className='font-semibold text-secondary'>
							3.4 Technical and Usage Data
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>IP address</li>
							<li>Browser type and version</li>
							<li>Device type and unique identifiers</li>
							<li>Operating system</li>
							<li>Pages visited, time and date of visits</li>
							<li>Referring and exit pages</li>
							<li>Clickstream data</li>
						</ul>

						<p className='font-semibold text-secondary'>3.5 Communications Data</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Messages sent to our support team</li>
							<li>Records of calls or chats with us</li>
							<li>Survey responses and feedback</li>
						</ul>

						<p className='font-semibold text-secondary'>
							3.6 Compliance and Verification Data
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>KYC verification results</li>
							<li>Sanctions screening records</li>
							<li>Politically Exposed Persons (PEP) screening results</li>
							<li>Risk assessment information</li>
						</ul>
					</div>

					{/* 4. How We Collect */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							4. How We Collect Your Personal Data
						</h3>
						<p>
							We collect personal data through the following means:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Directly from you</strong> &mdash; when you register,
								complete identity verification, make transactions, or contact us
							</li>
							<li>
								<strong>Automatically</strong> &mdash; through cookies and similar
								technologies when you use the Platform (see our Cookie Policy)
							</li>
							<li>
								<strong>Third parties</strong> &mdash; identity verification
								providers, credit reference agencies, fraud prevention services,
								sanctions screening databases, and our banking and payment partners
							</li>
							<li>
								<strong>Publicly available sources</strong> &mdash; Companies
								House, regulatory registers, and publicly accessible databases
							</li>
						</ul>
					</div>

					{/* 5. Lawful Basis */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>5. Lawful Basis for Processing</h3>
						<p>
							Under UK GDPR, we must have a lawful basis to process your personal
							data. The table below sets out our lawful basis for each purpose:
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-50'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Purpose
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Lawful Basis
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										["Creating and managing your account", "Performance of a contract (Article 6(1)(b))"],
										["Processing payments and transactions", "Performance of a contract (Article 6(1)(b))"],
										["Identity verification and KYC/KYB", "Legal obligation (Article 6(1)(c))"],
										["AML and fraud prevention", "Legal obligation (Article 6(1)(c))"],
										["Sanctions and PEP screening", "Legal obligation (Article 6(1)(c))"],
										["Regulatory reporting to HMRC, FCA", "Legal obligation (Article 6(1)(c))"],
										["Improving our Platform and services", "Legitimate interests (Article 6(1)(f))"],
										["Security monitoring and fraud detection", "Legitimate interests (Article 6(1)(f))"],
										["Sending service-related communications", "Performance of a contract (Article 6(1)(b))"],
										["Sending marketing communications", "Consent (Article 6(1)(a)) — you may withdraw at any time"],
										["Analytics and performance measurement", "Legitimate interests (Article 6(1)(f))"],
									].map(([purpose, basis], i) => (
										<tr key={i} className={i % 2 === 1 ? "bg-slate-50/50" : ""}>
											<td className='border border-slate-200 px-4 py-3'>{purpose}</td>
											<td className='border border-slate-200 px-4 py-3'>{basis}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p>
							Where we rely on <strong>legitimate interests</strong>, we have
							assessed that our interests do not override your rights and freedoms.
							You have the right to object to processing based on legitimate
							interests at any time.
						</p>
					</div>

					{/* 6. How We Use */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							6. How We Use Your Personal Data
						</h3>
						<p>We use your personal data for the following purposes:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>To register you and maintain your account</li>
							<li>
								To process payments, transfers, and transactions you initiate
							</li>
							<li>
								To verify your identity and comply with anti-money laundering
								(AML) obligations
							</li>
							<li>
								To screen against sanctions and PEP lists as required by law
							</li>
							<li>
								To detect, investigate, and prevent fraud and financial crime
							</li>
							<li>
								To communicate with you about your account and transactions
							</li>
							<li>To provide customer support</li>
							<li>To improve and personalise our Platform</li>
							<li>To comply with legal and regulatory obligations</li>
							<li>
								To send you marketing communications (only where you have
								consented)
							</li>
							<li>To enforce our Terms and Conditions</li>
						</ul>
					</div>

					{/* 7. Who We Share With */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							7. Who We Share Your Data With
						</h3>
						<p>
							We may share your personal data with the following categories of
							recipients:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Identity verification providers</strong> &mdash; to
								verify your identity and documents
							</li>
							<li>
								<strong>Payment processors and banking partners</strong> &mdash;
								to execute transactions
							</li>
							<li>
								<strong>Fraud prevention and risk services</strong> &mdash; to
								screen for financial crime
							</li>
							<li>
								<strong>Sanctions screening providers</strong> &mdash; as required
								by law
							</li>
							<li>
								<strong>Cloud hosting and infrastructure providers</strong>{" "}
								&mdash; to operate the Platform
							</li>
							<li>
								<strong>Analytics providers</strong> &mdash; to improve Platform
								performance
							</li>
							<li>
								<strong>Legal and professional advisers</strong> &mdash; when
								required
							</li>
							<li>
								<strong>Regulatory bodies</strong> &mdash; HMRC, FCA, the ICO,
								and equivalent bodies in Nigeria and other jurisdictions, where
								required by law
							</li>
							<li>
								<strong>Law enforcement agencies</strong> &mdash; where we are
								legally obliged to disclose data
							</li>
							<li>
								<strong>Affiliated entities</strong> &mdash; including Pscribe
								Digital Services Limited, where necessary to deliver services
							</li>
							<li>
								<strong>Prospective buyers</strong> &mdash; in the event of a
								merger, acquisition, or sale of assets, subject to confidentiality
								obligations
							</li>
						</ul>
						<p>We do not sell your personal data to third parties.</p>
					</div>

					{/* 8. International Transfers */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							8. International Transfers of Personal Data
						</h3>
						<p>
							Payscribe operates across multiple jurisdictions. Your personal data
							may be transferred to and processed in countries outside the United
							Kingdom, including Nigeria, Kenya, Uganda, and other jurisdictions
							where our service providers or banking partners operate.
						</p>
						<p>
							Where we transfer personal data outside the UK to countries not
							covered by an adequacy decision, we ensure appropriate safeguards
							are in place, including:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Standard Contractual Clauses (SCCs)</strong> approved by
								the UK ICO
							</li>
							<li>
								<strong>Transfer Risk Assessments</strong> where required
							</li>
							<li>Contractual protections with our service providers</li>
						</ul>
					</div>

					{/* 9. Data Retention */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>9. Data Retention</h3>
						<p>
							We retain your personal data only for as long as necessary for the
							purposes for which it was collected, and in accordance with our
							legal obligations.
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-50'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Data Category
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Retention Period
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										["Account and identity data", "5 years after account closure"],
										["Transaction records", "5 years from date of transaction (AML obligation)"],
										["KYC/KYB documentation", "5 years after business relationship ends"],
										["Communications with support", "3 years"],
										["Technical and usage data", "13 months (rolling)"],
										["Marketing preferences", "Until you withdraw consent or request deletion"],
									].map(([category, period], i) => (
										<tr key={i} className={i % 2 === 1 ? "bg-slate-50/50" : ""}>
											<td className='border border-slate-200 px-4 py-3'>{category}</td>
											<td className='border border-slate-200 px-4 py-3'>{period}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p>
							Where we are required to retain data by law (e.g. AML regulations),
							we will retain it for the legally required period regardless of any
							deletion request.
						</p>
					</div>

					{/* 10. Your Rights */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							10. Your Rights Under UK GDPR
						</h3>
						<p>
							You have the following rights in relation to your personal data:
						</p>
						<ol className='list-decimal space-y-2 pl-5'>
							<li>
								<strong>Right of Access</strong> &mdash; to request a copy of the
								personal data we hold about you (Subject Access Request)
							</li>
							<li>
								<strong>Right to Rectification</strong> &mdash; to request
								correction of inaccurate or incomplete data
							</li>
							<li>
								<strong>Right to Erasure</strong> &mdash; to request deletion of
								your data in certain circumstances (&quot;right to be forgotten&quot;)
							</li>
							<li>
								<strong>Right to Restriction</strong> &mdash; to request that we
								restrict processing of your data in certain circumstances
							</li>
							<li>
								<strong>Right to Data Portability</strong> &mdash; to receive your
								data in a structured, machine-readable format
							</li>
							<li>
								<strong>Right to Object</strong> &mdash; to object to processing
								based on legitimate interests or for direct marketing
							</li>
							<li>
								<strong>Rights related to automated decision-making</strong>{" "}
								&mdash; to request human review of automated decisions that
								significantly affect you
							</li>
							<li>
								<strong>Right to Withdraw Consent</strong> &mdash; to withdraw
								consent at any time where processing is based on consent
							</li>
						</ol>
						<p>
							To exercise any of these rights, contact us at{" "}
							<Link
								href='mailto:privacy@payscribe.co'
								className='text-primary underline'
							>
								privacy@payscribe.co
							</Link>
							. We will respond within <strong>one calendar month</strong> of
							receiving your request.
						</p>
					</div>

					{/* 11. Automated Decision-Making */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							11. Automated Decision-Making
						</h3>
						<p>
							We may use automated systems to assess fraud risk and screen
							transactions. Where an automated decision has a significant legal or
							similar effect on you, you have the right to request human review of
							that decision. Contact us at{" "}
							<Link
								href='mailto:privacy@payscribe.co'
								className='text-primary underline'
							>
								privacy@payscribe.co
							</Link>{" "}
							to exercise this right.
						</p>
					</div>

					{/* 12. Cookies */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>12. Cookies</h3>
						<p>
							We use cookies and similar tracking technologies on our Platform.
							For full details of the cookies we use, your choices, and how to
							manage your preferences, please read our{" "}
							<Link
								href='/cookies-policy'
								className='text-primary underline'
							>
								Cookie Policy
							</Link>
							.
						</p>
					</div>

					{/* 13. Security */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							13. Security of Your Personal Data
						</h3>
						<p>
							We implement appropriate technical and organisational security
							measures to protect your personal data against unauthorised access,
							loss, destruction, or alteration. These include:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Encryption of data in transit (TLS) and at rest</li>
							<li>Access controls and authentication requirements</li>
							<li>Regular security assessments</li>
							<li>Staff training on data protection</li>
						</ul>
						<p>
							No method of transmission or storage is completely secure. In the
							event of a data breach that is likely to affect your rights, we will
							notify you and the ICO in accordance with our legal obligations.
						</p>
					</div>

					{/* 14. Children's Privacy */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>14. Children&apos;s Privacy</h3>
						<p>
							Our Platform is not directed at individuals under the age of{" "}
							<strong>18</strong>. We do not knowingly collect personal data from
							children under 18. If you believe a child has provided us with
							personal data, please contact us at{" "}
							<Link
								href='mailto:privacy@payscribe.co'
								className='text-primary underline'
							>
								privacy@payscribe.co
							</Link>{" "}
							and we will delete it promptly.
						</p>
					</div>

					{/* 15. Third-Party Links */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							15. Links to Third-Party Websites
						</h3>
						<p>
							Our Platform may contain links to third-party websites and services.
							We are not responsible for the privacy practices of those third
							parties. We encourage you to review their privacy policies before
							providing any personal data.
						</p>
					</div>

					{/* 16. Changes */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							16. Changes to This Privacy Policy
						</h3>
						<p>
							We may update this Privacy Policy from time to time. When we make
							material changes, we will notify you by posting the updated policy
							on our website and, where appropriate, by email. Your continued use
							of the Platform after any update constitutes acceptance of the
							revised policy.
						</p>
					</div>

					{/* 17. How to Complain */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>17. How to Complain</h3>
						<p>
							If you have concerns about how we handle your personal data, please
							contact us first and we will do our best to resolve your concern.
						</p>
						<p>
							If you remain dissatisfied, you have the right to lodge a complaint
							with the{" "}
							<strong>UK Information Commissioner&apos;s Office (ICO)</strong>:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Website:{" "}
								<Link
									href='https://www.ico.org.uk'
									className='text-primary underline'
								>
									www.ico.org.uk
								</Link>
							</li>
							<li>Telephone: 0303 123 1113</li>
							<li>
								Post: Information Commissioner&apos;s Office, Wycliffe House, Water
								Lane, Wilmslow, Cheshire, SK9 5AF
							</li>
						</ul>
						<p>
							For users in Nigeria, you may also raise a complaint with the{" "}
							<strong>Nigeria Data Protection Commission (NDPC)</strong> at{" "}
							<Link
								href='https://www.ndpc.gov.ng'
								className='text-primary underline'
							>
								www.ndpc.gov.ng
							</Link>
							.
						</p>
					</div>

					{/* 18. Contact Us */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>18. Contact Us</h3>
						<p>
							For any questions, concerns, or requests relating to this Privacy
							Policy or your personal data, contact our Data Protection Lead:
						</p>
						<p>
							<strong>Email:</strong>{" "}
							<Link
								href='mailto:privacy@payscribe.co'
								className='text-primary underline'
							>
								privacy@payscribe.co
							</Link>
							<br />
							<strong>Post:</strong> Data Protection Lead, Payscribe Limited, 12
							Beverley Road, Hull, HU5 1LU, United Kingdom
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
							Additional Rights for Users in Nigeria
						</h3>
						<p className='text-sm text-slate-500'>
							<strong>Applicable law:</strong> Nigeria Data Protection Act 2023
							(NDPA) and Nigeria Data Protection Regulation 2019 (NDPR) &mdash;{" "}
							<strong>Supervisory authority:</strong> Nigeria Data Protection
							Commission (NDPC)
						</p>
						<p>
							This Addendum applies to you if you are located in Nigeria or if
							your personal data is processed by{" "}
							<strong>Pscribe Digital Services Limited</strong> (RC1946239), our
							Nigerian affiliated entity. It supplements the main body of this
							Privacy Policy and, in the event of any conflict, this Addendum
							takes precedence for Nigerian users.
						</p>

						<p className='font-semibold text-secondary'>
							A1. Data Controller in Nigeria
						</p>
						<p>
							For Nigerian users, the data controller responsible for your
							personal data is:{" "}
							<strong>Pscribe Digital Services Limited</strong>, RC1946239, 95
							Oreta Road, Igbogbo, Ikorodu, Lagos, Nigeria. Email:{" "}
							<Link
								href='mailto:privacy@payscribe.ng'
								className='text-primary underline'
							>
								privacy@payscribe.ng
							</Link>
						</p>

						<p className='font-semibold text-secondary'>
							A2. Legal Basis for Processing Under Nigerian Law
						</p>
						<p>
							Under the NDPA 2023, we process your personal data on the following
							lawful bases:
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-100'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Purpose
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Lawful Basis (NDPA 2023)
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										["Account creation and management", "Performance of a contract"],
										["Payment processing and transactions", "Performance of a contract"],
										["Identity verification (KYC/KYB)", "Legal obligation"],
										["AML and fraud prevention", "Legal obligation"],
										["Regulatory reporting to CBN, NFIU", "Legal obligation"],
										["Platform improvement and analytics", "Legitimate interest"],
										["Marketing communications", "Consent"],
									].map(([purpose, basis], i) => (
										<tr key={i} className={i % 2 === 1 ? "bg-white" : ""}>
											<td className='border border-slate-200 px-4 py-3'>{purpose}</td>
											<td className='border border-slate-200 px-4 py-3'>{basis}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<p className='font-semibold text-secondary'>
							A3. Your Rights Under Nigerian Law
						</p>
						<p>
							As a Nigerian user, you have the following rights under the NDPA
							2023 and NDPR 2019:
						</p>
						<ol className='list-decimal space-y-2 pl-5'>
							<li>
								<strong>Right to be informed</strong> &mdash; to know how your
								personal data is being collected and used
							</li>
							<li>
								<strong>Right of access</strong> &mdash; to request a copy of
								your personal data held by us
							</li>
							<li>
								<strong>Right to rectification</strong> &mdash; to request
								correction of inaccurate or incomplete data
							</li>
							<li>
								<strong>Right to deletion</strong> &mdash; to request erasure of
								your personal data where there is no lawful reason to continue
								processing it
							</li>
							<li>
								<strong>Right to restriction</strong> &mdash; to request that we
								limit how we use your data in certain circumstances
							</li>
							<li>
								<strong>Right to data portability</strong> &mdash; to receive your
								data in a structured, commonly used format
							</li>
							<li>
								<strong>Right to object</strong> &mdash; to object to processing
								based on legitimate interests or for direct marketing
							</li>
							<li>
								<strong>Right to withdraw consent</strong> &mdash; to withdraw
								consent at any time where processing is based on consent
							</li>
						</ol>
						<p>
							To exercise any of these rights, contact us at{" "}
							<Link
								href='mailto:privacy@payscribe.ng'
								className='text-primary underline'
							>
								privacy@payscribe.ng
							</Link>
							. We will respond within <strong>30 days</strong> of receiving your
							request.
						</p>

						<p className='font-semibold text-secondary'>A4. Data Localisation</p>
						<p>
							Where required under Nigerian law, personal data relating to
							Nigerian residents is stored on servers located within Nigeria or in
							jurisdictions that provide an adequate level of data protection as
							recognised under the NDPA 2023.
						</p>

						<p className='font-semibold text-secondary'>
							A5. Retention Under Nigerian Law
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Financial transaction records are retained for a minimum of{" "}
								<strong>5 years</strong> in accordance with the Money Laundering
								(Prevention and Prohibition) Act 2022
							</li>
							<li>
								KYC documentation is retained for a minimum of{" "}
								<strong>5 years</strong> after the business relationship ends, as
								required by the CBN AML/CFT regulations
							</li>
						</ul>

						<p className='font-semibold text-secondary'>
							A6. Children&apos;s Privacy in Nigeria
						</p>
						<p>
							Under Nigerian law, we do not knowingly collect or process personal
							data of individuals under the age of <strong>18</strong> without
							verifiable parental or guardian consent.
						</p>

						<p className='font-semibold text-secondary'>
							A7. How to Complain in Nigeria
						</p>
						<p>
							If you are not satisfied with our response, you have the right to
							lodge a complaint with the{" "}
							<strong>Nigeria Data Protection Commission (NDPC)</strong>:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Website:{" "}
								<Link
									href='https://www.ndpc.gov.ng'
									className='text-primary underline'
								>
									www.ndpc.gov.ng
								</Link>
							</li>
							<li>
								Email:{" "}
								<Link
									href='mailto:info@ndpc.gov.ng'
									className='text-primary underline'
								>
									info@ndpc.gov.ng
								</Link>
							</li>
							<li>
								Address: No. 8 Katsina Ala Crescent, Maitama, Abuja, Nigeria
							</li>
						</ul>

						<p className='font-semibold text-secondary'>
							A8. Contact for Nigerian Users
						</p>
						<p>
							<strong>Email:</strong>{" "}
							<Link
								href='mailto:privacy@payscribe.ng'
								className='text-primary underline'
							>
								privacy@payscribe.ng
							</Link>
							<br />
							<strong>Post:</strong> Data Protection Officer, Pscribe Digital
							Services Limited, 95 Oreta Road, Igbogbo, Ikorodu, Lagos, Nigeria
						</p>
					</div>

				</div>
			</div>
		</section>
	);
}
