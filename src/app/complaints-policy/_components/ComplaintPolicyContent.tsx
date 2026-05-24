import Link from "next/link";

export function ComplaintsPolicyContent() {
	return (
		<section id='complaints-content' className='bg-white py-16'>
			<div className='mx-auto max-w-5xl px-5 text-secondary'>
				<h2 className='text-3xl font-semibold'>Payscribe&apos;s Complaints Policy</h2>
				<p className='mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500'>
					Complaints Policy
				</p>

				<div className='mt-8 space-y-10 text-sm leading-relaxed text-slate-700 md:text-base'>

					{/* 1. Our Commitment */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>1. Our Commitment</h3>
						<p>
							At Payscribe, we take every complaint seriously. If something has
							gone wrong, we want to know about it, resolve it fairly and
							promptly, and use your feedback to improve our services.
						</p>
						<p>This policy applies to complaints about services provided by:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Payscribe Limited</strong> (Company No. 17196544), 12
								Beverley Road, Hull, HU5 1LU, United Kingdom &mdash; for UK and
								international users
							</li>
							<li>
								<strong>Pscribe Digital Services Limited</strong> (RC1946239), 95
								Oreta Road, Igbogbo, Ikorodu, Lagos, Nigeria &mdash; for Nigerian
								users
							</li>
						</ul>
					</div>

					{/* 2. What Is a Complaint */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>2. What Is a Complaint?</h3>
						<p>
							A complaint is any expression of dissatisfaction &mdash; whether
							written or verbal &mdash; about our services, products, staff,
							processes, or any aspect of your experience with Payscribe that
							requires a response or resolution.
						</p>
						<p>This includes but is not limited to:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Failed or delayed transactions</li>
							<li>Incorrect charges or fees</li>
							<li>Account access issues</li>
							<li>Unsatisfactory customer service</li>
							<li>Concerns about how your personal data has been handled</li>
							<li>Disputes about our decisions regarding your account</li>
							<li>Issues with identity verification or onboarding</li>
						</ul>
					</div>

					{/* 3. How to Raise a Complaint */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>3. How to Raise a Complaint</h3>
						<p>
							You can submit a complaint through any of the following channels:
						</p>

						<p className='font-semibold text-secondary'>
							For UK and International Users &mdash; Payscribe Limited
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-50'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Channel
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Details
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='border border-slate-200 px-4 py-3 font-semibold'>
											Email
										</td>
										<td className='border border-slate-200 px-4 py-3'>
											<Link
												href='mailto:compliance@payscribe.co'
												className='text-primary underline'
											>
												compliance@payscribe.co
											</Link>
										</td>
									</tr>
									<tr className='bg-slate-50/50'>
										<td className='border border-slate-200 px-4 py-3 font-semibold'>
											Post
										</td>
										<td className='border border-slate-200 px-4 py-3'>
											Complaints, Payscribe Limited, 12 Beverley Road, Hull,
											HU5 1LU, United Kingdom
										</td>
									</tr>
									<tr>
										<td className='border border-slate-200 px-4 py-3 font-semibold'>
											In-app
										</td>
										<td className='border border-slate-200 px-4 py-3'>
											Via the Help &amp; Support section of the Payscribe
											platform
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<p className='font-semibold text-secondary'>
							For Nigerian Users &mdash; Pscribe Digital Services Limited
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-50'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Channel
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Details
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='border border-slate-200 px-4 py-3 font-semibold'>
											Email
										</td>
										<td className='border border-slate-200 px-4 py-3'>
											<Link
												href='mailto:compliance@payscribe.co'
												className='text-primary underline'
											>
												compliance@payscribe.co
											</Link>
										</td>
									</tr>
									<tr className='bg-slate-50/50'>
										<td className='border border-slate-200 px-4 py-3 font-semibold'>
											WhatsApp
										</td>
										<td className='border border-slate-200 px-4 py-3'>
											+234 703 806 7493
										</td>
									</tr>
									<tr>
										<td className='border border-slate-200 px-4 py-3 font-semibold'>
											Post
										</td>
										<td className='border border-slate-200 px-4 py-3'>
											Complaints, Pscribe Digital Services Limited, 95 Oreta
											Road, Igbogbo, Ikorodu, Lagos, Nigeria
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* 4. What to Include */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							4. What to Include in Your Complaint
						</h3>
						<p>
							To help us resolve your complaint as quickly as possible, please
							provide:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Your <strong>full name</strong> and{" "}
								<strong>registered email address</strong>
							</li>
							<li>
								Your <strong>account reference or user ID</strong> (if applicable)
							</li>
							<li>
								A <strong>clear description</strong> of what happened and when
							</li>
							<li>
								<strong>Transaction references</strong> or dates (if relevant)
							</li>
							<li>
								What <strong>outcome you are seeking</strong>
							</li>
							<li>
								Any <strong>supporting documents</strong> or screenshots
							</li>
						</ul>
					</div>

					{/* 5. Our Complaints Process */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>5. Our Complaints Process</h3>

						<p className='font-semibold text-secondary'>
							Stage 1 &mdash; Acknowledgement
						</p>
						<p>
							We will acknowledge receipt of your complaint within{" "}
							<strong>5 business days</strong> of receiving it. Our
							acknowledgement will confirm that we have received your complaint,
							the name of the person handling it, and our target resolution date.
						</p>

						<p className='font-semibold text-secondary'>
							Stage 2 &mdash; Investigation
						</p>
						<p>
							We will investigate your complaint thoroughly and impartially. This
							may involve reviewing your account history and transaction records,
							speaking with relevant team members, and requesting additional
							information from you if needed.
						</p>

						<p className='font-semibold text-secondary'>
							Stage 3 &mdash; Resolution
						</p>
						<p>
							We aim to provide a <strong>full written response</strong> within{" "}
							<strong>15 business days</strong> of receiving your complaint.
						</p>
						<p>
							In complex cases where we are unable to resolve your complaint
							within 15 business days, we will write to you explaining the reason
							for the delay, provide an updated resolution timeframe, and resolve
							the matter within a maximum of <strong>35 business days</strong>.
						</p>
						<p>Our written response will clearly state:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>Our findings following investigation</li>
							<li>Any action we are taking or have taken</li>
							<li>Our final decision and the reasons for it</li>
							<li>Your right to escalate if you remain dissatisfied</li>
						</ul>
					</div>

					{/* 6. If You Are Not Satisfied */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							6. If You Are Not Satisfied With Our Response
						</h3>

						<p className='font-semibold text-secondary'>UK Users</p>
						<p>
							If you remain dissatisfied after receiving our final response &mdash;
							or if 8 weeks have passed since you submitted your complaint without
							a resolution &mdash; you may have the right to refer your complaint
							to an independent dispute resolution service. We will confirm the
							applicable scheme in our final response letter.
						</p>
						<p>
							<strong>Financial Ombudsman Service (FOS)</strong>
							<br />
							Website:{" "}
							<Link
								href='https://www.financial-ombudsman.org.uk'
								className='text-primary underline'
							>
								www.financial-ombudsman.org.uk
							</Link>
							<br />
							Telephone: 0800 023 4567
							<br />
							Post: Financial Ombudsman Service, Exchange Tower, London, E14 9SR
						</p>
						<p className='text-sm italic text-slate-500'>
							Note: The Financial Ombudsman Service is available to eligible
							complainants including consumers, micro-enterprises, and small
							businesses. We will confirm your eligibility in our response.
						</p>
						<p>
							<strong>
								Information Commissioner&apos;s Office (ICO)
							</strong>{" "}
							&mdash; for data protection complaints only
							<br />
							Website:{" "}
							<Link
								href='https://www.ico.org.uk'
								className='text-primary underline'
							>
								www.ico.org.uk
							</Link>
							<br />
							Telephone: 0303 123 1113
						</p>

						<p className='font-semibold text-secondary'>Nigerian Users</p>
						<p>
							If you remain dissatisfied after our internal process, you may
							escalate your complaint to:
						</p>
						<p>
							<strong>
								Central Bank of Nigeria (CBN) &mdash; Consumer Protection
								Department
							</strong>
							<br />
							Website:{" "}
							<Link
								href='https://www.cbn.gov.ng'
								className='text-primary underline'
							>
								www.cbn.gov.ng
							</Link>
							<br />
							Email:{" "}
							<Link
								href='mailto:cpd@cbn.gov.ng'
								className='text-primary underline'
							>
								cpd@cbn.gov.ng
							</Link>
							<br />
							Telephone: 0700 225 5226
						</p>
						<p>
							<strong>
								Federal Competition and Consumer Protection Commission (FCCPC)
							</strong>
							<br />
							Website:{" "}
							<Link
								href='https://www.fccpc.gov.ng'
								className='text-primary underline'
							>
								www.fccpc.gov.ng
							</Link>
						</p>
						<p>
							<strong>Nigeria Data Protection Commission (NDPC)</strong> &mdash;
							for data protection complaints only
							<br />
							Website:{" "}
							<Link
								href='https://www.ndpc.gov.ng'
								className='text-primary underline'
							>
								www.ndpc.gov.ng
							</Link>
							<br />
							Email:{" "}
							<Link
								href='mailto:info@ndpc.gov.ng'
								className='text-primary underline'
							>
								info@ndpc.gov.ng
							</Link>
						</p>
					</div>

					{/* 7. Transaction Disputes */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>7. Transaction Disputes</h3>

						<p className='font-semibold text-secondary'>UK Users</p>
						<p>
							If you believe a transaction was unauthorised or executed
							incorrectly, you should notify us as soon as possible. Under the{" "}
							<strong>UK Payment Services Regulations 2017</strong>, you generally
							have up to <strong>13 months</strong> from the date of the
							transaction to report it as unauthorised.
						</p>

						<p className='font-semibold text-secondary'>Nigerian Users</p>
						<p>
							Transaction disputes should be reported within{" "}
							<strong>90 days</strong> of the transaction date in accordance with
							CBN dispute resolution guidelines.
						</p>

						<p>
							In all cases, please include the transaction reference, amount,
							date, and a description of the issue when reporting.
						</p>
					</div>

					{/* 8. Refunds */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>8. Refunds</h3>
						<p>
							Where a complaint investigation confirms that:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								A transaction failed due to an error on our part, we will refund
								the full transaction amount
							</li>
							<li>
								An incorrect fee was charged, we will refund the overcharge
							</li>
							<li>
								An unauthorised transaction occurred and you are not liable, we
								will refund the amount in accordance with applicable regulations
							</li>
						</ul>
						<p>
							Refunds will be processed within <strong>5 business days</strong>{" "}
							of the resolution decision.
						</p>
						<p>
							Please refer to our{" "}
							<Link
								href='/terms-and-conditions'
								className='text-primary underline'
							>
								Terms and Conditions
							</Link>{" "}
							for full details of our refund policy.
						</p>
					</div>

					{/* 9. Confidentiality */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>9. Confidentiality</h3>
						<p>
							All complaints are handled with strict confidentiality. Information
							shared during the complaints process will only be used to
							investigate and resolve your complaint, and will be handled in
							accordance with our{" "}
							<Link href='/privacy-policy' className='text-primary underline'>
								Privacy Policy
							</Link>
							.
						</p>
					</div>

					{/* 10. Learning From Complaints */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							10. Learning From Complaints
						</h3>
						<p>
							We use complaints data to identify patterns, improve our services,
							and prevent recurring issues. All complaints are reviewed by our
							management team as part of our ongoing commitment to service
							quality.
						</p>
					</div>

					{/* 11. Treating Customers Fairly */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							11. Treating Customers Fairly
						</h3>
						<p>
							We are committed to treating all customers fairly regardless of
							their background, location, or account type. If you feel you have
							been treated unfairly at any stage of the complaints process,
							please let us know.
						</p>
					</div>

					{/* 12. Unreasonable or Vexatious Complaints */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							12. Unreasonable or Vexatious Complaints
						</h3>
						<p>
							We will always try to resolve complaints fairly. However, we
							reserve the right to handle complaints differently where they are:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								Repetitive complaints raising the same issue already fully
								addressed
							</li>
							<li>Abusive, threatening, or offensive in nature</li>
							<li>
								Clearly designed to cause disruption rather than seek genuine
								resolution
							</li>
						</ul>
						<p>
							In such cases we will notify you in writing of our decision to
							handle your complaint differently and explain the reasons.
						</p>
					</div>

					{/* 13. Record Keeping */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>13. Record Keeping</h3>
						<p>
							We retain records of all complaints and their outcomes for a
							minimum of <strong>5 years</strong> in accordance with our
							regulatory obligations. These records may be reviewed by our
							regulators on request.
						</p>
					</div>

					{/* 14. Policy Review */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>14. Policy Review</h3>
						<p>
							This Complaints Policy is reviewed annually and updated as required
							to reflect changes in regulation, best practice, or our business
							operations.
						</p>
					</div>

					{/* 15. Contact Us */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>15. Contact Us</h3>
						<p>
							For any questions about this policy or to submit a complaint:
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
