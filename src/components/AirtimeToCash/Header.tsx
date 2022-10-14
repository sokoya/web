import React from "react";
import Button from "../Button";
import HeroImg from "../../assets/airtime/hero1.svg";

type Props = {};

function Header({}: Props) {
  return (
    <header className="">
      <div className="flex flex-wrap w-full mt-[7rem] items-center">
        <div className="w-full md:w-[50%] text-center md:text-right">
          <h1 className="text-[3.5rem] leading-[5rem] mb-[4rem] font-bold">
            Convert your excess airtime to cash and get your money in seconds!
          </h1>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[1rem]  px-[2.5rem]  w-full sm:w-auto">
            <p>Get Started Now</p>
          </Button>
        </div>
        <div className="w-full md:w-[50%]">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
