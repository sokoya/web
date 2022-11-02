import React from "react";
import { ScrollRestoration } from "react-router-dom";
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
      <ScrollRestoration />
    </>
  );
};
export default SRMoney;
