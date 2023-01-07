import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Image from "../../assets/rewards/Image.png";
import Button from "../Button";

type Props = {};

const MidRewards = (props: Props) => {
  return (
    <section className="flex px-[3rem] py-[0rem] pb-[2rem] flex-wrap w-full mt-[5rem]">
    <div className="w-full sm:w-[100%] mx-auto md:w-[50%] mt-[0rem] lg:px-[2em] ">
    <img className="w-full" src={Image} />
      </div>
      <div className="w-full sm:w-[100%] mx-auto md:w-[50%] mt-[1rem] lg:px-[3rem] sm:px-[1rem]">
        <div className=" text-[2rem]  lg:text-[3rem] font-bold leading-[4.5rem] lg:leading-[5.5rem]" style={{lineHeight: 1}}>
          <h1 className=" ">
          No worries! No Pressure!
          </h1>
        </div>
        <h2 className="mt-[0rem] w-full text-secondary1 text-lg text-gray-600 sm:text-sm" style={{fontSize: "16px"}}>
        Reduce cost and increase value with our loyalty and rewards        </h2>
            <ul className="mt-[4rem] pl-[1.1rem]">
            <li className="relative flex items-baseline gap-2 pb-1">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400 timeline2">
                <div className="icon">
                <div>
                    1
                </div>
                </div>
                </div>
                <div>
                <p className="text-xl">Amazing Cashbacks</p>
                <p className="mt-2 text-gray-600 text-md pr-5">Get commission on transactions and also revenue share every transactions done by someone you referred</p>
                </div>
            </li>
            <li className="relative flex items-baseline gap-2 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400 timeline2">
                <div className="icon">
                <div>
                    2
                </div>
                </div>
                </div>
                <div>
                <p className="text-xl">No Hidden Charge</p>
                <p className="mt-2 text-gray-600 text-md pr-5">Why pay for bills and still incur charges? Payscribe gives discount for every purchase</p>
                </div>
            </li>
            <li className="relative flex items-baseline gap-2 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-40 timeline2">
                <div className="icon">
                <div>
                    3
                </div>
                </div>
                </div>
                <div>
                <p className="text-xl">Referral Rewards</p>
                <p className="mt-2 text-gray-600 text-md pr-5">Invite your family and friends using your referrallink, and get instant cash. No hassle</p>
                </div>
            </li>
            </ul>

        <div className="flex mt-12">
          <Link to="/register">
            <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.5rem]  px-[1.5rem]  w-full sm:w-auto">
              <p className="flex items-center">Get Started <BsArrowRight className="ml-[1rem]" /></p>
            </Button>
          </Link>
        </div>
      </div>
     
    </section>
  );
};

export default MidRewards;
