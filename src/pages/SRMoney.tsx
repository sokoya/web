import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import About from "../components/SRMoney/About";
import Header from "../components/SRMoney/Header";

type Props = {};

const SRMoney = (props: Props) => {
  return (
    <>
      <Helmet>
      <title>Effortlessly Send and Receive Money with Payscribe</title>
          <meta name="title" content="Effortlessly Send and Receive Money with Payscribe" />
          <meta name="description" content="Easily transfer money to friends and family with Payscribe's Send and Receive Money feature. Our platform offers secure and convenient online money transfer services, with low fees and fast processing times. Sign up now and experience the ease of Payscribe!" />
          <meta name="keywords" content="Send money,    Receive money,    Online money transfer,    Secure money transfer,    Convenient money transfer,    Low fees,    Fast processing,    Payscribe,    Money transfer,    Digital money transfer,    Online payments,    Secure payments,    Mobile money transfer,    Digital wallet,    Electronic money transfer,    Mobile payments,    Digital payments,    Online banking,    Secure online payments,    Mobile banking services,    Digital banking services,    Online banking services,    Mobile money services,    Digital money services,    Online money services,    Secure online transactions,    Mobile transactions services,    Digital transactions services,    Online transactions services,    Mobile banking account,    Digital banking account,    Online banking account,    Secure online banking account,    Mobile money account,    Digital money account,    Online money account,    Secure online money account,    Cashless society,    Digital financial services" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Effortlessly Send and Receive Money with Payscribe" />
          <meta property="og:description" content="Easily transfer money to friends and family with Payscribe's Send and Receive Money feature. Our platform offers secure and convenient online money transfer services, with low fees and fast processing times. Sign up now and experience the ease of Payscribe!" />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
          <meta property="og:url" content="https://www.payscribe.ng/send-receive-money" />
          <meta property="og:site_name" content="Payscribe" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Effortlessly Send and Receive Money with Payscribe" />
          <meta name="twitter:description" content="Easily transfer money to friends and family with Payscribe's Send and Receive Money feature. Our platform offers secure and convenient online money transfer services, with low fees and fast processing times. Sign up now and experience the ease of Payscribe!" />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
      </Helmet>
      <Header />
      <About />
      <CTA />
      <ScrollRestoration />
    </>
  );
};
export default SRMoney;
