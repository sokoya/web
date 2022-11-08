import React from "react";
import Header from "../components/AirtimeToCash/Header";
import HowItWorks from "../components/AirtimeToCash/HowItWorks";
import CTA from "../components/CTA";
import { ScrollRestoration } from "react-router-dom";

type Props = {};

const AirtimeToCash = (props: Props) => {
  return (
    <>
      <Header />
      <HowItWorks />

      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default AirtimeToCash;
