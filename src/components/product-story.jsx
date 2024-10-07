import React from "react";

import DealImg from "../assets/images/homepage/new/deel.jpg";
import CardDealImg from "../assets/images/homepage/new/card_deel.png";
import CardDealImg1 from "../assets/images/homepage/new/card_deel1.png";
import CardDealImg2 from "../assets/images/homepage/new/card_deel2.png";
import CardDealImg3 from "../assets/images/homepage/new/card_deel3.png";
import CardDealImg4 from "../assets/images/homepage/new/card_deel4.png";

import ArrowRightMain from "../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../assets/images/arrow-up-right-gray.svg";

import PhoneImg from "../assets/images/homepage/phone.png";
import SolutionImg from "../assets/images/homepage/new/model.png";
import TopImg from "../assets/images/homepage/new/raenest.svg";
import { Link } from "react-router-dom";

const ProductDetailStory = () => {
    return (
        <div className="detail-summary">
            <div className="story-div py_5">
                <div className="container">
                    <div className="grid-2 main">
                        <div>
                            <p className="text-top-tag">THE COMPLETE PACKAGE</p>
                            <div className="desktop-only">
                                <h4 className="sect-title">Comprehensive Financial <br /> Solutions for You</h4>
                            </div>
                            <div className="mobile-only">
                                <h4 className="sect-title">Comprehensive Financial Solutions for You</h4>
                            </div>
                            <p>Payscribe offers a wide range of financial solutions tailored to your needs. From
                                budgeting and saving to investing and managing expenses, we provide the tools and support necessary to help you
                                achieve financial success. Whether you’re just starting out or looking to optimize your finances, we’re here to
                                assist you every step of the way.</p>
                            <div className="mt_10">
                                <Link>Click here to get started <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={SolutionImg} alt="" className="solution" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="pt_4">
                            <div className="grid-3 mt_3">
                                <div className="simple-props">
                                    <div className="">
                                        <h4>24/7 Customer Support</h4>
                                        <p>Our dedicated team is available around the clock to assist you with any
                                            questions or issues. We're here to ensure your experience is smooth and seamless.</p>
                                    </div>
                                    <div>
                                        <img src={CardDealImg} alt="" />
                                    </div>
                                </div>
                                <div className="simple-props _2">
                                    <div className="">
                                        <h4>Unified API Gateway</h4>
                                        <p>Access all your essential services through a single, streamlined API gateway. Simplify
                                            integration and manage your connections efficiently.</p>
                                    </div>
                                    <div>
                                        <img src={CardDealImg1} alt="" />
                                    </div>
                                </div>
                                <div className="simple-props">
                                    <div className="">
                                        <h4>No Hidden Fees</h4>
                                        <p>Enjoy transparency with no hidden charges. You’ll always know exactly
                                            what you’re paying for, ensuring a straightforward and trustworthy experience.</p>
                                    </div>
                                    <div>
                                        <img src={CardDealImg2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq airtime-props main-div pt_5">
                <div className="container">
                    <div className="">
                        <div className="center-div">
                            <h3 className="sec-title">Frequently Asked Questions</h3>
                            {/* <p>Looking for quick answers? Here are some of the most common questions we receive, along
                                with straightforward responses to help you get the information you need. </p> */}
                        </div>
                        <div className="faq-listing mt_5">
                            <div className="cover-div">
                                <div className="answer-box">
                                    <div className="question-box">
                                        <div className="grid-flex">
                                            <h5>What types of payment options are available with your payment links?</h5>
                                            <div>
                                                <ion-icon name="chevron-down-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="question-box">
                                        <div className="grid-flex">
                                            <h5>Can I use your payment links for international transactions?</h5>
                                            <div>
                                                <ion-icon name="chevron-down-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="question-box">
                                        <div className="grid-flex">
                                            <h5>How secure are the transactions made through your platform?</h5>
                                            <div>
                                                <ion-icon name="chevron-down-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="question-box">
                                        <div className="grid-flex">
                                            <h5>How do I get started with creating a USD/NGN card?</h5>
                                            <div>
                                                <ion-icon name="chevron-down-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="question-box">
                                        <div className="grid-flex">
                                            <h5>Is there customer support available if I encounter any issues?</h5>
                                            <div>
                                                <ion-icon name="chevron-down-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailStory;