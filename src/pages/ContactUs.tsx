import React from "react";
import Header from "../components/ContactUs/Header";
import Form from "../components/ContactUs/Form";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <>
      <Header />
      <Form />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default ContactUs;
