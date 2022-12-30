import React from "react";
import IconCards from "../IconCards";
import Control from "../lottie-animations/You are in control.json";
import Manage from "../lottie-animations/manage your money.json";
import Flexible from "../lottie-animations/flexible savings.json";
import Lottie from "lottie-react";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const WhyUsePayscribe = (props: Props) => {
  const aboutList = [
    {
      header: "You're in Control",
      body: "Set how and when a certain % of money should be saved on every transaction you make. ",
      icon: <Lottie style={{ width: "70px" }} animationData={Control} />,
    },
    {
      header: "Manage Your Money",
      body: "Set aside funds for a fixed period of time without having access to it until maturity",
      icon: <Lottie style={{ width: "70px" }} animationData={Manage} />,
    }
  ];
  const aboutContentsJSX = (
    <ul className="flex flex-wrap  justify-center w-full px-[5rem] gap-[2rem]">
      {aboutList.map((el) => (
        <li
          className=" h-[23rem] px-8 lg:h-[22rem] my-[.5rem] sm:my-[2rem] w-full sm:w-[50%] md:w-[40%] bp1:w-[33.3%]"
          key={el.header}
          style={{background: "#3362B0", boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15)", borderRadius: "20px"}}
        >
          <IconCards content={el.body} header={el.header} icon={el.icon} />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="mt-[6rem] py-[2rem]">
      <div className=" text-center ">
        <h1 className=" text-4xl mb-[5rem]  xs:text-5xl font-bold">
          Why Use Payscribe?
        </h1>
      </div>
      <div className="">
      <ul className="flex flex-wrap  justify-center w-full px-[5rem] gap-[10rem]">
        <li
          className="flex items-center flex-col justify-center h-[23rem] px-8 lg:h-[22rem] my-[.5rem] sm:my-[2rem] w-full sm:w-[50%] md:w-[40%] bp1:w-[33.3%]"
          style={{background: "#3362B0", boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15)", borderRadius: "20px"}}
        >
          <h3 className="text-white text-3xl">Easy! Fast! Reliable!</h3>
          <p className="text-gray-300 mt-[1.5rem] text-lg">We open your business to the world of endless possibilities with lifestyle payment and savings, and investments With Payscribe there is no limitation to your business. Power your business with our array of products.</p>
          <p className="flex items-center text-white mt-[3rem] text-2xl">Learn More <BsArrowRight className="ml-[1rem]" /></p>
        </li>

        <li
          className="flex items-center flex-col justify-center h-[23rem] px-8 lg:h-[22rem] my-[.5rem] sm:my-[2rem] w-full sm:w-[50%] md:w-[40%] bp1:w-[33.3%]"
          style={{background: "#3362B0", boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15)", borderRadius: "20px"}}
        >
          <h3 className="text-white text-2xl">20+</h3>
          <p className="text-gray-300 mt-[0rem] text-lg">Products and Services</p>

          <h3 className="text-white text-2xl mt-[1.5rem]">100+</h3>
          <p className="text-gray-300 mt-[0rem] text-lg">Businesses and Merchants</p>

          <h3 className="text-white text-2xl mt-[1.5rem]">$15,000+</h3>
          <p className="text-gray-300 mt-[0rem] text-lg">Transactions</p>

          <h3 className="text-white text-2xl mt-[1.5rem]">99%</h3>
          <p className="text-gray-300 mt-[0rem] text-lg">Uptime and Support</p>
        </li>

    </ul>
      </div>
    </section>
  );
};

export default WhyUsePayscribe;
