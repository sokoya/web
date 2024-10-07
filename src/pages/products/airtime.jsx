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
import CardDealImg from "../../assets/images/homepage/new/card_deel.png";
import CardDealImg1 from "../../assets/images/homepage/new/card_deel1.png";
import CardDealImg2 from "../../assets/images/homepage/new/card_deel2.png";
import CardDealImg3 from "../../assets/images/homepage/new/card_deel3.png";
import CardDealImg4 from "../../assets/images/homepage/new/card_deel4.png";

import ArrowRightMain from "../../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../../assets/images/arrow-up-right-gray.svg";

import PhoneImg from "../../assets/images/homepage/phone.png";
import SolutionImg from "../../assets/images/homepage/new/solution.webp";
import TopImg from "../../assets/images/homepage/new/raenest.svg";

import Vidyard from "../../assets/images/homepage/new/vidyard.webp";

import { Link } from "react-router-dom";
import { Divider, Rate } from "antd";
import RatingsSlider from "../../components/swiper";

const AirtimeToCashPage = () => {

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
                                <h5>Airtime to Cash</h5>
                                <h2>Instant Airtime Conversion: Turn Your Unused Airtime into Cash</h2>
                                <p>Easily convert your spare airtime into cash with just a few clicks. Our fast and secure
                                    service ensures you get money in no time, so you can make the most of your unused airtime. Enjoy
                                    the convenience and flexibility of having extra cash at your fingertips!</p>
                                <div className="button-flex mt_3">
                                    <Link className="btn btn-main" to="/">Open a Free Account <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
                                    <Link className="btn btn-white" to="/">Reach out to us <img src={ArrowRightMain} alt="arrow right" /></Link>
                                </div>
                            </div>
                            <div>
                                <img src={Vidyard} className="main-img" alt="" />
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
                            <h2 className="sect-title">Loved by engineering teams around the world</h2>
                        </div>
                        <div className="grid-3 mt_3">
                            <div className="simple-props">
                                <h4>Instant Conversion Process</h4>
                                <p>Instantly convert your airtime to cash with ease. Our quick and
                                    reliable service ensures you get your money in seconds, making the process simple and hassle-free.</p>
                                <div>
                                    <img src={CardDealImg} alt="" />
                                </div>
                            </div>
                            <div className="simple-props _2">
                                <h4>Competitive Conversion Rates</h4>
                                <p>Take advantage of our competitive conversion rates, which provide excellent value for your
                                    airtime and ensure you get the most cash back.</p>
                                <div>
                                    <img src={CardDealImg1} alt="" />
                                </div>
                            </div>
                            <div className="simple-props">
                                <h4>Many Providers Supported</h4>
                                <p>We support many providers, giving you the flexibility to handle all your
                                    transactions in one place. Enjoy the convenience of our extensive network.</p>
                                <div>
                                    <img src={CardDealImg2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="story-div py_5">
                    <div className="cover-div">
                        <div className="grid-2 main">
                            <div>
                                <p className="text-top-tag">OUR PRODUCT OFFERINGS</p>
                                <h4 className="sect-title">Full Comprehensive <br /> Financial Solutions for You</h4>
                                <p>Payscribe offers a wide range of financial solutions tailored to your needs. From
                                    budgeting and saving to investing and managing expenses, we provide the tools and support necessary to help you
                                    achieve financial success. Whether you’re just starting out or looking to optimize your finances, we’re here to
                                    assist you every step of the way.</p>
                                <div className="mt_5">
                                    <ul className="break">
                                        <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Send / Receive Payments</li>
                                        <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> USD/NGN cards for transactions</li>
                                        <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bill Managements</li>
                                        <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Airtime to Cash</li>
                                        <li className="last-two"><ion-icon name="checkmark-done-circle-outline"></ion-icon> Track your Expenses</li>
                                        <li className="last-two"><ion-icon name="checkmark-done-circle-outline"></ion-icon> Cross-platform support</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={SolutionImg} alt="" className="solution" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="pt_3">
                                <div className="grid-3 mt_3">
                                    <div className="simple-props">
                                        <h4>Select the right equity plan</h4>
                                        <p>With our expert guidance, you can confidently choose the most favorable
                                            equity type based on your employee's location. Ensure compliance when you grant EOR.</p>
                                        <div>
                                            <img src={CardDealImg} alt="" />
                                        </div>
                                    </div>
                                    <div className="simple-props _2">
                                        <h4>Select the right equity plan</h4>
                                        <p>With our expert guidance, you can confidently choose the most favorable
                                            equity type based on your employee's location. Ensure compliance when you grant EOR.</p>
                                        <div>
                                            <img src={CardDealImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="simple-props">
                                        <h4>Select the right equity plan</h4>
                                        <p>With our expert guidance, you can confidently choose the most favorable
                                            equity type based on your employee's location. Ensure compliance when you grant EOR.</p>
                                        <div>
                                            <img src={CardDealImg2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="airtime-props main-div pt_5">
                    <div className="cover-div">
                        <div className="center-div">
                            <h3 className="sec-title">Frequently Asked Questions</h3>
                            <p>See responses to frequently asked questions about Aella Business Banking. Visit Business Support for
                                further information.</p>
                        </div>
                        <div className="faq-listing mt_4">
                            <div className="answer-box">
                                <div className="question-box">
                                    <div className="grid-flex">
                                        <h5>What type of business does Aella Merchant cater to?</h5>
                                        <div>
                                            <ion-icon name="chevron-down-outline"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                                <div className="question-box">
                                    <div className="grid-flex">
                                        <h5>What type of business does Aella Merchant cater to?</h5>
                                        <div>
                                            <ion-icon name="chevron-down-outline"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                                <div className="question-box">
                                    <div className="grid-flex">
                                        <h5>What type of business does Aella Merchant cater to?</h5>
                                        <div>
                                            <ion-icon name="chevron-down-outline"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                                <div className="question-box">
                                    <div className="grid-flex">
                                        <h5>What type of business does Aella Merchant cater to?</h5>
                                        <div>
                                            <ion-icon name="chevron-down-outline"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
        </div >
    )
}

export default AirtimeToCashPage;