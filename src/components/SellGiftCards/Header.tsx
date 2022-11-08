import React from "react";
import HeroImg from "../../assets/giftcards/giftcards.png";
import Button from "../Button";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-[#efefef] px-[2rem] py-[1rem]">
      <div className="flex flex-wrap w-full mt-[1rem] items-center">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[3.5rem] leading-[5rem] mb-[4rem] font-bold">
            Trade unused Giftcards for instant cash at amazing{" "}
            <span className="text-primary3">rates</span> .
          </h1>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[1rem]  px-[2.5rem]  w-full sm:w-auto">
            <p>Register Now &nbsp; &rarr;</p>
          </Button>
        </div>
        <div className="w-full md:w-[50%]">
          <img src={HeroImg} alt="" className="w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
