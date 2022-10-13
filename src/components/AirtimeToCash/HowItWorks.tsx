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
    icon: <AiOutlineUser />,
  },
  {
    title: "View Rates",
    body: "From the 'Airtime to Cash' menu, select your network, and the amount you want to convert.",
    icon: <GiMoneyStack />,
  },
  {
    title: "Convert",
    body: "Send the airtime to number highlighted for you, and in no distant moment, you will receive estimated value for the airtime. ",
    icon: <SiConvertio />,
  },
];

const HowItWorks = (props: Props) => {
  const jsx = (
    <>
      {howitworksList.map((el) => (
        <IconPlate
          title={el.title}
          body={el.body}
          icon={el.icon}
          key={el.title}
        />
      ))}
    </>
  );
  return (
    <section className="mt-[5rem]">
      <div className="w-full flex py-[2rem] items-center  font-semibold bg-[#3363b02f]">
        <div className="w-[50%]">
          <img src={HowItWorksImg} alt="" />
        </div>
        <div className="w-[50%]">
          <div className="w-[80%] mx-auto">
            <h1 className="text-3xl mb-10">How It Works</h1>
            {jsx}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
