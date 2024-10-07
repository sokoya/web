import React from "react";
import Footer from "../../components/footer";
import Navigation from "../../components/nav";
import { Link } from "react-router-dom";

import BusinessImgg from "../../assets/images/homepage/new/testimonial/mailchimp.png";

const ComplaincePage = () => {
    return (
        <div className="faq">
            <Navigation />
            <div className="faq-hero">
                <div className="grid-2">
                    <div className="faq-hero-text">
                        <div className="faq-inner-text">
                            <h5>GENERAL DATA PROTECTION REGULATION (GDPR)</h5>
                            <h2>Make sure your business is GDPR-compliant</h2>
                            <p>If your business handles the personal data of EU citizens, the GDPR applies to you. Our tools can help you easily
                                navigate compliance without much effort—while keeping your customers’ personal data safe.</p>

                            <Link to="">Get Started</Link>
                        </div>
                    </div>
                    <div className="faq-hero-img">
                        <div className="dashboard-copy"></div>
                    </div>
                </div>
            </div>
            <div className="below-fold py_5">
                <div className="cover-div">
                    <div>
                        <h3 className="sec-title">What Mailchimp features can help?</h3>
                    </div>
                    <div className="grid-4 mt_4">
                        <div>
                            <h5>Contact profiles</h5>
                            <p>Our contact profiles show when someone opted in to receive marketing from you, so you can prove consent and
                                modify or remove personal information any time you need.</p>
                        </div>
                        <div>
                            <h5>Contact profiles</h5>
                            <p>Our contact profiles show when someone opted in to receive marketing from you, so you can prove consent and
                                modify or remove personal information any time you need.</p>
                        </div>
                        <div>
                            <h5>Contact profiles</h5>
                            <p>Our contact profiles show when someone opted in to receive marketing from you, so you can prove consent and
                                modify or remove personal information any time you need.</p>
                        </div>
                        <div>
                            <h5>Contact profiles</h5>
                            <p>Our contact profiles show when someone opted in to receive marketing from you, so you can prove consent and
                                modify or remove personal information any time you need.</p>
                        </div>
                        <div>
                            <h5>Contact profiles</h5>
                            <p>Our contact profiles show when someone opted in to receive marketing from you, so you can prove consent and
                                modify or remove personal information any time you need.</p>
                        </div>
                        <div>
                            <h5>Contact profiles</h5>
                            <p>Our contact profiles show when someone opted in to receive marketing from you, so you can prove consent and
                                modify or remove personal information any time you need.</p>
                        </div>
                        <div>
                            <h5>Contact profiles</h5>
                            <p>Our contact profiles show when someone opted in to receive marketing from you, so you can prove consent and
                                modify or remove personal information any time you need.</p>
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
                            <p>When you use a Mailchimp signup form to add contacts to your account, Mailchimp records the email address, IP address, and
                                timestamp associated with every subscriber or contact who completes and submits the form.</p>
                            <p>When you use a Mailchimp signup form to add contacts to your account, Mailchimp records the email address, IP address, and
                                timestamp associated with every subscriber or contact who completes and submits the form.</p>
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

export default ComplaincePage;