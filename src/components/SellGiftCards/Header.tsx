import React from "react";

import GiftImg from "../../assets/giftcards/giftImg.svg";
import Button from "../Button";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-[#efefef] px-[2rem]">
      <div className="flex flex-wrap w-full mt-[5rem] bp1:mt-[1rem] items-center">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[2.5rem]  sm:text-[3.5rem] mt-[2rem] sm:mt-0 leading-[3rem] sm:leading-[5rem] mb-[4rem] font-bold">
            Trade unused Giftcards for instant cash at amazing{" "}
            <span className="text-primary3">rates</span> .
          </h1>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[1rem]  px-[2.5rem]  w-full sm:w-auto">
            <p>Get Started &nbsp; &rarr;</p>
          </Button>
        </div>
        <div className="w-full md:w-[50%]">
          <img src={GiftImg} alt="Sell giftcards on Payscribe" className="w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
