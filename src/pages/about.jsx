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
                            <h5>Who We Are</h5>
                            <h2>Transforming Financial Services for Individuals, Businesses, and Beyond.</h2>
                            <p>We are on a mission to bridge the gap between individuals and fintech innovation. By offering a platform that
                                serves both personal finance and the sophisticated requirements of businesses, we’re creating a seamless
                                ecosystem where everyone can thrive.</p>
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
                            <h4>From Idea to Impact: <br /> Our Goals and Aspirations</h4>
                            <p>Our journey started with the goal to reshape financial services for everyone. We aimed to create a platform
                                that meets current needs and adapts to future demands. We plan to expand our services, enhance our technology, and
                                continuously improve user experience. Our commitment is to offer reliable, innovative solutions that support
                                individuals and businesses in achieving their financial goals.
                            </p>
                        </div>
                    </div>
                    <div className="abt-props grid-3">
                        <div className="single-props-box">
                            <ion-icon name="search-outline"></ion-icon>
                            <h5>Why Payscribe?</h5>
                            <p>We saw that managing finances was often complicated and fragmented. Our mission is to address these
                                gaps and improve how people manage their finances.</p>
                        </div>
                        <div className="single-props-box">
                            <ion-icon name="construct-outline"></ion-icon>
                            <h5>How We Achieve This</h5>
                            <p>We blend advanced technology with smart design to deliver a seamless, secure, and efficient financial
                                platform, focusing on innovation and user experience.</p>
                        </div>
                        <div className="single-props-box">
                            <ion-icon name="cut-outline"></ion-icon>
                            <h5>Our Plans for the Future</h5>
                            <p>We aim to expand our services, advance our technology, and continually enhance user experience, staying 
                                ahead of financial trends with innovative solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-text-body about mt_5 team-sect py_5">
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