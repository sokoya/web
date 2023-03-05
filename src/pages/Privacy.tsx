import React from "react";
import { ScrollRestoration } from "react-router-dom";
import Header from "../components/Privacy/Header";
import PrivacyPage from "../components/Privacy/Privacy";

type Props = {};

const Privacy = (props: Props) => {
  return (
    <>
      <Header pageTitle="Privacy Policy" />
      <PrivacyPage />
      <ScrollRestoration />
    </>
  );
};

export default Privacy;
