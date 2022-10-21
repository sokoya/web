import React from "react";
import CTA from "../components/CTA";
import Section3 from "../components/SellGiftCards/Section3";
import About from "../components/SRMoney/About";
import Header from "../components/SRMoney/Header";

type Props = {};

const SRMoney = (props: Props) => {
  return (
    <>
      <Header />
      <About />
      <Section3 />
      <CTA />
    </>
  );
};
export default SRMoney;
