import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import "../assets/css/homepage.css"
import ArrowRightGrayMain from "../assets/images/arrow-up-right-gray.svg"
import ArrowRightMain from "../assets/images/arrow-up-right.svg"
import BusinessImg from "../assets/images/homepage/new/_new.jpg"
import BusinessImg2 from "../assets/images/homepage/new/_new2.jpg"
import BusinessImg1 from "../assets/images/homepage/new/_new3.jpg"
import BusinessImg3 from "../assets/images/homepage/new/_new4.jpg"
import TopVideo from "../assets/images/homepage/new/comp.mp4"
import ArrTopLeft from "../assets/images/homepage/new/hero-arr-left.svg"
import ArrTopRight from "../assets/images/homepage/new/hero-arr-right.svg"
import LeftVideo from "../assets/images/homepage/new/left.mp4"
import LongImg from "../assets/images/homepage/new/long.png"
import Long1Img from "../assets/images/homepage/new/long_1.png"
import HeroImg from "../assets/images/homepage/new/rect.png"
import RightVideo from "../assets/images/homepage/new/right.mp4"
import PhoneImg from "../assets/images/homepage/phone.png"
import Footer from "../components/footer"
import Navigation from "../components/nav"
// import SingleImg from "../assets/images/homepage/new/single.jpg";
// import SingleImg from "../assets/images/homepage/new/vidyard.webp";
import SingleImg from "../assets/images/homepage/new/business.png"
import PaymentLink2Img from "../assets/images/homepage/new/finance.png"
import PaymentLinkImg from "../assets/images/homepage/new/payment.png"

import { Collapse } from "antd"

