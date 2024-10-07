import React from "react";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Controller, EffectFade } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-fade";

import ArrowRightMain from "../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../assets/images/arrow-up-right-gray.svg";

import BoluImg from "../assets/images/homepage/new/testimonial/bolu.webp";
import HabibuImg from "../assets/images/homepage/new/testimonial/habibu.webp";
import VictorImg from "../assets/images/homepage/new/testimonial/victor.webp";
import IwinosaImg from "../assets/images/homepage/new/testimonial/iwinosa.webp";
import MichaelImg from "../assets/images/homepage/new/testimonial/michael.webp";

import { Link } from "react-router-dom";
import { Divider, Rate } from "antd";

const RatingsSlider = () => {

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
            <div className="product-page">
                <div className="mobile-testimonial mt_5">
                    <div className="cover-div">
                        <div className="testimonial-header grid-flex">
                            <h3>Loved by People Just <br /> Like You All Across Nigeria</h3>
                            <div>
                                <div className="button-flex">
                                    <div className="testimonial-control">
                                        <ion-icon name="arrow-back-outline"></ion-icon>
                                    </div>
                                    <div className="testimonial-control">
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="testimonial-bar">
                            <Swiper
                                centeredSlides={false}
                                loop={false} breakpoints={breakpoints}>
                                <SwiperSlide key={1}>
                                    <div className="testimonial-card">
                                        <div className="testimonial-card-body">
                                            <div className="grid-flex">
                                                <div className="testimonial-author-flex">
                                                    <div>
                                                        <div className="author-div">
                                                            <img src={BoluImg} alt="Shodipo BOLUWATIFE" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>Shodipo BOLUWATIFE</h4>
                                                        <Rate value={5} className="rate-bar" disabled style={{ fontSize: "1.5rem" }} />
                                                    </div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                            <p>What a great app! It's so reliable, easy and fast to operate. it provides unique
                                                services to customers unlike other apps. Payscribe as helped me convert my naira to
                                                USD, It makes international businesses easier.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={2}>
                                    <div className="testimonial-card">
                                        <div className="testimonial-card-body">
                                            <div className="grid-flex">
                                                <div className="testimonial-author-flex">
                                                    <div>
                                                        <div className="author-div">
                                                            <img src={HabibuImg} alt="Habibu Fasaha" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>Habibu Fasaha</h4>
                                                        <Rate value={5} className="rate-bar" disabled style={{ fontSize: "1.5rem" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>This App Is super helpful, It solve my problem of paying for Google Developer
                                                Console which other vitual dollar cards didn't provide. They have an excellent customer
                                                care support as well. ♥️</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={3}>
                                    <div className="testimonial-card">
                                        <div className="testimonial-card-body">
                                            <div className="grid-flex">
                                                <div className="testimonial-author-flex">
                                                    <div>
                                                        <div className="author-div">
                                                            <img src={IwinosaImg} alt="Iwinosa" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>Iwinosa</h4>
                                                        <Rate value={5} className="rate-bar" disabled style={{ fontSize: "1.5rem" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>If there was 6 stars I'll give this app. their customer care is
                                                just splendid fast and reliable and the app is like an all in one for buying data, investing it's genius</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={4}>
                                    <div className="testimonial-card">
                                        <div className="testimonial-card-body">
                                            <div className="grid-flex">
                                                <div className="testimonial-author-flex">
                                                    <div>
                                                        <div className="author-div">
                                                            <img src={VictorImg} alt="Victor" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>Ilesanmi Victor</h4>
                                                        <Rate value={5} className="rate-bar" disabled style={{ fontSize: "1.5rem" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>PayScribe is a 5 star for me. They solved my card problem using
                                                their dollar card to pay for international fee. I recommend that you use PayScribe for your virtual dollar card. Thank you</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={5}>
                                    <div className="testimonial-card">
                                        <div className="testimonial-card-body">
                                            <div className="grid-flex">
                                                <div className="testimonial-author-flex">
                                                    <div>
                                                        <div className="author-div">
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>Oyindeyefa Godspower</h4>
                                                        <Rate value={5} className="rate-bar" disabled style={{ fontSize: "1.5rem" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Used it today (11th March, 2023) to convert excess airtime to cash
                                                and the customer service was with me throughout the process. Love you guys.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide key={6}>
                                    <div className="testimonial-card">
                                        <div className="testimonial-card-body">
                                            <div className="grid-flex">
                                                <div className="testimonial-author-flex">
                                                    <div>
                                                        <div className="author-div">
                                                            <img src={MichaelImg} alt="Michael Femi John" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>Michael Femi John</h4>
                                                        <Rate value={5} className="rate-bar" disabled style={{ fontSize: "1.5rem" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Paysribe is one of the best platforms for your financial services, I
                                                highly recommend this app for you. Paysribe customer support service is also reliable I gave you 5stars.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RatingsSlider;