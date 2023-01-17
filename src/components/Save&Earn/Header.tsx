import React from "react";
import HeroImg from "../../assets/save&earn/hero2.png";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-headerBg px-[0rem]" style={{background: `url('${bg}')`}}>
      <div className="flex flex-wrap w-full mt-[0rem] items-center ">
        <div className="w-full md:w-[50%] px-[2rem] sm:pl-[0rem] lg:pl-[3rem] sm:px-0">
          <h1 className="py-[1rem] mt-[6rem] sm:mt-0 sm:py-0 text-[2.5rem] sm:text-[3.5rem] w-[90%] leading-[4rem] sm:leading-[5rem] mb-[1rem] font-bold">
          Save and Earn
          </h1>
          <p className="mb-10 sm:w-[90%]">
            {" "}
            Lock funds (save) for every transactions you perform orfor a fixed period of time to meet a target. Earn up to 15% P.A  </p> 
            <Link to={"/"}>
            <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[1rem]  px-[1.5rem]  w-full sm:w-auto">
              <p className="flex items-center">Get Started <BsArrowRight className="ml-[1rem]" /></p>
            </Button>
          </Link>
        </div>
        <div className="w-full md:w-[50%] sm:hidden lg:block">
          <img className="ml-auto sm:hidden lg:block" src={HeroImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
