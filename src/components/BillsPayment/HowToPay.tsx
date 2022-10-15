import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { SiConvertio } from "react-icons/si";
import IconPlate from "../IconPlate";
import subscribedImg from "../../assets/bills/subscribed.svg";

type Props = {};

const HowToPayList = [
  {
    number: "1",
    body: "Login to your account if you already have an account with Payscribe",
    icon: <AiOutlineUser className="text-[#226c1a68]" />,
  },
  {
    number: "2",
    body: "Select the service provider you want to vend.",
    icon: <GiMoneyStack className="text-[#82111168]" />,
  },
  {
    number: "3",
    body: " Subscription successful!",
    icon: <SiConvertio className="text-[#12109868]" />,
  },
];

const HowToPay = (props: Props) => {
  const jsx = (
    <>
      {HowToPayList.map((el) => (
        <IconPlate
          number={el.number}
          body={el.body}
          icon={el.icon}
          key={el.number}
        />
      ))}
    </>
  );
  return (
    <section>
      <div className="flex justify-between flex-wrap items-center">
        <div className="w-[48%]">
          <h1 className="font-bold text-5xl mb-6">How to pay subscription </h1>
          <p className="text-[#151515f1] mb-6">
            Ran out of electricity unit? Need to get insurance? Bulk SMS?
            Education? Toll? TVs subscriptions? Want to fund your betting
            wallet? With easy to follow steps you can pay all your bills from
            the convenience of your home, office, school, market, without having
            to worry about the efficiency, and saving money as you do. Yes ! You
            get cash-back either you are a business owner or you are using
            Payscribe for personal use.
          </p>

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-[100%] mx-auto">
            <div className="flex flex-wrap justify-between">{jsx}</div>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-[#3363b02f] ">
          <img src={subscribedImg} alt="subscribed" />
        </div>
      </div>
    </section>
  );
};

export default HowToPay;
