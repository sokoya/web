import React from "react";
import Header from "../components/HomePage/Header";
import About from "../components/HomePage/About";
import Features from "../components/HomePage/Features";
import CustomerReviews from "../components/HomePage/CustomerReviews";
import ScanToPay from "../components/HomePage/ScanToPay";
import CTA from "./CTA";
// import ForDevelopers from "./HomePage/ForDevelopers";
import { Helmet } from "react-helmet";

type Props = {};

function Hompeage({}: Props) {
  return (
    <>
      <Helmet>
          <meta name="title" content="Efficiently Manage Your Daily Essentials and Savings with Payscribe" />
          <meta name="description" content="Stay connected and manage your finances with Payscribe. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe. Sign up now!" />
          <meta name="keywords" content="Airtime,Data,Electricity payment,Savings,Cashless payments,Digital transactions,Mobile recharge,Bill payment,Daily essentials,Convenience,Secure payments,Online top-up,Mobile wallet,Cashless living,Financial management,Utility payments,Smart payments,Easy recharge,Mobile credit,Digital wallet,Online bill payments,E-payments,Electronic payments,Mobile top-up,Digital airtime,Online data,Secure bill payments,Airtime recharge,Data bundle,Mobile money,Online savings,Electronic top-up,Mobile bill payments,Online electricity payments,Digital savings,Convenient payments,Mobile payments,Digital bill payments,Secure transactions,Mobile money payments,Digital credit,Online utility payments,Electronic bill payments,Mobile savings,Online top-up services,Airtime purchase,Data purchase,Mobile top-up services,Digital payments,Online payments,Secure mobile payments,Mobile transactions,Cashless society,Digital financial services,Airtime top-up,Data top-up,Mobile banking,Online banking,Secure online payments,Mobile services,Digital services,Cashless transactions,Financial services,Mobile financial services,Online financial services,Digital cash,Mobile cash,Online cash,Secure online banking,Mobile banking services,Digital banking services,Online banking services,Mobile money services,Digital money services,Online money services,Secure online transactions,Mobile transactions services,Digital transactions services,Online transactions services,Mobile savings services,Digital savings services,Online savings services,Secure online savings,Mobile savings account,Digital savings account,Online savings account,Mobile banking account,Digital banking account,Online banking account,Secure online banking account,Mobile money account,Digital money account,Online money account,Secure online money account" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Efficiently Manage Your Daily Essentials and Savings with Payscribe" />
          <meta property="og:description" content="Stay connected and manage your finances with Payscribe. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe. Sign up now!" />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
          <meta property="og:url" content="https://www.payscribe.ng" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Efficiently Manage Your Daily Essentials and Savings with Payscribe" />
          <meta name="twitter:description" content="Find answers to common questions about Payscribe's services, features, and how to use our platform. Our FAQ page covers everything from account setup to transaction details and troubleshooting. Get the information you need to make the most of Payscribe's digitized cash payments and daily essentials services." />

              
      </Helmet>    
      <Header />
      <About />
      <ScanToPay />
      <Features />
      {/* <ForDevelopers /> */}
      <CustomerReviews />
      <CTA />
    </>
  );
}

export default Hompeage;
