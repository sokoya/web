import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { Outlet, Route, Routes } from "react-router-dom";
import Hompeage from "../components/Hompeage";
import AirtimeToCash from "./AirtimeToCash";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <Hompeage />
    </>
  );
};

export default Home;
