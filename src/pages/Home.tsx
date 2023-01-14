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
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
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
