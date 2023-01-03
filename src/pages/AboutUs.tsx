import React from "react";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import Header from "../components/AboutUs/Header";
import MidSection from "../components/AboutUs/MidSection";
import EndSection from "../components/AboutUs/EndSection";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <Header />
      {/* <WhyUsePayscribe />
      <MidSection /> */}
      <MidSection />
      <CTA />
      <EndSection />
      <ScrollRestoration />
    </>
  );
};

export default AboutUs;
