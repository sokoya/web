import React from "react";
import { ScrollRestoration } from "react-router-dom";
import EndSection from "../components/AboutUs/EndSection";
import CTA from "../components/CTA";
import Header from "../components/Faq/Header";
import Questions from "../components/Faq/Questions";

type Props = {};

const Faq = (props: Props) => {
  return (
    <>
      <Header />
      <Questions />
      <EndSection />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default Faq;
