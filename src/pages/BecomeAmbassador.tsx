import React from "react";
import Header from "../components/Ambassadors/Header";
import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet";
import BecomeAnAmbassador from "../components/Ambassadors/BecomeAmbassador";

type Props = {};

const BecomeAmbassador = (props: Props) => {
  return (
    <>
      
      <BecomeAnAmbassador />
      <ScrollRestoration />
    </>
  );
};

export default BecomeAmbassador;
