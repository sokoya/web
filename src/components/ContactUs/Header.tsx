import React from "react";
import { Link } from "react-router-dom";
import Hero1Img from "../../assets/why-payscribe/WhyHeader.png";
import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex bg-primary2 px-[2rem] py-[5rem] flex-wrap items-center w-full mt-[3rem]">
      <div className="w-full sm:w-[100%] mx-auto md:w-[60%] mt-[3rem] text-center">
        <div className=" text-[3.5rem]  lg:text-[4.1em] font-bold leading-[4.5rem] lg:leading-[5.5rem]">
          <h1 className="text-white">
         Contact Us
          </h1>
        </div>
        <h2 className="mt-[2rem] w-full text-gray-300 text-lg sm:text-base" style={{fontSize: "23px"}}>
        Reach out to us, we're friendly.
        </h2>
       
      </div>
    </header>
  );
};

export default Header;
