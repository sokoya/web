import React from "react";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import Header from "../components/AboutUs/Header";
import MidSection from "../components/AboutUs/MidSection";
import EndSection from "../components/AboutUs/EndSection";
import {Helmet} from "react-helmet";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <Helmet>
          <title>About Payscribe - The Future of Cashless Transactions and Daily Essentials</title>
          <meta name="title" content="About Payscribe - The Future of Cashless Transactions and Daily Essentials" />
          <meta name="description" content="Learn more about Payscribe and our mission to revolutionize the way people manage their daily essentials and savings. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe." />
          <meta name="keywords" content="Payscribe, About Us, Cashless Transactions, Daily Essentials, Airtime Purchase, Data Purchase, Electricity Payments, Savings, Secure Payments, Convenience, Financial Management, Digital Transactions, Online Bill Payments, Mobile Recharge" />
          
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="About Payscribe - The Future of Cashless Transactions and Daily Essentials" />
          <meta property="og:description" content="Learn more about Payscribe and our mission to revolutionize the way people manage their daily essentials and savings. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe." />
          <meta property="og:image" content="https://www.payscribe.ng/assets/notice.jpg" />
          <meta property="og:url" content="https://www.payscribe.ng/about-us" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="About Payscribe - The Future of Cashless Transactions and Daily Essentials" />
          <meta name="twitter:description" content="Learn more about Payscribe and our mission to revolutionize the way people manage their daily essentials and savings. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe." />
          <meta property="og:image" content="https://www.payscribe.ng/assets/notice.jpg" />
      </Helmet>
      <Header />
      {/* <WhyUsePayscribe />
      <MidSection /> */}
      <MidSection />
      <EndSection />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default AboutUs;
