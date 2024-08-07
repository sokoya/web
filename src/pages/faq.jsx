import React from "react";
import Footer from "../components/footer";
import Navigation from "../components/nav";

const FAQsPage = () => {
    return (
        <div className="faq">
            <Navigation />
            <div className="faq-hero">
                <div className="grid-2">
                    <div className="faq-hero-text">
                        <div className="">
                            <h5>Support</h5>
                            <h2>Questions we get asked</h2>
                            <p>Need help wih something? Here are our most frequently asked questions</p>
                        </div>
                    </div>
                    <div className="faq-hero-img">
                        <div className="dashboard-copy"></div>
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

export default FAQsPage;