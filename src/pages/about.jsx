import "../assets/css/about.css";

import React from "react";
import Navigation from "../components/nav";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

import Iconbar from "../assets/images/_1.svg?react";
import BusinessImgg from "../assets/images/homepage/new/paystack.jpg";

const AboutUsPage = () => {
    return (
        <div className="about-page">
            <Navigation />
            <div className="abt-hero">
                <div className="cover-div">
                    <div className="abt-hero-text">
                        {/* <div className="grid-2"> */}
                        <div>
                            <h3>Digitizing wealth management for Africans</h3>
                            <p>We are building savings and investment culture among the growing population of underserved
                                African middle class and millennials.</p>
                            {/* <h3>Invest in the largest collection of mutual funds</h3>
                                <p>Mutual funds are investment arrangements that pool funds from various investors. This pool of funds is then
                                    invested in a mix of carefully selected instruments. For example, a mutual fund can invest your money in a
                                    basket of stocks.</p> */}
                            {/* <Link className="btn btn-main" to="">Create a free account</Link> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="abt-text-body py_5">
                <div className="cover-div">
                    <div className="abt-header-text">
                        <h4>Save money on your own terms</h4>
                        <p>With just one account, you can save in multiple different ways. How about that?</p>
                    </div>
                    <div className="grid-3 mt_5">
                        <div className="div-text-box">
                            <div className="div-box-header">
                                <img src={Iconbar} alt="" />
                            </div>
                            <h4>Regular Savings</h4>
                            <p>From budgeting and saving to investing and managing expenses, we provide the
                                tools and support necessary to help you achieve financial success save money.</p>
                        </div>
                        <div className="div-text-box">
                            <div className="div-box-header">
                                <img src={Iconbar} alt="" />
                            </div>
                            <h4>Regular Savings</h4>
                            <p>From budgeting and saving to investing and managing expenses, we provide the
                                tools and support necessary to help you achieve financial success save money.</p>
                        </div>
                        <div className="div-text-box">
                            <div className="div-box-header">
                                <img src={Iconbar} alt="" />
                            </div>
                            <h4>Regular Savings</h4>
                            <p>From budgeting and saving to investing and managing expenses, we provide the
                                tools and support necessary to help you achieve financial success save money.</p>
                        </div>
                        <div className="div-text-box">
                            <div className="div-box-header">
                                <img src={Iconbar} alt="" />
                            </div>
                            <h4>Regular Savings</h4>
                            <p>From budgeting and saving to investing and managing expenses, we provide the
                                tools and support necessary to help you achieve financial success save money.</p>
                        </div>
                        <div className="div-text-box">
                            <div className="div-box-header">
                                <img src={Iconbar} alt="" />
                            </div>
                            <h4>Regular Savings</h4>
                            <p>From budgeting and saving to investing and managing expenses, we provide the
                                tools and support necessary to help you achieve financial success save money.</p>
                        </div>
                        <div className="div-text-box">
                            <div className="div-box-header">
                                <img src={Iconbar} alt="" />
                            </div>
                            <h4>Regular Savings</h4>
                            <p>From budgeting and saving to investing and managing expenses, we provide the
                                tools and support necessary to help you achieve financial success save money.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="abt-body mt_5">
                <div className="cover-div">
                    <div className="grid-2">
                        <div>
                            <p className="text-top-tag">OUR PRODUCT OFFERINGS</p>
                            <h4 className="sect-title">Full Comprehensive Financial <br /> Solutions for You</h4>
                            <p>Payscribe offers a wide range of financial solutions tailored to your needs. From
                                budgeting and saving to investing and managing expenses, we provide the tools and support necessary to help you
                                achieve financial success. Whether you’re just starting out or looking to optimize your finances, we’re here to
                                assist you every step of the way.</p>
                            <div className="mt_5">
                                <ul className="break">
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Send / Receive Payments</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> USD/NGN cards for transactions</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bill Managements</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Airtime to Cash</li>
                                    <li className="last-two"><ion-icon name="checkmark-done-circle-outline"></ion-icon> Track your Expenses</li>
                                    <li className="last-two"><ion-icon name="checkmark-done-circle-outline"></ion-icon> Cross-platform support</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="img-block">
                                <img src={BusinessImgg} className="internal" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="grid-2 mt_5">
                        <div>
                            <div className="img-block">
                                <img src={BusinessImgg} className="internal" alt="" />
                            </div>
                        </div>
                        <div>
                            <p className="text-top-tag">OUR PRODUCT OFFERINGS</p>
                            <h4 className="sect-title">Full Comprehensive Financial <br /> Solutions for You</h4>
                            <p>Payscribe offers a wide range of financial solutions tailored to your needs. From
                                budgeting and saving to investing and managing expenses, we provide the tools and support necessary to help you
                                achieve financial success. Whether you’re just starting out or looking to optimize your finances, we’re here to
                                assist you every step of the way.</p>
                            <div className="mt_5">
                                <ul className="break">
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Send / Receive Payments</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> USD/NGN cards for transactions</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bill Managements</li>
                                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Airtime to Cash</li>
                                    <li className="last-two"><ion-icon name="checkmark-done-circle-outline"></ion-icon> Track your Expenses</li>
                                    <li className="last-two"><ion-icon name="checkmark-done-circle-outline"></ion-icon> Cross-platform support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage;