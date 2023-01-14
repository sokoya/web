import React from "react";
import { ScrollRestoration } from "react-router-dom";
import Header from "../components/Terms/Header";
import TermsPage from "../components/Terms/Terms";

type Props = {};

const Terms = (props: Props) => {
  return (
    <>
      <Header />
      <TermsPage />
      <ScrollRestoration />
    </>
  );
};

export default Terms;
