import React from "react";
import IconCards2 from "../IconCards2";
import Control from "../lottie-animations/You are in control.json";
import Manage from "../lottie-animations/manage your money.json";
import Flexible from "../lottie-animations/flexible savings.json";
import Group1 from "../../assets/HowItWorks/Group1.png"
import Group2 from "../../assets/HowItWorks/Group2.png"
import Group3 from "../../assets/HowItWorks/Group3.png"
import Group4 from "../../assets/HowItWorks/Group4.png"
import Lottie from "lottie-react";
import { BsDash, BsPlus } from "react-icons/bs";

type Props = {};

const Questions = (props: Props) => {
  const questions = [
    {
      header: "What is Payscribe?",
      body: "Payscribe is an lifestyle bills payment and digital assets marketplace, where merchants can conveniently pay all essential lifestyle bills and and put you in complete control of managing your money. Basically we are a leading African B2B and B2C FinTech company whose mission is to deliver best in financial services to SMEs, Agents and Consumers alike. We are building the world's best technology that digitizes cash payments and provides financial services for Nigerians, and Africans at large.",
    },
    {
      header: "How Does Payscribe Work?",
      body: "Users can conveniently bank using their smart mobile phones. Simply register either for business or personal use on Payscribe.ng topup your wallet and start vending any of the services. Receive Money - Send Money - Pay bills - Save - Invest ",
    },
    {
      header: "Do my customers need to have an account with Payscribe?",
      body: "No! Your customers, don't need to have an account with us. We deal directly with you as a merchant, and you can always vend for your customers using all available channels",
    },
    {
        header: "Do I need to be KYC Verified?",
        body: "Yes, for the protection of your funds and identity verification, you need to complete your KYC.",
      },
      {
        header: "What currency does Payscribe operates on?",
        body: "Currently, Payscribe operates on Nigerian currency NGN",
      },
      {
        header: "Does Payscribe have an Open API?",
        body: "Yes, we do",
      },
  ];


  return (
    <section className="mt-[1rem] py-[3rem]">

      <div className="w-full mx-auto px-5 bg-white min-h-sceen">
  <div className="flex flex-col items-center">
    <h2 className="font-bold text-5xl mt-[4rem] tracking-tight">
    Questions we get the most
    </h2>
  </div>
  <div className="grid divide-y divide-neutral-200 w-full px-[4rem] mx-auto mt-8">
  {questions.map((el) => (
    <div className="py-5" style={{border: "none"}}>
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-[#EEEDED] rounded-2xl py-[15px] px-[15px]">
          <span>{el.header}</span>
          <span className="transition group-open:hidden text-[#3362B0]">
            <BsPlus className="text-2xl font-bold text-[#3362B0]" />
          </span>
          <span className="transition hidden group-open:block text-[#3362B0]">
          <BsDash className="text-2xl font-bold text-[#3362B0]"/>
          </span>
        </summary>
        <p className="text-neutral-600 mt-5 group-open:animate-fadeIn px-[2rem]">
          {el.body}
        </p>
      </details>
    </div>))}
  </div>
</div>


    </section>
  );
};

export default Questions;
