import "../assets/css/homepage.css";

import React, { useRef } from "react";

import Navigation from "../components/nav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

import PhoneImg from "../assets/images/homepage/phone.png";

import ArrowRightMain from "../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../assets/images/arrow-up-right-gray.svg";

import HeroImg from "../assets/images/homepage/new/rect.png";
import ArrTopRight from "../assets/images/homepage/new/hero-arr-right.svg";
import ArrTopLeft from "../assets/images/homepage/new/hero-arr-left.svg";

import TopVideo from "../assets/images/homepage/new/comp.mp4";
import RightVideo from "../assets/images/homepage/new/right.mp4";
import LeftVideo from "../assets/images/homepage/new/left.mp4";

import LongImg from "../assets/images/homepage/new/long.png";
import Long1Img from "../assets/images/homepage/new/long_1.png";

const Homepage = () => {

    const textRef = useRef([]);

    const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return <button className="carousel-controller" onClick={() => swiper.slideNext()}>{children}</button>;
    };

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <button className="carousel-controller" onClick={() => swiper.slidePrev()}>{children}</button>;
    };

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
        textRef.current.push(ele);
    }

    let breakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3.2,
            spaceBetween: 40
        }
    }

    return (
        <div>
            <Navigation />
            <div className="homepage">
                <div className="hero-section">
                    <div className="cover-div">
                        <div className="hero-content">
                            <div className="grid- main-grid">
                                <div className="hero-text">
                                    <h2 ref={pushElementToRef} className="desktop-only">Versatile payment solutions designed to fit your business needs.</h2>
                                    <h2 ref={pushElementToRef} className="mobile-only">Versatile payment solutions designed to fit your business needs.</h2>
                                    <div className="mt_1">
                                        <p ref={pushElementToRef} className="millions">
                                            Payscribe offers a robust payment infrastructure enabling businesses to securely accept payments, issue
                                            USD/NGN cards for seamless cross-border transactions, and provide comprehensive financial services to their customers.
                                        </p>
                                    </div>
                                    <div className="button-flex mt_3">
                                        <Link className="btn btn-main" to="/">Open a Free Account <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
                                        <Link className="btn btn-white" to="/">Reach out to us <img src={ArrowRightMain} alt="arrow right" /></Link>
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
                                <div>
                                    <div className="hero-img-cover">
                                        <img src={HeroImg} className="hero" alt="hero sect" />
                                        <div className="arr-right">
                                            <img src={ArrTopRight} className="hero" alt="hero sect" />
                                        </div>
                                        <div className="arr-left">
                                            <img src={ArrTopLeft} className="hero" alt="hero sect" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-props-main mt_5">
                    <div className="container">
                        <div className="top-card-tile">
                            {/* <h5 className="top-tag">What we do</h5> */}
                            <h2 ref={pushElementToRef} className="desktop-only">Flexible and Programmable <br /> Financial Primitives</h2>
                            <h2 ref={pushElementToRef} className="mobile-only">Flexible and Programmable Financial Primitives</h2>
                        </div>
                        <div style={{ display: "none" }}>
                            <div className="box-grid grid-2">
                                <div className="box light"></div>
                                <div className="box dark-blue"></div>
                                <div className="box light-blue"></div>
                                <div className="box black"></div>
                            </div>
                        </div>
                        <div className="grid-2-bia top">
                            <div className="hero-block-main main-story">
                                <div className="">
                                    <div className="grid-2">
                                        <div className="inner-grid">
                                            <div>
                                                <div className="inner-box-padding">
                                                    <h5 className="top-tag white">For Businesses</h5>
                                                    <h3 className="desktop-only">Fueling Global Growth with <br /> Innovative Payments Solutions.</h3>
                                                    <h3 className="mobile-only">Fueling Global Growth with Innovative Payments Solutions.</h3>
                                                    <div>
                                                        <p>At our core, we are dedicated to powering global growth through innovative
                                                            solutions that simplify transactions, reduce costs, and increase financial inclusion. Our
                                                            commitment is to democratize financial services, ensuring that everyone has the opportunity
                                                            to participate in the global economy.</p>
                                                        <Link to="" className="btn btn-white">Start accepting payments</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <video src={TopVideo} loop autoPlay muted={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-2 sec-content mt_3">
                            <div className="hero-block-main light">
                                <div className="block-video">
                                    <video src={LeftVideo} loop autoPlay muted={true} />
                                </div>
                                <div className="mt_3 inner-box-padding">
                                    <h5 className="top-tag color">For Freelancers</h5>
                                    <h3>Stay On Top of Your Game.</h3>
                                    <div>
                                        <p ref={pushElementToRef} className="millions">
                                            Effortlessly manage and track your projects, payments, and expenses, giving you the freedom to
                                            concentrate on honing your skills and expanding your business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-block-main dark">
                                <div className="block-video">
                                    <video src={RightVideo} loop autoPlay muted={true} />
                                </div>
                                <div className="mt_3 inner-box-padding">
                                    <h5 className="top-tag color">For Individuals</h5>
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
                    </div>
                </div>
                <div className="page-inline-desc hero-company-disp py_5 mt_5">
                    <div className="cover-div">
                        <div className="grid-2">
                            <div>
                                <div className="img-block">
                                    {/* <img src={BusinessImgg} className="internal" alt="" /> */}
                                </div>
                            </div>
                            <div>
                                <p className="text-top-tag">OUR PRODUCT OFFERINGS</p>
                                <h4 className="sect-title desktop-only">Full Comprehensive Financial <br /> Solutions for You</h4>
                                <h4 className="sect-title mobile-only">Full Comprehensive Financial Solutions for You</h4>
                                <p ref={pushElementToRef}>Payscribe offers a wide range of financial solutions tailored to your needs. From
                                    budgeting and saving to investing and managing expenses, we provide the tools and support necessary to help you
                                    achieve financial success. Whether you’re just starting out or looking to optimize your finances, we’re here to
                                    assist you every step of the way.</p>
                                <div className="mt_5">
                                    <ul>
                                        <li ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> Send / Receive Payments</li>
                                        <li ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> USD/NGN cards for transactions</li>
                                        <li ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bill Managements</li>
                                        <li ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> Airtime to Cash</li>
                                        <li className="last-two" ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> Track your Expenses</li>
                                        <li className="last-two" ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> Cross-platform support</li>
                                    </ul>
                                </div>
                                <div className="mt_10">
                                    <Link style={{ width: "max-content" }} to="" className="btn btn-main">Create an Account For Free</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products-list py_5">
                    <div className="cover-div">
                        <div className="grid-2-bias">
                            <div>
                                <div className="product-story">
                                    <h4 className="sect-title">Everything you need <br /> and nothing you don't</h4>
                                    <p className="body-text">Payscribe simplifies financial management, providing intuitive tools and top-notch support for businesses and
                                        consumers alike. Our platform ensures secure, efficient, and hassle-free financial transactions.</p>
                                    <Link className="btn btn-main" to="">Go To Documentation</Link>
                                </div>
                            </div>
                            <div>
                                <div className="box-disp">
                                    <div className="grid-2">
                                        <div className="disp-list">
                                            <div className="icon-blk">
                                                <ion-icon name="swap-horizontal-outline"></ion-icon>
                                            </div>
                                            <div className="text-blk">
                                                <h4 className="main-text">Send and Accept Payments</h4>
                                                <p>Send and accept payments with ease, streamlining your transaction processes and enhancing financial efficiency.</p>
                                            </div>
                                        </div>
                                        <div className="disp-list">
                                            <div className="icon-blk">
                                                <ion-icon name="card-outline"></ion-icon>
                                            </div>
                                            <div className="text-blk">
                                                <h4 className="main-text">Issue NGN/USD Cards</h4>
                                                <p>Quickly issue NGN and USD cards, offering flexible options for both local and international transactions.</p>
                                            </div>
                                        </div>
                                        <div className="disp-list">
                                            <div className="icon-blk">
                                                <ion-icon name="today-outline"></ion-icon>
                                            </div>
                                            <div className="text-blk">
                                                <h4 className="main-text">Manage Savings and Loans</h4>
                                                <p>Our API helps you efficiently manage savings and loans, streamlining your financial operations.</p>
                                            </div>
                                        </div>
                                        <div className="disp-list">
                                            <div className="icon-blk">
                                                <ion-icon name="ticket-outline"></ion-icon>
                                            </div>
                                            <div className="text-blk">
                                                <h4 className="main-text">Handle Event Ticketing</h4>
                                                <p>Manage event ticketing effortlessly, simplifying the process of issuing and tracking tickets for your events.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-company-disp page-inline-desc product py_5">
                    <div className="cover-div">
                        <div className="grid-2">
                            <div>
                                <div className="img-block">
                                    {/* <img src={BusinessImgg} className="internal" alt="" /> */}
                                </div>
                            </div>
                            <div>
                                <p className="text-top-tag">OUR PRODUCT OFFERINGS</p>
                                <h4 className="sect-title">Full Comprehensive Financial <br /> Solutions for You</h4>
                                <p ref={pushElementToRef}>Payscribe offers a wide range of financial solutions tailored to your needs. From
                                    budgeting and saving to investing and managing expenses, we provide the tools and support necessary to help you
                                    achieve financial success. Whether you’re just starting out or looking to optimize your finances, we’re here to
                                    assist you every step of the way.</p>
                                <div className="mt_5">
                                    <ul>
                                        <li ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> Send / Receive Payments</li>
                                        <li ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> USD/NGN cards for transactions</li>
                                        <li ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bill Managements</li>
                                        <li ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> Airtime to Cash</li>
                                        <li className="last-two" ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> Track your Expenses</li>
                                        <li className="last-two" ref={pushElementToRef}><ion-icon name="checkmark-done-circle-outline"></ion-icon> Cross-platform support</li>
                                    </ul>
                                </div>
                                <div className="mt_10">
                                    <Link style={{ width: "max-content" }} to="" className="btn btn-main">Create an Account For Free</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <>
                    {/* <div className="page-sect">
                <div className="cover-div py_66">
                    <div className="grid-2">
                        <div className="width-50">
                            <p className="white-tag">Banking for Builders</p>
                            <h4 className="sect-title">Everything you need and nothing you don't</h4>
                            <div className="mt_1">
                                <p className="body-text">Payscribe simplifies financial management, providing intuitive tools and top-notch support for businesses and
                                    consumers alike. Our platform ensures secure, efficient, and hassle-free financial transactions.</p>
                            </div>
                            <div className="mt_5">
                                <p className="body-text">Payscribe simplifies financial management, providing intuitive tools and top-notch support for businesses and
                                    consumers alike. Our platform ensures secure, efficient, and hassle-free financial transactions.</p>
                            </div>
                            <div className="mt_5">
                                <ul>
                                    <li className="list-text"><ion-icon name="swap-horizontal-outline"></ion-icon> Issue NGN/USD Cards</li>
                                    <li className="list-text"><ion-icon name="swap-horizontal-outline"></ion-icon> Send and Accept Payments</li>
                                    <li className="list-text"><ion-icon name="swap-horizontal-outline"></ion-icon> Bill Managements</li>
                                    <li className="list-text"><ion-icon name="swap-horizontal-outline"></ion-icon> Handle Event Ticketing</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="grid-2">
                        <div>
                        </div>
                        <div className="width-5">
                            <p className="white-tag">Banking for Builders</p>
                            <h4 className="sect-title">Everything you need and nothing you don't</h4>
                            <div className="mt_1">
                                <p className="body-text">Payscribe simplifies financial management, providing intuitive tools and top-notch support for businesses and
                                    consumers alike. Our platform ensures secure, efficient, and hassle-free financial transactions.</p>
                            </div>
                            <div className="mt_5">
                                <p className="body-text">Payscribe simplifies financial management, providing intuitive tools and top-notch support for businesses and
                                    consumers alike. Our platform ensures secure, efficient, and hassle-free financial transactions.</p>
                            </div>
                            <div className="mt_5">
                                <ul>
                                    <li className="list-text"><ion-icon name="swap-horizontal-outline"></ion-icon> Issue NGN/USD Cards</li>
                                    <li className="list-text"><ion-icon name="swap-horizontal-outline"></ion-icon> Send and Accept Payments</li>
                                    <li className="list-text"><ion-icon name="swap-horizontal-outline"></ion-icon> Bill Managements</li>
                                    <li className="list-text"><ion-icon name="swap-horizontal-outline"></ion-icon> Handle Event Ticketing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                </>
                <div className="hero-company-extras mt_5">
                    <div className="cover-div">
                        <div className="sect-intro">
                            <div className="">
                                <h3 className="sect-title desktop-only">Why Businesses And<br /> Consumers Love Payscribe?</h3>
                                <h3 className="sect-title mobile-only">Why Businesses And Consumers Love Payscribe?</h3>
                                <p ref={pushElementToRef}>Payscribe simplifies financial management, providing intuitive tools and top-notch support for businesses and consumers
                                    alike. Our platform ensures secure, efficient, and hassle-free financial transactions.</p>
                            </div>
                        </div>
                        <div className="grid-4 mt_3">
                            <div className="block-border">
                                <div className="icon-block-bg">
                                    <ion-icon name="alarm-outline"></ion-icon>
                                </div>
                                <h5>Round-the-clock customer support, ready to assist you anytime</h5>
                                <p ref={pushElementToRef}>Experience tailored assistance with Payscribe's dedicated team of account managers, providing
                                    expert technical support and personalized help.</p>
                            </div>
                            <div className="block-border">
                                <div className="icon-block-bg">
                                    <ion-icon name="extension-puzzle-outline"></ion-icon>
                                </div>
                                <h5>Streamlined development process with our unified gateway</h5>
                                <p ref={pushElementToRef}>Simplify your payment infrastructure with our single API integration, designed to streamline your
                                    payment processing capabilities.</p>
                            </div>
                            <div className="block-border">
                                <div className="icon-block-bg">
                                    <ion-icon name="shapes-outline"></ion-icon>
                                </div>
                                <h5>Gain Valuable Payment Insights Right at Your Fingertips</h5>
                                <p ref={pushElementToRef}>Unlock a complete view of your business performance through our user-friendly boards
                                    and cutting-edge real-time analytics.</p>
                            </div>
                            <div className="block-border">
                                <div className="icon-block-bg">
                                    <ion-icon name="pricetags-outline"></ion-icon>
                                </div>
                                <h5>No hidden fees – clear and transparent financial solutions</h5>
                                <p ref={pushElementToRef}>Experience complete transparency with our financial solutions — no hidden charges, just simple
                                    straightforward and clear pricing.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="join-us">
                    <div className="grid-2">
                        <div>
                            <h3>Start Building Today</h3>
                            <p>Sign up in seconds and start processing payments right away! Alternatively, our
                                experts are here to help you craft a tailored payment solution that perfectly suits your
                                business needs - just reach out to us!.</p>
                            <div className="flex-div">
                                <Link className="btn btn-accent" to="">Start Building <img src={ArrowRightMain} alt="arrow right" /></Link>
                                <Link className="btn btn-gray-border" to="">Contact Sales <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div>
                            <div className="phone-block">
                                <img src={PhoneImg} className="phone" alt="Phone" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;