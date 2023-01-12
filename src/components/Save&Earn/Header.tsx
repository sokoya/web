import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import HeroImg from "../../assets/save&earn/hero.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-wrap bg-headerBg items-center w-full mt-[3rem] px-[4rem]">
      <div className="w-full sm:w-[60%] mx-auto md:w-[50%] mt-[5rem]">
        <div className=" w-[90%] text-[2.5rem] sm:text-[3.5rem]  lg:text-header font-bold leading-[4rem] lg:leading-[5rem]">
          <h1 className=" ">Save & Earn</h1>
        </div>
        <h2 className="mt-[2rem] w-full sm:w-[70%] text-secondary1 text-lg sm:text-base">
        Lock funds (save) for every transactions you perform orfor a fixed period of time to meet a target. Earn up to 15% P.A
        </h2>
        <div className="flex items-center mt-12">
          <Link to="/login">
            <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.8rem]  px-[2.3rem]  w-full sm:w-auto">
              <p>Get Started &nbsp; &rarr; </p>
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
