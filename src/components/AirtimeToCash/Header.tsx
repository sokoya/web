import React from "react";
import Button from "../Button";
import HeroImg from "../../assets/airtime/hero1.svg";
import { Link } from "react-router-dom";
import { reg_link } from "../../listData/homepage";

type Props = {};

function Header({}: Props) {
  return (
    <header className=" px-[2rem] bg-headerBg">
      <div className="py-[2rem] sm:py-0 flex flex-wrap w-full mt-[6rem] items-center">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] leading-[4rem] sm:leading-[5rem] mb-[4rem] font-bold">
            Convert your excess airtime to cash and get your money in <span className="text-primary3">seconds!</span> 
          </h1>
          <Link to={reg_link}>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.8rem]  px-[2.2rem]  w-full sm:w-auto">
            <p>Get Started &nbsp; &rarr;</p>
          </Button>
          </Link>
        </div>
        <div className="w-full md:w-[50%]">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
