import React from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

import FaqDisplay from "../components/faq";

import ArrowRightMain from "../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../assets/images/arrow-up-right-gray.svg";

import PhoneImg from "../assets/images/homepage/phone.png";
import ProductStories from "../components/product-pages-story";

const AbtPage = () => {
    return (
        <div>
            <Navigation />
            <div className="about-hero">
                <div className="grid-2">
                    <div className="text-ba">
                        <div className="text-bar">
                            <h5>Manage Payments</h5>
                            <h2>Global Payments Made Easy: Send and Receive Money Anywhere.</h2>
                            <p>Send and receive payments anywhere in the world effortlessly. Our platform makes
                                international transactions simple and secure, ensuring your money moves quickly
                                and reliably, no matter where you are.</p>
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
                    <div className="grid-3">
                        <div>
                            <ion-icon name="globe-outline"></ion-icon>
                            <h4>Fast International Transfers</h4>
                            <p>Send and receive money across borders quickly and
                                securely, ensuring your funds reach their destination efficiently. Enjoy a seamless and reliable process
                                for all your global financial needs.
                            </p>
                        </div>
                        <div>
                            <ion-icon name="tablet-landscape-outline"></ion-icon>
                            <h4>Low Transfer Fees</h4>
                            <p>Benefit from our low transfer fees for international transactions. Enjoy affordable and secure
                                money transfers, with clear and transparent costs that help you save on every transfer.</p>
                        </div>
                        <div>
                            <ion-icon name="shuffle-outline"></ion-icon>
                            <h4>Multi-Currency Support</h4>
                            <p>Easily manage your funds with our multi-currency support. Transfer and receive money in
                                various currencies with ease, all while enjoying seamless transactions and competitive exchange rates.</p>
                        </div>
                    </div>
                </div>
                <div className="contain mt_5">
                    <h3 className="sec-title">Maximize Your Savings <br /> and Convenience with Gift Cards</h3>
                    <div className="grid-3 mt_2">
                        <div className="how-to-single">
                            <div className="how-to-img"></div>
                            <div className="how-to-story mt_5">
                                <h4>Create a free account</h4>
                                <p>To get started, the first step is to create an account. Simply click on the "Create a Free Account" button, fill
                                    in your details, and you're ready to go. Creating an account is quick, easy, and free!</p>
                            </div>
                        </div>
                        <div className="how-to-single">
                            <div className="how-to-img"></div>
                            <div className="how-to-story mt_5">
                                <h4>Pick Your Plan and Enter Details</h4>
                                <p>After creating your account, go to the "Transfers" section. Choose the type of transfer you want to 
                                    make, and enter the necessary details to get started. It's easy and straightforward!</p>
                            </div>
                        </div>
                        <div className="how-to-single">
                            <div className="how-to-img"></div>
                            <div className="how-to-story mt_5">
                                <h4>Complete Transaction</h4>
                                <p>Finally, enter your transfer amount and proceed to complete the transaction. Carefully input the 
                                    transfer details, review all the information to be sure, and confirm to finalize the process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductStories />
            <FaqDisplay />
            <div className="width-60">
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