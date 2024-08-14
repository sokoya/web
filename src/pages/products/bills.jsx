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
                            <h5>MANAGE YOUR BILLS</h5>
                            <h2>Simple Bill Payments: Manage and Pay Bills Quickly and Securely.</h2>
                            <p>Pay your bills quickly and securely with our easy-to-use service. Manage your regular expenses with 
                                ease, track payments effortlessly, and enjoy a smooth, hassle-free experience. Stay on top of 
                                your bills without any stress or complications.</p>
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
                            <ion-icon name="flash-outline"></ion-icon>
                            <h4>Convenient and Quick Payments</h4>
                            <p>Pay your bills conveniently and quickly. Our service ensures fast, hassle-free
                                transactions, so you can manage your payments with ease and stay on top of your finances effortlessly.</p>
                        </div>
                        <div>
                            <ion-icon name="today-outline"></ion-icon>
                            <h4>Track and Manage All Bills</h4>
                            <p>Effortlessly track and manage all your bills in one place. Stay organized, avoid
                                missed payments, and enjoy the convenience of our reliable service, keeping your finances in check.</p>
                        </div>
                        <div>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <h4>Secure and Reliable Transactions</h4>
                            <p>Pay your bills with confidence. Our secure and reliable service ensures that every
                                transaction is safe and dependable, making it easy for you to manage your payments with peace of mind.</p>
                        </div>
                    </div>
                </div>
                <div className="contain mt_5">
                    <h3 className="sec-title">Get the Most Out of Your Bill <br /> Payments with Our Easy Solutions</h3>
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
                                <p>After creating your account, navigate to the "Bill Payments" section. Select the bill payment plan
                                    that suits your needs, and enter the required details to proceed. It's simple and straightforward!</p>
                            </div>
                        </div>
                        <div className="how-to-single">
                            <div className="how-to-img"></div>
                            <div className="how-to-story mt_5">
                                <h4>Complete Payment with Card Details</h4>
                                <p>Finally, enter your card details and complete your payment. Input your payment information
                                    carefully, review the details, and confirm the transaction to finalize the payment process.</p>
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