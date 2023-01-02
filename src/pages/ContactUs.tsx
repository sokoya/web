import React from "react";
import Header from "../components/ContactUs/Header";
import Form from "../components/ContactUs/Form";
import { ScrollRestoration } from "react-router-dom";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <>
      <Header />
      <Form />
      <ScrollRestoration />
    </>
  );
};

export default ContactUs;
