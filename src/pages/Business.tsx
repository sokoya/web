import React from "react";
import CTA from "../components/CTA";
import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "../components/Business/Index";
import Nav from "../components/Business/Nav";
import Footer from "../components/Business/Footer";

type Props = {};

function Business({}: Props) {
  return (
    <>
      <div className="px-[0rem] sm:px-[0rem] md:px-[0rem] max-w-[1500px] mx-auto">
        <Nav />
        <Index />
      </div>
    
      <ScrollRestoration />
      <Footer />
    </>
  );
}

export default Business;