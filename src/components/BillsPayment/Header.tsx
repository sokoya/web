import React from "react";
import HeroImg from "../../assets/bills/hero1.svg";

type Props = {};

function Header({}: Props) {
  return (
    <header className="mt-[7rem]">
      <div className="text-center mt-[10rem] w-full md:w-[40%]">
        <h1 className="text-5xl font-semibold mb-4">Bills Payment</h1>
        <h2 className="text-xl font-light w-[80%] mx-auto">
          Payscribe has the most convenient and secured bills payment system
          that facilitates the payment of bills, fees, premiums, and
          subscriptions easily, smoothly, and could be automated for subsequent
          payment
        </h2>
      </div>

      <div className="w-[60%] mx-auto">
        <img src={HeroImg} alt="hero img" />
      </div>
    </header>
  );
}

export default Header;
