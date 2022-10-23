import React from "react";
import EventImages from "../components/Event/EventImages";
import Header from "../components/Event/Header";
import Section3 from "../components/Event/Section3";

type Props = {};

const Event = (props: Props) => {
  return (
    <>
      <Header />
      <EventImages />
      <Section3 />
    </>
  );
};

export default Event;
