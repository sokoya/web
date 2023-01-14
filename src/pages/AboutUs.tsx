import React from "react";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import Header from "../components/AboutUs/Header";
import MidSection from "../components/AboutUs/MidSection";
import EndSection from "../components/AboutUs/EndSection";
import {Helmet} from "react-helmet";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
      </Helmet>
      <Header />
      {/* <WhyUsePayscribe />
      <MidSection /> */}
      <MidSection />
      <EndSection />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default AboutUs;
