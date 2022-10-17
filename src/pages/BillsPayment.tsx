import React from "react";
import Header from "../components/BillsPayment/Header";
import HowToPay from "../components/BillsPayment/HowToPay";
import Partners from "../components/BillsPayment/Partners";

type Props = {};

function BillsPayment({}: Props) {
  return (
    <>
      <Header />
      <HowToPay />
      <Partners />
    </>
  );
}

export default BillsPayment;
