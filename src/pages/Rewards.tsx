import React from "react";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import Header from "../components/Rewards/Header";
import MidRewards from "../components/Rewards/MidRewards";

type Props = {};

const Rewards = (props: Props) => {
  return (
    <>
      <Header />
      {/* <WhyUsePayscribe />
      <MidSection /> */}
      <MidRewards />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default Rewards;
