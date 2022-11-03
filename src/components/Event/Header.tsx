import React from "react";
import { Link } from "react-router-dom";
import Hero1Img from "../../assets/events/hero1.svg";
import Button from "../Button";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex bg-[#efefef] px-[6rem] flex-wrap items-center w-full mt-[3rem]">
      <div className="w-full sm:w-[60%] mx-auto md:w-[50%] mt-[5rem]">
        <div className=" text-[3.5rem]  lg:text-[4rem] font-bold leading-[4.5rem] lg:leading-[5.5rem]">
          <h1 className=" ">
            Register and sell your event tickets online
          </h1>
        </div>
        <h2 className="mt-[2rem] w-full sm:w-[90%] text-secondary1 text-lg sm:text-base">
          With Payscribe you can easily register your event and sell your event
          tickets online. It's smooth, easy and cheap. Here is where you find
          out what events are forthcoming Nigeria, where and when it is
          happening. All across the cities and states, Payscribe helps you to
          maximise the reach of your events.
        </h2>
        <div className="flex items-center mt-12">
          <Link to="/login">
            <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[1rem]  px-[2.5rem]  w-full sm:w-auto">
              <p>Get Started Now</p>
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] mt-[4rem]">
        <img src={Hero1Img} alt="hero" />
      </div>
    </header>
  );
};

export default Header;
