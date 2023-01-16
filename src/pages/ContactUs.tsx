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
      <title>Contact Payscribe - Get in Touch with Our Support Team</title>
          <meta name="title" content="Contact Payscribe - Get in Touch with Our Support Team" />
          <meta name="description" content="Looking for assistance with Payscribe? Our dedicated support team is here to help. Contact us today through our website or email and we will respond promptly to any queries or concerns you may have. Reach Payscribe Support now!" />
          <meta name="keywords" content="Payscribe, contact, support, assistance, customer service, help, inquiry, customer care, customer support" />

          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Contact Payscribe - Get in Touch with Our Support Team" />
          <meta property="og:description" content="Looking for assistance with Payscribe? Our dedicated support team is here to help. Contact us today through our website or email and we will respond promptly to any queries or concerns you may have. Reach Payscribe Support now!" />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
          <meta property="og:url" content="https://www.payscribe.ng/contact-us" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Contact Payscribe - Get in Touch with Our Support Team" />
          <meta name="twitter:description" content="Looking for assistance with Payscribe? Our dedicated support team is here to help. Contact us today through our website or email and we will respond promptly to any queries or concerns you may have. Reach Payscribe Support now!" />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
         
      </Helmet>
      <Header />
      <Form />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default ContactUs;
