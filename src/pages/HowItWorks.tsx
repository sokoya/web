import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import Features from "../components/HowItWorks/Features";
import Header from "../components/HowItWorks/Header";
import Questions from "../components/HowItWorks/Questions";
import TimeLine from "../components/HowItWorks/TimeLine";

type Props = {};

const HowItWorks = (props: Props) => {
  return (
    <>
      <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
      </Helmet>
      <Header />
      {/* <WhyUsePayscribe />
      <MidSection /> */}
      <TimeLine />
      <Features />
      <Questions />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default HowItWorks;
