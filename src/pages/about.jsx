import "../assets/css/about.css";

import React from "react";
import Navigation from "../components/nav";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

import Iconbar from "../assets/images/_1.svg?react";
import BusinessImgg from "../assets/images/homepage/new/paystack.jpg";
import FaqDisplay from "../components/faq";

// import Img1 from "../assets/images/homepage/new/paystack.jpg";

import ArrowRightMain from "../assets/images/arrow-up-right.svg";

const AboutUsPage = () => {
    return (
        <div className="about-page">
            <Navigation />
            <div className="about-hero">
                <div className="grid-2">
                    <div className="text-ba">
                        <div className="text-bar">
                            <h5>Airtime to Cash</h5>
                            <h2>Instant Airtime Conversion: Turn Your Unused Airtime into Cash</h2>
                            <p>Easily convert your spare airtime into cash with just a few clicks. Our fast and secure
                                service ensures you get money in no time, so you can make the most of your unused airtime. Enjoy
                                the convenience and flexibility of having extra cash at your fingertips!</p>
                            <div className="button-flex mt_3">
                                <Link className="btn btn-white" to="/">Open a Free Account <img src={ArrowRightMain} alt="arrow right" /></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="story-hero-img"></div>
                    </div>
                </div>
            </div>
            <div className="about-story mt_5">
                <div className="cover-box">
                    <div className="widt">
                        <div className="">
                            <h4>Built By Developers <br /> For Developers</h4>
                            <p className="">
                                Many African businesses do not have the opportunity to access the tools and services they need to accelerate their
                                growth and so we decided to build financial products that work in their favour. We have made some good progress
                                since then.
                            </p>
                        </div>
                    </div>
                    <div className="abt-props grid-3">
                        <div className="single-props-box">
                            <ion-icon name="american-football-outline"></ion-icon>
                            <h5>Why Payscribe?</h5>
                            <p>Many African businesses do not have the opportunity to access the tools and services they need to accelerate their
                                growth and so we decided to build financial products.</p>
                        </div>
                        <div className="single-props-box">
                            <ion-icon name="american-football-outline"></ion-icon>
                            <h5>How We Achieve This</h5>
                            <p>Many African businesses do not have the opportunity to access the tools and services they need to accelerate their
                                growth and so we decided to build financial products.</p>
                        </div>
                        <div className="single-props-box">
                            <ion-icon name="american-football-outline"></ion-icon>
                            <h5>Our Plans for the Future</h5>
                            <p>Many African businesses do not have the opportunity to access the tools and services they need to accelerate their
                                growth and so we decided to build financial products.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-text-body mt_5 team-sect py_5">
                <div className="contain">
                    <div className="abt-header-text">
                        <div className="center-div">
                            <h4>Our Team</h4>
                        </div>
                    </div>
                    <div className="grid-4 mt_2">
                        <div className="div team-disp">
                            <div className="team-avatar">

                            </div>
                            <div>
                                <h4>Adeleke Ifeoluwase</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className="div team-disp">
                            <div className="team-avatar">

                            </div>
                            <div>
                                <h4>Adeleke Ifeoluwase</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className="div team-disp">
                            <div className="team-avatar">

                            </div>
                            <div>
                                <h4>Adeleke Ifeoluwase</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className="div team-disp">
                            <div className="team-avatar">

                            </div>
                            <div>
                                <h4>Adeleke Ifeoluwase</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className="div team-disp">
                            <div className="team-avatar">

                            </div>
                            <div>
                                <h4>Adeleke Ifeoluwase</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className="div team-disp">
                            <div className="team-avatar">

                            </div>
                            <div>
                                <h4>Adeleke Ifeoluwase</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className="div team-disp">
                            <div className="team-avatar">

                            </div>
                            <div>
                                <h4>Adeleke Ifeoluwase</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className="div team-disp">
                            <div className="team-avatar">

                            </div>
                            <div>
                                <h4>Adeleke Ifeoluwase</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FaqDisplay />
            <Footer />
        </div>
    )
}

export default AboutUsPage;