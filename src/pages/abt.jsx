import React from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

import FaqDisplay from "../components/faq";

import ArrowRightMain from "../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../assets/images/arrow-up-right-gray.svg";

import PhoneImg from "../assets/images/homepage/phone.png";

const AbtPage = () => {
    return (
        <div>
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
                                <Link className="btn btn-default" to="/">Reach out to us <img src={ArrowRightGrayMain} alt="arrow right" /></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="story-hero-img"></div>
                    </div>
                </div>
            </div>
            <div className="summary-block py_5">
                <div className="contain">
                    {/* <h3 className="sec-title">Make authentication easy for everyone</h3> */}
                    <div className="grid-3">
                        <div>
                            <ion-icon name="boat-outline"></ion-icon>
                            <h4>Tackle authentication globally</h4>
                            <p>Every market has its own regulations and behaviors. Adyen’s solution adapts
                                to local needs so that you can offer frictionless authentication everywhere.</p>
                        </div>
                        <div>
                            <ion-icon name="boat-outline"></ion-icon>
                            <h4>Tackle authentication globally</h4>
                            <p>Every market has its own regulations and behaviors. Adyen’s solution adapts
                                to local needs so that you can offer frictionless authentication everywhere.</p>
                        </div>
                        <div>
                            <ion-icon name="boat-outline"></ion-icon>
                            <h4>Tackle authentication globally</h4>
                            <p>Every market has its own regulations and behaviors. Adyen’s solution adapts
                                to local needs so that you can offer frictionless authentication everywhere.</p>
                        </div>
                    </div>
                </div>
                <div className="contain mt_5">
                    {/* <h3 className="sec-title">Make authentication easy for everyone</h3> */}
                    <h3 className="sec-title">Make authentication easy for everyone <br /> and easily without hassle</h3>
                    <div className="grid-3 mt_2">
                        <div className="how-to-single">
                            <div className="how-to-img"></div>
                            <div className="how-to-story mt_5">
                                <h4>Tackle authentication globally</h4>
                                <p>Every market has its own regulations and behaviors. Adyen’s solution adapts to local needs so 
                                    that you can offer frictionless authentication everywhere.</p>
                            </div>
                        </div>
                        <div className="how-to-single">
                            <div className="how-to-img"></div>
                            <div className="how-to-story mt_5">
                                <h4>Tackle authentication globally</h4>
                                <p>Every market has its own regulations and behaviors. Adyen’s solution adapts to local needs so 
                                    that you can offer frictionless authentication everywhere.</p>
                            </div>
                        </div>
                        <div className="how-to-single">
                            <div className="how-to-img"></div>
                            <div className="how-to-story mt_5">
                                <h4>Tackle authentication globally</h4>
                                <p>Every market has its own regulations and behaviors. Adyen’s solution adapts to local needs so 
                                    that you can offer frictionless authentication everywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desc-tab py_5">
                <div className="contain">
                    <div className="center-div">
                        <h3 className="sect-title">A safe space for you and your money</h3>
                        <p>We leverage the best technology to ensure end-to-end encryption of all your transactions—bank-grade security.</p>
                    </div>
                    <div className="desc-tab-grid-2">
                        <div className="single-tab">
                            <h4>ISO 27001 certified</h4>
                            <p>Afriex has an Information Security Management System and we are proud to be ISO 27001 certified, demonstrating our
                                commitment to maintaining the highest standards of information security. This certification validates our robust
                                security practices, ensuring the confidentiality, integrity, and availability of sensitive data entrusted to us by
                                our users.</p>
                        </div>
                        <div className="single-tab">
                            <h4>ISO 27001 certified</h4>
                            <p>Afriex has an Information Security Management System and we are proud to be ISO 27001 certified, demonstrating our
                                commitment to maintaining the highest standards of information security. This certification validates our robust
                                security practices, ensuring the confidentiality, integrity, and availability of sensitive data entrusted to us by
                                our users.</p>
                        </div>
                    </div>
                    <div className="desc-tab-grid-2 inverse">
                        <div className="single-tab">
                            <h4>ISO 27001 certified</h4>
                            <p>Afriex has an Information Security Management System and we are proud to be ISO 27001 certified, demonstrating our
                                commitment to maintaining the highest standards of information security. This certification validates our robust
                                security practices, ensuring the confidentiality, integrity, and availability of sensitive data entrusted to us by
                                our users.</p>
                        </div>
                        <div className="single-tab">
                            <h4>ISO 27001 certified</h4>
                            <p>Afriex has an Information Security Management System and we are proud to be ISO 27001 certified, demonstrating our
                                commitment to maintaining the highest standards of information security. This certification validates our robust
                                security practices, ensuring the confidentiality, integrity, and availability of sensitive data entrusted to us by
                                our users.</p>
                        </div>
                    </div>
                </div>
            </div>
            <FaqDisplay />
            <div className="cover-box">
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
            <Footer />
        </div>
    )
}

export default AbtPage;