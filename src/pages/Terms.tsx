import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import Header from "../components/Privacy/Header";
import TermsPage from "../components/Terms/Terms";

type Props = {};

const Terms = (props: Props) => {
  return (
    <>
      <Helmet>
      <title>Why Payscribe - The Best Solution for Digitizing Cash Payments and Daily Essentials</title>
          <meta name="title" content="Why Payscribe - The Best Solution for Digitizing Cash Payments and Daily Essentials" />
          <meta name="description" content="Discover the benefits of using Payscribe for digitizing cash payments and managing daily essentials like airtime and data purchase. Learn how Payscribe's secure and convenient platform can help you improve your financial management and stay connected on-the-go. Check out our website to learn more." />
          <meta name="keywords" content="Payscribe, digitize cash payments, daily essentials, airtime purchase, data purchase, secure payments, financial management, convenience, cashless transactions." />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Why Payscribe - The Best Solution for Digitizing Cash Payments and Daily Essentials" />
          <meta property="og:description" content="Discover the benefits of using Payscribe for digitizing cash payments and managing daily essentials like airtime and data purchase. Learn how Payscribe's secure and convenient platform can help you improve your financial management and stay connected on-the-go. Check out our website to learn more." />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
          <meta property="og:url" content="https://www.payscribe.ng/why-payscribe" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Why Payscribe - The Best Solution for Digitizing Cash Payments and Daily Essentials" />
          <meta name="twitter:description" content="Discover the benefits of using Payscribe for digitizing cash payments and managing daily essentials like airtime and data purchase. Learn how Payscribe's secure and convenient platform can help you improve your financial management and stay connected on-the-go. Check out our website to learn more." />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
      </Helmet>
      <Header pageTitle="Terms of Services"/>
      <TermsPage />
      <ScrollRestoration />
    </>
  );
};

export default Terms;
