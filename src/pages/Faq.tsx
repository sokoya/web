import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import EndSection from "../components/AboutUs/EndSection";
import CTA from "../components/CTA";
import Header from "../components/Faq/Header";
import Questions from "../components/Faq/Questions";

type Props = {};

const Faq = (props: Props) => {
  return (
    <>
      <Helmet>
          <title>Frequently Asked Questions (FAQs) about Payscribe</title>
          <meta name="title" content="Frequently Asked Questions (FAQs) about Payscribe" />
          <meta name="description" content="Find answers to common questions about Payscribe's services, features, and how to use our platform. Our FAQ page covers everything from account setup to transaction details and troubleshooting. Get the information you need to make the most of Payscribe's digitized cash payments and daily essentials services." />
          <meta name="keywords" content="FAQ, Payscribe, Frequently Asked Questions, services, features, platform, account setup, transaction details, troubleshooting, digitized cash payments, daily essentials services, help, support, questions, answers" />

          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Frequently Asked Questions (FAQs) about Payscribe" />
          <meta property="og:description" content="Find answers to common questions about Payscribe's services, features, and how to use our platform. Our FAQ page covers everything from account setup to transaction details and troubleshooting. Get the information you need to make the most of Payscribe's digitized cash payments and daily essentials services." />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
          <meta property="og:url" content="https://www.payscribe.ng/faq" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Frequently Asked Questions (FAQs) about Payscribe" />
          <meta name="twitter:description" content="Find answers to common questions about Payscribe's services, features, and how to use our platform. Our FAQ page covers everything from account setup to transaction details and troubleshooting. Get the information you need to make the most of Payscribe's digitized cash payments and daily essentials services." />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
      </Helmet>
      <Header />
      <Questions />
      <EndSection />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default Faq;
