import React from "react";
import HeroImg from "../../assets/srmoney/hero1.svg";
import Button from "../Button";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="">
      <div className="flex flex-wrap w-full mt-[7rem] items-center">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[3.5rem] leading-[5rem] mb-[1rem] font-bold">
            Send and Receive money from anywhere for free
          </h1>
          <p className="mb-10"> With Payscribe, you can send and receive money with other Payscribe
            users and Nigerian banks for free and get the transfer done in
            real-time. All you need is an active email address and a phone
            number to open an account.</p>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[1rem]  px-[2.5rem]  w-full sm:w-auto">
            <p>Register Now</p>
          </Button>
        </div>
        <div className="w-full md:w-[50%]">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
