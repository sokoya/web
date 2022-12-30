import React from "react";
import { Link } from "react-router-dom";
import Hero1Img from "../../assets/why-payscribe/WhyHeader.png";
import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex bg-[#efefef] px-[2rem] py-[5rem] flex-wrap items-center w-full mt-[3rem]" style={{background: `linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${Hero1Img})`, backgroundRepeat: "no-repeat"}}>
      <div className="w-full sm:w-[100%] mx-auto md:w-[60%] mt-[5rem] text-center">
        <div className=" text-[3.5rem]  lg:text-[4rem] font-bold leading-[4.5rem] lg:leading-[5.5rem]">
          <h1 className=" ">
            Lifestyle as a Service
          </h1>
        </div>
        <h2 className="mt-[2rem] w-full text-secondary1 text-lg sm:text-base" style={{fontSize: "23px"}}>
        Integrate with Payscribe and let your customers pay all lifestyle bills, without leaving your platform
        </h2>
        <div className="flex items-center justify-center mt-12">
          <Link to="/signup">
            <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.5rem]  px-[1.5rem]  w-full sm:w-auto">
              <p className="flex items-center">Register Now <BsArrowRight className="ml-[1rem]" /></p>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
