import React from "react";
import Header from "../components/HomePage/Header";
import About from "../components/HomePage/About";
import TrustPayscribe from "../components/HomePage/TrustPayscribe";
import Features from "../components/HomePage/Features";
import CustomerReviews from "../components/HomePage/CustomerReviews";
import ScanToPay from "../components/HomePage/ScanToPay";
import CTA from "./CTA";

type Props = {};

function Hompeage({}: Props) {
  return (
    <>
      <Header />
      <About />
      <ScanToPay />
      <TrustPayscribe />
      <Features />
      <CustomerReviews />
      <CTA />
    </>
  );
}

export default Hompeage;
