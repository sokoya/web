import React from "react";
import Header from "../components/BillsPayment/Header";
import HowToPay from "../components/BillsPayment/HowToPay";

type Props = {};

function BillsPayment({}: Props) {
  return (
    <>
      <Header />
      <HowToPay />
    </>
  );
}

export default BillsPayment;
