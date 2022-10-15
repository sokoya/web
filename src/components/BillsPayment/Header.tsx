import React from "react";
import HeroImg from "../../assets/bills/hero1.svg";
import Button from "../Button";

type Props = {};

function Header({}: Props) {
  return (
    <header className="mt-[7rem]">
      <div className="flex mt-[10rem] items-center flex-wrap">
        <div className=" w-[50%]">
          <h1 className="text-6xl font-bold mb-8">
            Paying lifestyle bills at ease
          </h1>
          <div className="text-xl font-light mb-8 ">
            <h2 className="mb-3">
              Payscribe has the most convenient and secured bills payment system
              that facilitates the payment of educational fees( Such as WAEC
              ,NECO,UTME Vouchers) Television subscriptions, payment of
              electricity for all Nigeria distributions.
            </h2>
            <h2>
              Set your payment to be automated, attend to other things that
              matters and let Payscribe handles all your recurring bills. It’s
              that easy and simple, with amazing cash-backs
            </h2>
          </div>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[1rem]  px-[2.5rem]  w-full sm:w-auto">
            <p>Get Started</p>
          </Button>
        </div>
        <div className="w-[50%]">
          <img src={HeroImg} alt="hero img" />
        </div>
      </div>
    </header>
  );
}

export default Header;
