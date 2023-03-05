import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import Features from "../components/HowItWorks/Features";
import Header from "../components/HowItWorks/Header";
import Questions from "../components/HowItWorks/Questions";
import TimeLine from "../components/HowItWorks/TimeLine";

type Props = {};

const HowItWorks = (props: Props) => {
  return (
    <>
      <Helmet>
      <title>Understand How Payscribe Works and Digitize Your Cash Payments</title>
          <meta name="title" content="Understand How Payscribe Works and Digitize Your Cash Payments" />
          <meta name="description" content="Learn about the features and benefits of Payscribe, the platform that helps you digitize your cash payments and access daily essentials like airtime and data purchase. Discover how easy it is to use and how it can improve your financial management. Visit our website to learn more." />
          <meta name="keywords" content="Payscribe, how it works, digitize cash payments, digital transactions, airtime purchase, data purchase, financial management, secure payments, online top-up, mobile wallet, cashless living, financial management, digital financial services" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Understand How Payscribe Works and Digitize Your Cash Payments" />
          <meta property="og:description" content="Learn about the features and benefits of Payscribe, the platform that helps you digitize your cash payments and access daily essentials like airtime and data purchase. Discover how easy it is to use and how it can improve your financial management. Visit our website to learn more." />
          <meta property="og:image" content="https://www.payscribe.ng/assets/notice.jpg" />
          <meta property="og:url" content="https://www.payscribe.ng/how-it-works" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Understand How Payscribe Works and Digitize Your Cash Payments" />
          <meta name="twitter:description" content="Learn about the features and benefits of Payscribe, the platform that helps you digitize your cash payments and access daily essentials like airtime and data purchase. Discover how easy it is to use and how it can improve your financial management. Visit our website to learn more" />
          <meta property="og:image" content="https://www.payscribe.ng/assets/notice.jpg" />
      </Helmet>
      <Header />
      {/* <WhyUsePayscribe />
      <MidSection /> */}
      <TimeLine />
      <Features />
      <Questions />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default HowItWorks;
