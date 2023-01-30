import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Image from "../../assets/why-payscribe/Payscribe_homepage.png";
import Button from "../Button";
import { reg_link } from "../../listData/homepage";

type Props = {};

const MidSection = (props: Props) => {
  return (
    <section className="flex bg-[#EEEDED] px-[2rem] py-[0rem] pb-[2rem] flex-wrap w-full mt-[5rem]">
    <div className="w-full sm:w-[100%] mx-auto md:w-[50%] mt-[0rem]">
    <img src={Image} />
      </div>
      <div className="w-full sm:w-[100%] mx-auto md:w-[50%] mt-[2rem]">
        <div className=" text-[2.5rem]  lg:text-[3.5rem] font-bold leading-[4.5rem] lg:leading-[5.5rem]" style={{lineHeight: 1}}>
          <h1 className=" ">
          Payscribe broadens your revenue sources
          </h1>
        </div>
        <h2 className="mt-[2rem] w-full text-secondary1 text-sm text-gray-600 sm:text-sm" style={{fontSize: "16px"}}>
        We are empowering businesses across Africa whilst extending an exclusive lifestyle-as-a-service partnership to their customers
        </h2>

        <div className=" text-1.5rem] mt-[3rem] lg:text-[1.5rem] font-bold">
          <h1 className=" ">
          Secure Payments
          </h1>
        </div>
        <h2 className="mt-[.5rem] w-full text-secondary1 text-sm text-gray-600 sm:text-sm" style={{fontSize: "16px"}}>
        Our payment processors Paystack, Providus Bank and Flutterwave is PADSS & PCIDSS compliant satisfying the highest level of Security Audit available        </h2>


  
        <div className=" text-1.5rem] mt-[3rem] lg:text-[1.5rem] font-bold">
          <h1 className=" ">
          Bank Level Security
          </h1>
        </div>
        <h2 className="mt-[.5rem] w-full text-secondary1 text-sm text-gray-600 sm:text-sm" style={{fontSize: "16px"}}>
        We use state-of-the-art data encryption when handling your information and two-factor authentication (2FA) protection. 
 We're backed by top financial market operators in other to meet and exceed traditional banking security standards</h2>


        <div className="flex mt-12">
          <a href={reg_link}>
            <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.5rem]  px-[1.5rem]  w-full sm:w-auto">
              <p className="flex items-center">Schedule a Demo <BsArrowRight className="ml-[1rem]" /></p>
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full sm:w-[100%] mx-auto md:w-[100%] mt-[3rem] text-center py-[3rem] ">
      <div className=" text-[2.5rem]  lg:text-[3.5rem] font-bold leading-[4.5rem] lg:leading-[5.5rem]" style={{lineHeight: 1}}>
          <h1 className=" ">
          Your Success = Our Mission
          </h1>
        </div>
        <h2 className="mt-[2rem] w-full text-secondary1 text-lg text-gray-600 sm:text-sm md:px-[15rem]" style={{fontSize: "16px"}}>
        We have a long history of innovation and excellence with payment and subscriptions infrastructure and
we are committed to bringing our clients leading edge solutions for the growth of their businesses        </h2>
      </div>
    </section>
  );
};

export default MidSection;
