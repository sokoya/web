import React from "react";
import Header from "../components/AirtimeToCash/Header";
import HowItWorks from "../components/AirtimeToCash/HowItWorks";
import CTA from "../components/CTA";
import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet";

type Props = {};

const AirtimeToCash = (props: Props) => {
  return (
    <>
      <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
      </Helmet>    
      <Header />
      <HowItWorks />

      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default AirtimeToCash;
