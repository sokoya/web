import "../assets/css/homepage.css";

import React, { useRef } from "react";
import Navigation from "../components/nav";

import { Link } from "react-router-dom";

import ArrowRightMain from "../assets/images/arrow-up-right.svg";
import ArrowRightGrayMain from "../assets/images/arrow-up-right-gray.svg";
import Footer from "../components/footer";
import FaqDisplay from "../components/faq";

import PhoneImg from "../assets/images/homepage/phone.png";

const Homepage = () => {
  const textRef = useRef([]);
  const pushElementToRef = (ele) => {
    textRef.current.push(ele);
  };

  return (
    <div className="">
      <Navigation />
      <div className="homepage">
        <div className="about-hero">
          <div className="grid-2">
            <div className="text-ba">
              <div className="text-bar">
                <h5>Simplifying Finance for All</h5>
                <h2>
                  Transforming Financial Management for You and Your Business.
                </h2>
                <p>
                  Experience a new era of financial control with Payscribe.
                  Whether you're managing personal finances or running a
                  business, our tailored solutions streamline transactions,
                  optimize operations, and support your growth every step of the
                  way.
                </p>
                <div className="button-flex mt_3">
                  <Link className="btn btn-white" to="/">
                    Open a Free Account{" "}
                    <img src={ArrowRightMain} alt="arrow right" />
                  </Link>
                  <Link className="btn btn-default" to="/">
                    Reach out to us{" "}
                    <img src={ArrowRightGrayMain} alt="arrow right" />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="story-hero-img"></div>
            </div>
          </div>
        </div>
        <div className="home-props">
          <div className="contain mt_5">
            <div className="contain">
              <h3 className="sec-title">
                Comprehensive Financial <br />
                Tools for All Users
              </h3>
              <div className="grid-2 mt_3">
                <div className="home-single-props">
                  <div className="single-props-content">
                    <p className="tag">FOR INDIVIDUALS</p>
                    <h3>
                      All the Essential Financial Tools You Need to Simplify
                      Your Daily Life and Manage Your Money Easily
                    </h3>
                  </div>
                  <div className="single-props-img">
                    <div className="img-div-cover"></div>
                  </div>
                </div>
                <div className="home-single-props">
                  <div className="single-props-content">
                    <p className="tag">FOR FREELANCERS</p>
                    <h3>
                      Easily Create Invoices, Receive Payments, and Manage
                      Projects with Our Comprehensive Freelance Solutions
                    </h3>
                  </div>
                  <div className="single-props-img">
                    <div className="img-div-cover"></div>
                  </div>
                </div>
              </div>
              <div className="home-single-props main mt_3">
                <div className="grid-2">
                  <div className="single-props-content">
                    <p className="tag">FOR BUSINESSES</p>
                    <h3>
                      Simplify Your Business’s Financial Operations and
                      Streamline Transactions with Our All-in-One Solutions
                    </h3>
                    <p>
                      Streamline your financial operations with our all-in-one
                      solution. Manage payments, track transactions, and
                      simplify accounting tasks to keep your business running
                      smoothly and efficiently.
                    </p>
                  </div>
                  <div className="main-img-content">
                    <div className="main-content"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-story black-bg py_5 mt_5">
          <div className="contain">
            <div className="grid-2">
              <div>
                <h5>Seamless Financial Infrastructure</h5>
                <h2>Revolutionize Your Financial Operations with Payscribe!</h2>
                <p>
                  Payscribe delivers a secure, scalable financial infrastructure
                  with APIs that integrate seamlessly into your systems. This
                  allows you to efficiently manage transactions, streamline
                  operations, and enhance engagement. Whether you're a fintech,
                  virtual terminal, or e-commerce, Payscribe offers a
                  comprehensive suite of financial tools supported by detailed
                  documentation and dedicated support.
                </p>
                {/* <p>
                  Payscribe offers a secure, scalable financial infrastructure
                  with APIs that seamlessly integrate into your existing
                  systems. This enables you to manage transactions at scale,
                  streamline operations, and enhance customer engagement.
                  Whether you're a fintech, virtual terminal, or e-commerce
                  platform, Payscribe provides tools for a comprehensive range
                  of financial activities, supported by detailed documentation
                  and dedicated support.
                </p> */}
                <ul>
                  <li>
                    <ion-icon name="apps-outline"></ion-icon>
                    <p>Secure and scalable</p>
                  </li>
                  <li>
                    <ion-icon name="apps-outline"></ion-icon>
                    <p>Seamless API integration</p>
                  </li>
                  <li>
                    <ion-icon name="apps-outline"></ion-icon>
                    <p>Comprehensive financial tools</p>
                  </li>
                  <li>
                    <ion-icon name="apps-outline"></ion-icon>
                    <p>Excellent customer support</p>
                  </li>
                </ul>
                {/* <p ref={pushElementToRef}>
                  Payscribe provides a secure, scalable financial infrastructure
                  that empowers your business to offer better financial
                  products, streamline operations, and enhance customer
                  connections. Whether you're a fintech, virtual terminal, or
                  e-commerce, Payscribe gives you the tools to scale and boost
                  user engagement.
                </p> */}
                {/* <p ref={pushElementToRef}>
                  Payscribe’s APIs integrate seamlessly with your existing
                  systems, enabling you to manage transactions at scale without
                  disruption. Our APIs cover various financial activities, from
                  payments to data aggregation, allowing you to offer a full
                  suite of services. With detailed documentation and dedicated
                  support, integrating Payscribe is both simple and
                  transformative.
                </p> */}
              </div>
              <div>
                <div className="story-img"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="advantage-sect py_5">
          <div className="contain">
            <div className="grid-3">
              <div>
                <div className="single-advantage-data">
                  <ion-icon name="boat-outline"></ion-icon>
                  <h4>Streamlined Transactions</h4>
                  <p>
                    Simplify your financial processes with our easy-to-use
                    platform, designed to make managing and executing
                    transactions smooth and efficient.
                  </p>
                </div>
                <div className="single-advantage-data no-margin">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <h4>Enhanced Security</h4>
                  <p ref={pushElementToRef}>
                    Payscribe employs advanced encryption and robust
                    authentication methods to ensure that your personal and
                    financial information remains secure.
                  </p>
                </div>
              </div>
              <div>
                <div className="advantage-img"></div>
              </div>
              <div>
                <div className="single-advantage-data">
                  <ion-icon name="browsers-outline"></ion-icon>
                  <h4>Real-Time Insights</h4>
                  <p ref={pushElementToRef}>
                    Stay ahead with instant access to up-to-date financial
                    information. Payscribe provides real-time data on
                    transactions, and financial activity as they happen.
                  </p>
                </div>
                <div className="single-advantage-data no-margin">
                  <ion-icon name="boat-outline"></ion-icon>
                  <h4>Flexible Integration</h4>
                  <p ref={pushElementToRef}>
                    Seamlessly connect with various financial services and
                    tools, enabling you to customize and expand your financial
                    management according to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-story black-bg py_5">
          <div className="contain">
            <div className="grid-2">
              <div>
                <h5>Something for everyone</h5>
                <h2>
                  Everything You Need for Financial Control and Peace of Mind!
                </h2>
                <p>
                  Payscribe simplifies managing finances for individuals and
                  freelancers, helping you track income, control expenses, and
                  streamline payment processes. With flexible invoicing and
                  payment options, you can easily create invoices, generate
                  payment links, and receive payments. Supporting various
                  payment methods, Payscribe ensures secure and efficient
                  processing for both local and international transactions.
                </p>
                <div>
                  <ul>
                    <li>
                      <ion-icon name="bag-remove-outline"></ion-icon>
                      <p>Simplifies financial management</p>
                    </li>
                    <li>
                      <ion-icon name="bag-remove-outline"></ion-icon>
                      <p>Streamlines payments</p>
                    </li>
                    <li>
                      <ion-icon name="bag-remove-outline"></ion-icon>
                      <p>Flexible invoicing</p>
                    </li>
                    <li>
                      <ion-icon name="bag-remove-outline"></ion-icon>
                      <p>Secure processing</p>
                    </li>
                  </ul>
                </div>
                {/* <p ref={pushElementToRef}>
                  Payscribe is your partner in financial independence, offering
                  tools to simplify your financial life. Whether you're managing
                  personal finances or streamlining payments as a freelancer,
                  our platform helps you track income, manage expenses, and stay
                  in control. With Payscribe, take charge of your finances with
                  confidence and ease.
                </p>
                <p ref={pushElementToRef}>
                  Freelancers often struggle with managing various payment
                  methods and clients. Payscribe streamlines this with flexible
                  options to create invoices, generate payment links, and
                  receive payments directly. Supporting multiple payment
                  methods, our platform offers you and your clients the
                  convenience to choose what works best. Whether working locally
                  or internationally, Payscribe ensures secure and efficient
                  payment processing.
                </p> */}
              </div>
              <div>
                <div className="story-img"></div>
              </div>
            </div>
          </div>
        </div>
        <FaqDisplay />
        <div className="container">
          <div className="join-us">
            <div className="grid-2">
              <div>
                <h3>Start Building Today</h3>
                <p>
                  Sign up in seconds and start processing payments right away!
                  Alternatively, our experts are here to help you craft a
                  tailored payment solution that perfectly suits your business
                  needs - just reach out to us!.
                </p>
                <div className="flex-div">
                  <Link className="btn btn-accent" to="">
                    Start Building{" "}
                    <img src={ArrowRightMain} alt="arrow right" />
                  </Link>
                  <Link className="btn btn-gray-border" to="">
                    Contact Sales{" "}
                    <img src={ArrowRightGrayMain} alt="arrow right" />
                  </Link>
                </div>
              </div>
              <div></div>
              <div>
                <div className="phone-block">
                  <img src={PhoneImg} className="phone" alt="Phone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
