import React from "react";
import Navigation from "../../components/nav";
import Footer from "../../components/footer";

import _1 from "../../assets/images/homepage/new/deel.png";
import _1Svg from "../../assets/images/homepage/new/deel.svg";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Controller, EffectFade } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-fade";

import CardDealImg from "../../assets/images/homepage/new/shorts/gift_1.png";
import CardDealImg1 from "../../assets/images/homepage/new/shorts/gift_2.png";
import CardDealImg2 from "../../assets/images/homepage/new/shorts/bill_3.png";

import ArrowRightMain from "../../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../../assets/images/arrow-up-right-gray.svg";

import PhoneImg from "../../assets/images/homepage/phone.png";

import HeroBillImg from "../../assets/images/homepage/new/gift_card.png";

import { Link } from "react-router-dom";
import { Divider, Rate } from "antd";
import RatingsSlider from "../../components/swiper";
import ProductDetailStory from "../../components/product-story";

const GiftcardsPage = () => {

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
                                <h5>Buy and Sell Giftcards</h5>
                                <h2>Effortless Gift Card Trading: Buy and Sell with Ease and Flexibility</h2>
                                <p>Easily find the best deals on gift cards and turn your unused cards into cash. Our platform ensures a secure
                                    and hassle-free experience, whether you're buying or selling. Maximize your savings and earn extra money
                                    with every transaction.</p>
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
                            <h2 className="sect-title">Maximize Your Savings and Convenience with Gift Cards</h2>
                        </div>
                        <div className="grid-3 mt_3">
                            <div className="simple-props">
                                <h4>Wide Variety of Gift Cards</h4>
                                <p>Explore a wide variety of gift cards to choose from, catering to
                                    all your needs and preferences. Find the perfect card or trade your favorites for cash with ease.</p>
                                <div>
                                    <img src={CardDealImg} alt="" />
                                </div>
                            </div>
                            <div className="simple-props _2">
                                <h4>Competitive Buy and Sell Rates</h4>
                                <p>Enjoy competitive buy and sell rates that ensure you get the best value
                                    for your gift cards. Maximize your earnings and savings with every transaction.</p>
                                <div>
                                    <img src={CardDealImg1} alt="" />
                                </div>
                            </div>
                            <div className="simple-props">
                                <h4>Secure and Easy Transactions</h4>
                                <p>Experience secure and easy transactions with our platform. Your data
                                    and funds are always protected, ensuring peace of mind with every transaction.</p>
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

export default GiftcardsPage;