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

const FaqDisplay = () => {
    return (
        <div className="detail-summary">
            <div className="faq airtime-props main-div pt_5">
                <div className="cover-div">
                    <div className="width-60">
                        <div className="center-div">
                            <h3 className="sec-title">Frequently Asked Questions</h3>
                            {/* <p>Looking for quick answers? Here are some of the most common questions we receive, along
                                with straightforward responses to help you get the information you need. </p> */}
                        </div>
                        <div className="faq-listing mt_4">
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

export default FaqDisplay;