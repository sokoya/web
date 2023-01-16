import React from "react";
import Header from "../components/AirtimeToCash/Header";
import HowItWorks from "../components/AirtimeToCash/HowItWorks";
import CTA from "../components/CTA";
import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet";

type Props = {};

const AirtimeToCash = (props: Props) => {
  return (
    <>
      <Helmet>
      <title>Convert Airtime to Instant Cash Effortlessly with Payscribe</title>
          <meta name="title" content="Convert Airtime to Instant Cash Effortlessly with Payscribe" />
          <meta name="description" content="Experience a new level of convenience with Payscribe's airtime to cash feature. Easily convert your airtime to cash and use it for payments, savings, and more. Sign up now to access this feature and many more on Payscribe's platform." />

          <meta name="robots" content="index, follow"/>
          <meta property="og:title" content="Convert Airtime to Instant Cash Effortlessly with Payscribe"/>
          <meta property="og:description" content="Experience a new level of convenience with Payscribe's airtime to cash feature. Easily convert your airtime to cash and use it for payments, savings, and more. Sign up now to access this feature and many more on Payscribe's platform."/>
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png"/>
          <meta property="og:url" content="https://www.payscribe.ng/airtime-to-cash"/>
          <meta property="og:site_name" content="Payscribe"/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@payscribe"/>
          <meta name="twitter:title" content="Convert Airtime to Instant Cash Effortlessly with Payscribe"/>
          <meta name="twitter:description" content="Experience a new level of convenience with Payscribe's airtime to cash feature. Easily convert your airtime to cash and use it for payments, savings, and more. Sign up now to access this feature and many more on Payscribe's platform."/>
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png"/>
      </Helmet>    
      <Header />
      <HowItWorks />

      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default AirtimeToCash;
