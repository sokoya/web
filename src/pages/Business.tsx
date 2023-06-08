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

        <Index />

    
      <ScrollRestoration />
    </>
  );
}

export default Business;