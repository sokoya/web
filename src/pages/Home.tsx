import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <div className="px-[2rem] md:px-[3rem] max-w-[1500px] mx-auto">
        <Nav />
        <Outlet />
      </div>
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Home;
