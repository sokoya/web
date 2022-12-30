import React from "react";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import About from "../components/WhyPayscribe/About";
import Header from "../components/WhyPayscribe/Header";
import MidSection from "../components/WhyPayscribe/MidSection";
import WhyUsePayscribe from "../components/WhyPayscribe/WhyUsePayscribe";

type Props = {};

const WhyPayscribe = (props: Props) => {
  return (
    <>
      <Header />
      <WhyUsePayscribe />
      <MidSection />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default WhyPayscribe;
