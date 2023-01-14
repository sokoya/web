import React from "react";
import Header from "../components/ContactUs/Header";
import Form from "../components/ContactUs/Form";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <>
      <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
      </Helmet>
      <Header />
      <Form />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default ContactUs;
