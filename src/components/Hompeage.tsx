import React from "react";
import Header from "../components/HomePage/Header";
import About from "../components/HomePage/About";
import Features from "../components/HomePage/Features";
import CustomerReviews from "../components/HomePage/CustomerReviews";
import ScanToPay from "../components/HomePage/ScanToPay";
import CTA from "./CTA";
import ForDevelopers from "./HomePage/ForDevelopers";
import { Helmet } from "react-helmet";

type Props = {};

function Hompeage({}: Props) {
  return (
    <>
      <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
      </Helmet>    
      <Header />
      <About />
      <ScanToPay />
      <Features />
      <ForDevelopers />
      <CustomerReviews />
      <CTA />
    </>
  );
}

export default Hompeage;
