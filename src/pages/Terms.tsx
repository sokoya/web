import React from "react";
import { ScrollRestoration } from "react-router-dom";
import Header from "../components/Privacy/Header";
import TermsPage from "../components/Terms/Terms";

type Props = {};

const Terms = (props: Props) => {
  return (
    <>
      <Header pageTitle="Terms of Services"/>
      <TermsPage />
      <ScrollRestoration />
    </>
  );
};

export default Terms;
