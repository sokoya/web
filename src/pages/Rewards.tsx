import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import TwoColumn from "../components/BillsPayment/TwoColumn";
import CTA from "../components/CTA";
import Header from "../components/Rewards/Header";
import MidRewards from "../components/Rewards/MidRewards";

type Props = {};

const Rewards = (props: Props) => {
  return (
    <>
      <Helmet>
      <title>Earn Rewards and Save with Payscribe's Loyalty Program</title>
          <meta name="title" content="Earn Rewards and Save with Payscribe's Loyalty Program" />
          <meta name="description" content="Maximize your savings and earn rewards with Payscribe's loyalty program. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Sign up now and start earning rewards for your transactions with Payscribe." />
          <meta name="keywords" content="Rewards, Loyalty program, Payscribe, Savings, Cashless payments, Digital transactions, Mobile recharge, Bill payment, Daily essentials, Convenience, Secure payments, Online top-up, Mobile wallet, Cashless living, Financial management, Utility payments, Smart payments, Easy recharge, Mobile credit, Digital wallet, Online bill payments, E-payments, Electronic payments, Mobile top-up, Digital airtime, Online data, Secure bill payments, Airtime recharge, Data bundle, Mobile money, Online savings, Electronic top-up, Mobile bill payments, Online electricity payments, Digital savings, Convenient payments, Mobile payments, Digital bill payments, Secure transactions, Mobile money payments, Digital credit, Online utility payments, Electronic bill payments, Mobile savings, Online top-up services, Airtime purchase, Data purchase, Mobile top-up services, Digital payments, Online payments, Secure mobile payments, Mobile transactions, Cashless society, Digital financial services, Airtime top-up, Data top-up, Mobile banking, Online banking, Secure online payments, Mobile services, Digital services, Cashless transactions, Financial services, Mobile financial services, Online financial services, Digital cash, Mobile cash, Online cash, Secure online banking, Mobile banking services, Digital banking services, Online banking services, Mobile money services, Digital money services, Online money services, Secure online transactions, Mobile transactions services, Digital transactions services, Online transactions services, Mobile savings services, Digital savings services, Online savings services, Secure online savings, Mobile savings account, Digital savings account, Online savings account, Mobile banking account, Digital banking account, Online banking account, Secure online banking account, Mobile money account, Digital money account, Online money account, Secure online money account." />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Earn Rewards and Save with Payscribe's Loyalty Program" />
          <meta property="og:description" content="Maximize your savings and earn rewards with Payscribe's loyalty program. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Sign up now and start earning rewards for your transactions with Payscribe." />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
          <meta property="og:url" content="https://www.payscribe.ng/rewards" />
          <meta property="og:site_name" content="Payscribe" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@payscribe" />
          <meta name="twitter:title" content="Earn Rewards and Save with Payscribe's Loyalty Program" />
          <meta name="twitter:description" content="Maximize your savings and earn rewards with Payscribe's loyalty program. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Sign up now and start earning rewards for your transactions with Payscribe." />
          <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
      </Helmet>
      <Header />
      {/* <WhyUsePayscribe />
      <MidSection /> */}
      <MidRewards />
      <TwoColumn />
      <CTA />
      <ScrollRestoration />
    </>
  );
};

export default Rewards;
