import React from "react";
import EventImages from "../components/Event/EventImages";
import Header from "../components/Event/Header";
import Section3 from "../components/Event/Section3";
import { ScrollRestoration } from "react-router-dom";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet";

type Props = {};

const Event = (props: Props) => {
  return (
    <>
      <Helmet>
      <title>Stay Up-to-Date with the Latest Payscribe Events</title>
          <meta name="title" content="Stay Up-to-Date with the Latest Payscribe Events" />
          <meta name="description" content="Stay informed and be the first to know about the latest Payscribe events, updates, and promotions. Discover new ways to use our platform to digitize cash payments, purchase daily essentials, and manage your savings. Check out our events page now!" />
          <meta name="keywords" content="Payscribe events, updates, promotions, cashless payments, digital transactions, daily essentials, savings, financial management, secure payments, cashless living, utility payments, digital financial services, mobile financial services, online financial services, digital banking services, mobile banking services, online banking services" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Stay Up-to-Date with the Latest Payscribe Events" />
          <meta property="og:description" content="Stay informed and be the first to know about the latest Payscribe events, updates, and promotions. Discover new ways to use our platform to digitize cash payments, purchase daily essentials, and manage your savings. Check out our events page now!" />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
          <meta property="og:url" content="https://www.payscribe.ng/events" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Stay Up-to-Date with the Latest Payscribe Events" />
          <meta name="twitter:description" content="Stay informed and be the first to know about the latest Payscribe events, updates, and promotions. Discover new ways to use our platform to digitize cash payments, purchase daily essentials, and manage your savings. Check out our events page now!" />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
      </Helmet>
      <Header />
      <EventImages />
      <Section3 />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default Event;
