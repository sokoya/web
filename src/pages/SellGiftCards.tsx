import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import About from "../components/SellGiftCards/About";
import Header from "../components/SellGiftCards/Header";

type Props = {};

const SellGiftCards = (props: Props) => {
  return (
    <>
      <Helmet>
      <title>Sell Your Gift Cards for Cash with Payscribe</title>
          <meta name="title" content="Sell Your Gift Cards for Cash with Payscribe" />
          <meta name="description" content="Convert your unused gift cards into cash with Payscribe. Our platform offers an easy and secure way to sell gift cards from popular retailers. Get cash for your gift cards today with Payscribe." />
          <meta name="keywords" content="Sell gift cards,    Gift card cash,    Gift card exchange,    Payscribe,    Gift card trading,    Cash for gift cards,    Gift card resale,    Retailer gift cards,    Gift card buyback,    Gift card redemption,    Gift card to cash,    Gift card sales,    Convert gift cards,    Gift card value,    Sell unwanted gift cards,    Sell unused gift cards" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Sell Your Gift Cards for Cash with Payscribe" />
          <meta property="og:description" content="Convert your unused gift cards into cash with Payscribe. Our platform offers an easy and secure way to sell gift cards from popular retailers. Get cash for your gift cards today with Payscribe." />
          <meta property="og:image" content="https://www.payscribe.ng/assets/notice.jpg" />
          <meta property="og:url" content="https://www.payscribe.ng/sell-giftcards" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Sell Your Gift Cards for Cash with Payscribe" />
          <meta name="twitter:description" content="Convert your unused gift cards into cash with Payscribe. Our platform offers an easy and secure way to sell gift cards from popular retailers. Get cash for your gift cards today with Payscribe." />
          <meta property="og:image" content="https://www.payscribe.ng/assets/notice.jpg" />
      </Helmet>
      <Header />
      <About />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default SellGiftCards;
