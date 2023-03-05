import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Image from "../../assets/rewards/Image.png";
import { reg_link } from "../../listData/homepage";
import Button from "../Button";
import VerticalItems from "../VerticalItems";

type Props = {};

const MidRewards = (props: Props) => {
  return (
    <section className="flex sm:px-[3rem] py-[0rem] pb-[2rem] flex-wrap px-[1rem] w-full mt-[5rem]">
    <div className="w-full sm:w-[100%] mx-auto md:w-[50%] mt-[0rem] lg:px-[2em] ">
    <img className="w-full" src={Image} />
      </div>
      <div className="w-full sm:w-[100%] mx-auto md:w-[50%] mt-[1rem] lg:px-[3rem] sm:px-[1rem]">
        <div className=" text-[2rem]  lg:text-[3rem] font-bold leading-[4.5rem] lg:leading-[5.5rem]" style={{lineHeight: 1}}>
          <h1 className=" ">
          No worries! No Pressure!
          </h1>
        </div>
        <h2 className="mt-[0rem] w-full text-lg text-gray-600 sm:text-sm" style={{fontSize: "16px"}}>
          Reduce cost and increase value with our loyalty and rewards 
        </h2>
          
          <VerticalItems 
                items={[
                    {
                      title: 'Amazing Cashbacks',
                      content: 'Get commission on transactions and also revenue share every transactions done by someone you referred'
                    },
                    {
                      title: 'No Hidden Charge',
                      content: 'Why pay for bills and still incur charges? Payscribe gives discount for every purchase'
                    },
                    {
                      title: 'Referral Rewards',
                      content: 'Invite your family and friends using your referrallink, and get instant cash. No hassle'
                    },
                ]}
            />

        <div className="flex mt-12">
          <Link to={reg_link}>
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
