import React from "react";
import Button from "../Button";
import HeroImg from "../../assets/hero1.svg";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-wrap items-center w-full mt-[3rem]">
      <div className="w-full sm:w-[60%] mx-auto md:w-[50%] mt-[5rem]">
        <div className=" text-[3.5rem]  lg:text-[4rem] font-bold leading-[4.5rem] lg:leading-[5.5rem]">
          <h1 className=" ">
            Pay Lifestyle bills and manage your finances at ease
          </h1>
        </div>
        <h2 className="mt-[2rem] w-full sm:w-[70%] text-secondary1 text-lg sm:text-base">
          Be at the centre of your finances when you send, receive or save
          money, and pay for everyday essentials.
        </h2>
        <div className="flex items-center mt-12">
          <Link to="/login">
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[1rem]  px-[2.5rem]  w-full sm:w-auto">
            <p>Get Started Now</p>
          </Button>
          </Link>
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] mt-[4rem]">
        <img src={HeroImg} alt="Hero Img" />
      </div>
    </header>
  );
};

export default Header;
