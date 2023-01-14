import React from "react";
import Header from "../components/BillsPayment/Header";
import HowToPay from "../components/BillsPayment/HowToPay";
import Partners from "../components/BillsPayment/Partners";
import CTA from "../components/CTA";
import { ScrollRestoration } from "react-router-dom";
import TwoColumn from "../components/BillsPayment/TwoColumn";
import { Helmet } from "react-helmet";

type Props = {};

function BillsPayment({}: Props) {
  return (
    <>
      <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
      </Helmet>
      <Header />
      <HowToPay />
      <TwoColumn />
      <Partners />
      <CTA />
      <ScrollRestoration />
    </>
  );
}

export default BillsPayment;
