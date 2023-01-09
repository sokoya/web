import React from "react";
import Header from "../components/Overview/Header";
import { ScrollRestoration } from "react-router-dom";
import MidSection from "../components/Overview/MidSection";
import CTA from "../components/CTA";

type Props = {};

const Developers = (props: Props) => {
  return (
    <>
      <Header />
      <MidSection />
      {/* <CTA /> */}
      <ScrollRestoration />
    </>
  );
};

export default Developers;
