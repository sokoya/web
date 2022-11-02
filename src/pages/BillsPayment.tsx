import React from "react";
import Header from "../components/BillsPayment/Header";
import HowToPay from "../components/BillsPayment/HowToPay";
import Partners from "../components/BillsPayment/Partners";
import CTA from "../components/CTA";
import { ScrollRestoration } from "react-router-dom";

type Props = {};

function BillsPayment({}: Props) {
  return (
    <>
      <Header />
      <HowToPay />
      <Partners />
      <CTA />
      <ScrollRestoration />
    </>
  );
}

export default BillsPayment;
