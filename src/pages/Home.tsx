import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
        <Helmet>
        <title>Save - Spend - Earn and manage your finances at ease | Payscribe</title>
            <meta name="title" content="Efficiently Manage Your Daily Essentials and Savings with Payscribe" />
            <meta name="description" content="Stay connected and manage your finances with Payscribe. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe. Sign up now!" />
            <meta name="keywords" content="Airtime,Data,Electricity payment,Savings,Cashless payments,Digital transactions,Mobile recharge,Bill payment,Daily essentials,Convenience,Secure payments,Online top-up,Mobile wallet,Cashless living,Financial management,Utility payments,Smart payments,Easy recharge,Mobile credit,Digital wallet,Online bill payments,E-payments,Electronic payments,Mobile top-up,Digital airtime,Online data,Secure bill payments,Airtime recharge,Data bundle,Mobile money,Online savings,Electronic top-up,Mobile bill payments,Online electricity payments,Digital savings,Convenient payments,Mobile payments,Digital bill payments,Secure transactions,Mobile money payments,Digital credit,Online utility payments,Electronic bill payments,Mobile savings,Online top-up services,Airtime purchase,Data purchase,Mobile top-up services,Digital payments,Online payments,Secure mobile payments,Mobile transactions,Cashless society,Digital financial services,Airtime top-up,Data top-up,Mobile banking,Online banking,Secure online payments,Mobile services,Digital services,Cashless transactions,Financial services,Mobile financial services,Online financial services,Digital cash,Mobile cash,Online cash,Secure online banking,Mobile banking services,Digital banking services,Online banking services,Mobile money services,Digital money services,Online money services,Secure online transactions,Mobile transactions services,Digital transactions services,Online transactions services,Mobile savings services,Digital savings services,Online savings services,Secure online savings,Mobile savings account,Digital savings account,Online savings account,Mobile banking account,Digital banking account,Online banking account,Secure online banking account,Mobile money account,Digital money account,Online money account,Secure online money account" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Efficiently Manage Your Daily Essentials and Savings with Payscribe" />
            <meta property="og:description" content="Stay connected and manage your finances with Payscribe. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe. Sign up now!" />
            <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
            <meta property="og:url" content="https://www.payscribe.ng" />
            <meta property="og:site_name" content="Payscribe"/>
        </Helmet>
      <div className="px-[0rem] sm:px-[0rem] md:px-[0rem] max-w-[1500px] mx-auto">
        <Nav />
        <Outlet />
      </div>
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Home;