const Homepage = () => {
	const textRef = useRef([])

	const SwiperButtonPrev = ({ children }) => {
		const swiper = useSwiper()
		return (
			<a
				className="carousel-controller"
				onClick={() => swiper.slideNext()}>
				{children}
			</a>
		)
	}

	const SwiperButtonNext = ({ children }) => {
		const swiper = useSwiper()
		return (
			<a
				className="carousel-controller"
				onClick={() => swiper.slidePrev()}>
				{children}
			</a>
		)
	}

	const [currentDisp, setCurrentDisp] = useState(0)

	// gsap.registerPlugin(ScrollTrigger);

	// useEffect(() => {
	//     textRef.current.map(elem => {
	//         let tl = gsap.timeline({
	//             scrollTrigger: {
	//                 trigger: elem,
	//             }
	//         });
	//         tl.fromTo(
	//             elem,
	//             {
	//                 y: 30,
	//                 autoAlpha: 0,
	//                 opacity: 0
	//             },
	//             {
	//                 y: 0,
	//                 autoAlpha: 1,
	//                 duration: .8,
	//                 stagger: 0.3,
	//                 opacity: 1
	//             }
	//         );
	//     })
	// }, [])

	// const sections = gsap.utils.toArray()

	const pushElementToRef = ele => {
		textRef.current.push(ele)
	}

	let breakpoints = {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.1,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2.2,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 3.2,
			spaceBetween: 40,
		},
	}

	const [activeKey, setActiveKey] = useState("1")

	const handlePanelChanges = key => {
		if (key.length == 0) {
			return
		}
		setActiveKey(key)
	}
	const changeActiveDisp = () => {}

	return (
		<div>
			<Navigation />
			<div className="homepage">
				<div className="hero-section">
					<div className="cover-div">
						<div className="hero-content">
							<div className="grid- main-grid">
								<div className="hero-text">
									<h2
										ref={pushElementToRef}
										className="desktop-only">
										Versatile payment solutions designed to fit your business needs.
									</h2>
									<h2
										ref={pushElementToRef}
										className="mobile-only">
										Versatile payment solutions designed to fit your business needs.
									</h2>
									<div className="mt_1">
										<p
											ref={pushElementToRef}
											className="millions">
											Payscribe offers a robust payment infrastructure enabling businesses to securely accept payments, issue USD/NGN cards for seamless cross-border transactions, and provide comprehensive financial services to their customers.
										</p>
									</div>
									<div className="button-flex mt_3">
										<a
											className="btn btn-main"
											href="https://app.payscribe.ng/auth/create">
											Open a Free Account{" "}
											<img
												src={ArrowRightGrayMain}
												alt="arrow right"
											/>
										</a>
										<a
											className="btn btn-white"
											href="https://app.payscribe.ng/auth/create">
											Reach out to us{" "}
											<img
												src={ArrowRightMain}
												alt="arrow right"
											/>
										</a>
									</div>
									{/* <div className="companies-box">
                                        <p ref={pushElementToRef}>Trusted by over 20,000 businesses</p>
                                        <div className="companies">
                                            <img src={_1} alt="" />
                                            <img src={_2} alt="" />
                                            <img src={_3} alt="" />
                                            <img src={_4} alt="" />
                                            <img src={_1} alt="" />
                                        </div>
                                    </div> */}
								</div>
								<div className="hero-img-abs">
									<div className="hero-img-cover">
										<img
											src={HeroImg}
											className="hero"
											alt="hero sect"
										/>
										<div className="arr-right">
											<img
												src={ArrTopRight}
												className="hero"
												alt="hero sect"
											/>
										</div>
										<div className="arr-left">
											<img
												src={ArrTopLeft}
												className="hero"
												alt="hero sect"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hero-props-main mt_5">
					<div className="cover-div">
						<div className="top-card-tile">
							{/* <h5 className="top-tag">What we do</h5> */}
							<h2
								ref={pushElementToRef}
								className="desktop-only">
								Comprehensive Financial <br /> Tools for All Users
							</h2>
							<h2
								ref={pushElementToRef}
								className="mobile-only">
								Comprehensive Financial Tools for All Users
							</h2>
						</div>
						{/* <div>
                            <div className="box-grid grid-2">
                                <div className="box light">
                                    <div className="text-bar">
                                        <div className="bill-tag">
                                            <h5 className="top-tag color">For Freelancers</h5>
                                        </div>
                                        <h3>Simplify Projects and Payments</h3>
                                        <p>Effortlessly manage and track your projects, payments, and expenses, giving you the freedom
                                            to concentrate on honing your skills and expanding your business.</p>
                                    </div>
                                </div>
                                <div className="box dark-blue">
                                    <div className="text-bar">
                                        <div className="bill-tag">
                                            <h5 className="top-tag color">For Freelancers</h5>
                                        </div>
                                        <h3>Simplify Projects and Payments</h3>
                                        <p>Effortlessly manage and track your projects, payments, and expenses, giving you the freedom
                                            to concentrate on honing your skills and expanding your business.</p>
                                    </div>
                                </div>
                                <div className="box light-blue">
                                    <div className="text-bar">
                                        <div className="bill-tag">
                                            <h5 className="top-tag color">For Freelancers</h5>
                                        </div>
                                        <h3>Stay On Top of Your Game.</h3>
                                        <div>
                                            <p ref={pushElementToRef} className="millions">
                                                Effortlessly manage and track your projects, payments, and expenses, giving you the freedom to
                                                concentrate on honing your skills and expanding your business.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box black">
                                    <div className="text-bar">
                                        <div className="bill-tag">
                                            <h5 className="top-tag color">For Individuals</h5>
                                        </div>
                                        <h3>Take Control of Your Finances.</h3>
                                        <div>
                                            <p ref={pushElementToRef} className="millions">
                                                Handle your finances effortlessly. Payscribe simplifies money management, so you
                                                can handle your bills and payments with ease and focus more on what you enjoy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
						<div className="grid-2-bia top">
							<div className="hero-block-main main-story">
								<div className="">
									<div className="grid-2">
										<div className="inner-grid">
											<div>
												<div className="inner-box-padding">
													<h5 className="top-tag white">For Businesses</h5>
													<h3 className="desktop-only">
														Fueling Global Growth with <br /> Innovative Payments Solutions.
													</h3>
													<h3 className="mobile-only">Fueling Global Growth with Innovative Payments Solutions.</h3>
													<div>
														<p>At our core, we are dedicated to powering global growth through innovative solutions that simplify transactions, reduce costs, and increase financial inclusion. Our commitment is to democratize financial services, ensuring that everyone has the opportunity to participate in the global economy.</p>
														<a
															href="https://app.payscribe.ng/auth/create"
															className="btn btn-white">
															Start accepting payments
														</a>
													</div>
												</div>
											</div>
										</div>
										<div>
											<video
												src={TopVideo}
												playsInline
												loop
												autoPlay
												muted={true}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="grid-2 sec-content mt_3">
							<div className="hero-block-main light">
								<div className="block-video">
									<video
										src={LeftVideo}
										playsInline
										loop
										autoPlay
										muted={true}
									/>
								</div>
								<div className="mt_3 inner-box-padding">
									<h5 className="top-tag color">For Freelancers</h5>
									<h3>Stay On Top of Your Game.</h3>
									<div>
										<p
											ref={pushElementToRef}
											className="millions">
											Effortlessly manage and track your projects, payments, and expenses, giving you the freedom to concentrate on honing your skills and expanding your business.
										</p>
									</div>
								</div>
							</div>
							<div className="hero-block-main dark">
								<div className="block-video">
									<video
										src={RightVideo}
										playsInline
										loop
										autoPlay
										muted={true}
									/>
								</div>
								<div className="mt_3 inner-box-padding">
									<h5 className="top-tag color">For Individuals</h5>
									<h3>Take Control of Your Finances.</h3>
									<div>
										<p
											ref={pushElementToRef}
											className="millions">
											Handle your finances effortlessly. Payscribe simplifies money management, so you can handle your bills and payments with ease and focus more on what you enjoy.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-black sec-bg mt_5">
					<div className="why-payscribe">
						<div className="cover-div">
							<div className="center-div">
								<p className="tag">Effortless Financial Integration</p>
								<h3>Streamline Your Financial Services with Ease</h3>
								{/* <h3>One hub for immigration, <br /> payroll, and HR</h3> */}
							</div>
							<div className="desktop-only">
								<div className="payscribe-display-control mt_4">
									<ul>
										<li
											onClick={() => setCurrentDisp(0)}
											className={`${currentDisp === 0 ? "active" : ""}`}>
											Accounts and Wallets
										</li>
										<li
											onClick={() => setCurrentDisp(1)}
											className={`${currentDisp === 1 ? "active" : ""}`}>
											Issue USD/NGN Cards
										</li>
										<li
											onClick={() => setCurrentDisp(2)}
											className={`${currentDisp === 2 ? "active" : ""}`}>
											Savings & Investment
										</li>
										<li
											onClick={() => setCurrentDisp(3)}
											className={`${currentDisp === 3 ? "active" : ""}`}>
											Bill Payments
										</li>
									</ul>
								</div>
								<div className="payscribe-display-box mt_3">
									<div className="payscribe-display-summary">
										<div className={`${currentDisp === 0 ? "active" : ""} summary-story`}>
											<h4>
												Build seamless <br /> accounts and wallets <br /> with half the effort.
											</h4>
											<p>Effortlessly integrate account and wallet services into your fintech platform, allowing your users to manage their finances easily and securely. Our robust API simplifies the process, reducing development time and effort.</p>
											<a
												href="https://app.payscribe.ng/auth/create"
												className="btn btn-border-main">
												Get Started <ion-icon name="arrow-forward-circle-outline"></ion-icon>
											</a>
										</div>
										<div className={`${currentDisp === 1 ? "active" : ""} summary-story`}>
											<h4>
												Expand financial <br /> reach with effortless <br /> USD/NGN card issuance
											</h4>
											<p>Enhance your fintech offerings with our seamless USD/NGN card issuance. Easily provide your users with cards for both international and local transactions, all through a straightforward setup and management process.</p>
											<a
												href="https://app.payscribe.ng/auth/create"
												className="btn btn-border-main">
												Get Started <ion-icon name="arrow-forward-circle-outline"></ion-icon>
											</a>
										</div>
										<div className={`${currentDisp === 2 ? "active" : ""} summary-story`}>
											<h4>
												Boost savings <br /> and investments <br /> with minimal work
											</h4>
											<p>Enhance your fintech services by offering effortless savings and investment solutions. Our platform simplifies the process, allowing users to manage and grow their funds with minimal effort. This streamlined approach enables you to provide robust financial tools without complex implementation.</p>
											<a
												href="https://app.payscribe.ng/auth/create"
												className="btn btn-border-main">
												Get Started <ion-icon name="arrow-forward-circle-outline"></ion-icon>
											</a>
										</div>
										<div className={`${currentDisp === 3 ? "active" : ""} summary-story`}>
											<h4>
												Simplify bill <br /> payments with ease
											</h4>
											<p>Streamline bill payments effortlessly with our platform. Enable your users to manage and pay their bills with minimal hassle, offering a smooth and efficient solution that integrates seamlessly into your services.</p>
											<a
												href="https://app.payscribe.ng/auth/create"
												className="btn btn-border-main">
												Get Started <ion-icon name="arrow-forward-circle-outline"></ion-icon>
											</a>
										</div>
									</div>
									<div className="payscribe-display-main">
										{currentDisp === 0 ? (
											<img
												src={BusinessImg}
												className="business-img"
												alt="business"
											/>
										) : currentDisp === 1 ? (
											<img
												src={BusinessImg1}
												className="business-img"
												alt="business"
											/>
										) : currentDisp === 2 ? (
											<img
												src={BusinessImg2}
												className="business-img"
												alt="business"
											/>
										) : (
											<img
												src={BusinessImg3}
												className="business-img"
												alt="business"
											/>
										)}
									</div>
								</div>
							</div>
							<div className="mobile-only">
								<div className="payscribe-display-mobile mt_8">
									<div className="">
										<Collapse
											ghost
											expandIconPosition="right"
											accordion
											activeKey={activeKey}
											onChange={handlePanelChanges}>
											<Collapse.Panel
												header="Accounts and Wallets"
												key="1">
												<h4>Expand financial reach with effortless USD/NGN card issuance</h4>
												<p>Put an end to long email chains and misplaced documents. Get all relevant information in one place—including essential documents, case details, and costs—and easily book a call for speedy assistance.</p>
												<a
													href="https://app.payscribe.ng/auth/create"
													className="btn btn-gray-border">
													Get Started
												</a>
												<img
													src={BusinessImg}
													className="business-img"
													alt="business"
												/>
											</Collapse.Panel>
											<Collapse.Panel
												header="Issue USD/NGN Cards"
												key="2">
												<h4>Expand financial reach with effortless USD/NGN card issuance</h4>
												<p>Enhance your fintech offerings with our seamless USD/NGN card issuance. Easily provide your users with cards for both international and local transactions, all through a straightforward setup and management process.</p>
												<a
													href="https://app.payscribe.ng/auth/create"
													className="btn btn-gray-border">
													Get Started
												</a>
												<img
													src={BusinessImg1}
													className="business-img"
													alt="business"
												/>
											</Collapse.Panel>
											<Collapse.Panel
												header="Savings & Investment"
												key="3">
												<h4>Boost savings and investments with minimal work</h4>
												<p>Enhance your fintech services by offering effortless savings and investment solutions. Our platform simplifies the process, allowing users to manage and grow their funds with minimal effort. This streamlined approach enables you to provide robust financial tools without complex implementation.</p>
												<a
													href="https://app.payscribe.ng/auth/create"
													className="btn btn-gray-border">
													Get Started
												</a>
												<img
													src={BusinessImg2}
													className="business-img"
													alt="business"
												/>
											</Collapse.Panel>
											<Collapse.Panel
												header="Bill Payments"
												key="4">
												<h4>Simplify bill payments with ease</h4>
												<p>Streamline bill payments effortlessly with our platform. Enable your users to manage and pay their bills with minimal hassle, offering a smooth and efficient solution that integrates seamlessly into your services.</p>
												<a
													href="https://app.payscribe.ng/auth/create"
													className="btn btn-gray-border">
													Get Started
												</a>
												<img
													src={BusinessImg3}
													className="business-img"
													alt="business"
												/>
											</Collapse.Panel>
										</Collapse>
										{/* <div className="text-bar">
                                                <div className="payscribe-display-mobile-header">
                                                    <h3>Accounts and Wallets</h3>
                                                </div>
                                                <div>
                                                    <h4>Expand financial reach with effortless USD/NGN card issuance</h4>
                                                    <p>Put an end to long email chains and misplaced documents. Get all relevant information in one
                                                        place—including essential documents, case details, and costs—and easily book a call for speedy assistance.</p>
                                                    <a className="btn btn-gray-border">Get Started</a>
                                                </div>
                                            </div> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="props-grid-display mt_5">
					<div className="cover-div">
						<div className="grid-2">
							<div>
								<div className="grid-top-disp">
									<div>
										<img
											src={PaymentLinkImg}
											alt="payment links"
											className="reports"
										/>
									</div>
								</div>
							</div>
							<div>
								<p className="text-top-tag">GLOBAL PAYMENT SOLUTIONS</p>
								<h4 className="sect-title">Simplify Payments with Versatile Payment Links Usable Anywhere in the World</h4>
								<p ref={pushElementToRef}>Freelancers and business professionals can effortlessly create payment links and share them with clients for easy transactions. These links offer multiple payment options and can be used globally. Here's what you can expect:</p>
								<div className="mt_5">
									<ul>
										<li ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Free Payment Links
										</li>
										<li ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Multiple Payment Options
										</li>
										<li ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Global Usability
										</li>
										<li ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Streamlined Transactions
										</li>
										<li
											className="last-two"
											ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Professional Appearance
										</li>
										<li
											className="last-two"
											ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Increased Efficiency
										</li>
									</ul>
								</div>
								<div className="mt_10">
									<a
										style={{ width: "max-content" }}
										href="https://app.payscribe.ng/auth/create"
										className="btn btn-main">
										Create an Account For Free
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hero-company-disp page-inline-desc product py_5 mt_5">
					<div className="cover-div">
						<div className="grid-2 inverse">
							<div>
								<p className="text-top-tag">EASY FINANCIAL MANAGEMENT</p>
								<h4 className="sect-title">Gain Insight into Your Finances with Comprehensive Expense Tracking and Detailed Reports</h4>
								<p ref={pushElementToRef}>Take control of your finances with our advanced tracking and reporting tools. Understand your spending habits and make informed decisions to optimize your budget. Here’s how our features can help you:</p>
								<div className="mt_5">
									<ul>
										<li ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Track Your Expenses
										</li>
										<li ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Manage Your Spending
										</li>
										<li ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Detailed Reports
										</li>
										<li ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Budget Optimization
										</li>
										<li
											className="last-two"
											ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Financial Clarity
										</li>
										<li
											className="last-two"
											ref={pushElementToRef}>
											<ion-icon name="checkmark-done-circle-outline"></ion-icon> Audit Preparation
										</li>
									</ul>
								</div>
								<div className="mt_10">
									<a
										style={{ width: "max-content" }}
										href="https://app.payscribe.ng/auth/create"
										className="btn btn-main">
										Create an Account For Free
									</a>
								</div>
							</div>
							<div>
								<img
									src={PaymentLink2Img}
									alt="payment links"
									className="reports"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="hero-company-extras mt_5">
					<div className="cover-div">
						<div className="sect-intr">
							<div
								className="grid-2"
								style={{ alignItems: "center" }}>
								<div className="">
									<h3 className="sect-title desktop-only">
										Why Businesses And
										<br /> Consumers Love Payscribe?
									</h3>
									<h3 className="sect-title mobile-only">Why Businesses And Consumers Love Payscribe?</h3>
								</div>
								<div>
									<p ref={pushElementToRef}>Payscribe simplifies financial management, providing intuitive tools and top-notch support for businesses and consumers alike. Our platform ensures secure, efficient, and hassle-free financial transactions. Payscribe simplifies financial management, providing intuitive tools.</p>
								</div>
							</div>
						</div>
						<div className="grid-4 mt_3">
							<div className="block-border">
								<div className="icon-block-bg">
									<ion-icon name="alarm-outline"></ion-icon>
								</div>
								<h5>Round-the-clock customer support, ready to assist</h5>
								<p ref={pushElementToRef}>Experience tailored assistance with Payscribe's dedicated team of account managers, providing expert support.</p>
							</div>
							<div className="block-border">
								<div className="icon-block-bg">
									<ion-icon name="extension-puzzle-outline"></ion-icon>
								</div>
								<h5>Streamlined development process with our unified gateway</h5>
								<p ref={pushElementToRef}>Simplify your payment infrastructure with our single API integration, designed to streamline your payment processing capabilities.</p>
							</div>
							<div className="block-border">
								<div className="icon-block-bg">
									<ion-icon name="shapes-outline"></ion-icon>
								</div>
								<h5>Gain Valuable Payment Insights Right at Your Fingertips</h5>
								<p ref={pushElementToRef}>Unlock a complete view of your business performance through our user-friendly boards and cutting-edge real-time analytics.</p>
							</div>
							<div className="block-border">
								<div className="icon-block-bg">
									<ion-icon name="pricetags-outline"></ion-icon>
								</div>
								<h5>No hidden fees – clear and transparent financial solutions</h5>
								<p ref={pushElementToRef}>Experience complete transparency with our financial solutions — no hidden charges, just simple straightforward and clear pricing.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="join-us">
						<div className="grid-2">
							<div>
								<h3>Start Building Today</h3>
								<p>Sign up in seconds and start processing payments right away! Alternatively, our experts are here to help you craft a tailored payment solution that perfectly suits your business needs - just reach out to us!.</p>
								<div className="flex-div">
									<a
										className="btn btn-accent"
										href="https://app.payscribe.ng/auth/create">
										Start Building{" "}
										<img
											src={ArrowRightMain}
											alt="arrow right"
										/>
									</a>
									<a
										className="btn btn-gray-border"
										href="https://app.payscribe.ng/auth/create">
										Contact Sales{" "}
										<img
											src={ArrowRightGrayMain}
											alt="arrow right"
										/>
									</a>
								</div>
							</div>
							<div></div>
							<div>
								<div className="phone-block">
									<img
										src={PhoneImg}
										className="phone"
										alt="Phone"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Homepage
