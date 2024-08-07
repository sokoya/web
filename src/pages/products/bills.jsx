import React from "react";
import Navigation from "../../components/nav";
import Footer from "../../components/footer";

import _1 from "../../assets/images/homepage/new/deel.png";
import _1Svg from "../../assets/images/homepage/new/deel.svg";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Controller, EffectFade } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-fade";

import DealImg from "../../assets/images/homepage/new/deel.jpg";
import CardDealImg from "../../assets/images/homepage/new/shorts/bill_1.png";
import CardDealImg1 from "../../assets/images/homepage/new/shorts/bill_2.png";
import CardDealImg2 from "../../assets/images/homepage/new/shorts/bill_3.png";

import ArrowRightMain from "../../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../../assets/images/arrow-up-right-gray.svg";

import PhoneImg from "../../assets/images/homepage/phone.png";

import HeroBillImg from "../../assets/images/homepage/new/data.png";

import { Link } from "react-router-dom";
import { Divider, Rate } from "antd";
import ProductDetailStory from "../../components/product-story";
import RatingsSlider from "../../components/swiper";

const PayBillsPage = () => {

    const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return <button className="carousel-controller" onClick={() => swiper.slideNext()}>{children}</button>;
    };

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <button className="carousel-controller" onClick={() => swiper.slidePrev()}>{children}</button>;
    };

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
        <div className="">
            <Navigation />
            <div className="product-page">
                <div className="airtime-hero">
                    <div className="cover-div">
                        <div className="text-ba">
                            <div className="text-bar">
                                <h5>PAY BILLS</h5>
                                <h2>Effortless Bill Payments: Manage and Pay Your Bills Quickly and Securely</h2>
                                <p>
                                    Easily pay your bills with our streamlined service. Enjoy a hassle-free experience, with secure and
                                    quick payments for all your regular expenses. Keep track of your payments and manage your bills effortlessly.</p>
                                <div className="button-flex mt_3">
                                    <Link className="btn btn-main" to="/">Open a Free Account <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
                                    <Link className="btn btn-white" to="/">Reach out to us <img src={ArrowRightMain} alt="arrow right" /></Link>
                                </div>
                            </div>
                            <div>
                                <img src={HeroBillImg} className="main-img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desktop-only">
                    <RatingsSlider />
                </div>
                <div className="airtime-props main-div mt_2 py_5">
                    <div className="cover-div">
                        <div className="center-div">
                            <h2 className="sect-title">Unlock the Full Potential of Your Bill Payments</h2>
                        </div>
                        <div className="grid-3 mt_3">
                            <div className="simple-props">
                                <div>
                                    <h4>Convenient and Quick Payments</h4>
                                    <p>Pay your bills conveniently and quickly. Our service ensures
                                        fast, hassle-free transactions, so you can stay on top of your payments with ease.</p>
                                </div>
                                <div>
                                    <img src={CardDealImg} alt="" />
                                </div>
                            </div>
                            <div className="simple-props _2">
                                <div>
                                    <h4>Track and Manage All Bills</h4>
                                    <p>Effortlessly track and manage all your bills in one place. Stay organized, avoid
                                        missed payments, and enjoy the convenience of our reliable service.</p>
                                </div>
                                <div>
                                    <img src={CardDealImg1} alt="" />
                                </div>
                            </div>
                            <div className="simple-props">
                                <div>
                                    <h4>Secure and Reliable Transactions</h4>
                                    <p>Pay your bills with confidence. Our secure and reliable transactions ensure your
                                        payments are always safe, dependable, and completed with ease.</p>
                                </div>
                                <div>
                                    <img src={CardDealImg2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductDetailStory />
                <div className="cover-div">
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

export default PayBillsPage;