import React from "react";
import Footer from "../../components/footer";
import Navigation from "../../components/nav";
import { Link } from "react-router-dom";

import BusinessImgg from "../../assets/images/homepage/new/testimonial/mailchimp.png";

const TermsofUse = () => {
    return (
        <div className="faq">
            <Navigation />
            <div className="faq-hero">
                <div className="grid-2">
                    <div className="faq-hero-text">
                        <div className="faq-inner-text">
                            <h2>Terms of use</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content mt_5">
                <div className="cover-div">
                    <div className="grid-2 business-grid">
                        <div>
                            <img src={BusinessImgg} alt="" />
                        </div>
                        <div>
                            <h3>We keep records of data activity</h3>
                            <p>
                                Payscribe.ng maintains this web site (the "Payscribe.ng Site") as a service to: its visitors, its customers who 
                                using its services. Please review the following terms and conditions carefully. This Terms of Use 
                                Agreement (the "Terms of Use") is a legally binding contract between each User and Payscribe.ng regarding 
                                Users' access to and use of Payscribe.ng Site. By accessing the Sites, the User agrees to the terms and 
                                conditions as outlined in this legal notice. Payscribe.ng reserves the right to change these terms and 
                                conditions from time to time at its sole discretion by posting such revised terms and conditions on the 
                                Payscribe.ng Site. User's continued use of the Sites following any such change constitutes an agreement 
                                to follow and be bound by the terms and conditions as changed. If a User does not agree with any part of 
                                the following terms and conditions, she/he must not use the Sites. Customers hereby undertake to post this 
                                Terms of Use on their websites at all times.
                            </p>
                        </div>
                        <div>
                            <h4>1. Use of site.</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-body">
                <div className="cover-div">
                    <div className="grid-2-bias mt_5">
                        <div className="">
                            <h4 className="">General FAQs</h4>
                            <p>See responses to frequently asked questions about Aella Business Banking. Visit Business Support for
                                further information.</p>
                        </div>
                        <div className="faq-listing">
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
            </div>
            <Footer />
        </div>
    )
}

export default TermsofUse;