import React from "react";
import HeroImg from "../../assets/rewards/hero.png";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-headerBg px-[2rem]" style={{background: `url('${bg}')`}}>
      <div className="flex flex-wrap w-full mt-[5rem] items-center pl-[3rem]">
        <div className="w-full md:w-[50%]">
          <h1 className="py-[2rem] sm:py-0 text-[2.5rem] sm:text-[3.5rem] w-[90%] leading-[4rem] sm:leading-[5rem] mb-[1rem] font-bold">
          Pay smartly
          </h1>
          <p className="mb-10 sm:w-[90%]">
            {" "}
            We believe payments should be fun & seamless, so we created the most flexible and inclusive way to pay and get paid
          </p>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.8rem]  px-[2.2rem]  w-full sm:w-auto">
            <p>Get Started &nbsp; &rarr;</p>
          </Button>
        </div>
        <div className="w-full md:w-[50%]">
          <img className="ml-auto" src={HeroImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
