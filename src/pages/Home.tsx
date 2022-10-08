import React from "react";
import Nav from "../components/Nav";
import Header from "../components/HomePage/Header";
import About from "../components/HomePage/About";
import Section2 from "../components/HomePage/section2";
import Features from "../components/HomePage/Features";
import Footer from "../components/Footer";
import CustomerReviews from "../components/HomePage/CustomerReviews";
import ScanToPay from "../components/HomePage/ScanToPay";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <div className="px-[2rem] md:px-[3rem] max-w-[1900px]">
        <Nav />
        <Header />
        <About />
        <ScanToPay />
        <Section2 />
        <Features />
        <CustomerReviews />
      </div>
      <Footer />
    </>
  );
};

export default Home;
