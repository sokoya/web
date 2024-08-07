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
import CardDealImg from "../../assets/images/homepage/new/shorts/save_1.png";
import CardDealImg1 from "../../assets/images/homepage/new/card_deel.png";
import CardDealImg2 from "../../assets/images/homepage/new/card_deel.png";
import CardDealImg3 from "../../assets/images/homepage/new/card_deel3.png";
import CardDealImg4 from "../../assets/images/homepage/new/card_deel4.png";

import ArrowRightMain from "../../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../../assets/images/arrow-up-right-gray.svg";

import PhoneImg from "../../assets/images/homepage/phone.png";
import SolutionImg from "../../assets/images/homepage/new/solution.webp";
import TopImg from "../../assets/images/homepage/new/raenest.svg";

import HeroBillImg from "../../assets/images/homepage/new/save_and_earn.png";
import BoluImg from "../../assets/images/homepage/new/testimonial/bolu.webp";

import { Link } from "react-router-dom";
import { Divider, Rate } from "antd";
import RatingsSlider from "../../components/swiper";
import ProductDetailStory from "../../components/product-story";

const SaveAndEarnPage = () => {

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
                                <h5>Save and Earn More</h5>
                                <h2>Smart Savings: Save More Efficiently and Watch Your Earnings Grow</h2>
                                <p>Boost your savings effortlessly with our smart plans. Track your progress and watch your
                                    money grow over time with easy, effective saving strategies. Start today and see your
                                    earnings increase with minimal effort!</p>
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
                            <h2 className="sect-title">Unlock the Full Potential of Your Savings and Earnings</h2>
                        </div>
                        <div className="grid-3 mt_3">
                            <div className="simple-props">
                                <h4>Flexible Savings Plans</h4>
                                <p>Our flexible savings plans are designed to adapt to your needs, allowing you
                                    to save at your own pace and achieve your financial goals with ease and convenience.</p>
                                <div>
                                    <img src={CardDealImg} alt="" />
                                </div>
                            </div>
                            <div className="simple-props _2">
                                <h4>Expert Investment Advice</h4>
                                <p>Receive expert investment advice tailored to your goals. Our seasoned advisors
                                    offer insights and strategies to help you make informed decisions and maximize returns.</p>
                                <div>
                                    <img src={CardDealImg1} alt="" />
                                </div>
                            </div>
                            <div className="simple-props">
                                <h4>High-Interest Returns</h4>
                                <p>
                                    Benefit from high-interest returns that significantly enhance your investment growth, ensuring
                                    your money works harder and accelerates your financial progress.</p>
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
        </div >
    )
}

export default SaveAndEarnPage;