import React from "react";
import HeroImg from "../../assets/bills/hero1.svg";
import Button from "../Button";

type Props = {};

function Header({}: Props) {
  return (
    <header className="mt-[7rem] bg-[#efefef] px-[2rem]">
      <div className="flex py-[2rem] items-center flex-wrap">
        <div className=" w-full md:w-[50%]">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] leading-[4rem] lg:leading-[5rem] font-bold mb-8 w-[90%]">
            Paying lifestyle bills at ease
          </h1>
          <div className=" text-lg am:text-2xl md:text-lg font-light mb-8 ">
            <h2 className="mb-3">
              Payscribe has the most{" "}
              <span className="text-primary3">
                {" "}
                convenient and secured bills payment system{" "}
              </span>
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
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.8rem]  px-[2.2rem]  w-full sm:w-auto">
            <p>Get Started &nbsp; &rarr;</p>
          </Button>
        </div>
        <div className="w-full md:w-[50%]">
          <img src={HeroImg} alt="hero img" />
        </div>
      </div>
    </header>
  );
}

export default Header;
