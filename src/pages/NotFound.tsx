import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import NotFoundPage from "../components/NotFound"

interface Props {}

const NotFound = (props: Props) => {
  return (
    <>
      <div className="px-[0rem] sm:px-[0rem] md:px-[0rem] max-w-[1500px] mx-auto">
        <Nav />
        <NotFoundPage />
      </div>
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default NotFound;
