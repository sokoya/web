import React, { useState } from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Controller, EffectFade } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-fade";

import _1 from "../assets/images/homepage/new/deel.png";
import _1Svg from "../assets/images/homepage/new/deel.svg";

import DealImg from "../assets/images/homepage/new/deel.jpg";
import CardDealImg from "../assets/images/homepage/new/card_deel.png";
import CardDealImg1 from "../assets/images/homepage/new/card_deel1.png";
import CardDealImg2 from "../assets/images/homepage/new/card_deel2.png";
import CardDealImg3 from "../assets/images/homepage/new/card_deel3.png";
import CardDealImg4 from "../assets/images/homepage/new/card_deel4.png";

import DeelImg from "../assets/images/homepage/new/testimonial/deel.png";

import ArrowRightMain from "../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../assets/images/arrow-up-right-gray.svg";

import BusinessImg from "../assets/images/homepage/new/immigration.png";

import PhoneImg from "../assets/images/homepage/phone.png";
import SolutionImg from "../assets/images/homepage/new/solution.webp";

import { Link } from "react-router-dom";
import { Collapse, Divider, Rate } from "antd";

const BusinessPage = () => {

    const [currentDisp, setCurrentDisp] = useState(0);
    const [activeKey, setActiveKey] = useState("1");

    const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return <button className="carousel-controller" onClick={() => swiper.slideNext()}>{children}</button>;
    };

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <button className="carousel-controller" onClick={() => swiper.slidePrev()}>{children}</button>;
    };

    const handlePanelChanges = key => {
        if (key.length == 0) {
            return;
        }
        setActiveKey(key)
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
        <div className="businesses">
            <div className="product-page">
                <Navigation />
                <div className="airtime-hero">
                    <div className="airtime-hero-text">
                        <div className="text-bar">
                            <h2>Providing global teams with equity has never been simpler</h2>
                            <p>Easily offer equity to +110 countries compliantly. Deel simplifies taxes reporting, automates
                                admin, and oversees all compensation in one place.</p>
                        </div>
                        <div className="button-flex mt_3">
                            <Link className="btn btn-main" to="/">Open a Free Account <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
                            <Link className="btn btn-white" to="/">Reach out to us <img src={ArrowRightMain} alt="arrow right" /></Link>
                        </div>
                    </div>
                    <div className="hero-gradient-bar"></div>
                </div>
                <div className="business-prop mt_5">
                    <div className="cover-div">
                        <div className="business-props-summary">
                            <div>
                                <h3>$10 billion strong: Deel leads the industry in global payroll payments</h3>
                                <p>Deel HR automates every aspect of HR, while bringing all of your employee data from around the world into a single
                                    global HRIS. We compliantly localize everything—from fields and documents to currencies—based on work location.</p>
                                <Link className="btn btn-main" to="">Reach out to us</Link>
                            </div>
                        </div>
                        <div className="grid-4">
                            <div>
                                <img src={DeelImg} alt="" />
                                <p>Results in 15 minutes </p>
                            </div>
                            <div>
                                <img src={DeelImg} alt="" />
                                <p>Results in 15 minutes </p>
                            </div>
                            <div>
                                <img src={DeelImg} alt="" />
                                <p>Results in 15 minutes </p>
                            </div>
                            <div>
                                <img src={DeelImg} alt="" />
                                <p>Results in 15 minutes </p>
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
                                        <li onClick={() => setCurrentDisp(0)} className={`${currentDisp === 0 ? "active" : ""}`}>Accounts and Wallets</li>
                                        <li onClick={() => setCurrentDisp(1)} className={`${currentDisp === 1 ? "active" : ""}`}>Issue USD/NGN Cards</li>
                                        <li onClick={() => setCurrentDisp(2)} className={`${currentDisp === 2 ? "active" : ""}`}>Savings & Investment</li>
                                        <li onClick={() => setCurrentDisp(3)} className={`${currentDisp === 3 ? "active" : ""}`}>Bill Payments</li>
                                    </ul>
                                </div>
                                <div className="payscribe-display-box mt_3">
                                    <div className="payscribe-display-summary">
                                        <div className={`${currentDisp === 0 ? "active" : ""} summary-story`}>
                                            <h4>Build seamless <br /> accounts and wallets <br /> with half the effort.</h4>
                                            <p>Effortlessly integrate account and wallet services into your fintech platform, allowing
                                                your users to manage their finances easily and securely. Our robust API simplifies the
                                                process, reducing development time and effort.</p>
                                            <button className="btn btn-border-main">Get Started <ion-icon name="arrow-forward-circle-outline"></ion-icon></button>
                                        </div>
                                        <div className={`${currentDisp === 1 ? "active" : ""} summary-story`}>
                                            <h4>Expand financial <br /> reach with effortless <br /> USD/NGN card issuance</h4>
                                            <p>Enhance your fintech offerings with our seamless USD/NGN card issuance. Easily provide your
                                                users with cards for both international and local transactions, all through a straightforward
                                                setup and management process.</p>
                                            <button className="btn btn-border-main">Get Started <ion-icon name="arrow-forward-circle-outline"></ion-icon></button>
                                        </div>
                                        <div className={`${currentDisp === 2 ? "active" : ""} summary-story`}>
                                            <h4>Boost savings <br /> and investments <br /> with minimal work</h4>
                                            <p>Enhance your fintech services by offering effortless savings and investment solutions. Our platform
                                                simplifies the process, allowing users to manage and grow their funds with minimal effort. This
                                                streamlined approach enables you to provide robust financial tools without complex implementation.</p>
                                            <button className="btn btn-border-main">Get Started <ion-icon name="arrow-forward-circle-outline"></ion-icon></button>
                                        </div>
                                        <div className={`${currentDisp === 3 ? "active" : ""} summary-story`}>
                                            <h4>Simplify bill <br /> payments with ease</h4>
                                            <p>Streamline bill payments effortlessly with our platform. Enable your users to manage and pay their
                                                bills with minimal hassle, offering a smooth and efficient solution that integrates seamlessly into your services.</p>
                                            <button className="btn btn-border-main">Get Started <ion-icon name="arrow-forward-circle-outline"></ion-icon></button>
                                        </div>
                                    </div>
                                    <div className="payscribe-display-main">
                                        {
                                            currentDisp === 0 ?
                                                <img src={BusinessImg} className="business-img" alt="business" />
                                                :
                                                currentDisp === 1 ?
                                                    <img src={BusinessImg} className="business-img" alt="business" />
                                                    :
                                                    currentDisp === 2 ?
                                                        <img src={BusinessImg} className="business-img" alt="business" />
                                                        :
                                                        <img src={BusinessImg} className="business-img" alt="business" />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-only">
                                <div className="payscribe-display-mobile mt_8">
                                    <div className="">
                                        <Collapse ghost expandIconPosition="right" accordion activeKey={activeKey} onChange={handlePanelChanges}>
                                            <Collapse.Panel header="Accounts and Wallets" key="1">
                                                <h4>Expand financial reach with effortless USD/NGN card issuance</h4>
                                                <p>Put an end to long email chains and misplaced documents. Get all relevant information in one
                                                    place—including essential documents, case details, and costs—and easily book a call for speedy assistance.</p>
                                                <button className="btn btn-gray-border">Get Started</button>
                                                <img src={BusinessImg} className="business-img" alt="business" />
                                            </Collapse.Panel>
                                            <Collapse.Panel header="Issue USD/NGN Cards" key="2">
                                                <h4>Expand financial reach with effortless USD/NGN card issuance</h4>
                                                <p>Enhance your fintech offerings with our seamless USD/NGN card issuance. Easily provide your
                                                    users with cards for both international and local transactions, all through a straightforward
                                                    setup and management process.</p>
                                                <button className="btn btn-gray-border">Get Started</button>
                                                <img src={BusinessImg} className="business-img" alt="business" />
                                            </Collapse.Panel>
                                            <Collapse.Panel header="Savings & Investment" key="3">
                                                <h4>Boost savings and investments with minimal work</h4>
                                                <p>Enhance your fintech services by offering effortless savings and investment solutions. Our platform
                                                    simplifies the process, allowing users to manage and grow their funds with minimal effort. This
                                                    streamlined approach enables you to provide robust financial tools without complex implementation.</p>
                                                <button className="btn btn-gray-border">Get Started</button>
                                                <img src={BusinessImg} className="business-img" alt="business" />
                                            </Collapse.Panel>
                                            <Collapse.Panel header="Bill Payments" key="4">
                                                <h4>Simplify bill payments with ease</h4>
                                                <p>Streamline bill payments effortlessly with our platform. Enable your users to manage and pay their
                                                    bills with minimal hassle, offering a smooth and efficient solution that integrates seamlessly into your services.</p>
                                                <button className="btn btn-gray-border">Get Started</button>
                                                <img src={BusinessImg} className="business-img" alt="business" />
                                            </Collapse.Panel>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-payscribe pt_5">
                    <div className="cover-div">
                        <div className="center-div">
                            <p className="tag">immigration features</p>
                            <h3>One hub for immigration, <br /> payroll, and HR</h3>
                        </div>
                        <div className="payscribe-display-control mt_4">
                            <ul>
                                <li className="active">Visa eligibility</li>
                                <li>Visa eligibility</li>
                                <li>Visa eligibility</li>
                                <li>Visa eligibility</li>
                                <li>Visa eligibility</li>
                            </ul>
                        </div>
                        <div className="payscribe-display-box mt_3">
                            <div className="payscribe-display-summary">
                                <div>
                                    <h4>Access all business <br /> information in one click.</h4>
                                    <p>Put an end to long email chains and misplaced documents. Get all relevant information in one
                                        place—including essential documents, case details, and costs—and easily book a call for speedy assistance.</p>
                                    <button className="btn btn-gray-border">Get Started</button>
                                </div>
                            </div>
                            <div className="payscribe-display-main">
                                <img src={BusinessImg} alt="business" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="join-us">
                        <div className="grid-2">
                            <div>
                                <h3>Start Building Today</h3>
                                <p>Sign up in seconds and start processing payments right away! Alternatively, our
                                    experts are here to help you craft a tailored payment solution that perfectly suits your
                                    business needs - just reach out to us!.</p>
                                <div className="flex-div">
                                    <Link className="btn btn-accent" to="">Start Building <img src={ArrowRightMain} className="button-arrow" alt="arrow right" /></Link>
                                    <Link className="btn btn-gray-border" to="">Contact Sales <img src={ArrowRightGrayMain} className="button-arrow" alt="arrow right" /></Link>
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
            </div>
            <Footer />
        </div>
    )
}

export default BusinessPage;