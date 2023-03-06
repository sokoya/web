import React from "react";
import Button from "../Button";
import HeroImg from "../../assets/homepage/heroImg.png";
import HomeSmile from "../../assets/homepage/payscribe-welcome-smile.png"
import { Link } from "react-router-dom";
import { reg_link } from "../../listData/homepage";
import { login } from "../../helpers/Links";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-wrap bg-headerBg items-center w-full mt-[3rem] px-[2rem]">
      <div className="w-full sm:w-[60%] mx-auto md:w-[50%] mt-[5rem] lg:pl-[1rem]">
        <h5 className="mb-6 ">
          <span className="font-bold mr-1 text-primary3">Payscribe </span> =  Payment + Subscription
        </h5>
        <div className=" w-[90%] text-[2.5rem] sm:text-[3.5rem]  lg:text-header font-bold leading-[4rem] lg:leading-[5rem]">
          <h1 className=" ">
            Pay Lifestyle bills and manage your <span className="text-primary3">finances</span>  at ease
          </h1>
        </div>
        <h2 className="mt-[2rem] w-full sm:w-[70%] text-secondary1 text-lg sm:text-base">
          Be at the centre of your finances when you send, receive or save
          money, and pay for everyday essentials.
        </h2>
        {/* <div className="scroll-parent mt-3">
            <div className="scroll-element primary">
              <div className="flex border py-2 px-1 mx-2 gap-1" style={{width: "600px", alignItems: "center", background: "#fff"}}>
                <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg" alt="damilola jerugba" />
                <span style={{fontSize: "10px"}}><b>@ayo</b> just recieved NGN500</span>
              </div>
              <div className="flex border py-2 px-1 mx-2 gap-1" style={{width: "600px", alignItems: "center", background: "#fff"}}>
                <img src="https://avatars.dicebear.com/api/adventurer/tosin-jerugba.svg" alt="tosin jerugba" />
                <span style={{fontSize: "10px"}}><b>@ayo</b> just recieved NGN500</span>
              </div>
              <div className="flex border py-2 px-1 mx-2 gap-1" style={{width: "600px", alignItems: "center", background: "#fff"}}>
                <img src="https://avatars.dicebear.com/api/adventurer/fiyin-jerugba.svg" alt="fiyin jerugba" />
                <span style={{fontSize: "10px"}}><b>@ayo</b> just recieved NGN500</span>
            </div>
        </div>
        <div className="scroll-element secondary">
            <div className="flex border py-2 px-1 mx-2 gap-1" style={{width: "600px", alignItems: "center", background: "#fff"}}>
              <img src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg" alt="damilola jerugba" />
              <span style={{fontSize: "10px"}}><b>@ayo</b> just recieved NGN500</span>
            </div>
            <div className="flex border py-2 px-1 mx-2 gap-1" style={{width: "600px", alignItems: "center", background: "#fff"}}>
              <img src="https://avatars.dicebear.com/api/adventurer/tosin-jerugba.svg" alt="tosin jerugba" />
              <span style={{fontSize: "10px"}}><b>@ayo</b> just recieved NGN500</span>
            </div>
            <div className="flex border py-2 px-1 mx-2 gap-1" style={{width: "600px", alignItems: "center", background: "#fff"}}>
              <img src="https://avatars.dicebear.com/api/adventurer/fiyin-jerugba.svg" alt="fiyin jerugba" />
              <span style={{fontSize: "10px"}}><b>@ayo</b> just recieved NGN500</span>
            </div>
        </div>
      </div> */}


                <div className="flex items-center mt-0 mb-6">
          <a href={login}>
            <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.8rem]  px-[2.3rem]  w-full sm:w-auto">
              <p>Get Started &nbsp; &rarr; </p>
            </Button>
          </a>
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] mt-[4rem]">
        <img src={HomeSmile} alt="Payscribe - Manage your finances while spending on daily essential bills." />
      </div>
    </header>
  );
};

export default Header;
