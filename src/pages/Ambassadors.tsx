import React from "react";
import Header from "../components/Ambassadors/Header";
import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet";
import Body from "../components/Ambassadors/Body";

type Props = {};

const Ambassador = (props: Props) => {
  return (
    <>
      
      <Header />
      <Body />
      <ScrollRestoration />
    </>
  );
};

export default Ambassador;
