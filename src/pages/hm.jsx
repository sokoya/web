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
            <h3 className="sec-title">
              Make authentication easy for everyone <br /> and easily without
              hassle
            </h3>
            <div className="grid-3 mt_3">
              <div className="how-to-single">
                <div className="how-to-story">
                  <div className="single-text-block">
                    <ion-icon name="boat-outline"></ion-icon>
                    <h4>Streamlined Transactions</h4>
                    <p>
                      Every market has its own regulations and behaviors.
                      Adyen’s solution adapts to local needs so that you can
                      offer frictionless authentication everywhere.
                    </p>
                  </div>
                  <div className="how-to-img"></div>
                </div>
              </div>
              <div className="how-to-single">
                <div className="how-to-story">
                  <div className="single-text-block">
                    <ion-icon name="boat-outline"></ion-icon>
                    <h4>Tackle authentication globally</h4>
                    <p>
                      Every market has its own regulations and behaviors.
                      Adyen’s solution adapts to local needs so that you can
                      offer frictionless authentication everywhere.
                    </p>
                  </div>
                  <div className="how-to-img"></div>
                </div>
              </div>
              <div className="how-to-single">
                <div className="how-to-story">
                  <div className="single-text-block">
                    <ion-icon name="boat-outline"></ion-icon>
                    <h4>Tackle authentication globally</h4>
                    <p>
                      Every market has its own regulations and behaviors.
                      Adyen’s solution adapts to local needs so that you can
                      offer frictionless authentication everywhere.
                    </p>
                  </div>
                  <div className="how-to-img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-story black-bg py_5 mt_5">
          <div className="contain">
            <div className="grid-2">
              <div>
                <h5>Our plans for the future</h5>
                <h2>
                  Make authentication easy for everyone and easily without
                  hassle
                </h2>
                <p ref={pushElementToRef}>
                  Take control of your finances with our advanced tracking and
                  reporting tools. Understand your spending habits and make
                  informed decisions to optimize your budget. Here’s how our
                  features can help you. Take control of your finances with our
                  advanced tracking and reporting tools. Take control of your
                  finances with our advanced tracking and reporting tools.
                </p>
                <div>
                  <ul>
                    <li>
                      <h4>500K+</h4>
                      <p>Daily Transaction Volume</p>
                    </li>
                    <li>
                      <h4>500K+</h4>
                      <p className="no-margin">Daily Transaction Volume</p>
                    </li>
                    <li>
                      <h4>500K+</h4>
                      <p>Daily Transaction Volume</p>
                    </li>
                    <li>
                      <h4>500K+</h4>
                      <p className="no-margin">Daily Transaction Volume</p>
                    </li>
                  </ul>
                </div>
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
                    Payscribe employs advanced encryption
                    and robust authentication methods to ensure that your
                    personal and financial information remains secure.
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
                <h5>Our plans for the future</h5>
                <h2>
                  Make authentication easy for everyone and easily without
                  hassle
                </h2>
                <p ref={pushElementToRef}>
                  Take control of your finances with our advanced tracking and
                  reporting tools. Understand your spending habits and make
                  informed decisions to optimize your budget. Here’s how our
                  features can help you. Take control of your finances with our
                  advanced tracking and reporting tools. Take control of your
                  finances with our advanced tracking and reporting tools.
                </p>
                <div>
                  <ul>
                    <li>
                      <h4>500K+</h4>
                      <p>Daily Transaction Volume</p>
                    </li>
                    <li>
                      <h4>500K+</h4>
                      <p className="no-margin">Daily Transaction Volume</p>
                    </li>
                    <li>
                      <h4>500K+</h4>
                      <p>Daily Transaction Volume</p>
                    </li>
                    <li>
                      <h4>500K+</h4>
                      <p className="no-margin">Daily Transaction Volume</p>
                    </li>
                  </ul>
                </div>
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
