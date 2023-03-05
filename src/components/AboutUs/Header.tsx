import React from "react";
import HeroImg from "../../assets/rewards/hero.png";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-headerBg px-[2rem]" style={{background: `url('${bg}')`}}>
      <div className="flex flex-wrap w-full mt-[5rem] items-center ">
        <div className="w-full md:w-[50%] sm:pl-[0rem] lg:pl-[3rem]">
          <h1 className="py-[2rem] sm:py-0 text-[2.5rem] sm:text-[3.5rem] w-[90%] leading-[4rem] sm:leading-[5rem] mb-[1rem] font-bold">
          Be In Control of Your Money
          </h1>
          <p className="mb-10 sm:w-[90%]">
            {" "}
            We are committed to building a world-class technology that delivers real value to our customers and makes a positive impact on the lives of people in Africa. We are excited to be at the forefront of this important work and look forward to making a difference for many years to come          </p> 
        </div>
        <div className="w-full md:w-[50%] sm:hidden lg:block">
          <img className="ml-auto sm:hidden lg:block" src={HeroImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
