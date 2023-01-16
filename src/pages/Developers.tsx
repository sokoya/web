import React from "react";
import Header from "../components/Overview/Header";
import { ScrollRestoration } from "react-router-dom";
import MidSection from "../components/Overview/MidSection";
import CTA from "../components/CTA";
import EndSection from "../components/AboutUs/EndSection";
import { Helmet } from "react-helmet";

type Props = {};

const Developers = (props: Props) => {
  return (
    <>
      <Helmet>
      <title>API documentation and resources for Developers - Payscribe</title>
          <meta name="title" content="API documentation and resources for Developers - Payscribe" />
          <meta name="description" content="Unlock the power of Payscribe's services for your business with our API documentation and resources for developers. Easily integrate our platform for digitizing cash payments, airtime and data purchase, electricity payments, and savings into your application. Start building today!" />
          <meta name="keywords" content="API, Developers, Payscribe, Digitizing cash payments, Airtime and data purchase, Electricity payments, Savings, Business, Integration, Platform, Application, Building" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="API documentation and resources for Developers - Payscribe" />
          <meta property="og:description" content="Unlock the power of Payscribe's services for your business with our API documentation and resources for developers. Easily integrate our platform for digitizing cash payments, airtime and data purchase, electricity payments, and savings into your application. Start building today!" />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
          <meta property="og:url" content="https://www.payscribe.ng/developers" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="API documentation and resources for Developers - Payscribe" />
          <meta name="twitter:description" content="Unlock the power of Payscribe's services for your business with our API documentation and resources for developers. Easily integrate our platform for digitizing cash payments, airtime and data purchase, electricity payments, and savings into your application. Start building today!" />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />

      </Helmet>
      <Header />
      <MidSection />
      <EndSection />
      <ScrollRestoration />
    </>
  );
};

export default Developers;
