import React from "react";
import HowItWorksImg from "../../assets/airtime/howitworks.svg";
import { AiOutlineUser } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { SiConvertio } from "react-icons/si";
import IconPlate from "../IconPlate";
type Props = {};

const howitworksList = [
  {
    title: "Sign Up",
    body: "Create an Payscribe account with a valid email. Follow our simple steps. ",
    icon: <AiOutlineUser className="text-[#226c1a68]" />,
  },
  {
    title: "View Rates",
    body: "From the 'Airtime to Cash' menu, select your network, and the amount you want to convert.",
    icon: <GiMoneyStack className="text-[#82111168]" />,
  },
  {
    title: "Convert",
    body: "Send the airtime to number highlighted for you, and in no distant moment, you will receive estimated value for the airtime. ",
    icon: <SiConvertio className="text-[#12109868]" />,
  },
];

const HowItWorks = (props: Props) => {
  const jsx = (
    <>
      {howitworksList.map((el) => (
        <div className="my-[2rem] -[100%] bp3:w-[45%]">
          <IconPlate
            title={el.title}
            body={el.body}
            icon={el.icon}
            key={el.title}
          />
        </div>
      ))}
    </>
  );
  return (
    <section className="mt-[5rem]">
      <h1 className="text-5xl mb-10 text-center font-semibold">How It Works</h1>
      <div className="w-full flex flex-wrap py-[2rem] mt:items-start lg:items-center   font-semibold ">
        <div className=" w-[100%] md:w-[50%] bg-[#3363b02f] mb-[2rem] md:mb-0">
          <img src={HowItWorksImg} alt="" />
        </div>
        <div className="w-full md:w-[50%]">
          <div className="w-full md:w-[85%] mx-auto">
            <div className="flex flex-wrap justify-between">{jsx}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
