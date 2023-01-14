import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import EndSection from "../components/AboutUs/EndSection";
import CTA from "../components/CTA";
import Header from "../components/Faq/Header";
import Questions from "../components/Faq/Questions";

type Props = {};

const Faq = (props: Props) => {
  return (
    <>
      <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
      </Helmet>
      <Header />
      <Questions />
      <EndSection />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default Faq;
