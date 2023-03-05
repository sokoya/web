import React from "react";
import Header from "../components/BillsPayment/Header";
import HowToPay from "../components/BillsPayment/HowToPay";
import Partners from "../components/BillsPayment/Partners";
import CTA from "../components/CTA";
import { ScrollRestoration } from "react-router-dom";
import TwoColumn from "../components/BillsPayment/TwoColumn";
import { Helmet } from "react-helmet";

type Props = {};

function BillsPayment({}: Props) {
  return (
    <>
      <Helmet>
      <title>Easily manage and pay your bills with Payscribe's bill payment service.</title>
          {/* <meta name="title" content="Easily manage and pay your bills with Payscribe's bill payment service. Our platform offers a secure and convenient way to pay bills online, including electricity, water, and credit card bills. Experience the convenience of cashless transactions and schedule automatic payments with Payscribe. Sign up now!" /> */}
          <meta name="description" content="Easily manage and pay your bills with Payscribe's bill payment service. Our platform offers a secure and convenient way to pay bills online, including electricity, water, and credit card bills. Experience the convenience of cashless transactions and schedule automatic payments with Payscribe. Sign up now!" />
          <meta name="keywords" content="bill payment, bills, pay bills, online bill payment, secure bill payment, automatic bill payment, electricity bill, water bill, credit card bill, cashless transactions, schedule bill payment, Payscribe" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Efficiently Pay Your Bills with Payscribe's Bill Payment Service" />
          <meta property="og:description" content="Easily manage and pay your bills with Payscribe's bill payment service. Our platform offers a secure and convenient way to pay bills online, including electricity, tv subscription, water, and credit card bills. Experience the convenience of cashless transactions and schedule automatic payments with Payscribe. Sign up now!" />
          <meta property="og:image" content="https://www.payscribe.ng/assets/notice.jpg" />
          <meta property="og:url" content="https://www.payscribe.ng/bills-payment" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Efficiently Pay Your Bills with Payscribe's Bill Payment Service" />
          <meta name="twitter:description" content="Easily manage and pay your bills with Payscribe's bill payment service. Our platform offers a secure and convenient way to pay bills online, including electricity, tv subscription, water, and credit card bills. Experience the convenience of cashless transactions and schedule automatic payments with Payscribe. Sign up now!" />
          <meta property="og:image" content="https://www.payscribe.ng/assets/notice.jpg" />

      </Helmet>
      <Header />
      <HowToPay />
      <TwoColumn />
      <Partners />
      <CTA />
      <ScrollRestoration />
    </>
  );
}

export default BillsPayment;
