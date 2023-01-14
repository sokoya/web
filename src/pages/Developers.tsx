import React from "react";
import Header from "../components/Overview/Header";
import { ScrollRestoration } from "react-router-dom";
import MidSection from "../components/Overview/MidSection";
import CTA from "../components/CTA";
import EndSection from "../components/AboutUs/EndSection";
import { Helmet } from "react-helmet";

type Props = {};

const Developers = (props: Props) => {
  return (
    <>
      <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
      </Helmet>
      <Header />
      <MidSection />
      <EndSection />
      <ScrollRestoration />
    </>
  );
};

export default Developers;
