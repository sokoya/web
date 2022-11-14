import React from "react";
import Header from "../components/Save&Earn/Header";
import About from "../components/Save&Earn/About";
import CTA from "../components/CTA";
import Goals from "../components/Save&Earn/Goals";

type Props = {};

const SaveEarn = (props: Props) => {
  return (
    <>
      <Header />
      <About />
      <Goals />
      <CTA />
    </>
  );
};

export default SaveEarn;
