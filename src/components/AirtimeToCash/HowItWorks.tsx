import React from "react";
import HowItWorksImg from "../../assets/airtime/howitworks.svg";
import { AiOutlineUser } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { SiConvertio } from "react-icons/si";
import IconPlate from "../IconPlate";
import Button from "../Button";
type Props = {};

const howitworksList = [
  {
    title: "Sign Up",
    body: "Create an account in less than a minute and complete the KYC. ",
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
    <section className="mt-[5rem] px-[2rem]">
      <h1 className="text-5xl mb-6 text-center font-semibold">How It Works</h1>
      <div className="bgg-[#F2F2F2] py-[3rem]">
        <div className="w-full  flex flex-wrap  mt:items-start lg:items-center   font-semibold ">
          <div className=" w-[100%] md:w-[50%] mb-[2rem] md:mb-0">
            <img src={HowItWorksImg} alt="" />
          </div>
          <div className="w-full md:w-[50%]">
            <div className="w-full md:w-[85%] mx-auto">
              <div className="flex flex-wrap justify-between px-[2rem] md:px-0">{jsx}</div>
            </div>
          </div>
        </div>
        <div className="mt-[3rem] text-center bp3:mt-[5rem] px-[2rem] sm:px-0">
          <p className="text-4xl font-bold mb-[2rem]">
            The mistake of <span className="text-primary3">over recharged</span> airtime is common
          </p>
          <div className="text-xl sm:text-sm text-[#151515f1]">
            <p className=" mb-2">
              If it hasn't happened to you, it has happened to someone close to
              you. And sometimes, you might be financially pressed while having
              an ample amount of airtime.
            </p>
            <p className="mb-2">
              But you cannot spend that, can you? Payscribe, as a
              problem-solving platform, provides a solution for this by offering
              this Airtime to Instant Cash service.
            </p>
            <p className="mb-[3rem]">
              At juicy rates, you can convert your excess airtime of any network
              and get your money in naira instantly.
            </p>
          </div>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.6rem]  px-[2.5rem]  w-full sm:w-auto">
            <p>Get Started &nbsp; &rarr;</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
