import React from "react";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import About from "../components/SellGiftCards/About";
import Header from "../components/SellGiftCards/Header";

type Props = {};

const SellGiftCards = (props: Props) => {
  return (
    <>
      <Header />
      <About />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default SellGiftCards;
