import Link from "next/link";

export function CookiesPolicyContent() {
	return (
		<section id='cookie-content' className='bg-white py-16'>
			<div className='mx-auto max-w-5xl px-5 text-secondary'>
				<h2 className='text-3xl font-semibold'>Payscribe&apos;s Cookie Policy</h2>
				<p className='mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500'>
					Cookie Policy
				</p>

				<div className='mt-8 space-y-10 text-sm leading-relaxed text-slate-700 md:text-base'>

					{/* 1. Introduction */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>1. Introduction</h3>
						<p>
							This Cookie Policy explains how <strong>Payscribe Limited</strong>{" "}
							(&quot;Payscribe&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
							tracking technologies on our website at{" "}
							<Link href='https://www.payscribe.co' className='text-primary underline'>
								www.payscribe.co
							</Link>{" "}
							and web application at{" "}
							<Link href='https://app.payscribe.ng' className='text-primary underline'>
								app.payscribe.ng
							</Link>{" "}
							(collectively, the &quot;Platform&quot;).
						</p>
						<p>
							This policy should be read alongside our{" "}
							<Link href='/privacy-policy' className='text-primary underline'>
								Privacy Policy
							</Link>
							, which provides broader information about how we handle your
							personal data.
						</p>
						<p>
							We are committed to being transparent about the technologies we use.
							This policy tells you what cookies are, what we use them for, and
							how you can control them.
						</p>
					</div>

					{/* 2. What Are Cookies */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>2. What Are Cookies?</h3>
						<p>
							Cookies are small text files placed on your device (computer,
							smartphone, or tablet) when you visit a website. They are widely
							used to make websites work, improve performance, and provide
							information to website owners.
						</p>
						<p>Cookies can be:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Session cookies</strong> &mdash; temporary cookies that
								are deleted when you close your browser
							</li>
							<li>
								<strong>Persistent cookies</strong> &mdash; cookies that remain on
								your device for a set period or until you delete them
							</li>
							<li>
								<strong>First-party cookies</strong> &mdash; set by Payscribe
								directly
							</li>
							<li>
								<strong>Third-party cookies</strong> &mdash; set by our trusted
								partners and service providers
							</li>
						</ul>
						<p>
							We also use similar technologies such as{" "}
							<strong>web beacons</strong>, <strong>pixels</strong>, and{" "}
							<strong>local storage</strong> which function in a similar way to
							cookies.
						</p>
					</div>

					{/* 3. How We Use Cookies */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>3. How We Use Cookies</h3>
						<p>We use cookies for the following purposes:</p>

						{/* 3.1 Strictly Necessary */}
						<p className='font-semibold text-secondary'>
							3.1 Strictly Necessary Cookies
						</p>
						<p>
							These cookies are essential for the Platform to function and cannot
							be switched off. They are usually set in response to actions you
							take, such as logging in, filling in forms, or setting privacy
							preferences.
						</p>
						<p>
							You cannot opt out of strictly necessary cookies as the Platform
							will not function properly without them.
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-50'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Cookie Name
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Purpose
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Duration
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										["session_id", "Maintains your login session", "Session"],
										["csrf_token", "Protects against cross-site request forgery", "Session"],
										["auth_token", "Authenticates your account access", "Session"],
										["cookie_consent", "Stores your cookie preferences", "12 months"],
									].map(([name, purpose, duration], i) => (
										<tr key={i} className={i % 2 === 1 ? "bg-slate-50/50" : ""}>
											<td className='border border-slate-200 px-4 py-3 font-mono text-xs'>
												{name}
											</td>
											<td className='border border-slate-200 px-4 py-3'>{purpose}</td>
											<td className='border border-slate-200 px-4 py-3 whitespace-nowrap'>
												{duration}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						{/* 3.2 Functional */}
						<p className='font-semibold text-secondary'>3.2 Functional Cookies</p>
						<p>
							These cookies enable enhanced functionality and personalisation.
							They may be set by us or by third-party providers whose services we
							have added to our pages. If you disable these cookies, some or all
							of these features may not function correctly.
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-50'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Cookie Name
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Purpose
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Duration
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										["language_pref", "Remembers your language preference", "12 months"],
										["ui_theme", "Stores your display preferences", "12 months"],
										["last_visited", "Remembers where you were on the Platform", "30 days"],
									].map(([name, purpose, duration], i) => (
										<tr key={i} className={i % 2 === 1 ? "bg-slate-50/50" : ""}>
											<td className='border border-slate-200 px-4 py-3 font-mono text-xs'>
												{name}
											</td>
											<td className='border border-slate-200 px-4 py-3'>{purpose}</td>
											<td className='border border-slate-200 px-4 py-3 whitespace-nowrap'>
												{duration}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						{/* 3.3 Analytics */}
						<p className='font-semibold text-secondary'>3.3 Analytics Cookies</p>
						<p>
							These cookies allow us to count visits and traffic sources so we
							can measure and improve the performance of our Platform. All
							information collected by these cookies is aggregated and therefore
							anonymous. If you do not allow these cookies, we will not know when
							you have visited our site.
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-50'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Cookie / Tool
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Provider
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Purpose
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Duration
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										["_ga", "Google Analytics", "Distinguishes unique users", "2 years"],
										["_gid", "Google Analytics", "Distinguishes users (session level)", "24 hours"],
										["_gat", "Google Analytics", "Throttles request rate", "1 minute"],
									].map(([name, provider, purpose, duration], i) => (
										<tr key={i} className={i % 2 === 1 ? "bg-slate-50/50" : ""}>
											<td className='border border-slate-200 px-4 py-3 font-mono text-xs'>
												{name}
											</td>
											<td className='border border-slate-200 px-4 py-3'>{provider}</td>
											<td className='border border-slate-200 px-4 py-3'>{purpose}</td>
											<td className='border border-slate-200 px-4 py-3 whitespace-nowrap'>
												{duration}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p>
							Google Analytics data is processed in accordance with Google&apos;s
							Privacy Policy. You can opt out of Google Analytics tracking at{" "}
							<Link
								href='https://tools.google.com/dlpage/gaoptout'
								className='text-primary underline'
							>
								tools.google.com/dlpage/gaoptout
							</Link>
							.
						</p>

						{/* 3.4 Marketing */}
						<p className='font-semibold text-secondary'>
							3.4 Marketing and Targeting Cookies
						</p>
						<p>
							These cookies may be set through our Platform by our advertising
							partners. They may be used to build a profile of your interests and
							show you relevant advertisements on other sites. They do not
							directly store personal information but are based on uniquely
							identifying your browser and internet device.
						</p>
						<p>We currently use marketing cookies for the following:</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-50'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Cookie / Tool
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Provider
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Purpose
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Duration
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										["_fbp", "Meta (Facebook)", "Tracks visits for advertising", "3 months"],
										["li_fat_id", "LinkedIn", "Tracks conversions from LinkedIn ads", "30 days"],
									].map(([name, provider, purpose, duration], i) => (
										<tr key={i} className={i % 2 === 1 ? "bg-slate-50/50" : ""}>
											<td className='border border-slate-200 px-4 py-3 font-mono text-xs'>
												{name}
											</td>
											<td className='border border-slate-200 px-4 py-3'>{provider}</td>
											<td className='border border-slate-200 px-4 py-3'>{purpose}</td>
											<td className='border border-slate-200 px-4 py-3 whitespace-nowrap'>
												{duration}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p>
							We only place marketing cookies where you have given your explicit
							consent.
						</p>
					</div>

					{/* 4. Your Cookie Choices */}
					<div id='manage' className='space-y-4'>
						<h3 className='text-2xl font-semibold'>4. Your Cookie Choices</h3>

						<p className='font-semibold text-secondary'>
							4.1 Cookie Consent Banner
						</p>
						<p>
							When you first visit our Platform, you will see a cookie consent
							banner. You can:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Accept all cookies</strong> &mdash; allow all categories
								of cookies
							</li>
							<li>
								<strong>Manage preferences</strong> &mdash; choose which
								categories to allow
							</li>
							<li>
								<strong>Reject non-essential cookies</strong> &mdash; allow only
								strictly necessary cookies
							</li>
						</ul>
						<p>
							You can change your preferences at any time by clicking{" "}
							<strong>&quot;Cookie Settings&quot;</strong> in the footer of our website.
						</p>

						<p className='font-semibold text-secondary'>4.2 Browser Settings</p>
						<p>
							You can also control cookies through your browser settings. Most
							browsers allow you to view and delete existing cookies, block
							cookies from specific websites, and block all third-party or
							first-party cookies entirely.
						</p>
						<p>
							Note that blocking all cookies will affect the functionality of our
							Platform and many other websites you use.
						</p>
						<p>Browser-specific instructions:</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>Chrome:</strong> Settings &rarr; Privacy and Security
								&rarr; Cookies
							</li>
							<li>
								<strong>Firefox:</strong> Settings &rarr; Privacy &amp; Security
								&rarr; Cookies and Site Data
							</li>
							<li>
								<strong>Safari:</strong> Preferences &rarr; Privacy &rarr; Manage
								Website Data
							</li>
							<li>
								<strong>Edge:</strong> Settings &rarr; Cookies and Site
								Permissions
							</li>
						</ul>

						<p className='font-semibold text-secondary'>4.3 Opt-Out Tools</p>
						<p>
							In addition to the above, you can opt out of interest-based
							advertising through:
						</p>
						<ul className='list-disc space-y-2 pl-5'>
							<li>
								<strong>UK opt-out:</strong>{" "}
								<Link
									href='https://www.youronlinechoices.com'
									className='text-primary underline'
								>
									www.youronlinechoices.com
								</Link>
							</li>
							<li>
								<strong>Google:</strong>{" "}
								<Link
									href='https://myaccount.google.com/data-and-privacy'
									className='text-primary underline'
								>
									myaccount.google.com/data-and-privacy
								</Link>
							</li>
							<li>
								<strong>Meta:</strong>{" "}
								<Link
									href='https://www.facebook.com/ads/preferences'
									className='text-primary underline'
								>
									www.facebook.com/ads/preferences
								</Link>
							</li>
						</ul>
					</div>

					{/* 5. Cookies and the Law */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>5. Cookies and the Law</h3>
						<p>
							Our use of cookies is governed by the{" "}
							<strong>
								Privacy and Electronic Communications Regulations 2003 (PECR)
							</strong>{" "}
							and the <strong>UK GDPR</strong>. Under PECR, we must obtain your
							consent before placing non-essential cookies on your device. We do
							not place analytics, functional, or marketing cookies without your
							consent.
						</p>
						<p>
							Strictly necessary cookies do not require consent as they are
							essential for the operation of the Platform.
						</p>
					</div>

					{/* 6. Third-Party Cookies */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>6. Third-Party Cookies</h3>
						<p>
							Some cookies on our Platform are placed by third-party service
							providers we work with. These providers have their own privacy and
							cookie policies. We encourage you to review their policies:
						</p>
						<div className='overflow-x-auto'>
							<table className='w-full border-collapse text-sm'>
								<thead>
									<tr className='bg-slate-50'>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Provider
										</th>
										<th className='border border-slate-200 px-4 py-3 text-left font-semibold text-secondary'>
											Privacy / Cookie Policy
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='border border-slate-200 px-4 py-3'>Google</td>
										<td className='border border-slate-200 px-4 py-3'>
											<Link
												href='https://policies.google.com/privacy'
												className='text-primary underline'
											>
												policies.google.com/privacy
											</Link>
										</td>
									</tr>
									<tr className='bg-slate-50/50'>
										<td className='border border-slate-200 px-4 py-3'>
											Meta (Facebook)
										</td>
										<td className='border border-slate-200 px-4 py-3'>
											<Link
												href='https://www.facebook.com/privacy/policy'
												className='text-primary underline'
											>
												www.facebook.com/privacy/policy
											</Link>
										</td>
									</tr>
									<tr>
										<td className='border border-slate-200 px-4 py-3'>LinkedIn</td>
										<td className='border border-slate-200 px-4 py-3'>
											<Link
												href='https://www.linkedin.com/legal/cookie-policy'
												className='text-primary underline'
											>
												www.linkedin.com/legal/cookie-policy
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<p>
							We are not responsible for the content or practices of any
							third-party websites or services.
						</p>
					</div>

					{/* 7. Do Not Track */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>7. Do Not Track</h3>
						<p>
							Some browsers include a &quot;Do Not Track&quot; (DNT) feature. Currently,
							there is no universally accepted standard for responding to DNT
							signals. We will update this policy if and when a standard is
							established.
						</p>
					</div>

					{/* 8. Changes */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>
							8. Changes to This Cookie Policy
						</h3>
						<p>
							We may update this Cookie Policy from time to time to reflect
							changes in the cookies we use or for other operational, legal, or
							regulatory reasons. Please revisit this page regularly to stay
							informed. The &quot;Last updated&quot; date at the top indicates when this
							policy was last revised.
						</p>
					</div>

					{/* 9. Contact Us */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-semibold'>9. Contact Us</h3>
						<p>
							If you have any questions about our use of cookies, please contact:
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

				</div>
			</div>
		</section>
	);
}
