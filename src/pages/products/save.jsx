import React from "react";
import Navigation from "../../components/nav";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

import FaqDisplay from "../../components/faq";

import ArrowRightMain from "../../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../../assets/images/arrow-up-right-gray.svg";

import PhoneImg from "../../assets/images/homepage/phone.png";
import ProductStories from "../../components/product-pages-story";

const AbtPage = () => {
    return (
        <div>
            <Navigation />
            <div className="about-hero">
                <div className="grid-2">
                    <div className="text-ba">
                        <div className="text-bar">
                            <h5>Save and Earn More</h5>
                            <h2>Smart Savings: Save More Efficiently and Watch Your Earnings Grow.</h2>
                            <p>Boost your savings effortlessly with our smart plans. Track your progress and watch your money grow over
                                time with easy, effective saving strategies. Start today and see your earnings increase
                                with minimal effort!</p>
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
                            <ion-icon name="expand-outline"></ion-icon>
                            <h4>Flexible Savings Plans</h4>
                            <p>Our plans are tailored to fit your lifestyle, giving you the freedom to save at your own
                                pace. Whether you're saving for a short or long-term goal, our
                                plans make it easy and convenient to stay on track.</p>
                        </div>
                        <div>
                            <ion-icon name="body-outline"></ion-icon>
                            <h4>Expert Investment Advice</h4>
                            <p>Receive expert investment advice tailored to your financial goals. Our
                                experienced advisors provide personalized insights and strategies designed to help you
                                make informed decisions.</p>
                        </div>
                        <div>
                            <ion-icon name="cellular-outline"></ion-icon>
                            <h4>High-Interest Returns</h4>
                            <p>Benefit from high-interest returns that boost your investment growth, making your money
                                work harder for you. With these higher rates, you can see faster progress towards your
                                financial goals.</p>
                        </div>
                    </div>
                </div>
                <div className="contain mt_5">
                    <h3 className="sec-title">Unlock the Full Potential <br /> of Your Savings and Earnings</h3>
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
                                <p>After creating your account, go to the "Investments" section. Choose an investment plan that fits
                                    your goals, and enter the necessary details to get started. It's easy and straightforward!</p>
                            </div>
                        </div>
                        <div className="how-to-single">
                            <div className="how-to-img"></div>
                            <div className="how-to-story mt_5">
                                <h4>Complete Payment with Card Details</h4>
                                <p>Finally, enter your investment amount and proceed to complete the transaction. Carefully input 
                                    your investment details, review all the information, and confirm to finalize your investment process.</p>
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