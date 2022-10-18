import React from "react";
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
    </>
  );
};

export default SellGiftCards;
