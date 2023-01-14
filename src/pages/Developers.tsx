import React from "react";
import Header from "../components/Overview/Header";
import { ScrollRestoration } from "react-router-dom";
import MidSection from "../components/Overview/MidSection";
import CTA from "../components/CTA";
import EndSection from "../components/AboutUs/EndSection";

type Props = {};

const Developers = (props: Props) => {
  return (
    <>
      <Header />
      <MidSection />
      <EndSection />
      <ScrollRestoration />
    </>
  );
};

export default Developers;
