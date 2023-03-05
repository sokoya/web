import React from "react";
import Header from "../components/Save&Earn/Header";
import About from "../components/Save&Earn/About";
import CTA from "../components/CTA";
import Goals from "../components/Save&Earn/Goals";
import { Helmet } from "react-helmet";

type Props = {};

const SaveEarn = (props: Props) => {
  return (
    <>
      <Helmet>
      <title>Save and Earn with Payscribe's new feature</title>
          <meta name="title" content="Save and Earn with Payscribe's new feature" />
          <meta name="description" content="Unlock the power of saving and earning with Payscribe's new feature. Effortlessly manage your daily transactions and earn rewards for using the platform. Experience the convenience of cashless payments and secure transactions with Payscribe. Sign up now!" />
          <meta name="keywords" content="Payscribe, savings, earning, rewards, cashless payments, digital transactions, secure transactions, daily essentials, airtime, data, electricity payments, financial management, mobile payments, online payments, digital services, savings account, rewards program" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Save and Earn with Payscribe's new feature" />
          <meta property="og:description" content="Unlock the power of saving and earning with Payscribe's new feature. Effortlessly manage your daily transactions and earn rewards for using the platform. Experience the convenience of cashless payments and secure transactions with Payscribe. Sign up now!" />
          <meta property="og:image" content="https://www.payscribe.ng/assets/notice.jpg" />
          <meta property="og:url" content="https://www.payscribe.ng/save-earn" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Save and Earn with Payscribe's new feature" />
          <meta name="twitter:description" content="Unlock the power of saving and earning with Payscribe's new feature. Effortlessly manage your daily transactions and earn rewards for using the platform. Experience the convenience of cashless payments and secure transactions with Payscribe. Sign up now!" />
          <meta property="og:image" content="https://www.payscribe.ng/assets/notice.jpg" />
      </Helmet>
      <Header />
      <About />
      <Goals />
      <CTA />
    </>
  );
};

export default SaveEarn;
