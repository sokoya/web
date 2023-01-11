import React from "react";
import EventImages from "../components/Event/EventImages";
import Header from "../components/Event/Header";
import Section3 from "../components/Event/Section3";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";

type Props = {};

const Event = (props: Props) => {
  return (
    <>
      <Header />
      <EventImages />
      <Section3 />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default Event;
