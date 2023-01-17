import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { SiConvertio } from "react-icons/si";
import IconPlate from "../IconPlate";
import subscribedImg from "../../assets/bills/subscribed.svg";
import VerticalItems from "../VerticalItems";

import { createAccount } from '../../helpers/Links'

type Props = {};

const HowToPayList = [
  {
    title: "1",
    content: `Login to your account if you already have an account with Payscribe, or <a href="${createAccount}" className="secondary" title="Create an account">create an account</a>`,
    icon: <AiOutlineUser className="text-white" />,
  },
  {
    title: "2",
    content: "Tap on Topup, Select the service provider you want to vend.",
    icon: <GiMoneyStack className="text-white" />,
  },
  {
    title: "3",
    content: "Fill the bill payment form accurately, and review to submit.",
    icon: <SiConvertio className="text-white" />,
  },
];

const HowToPay = (props: Props) => {
  // const jsx = (
  //   <>
  //     {HowToPayList.map((el) => (
  //       <div className="w-[100%] bp3:w-[45%] my-[2rem]">
  //         <IconPlate
  //           number={el.number}
  //           body={el.body}
  //           icon={el.icon}
  //           key={el.number}
  //         />
  //       </div>
  //     ))}
  //   </>
  // );
  return (
    <section className="mt-[6rem] sm:px-[2rem]">
      <div className="flex bg-[#F2F2F2] px-[1.5rem] sm:px-[3rem] py-[3rem] justify-between flex-wrap">
        <div className="w-full md:w-[48%]">
          <h1 className="font-bold text-5xl mb-14 md:mb-6 text-center md:text-left">
            How to pay subscription{" "}
          </h1>
          <p className="text-[#151515f1] mb-6 text-sm sm:text-2xl md:text-base">
            Ran out of electricity unit? Need to get insurance? Bulk SMS?
            Education? Toll? TVs subscriptions? Want to fund your betting
            wallet? With easy to follow steps you can pay all your bills from
            the convenience of your home, office, school, market, without having
            to worry about the efficiency, and saving money as you do. Yes ! You
            get cash-back either you are a business owner or you are using
            Payscribe for personal use.
          </p>

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-[80%] ">
              <div className="flex flex-wrap justify-between">
                  {/* {jsx} */}
                  <VerticalItems
                      items={HowToPayList}
                  />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] ">
          <img src={subscribedImg} alt="subscribed" />
        </div>
      </div>
    </section>
  );
};

export default HowToPay;
