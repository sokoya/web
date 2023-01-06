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
    <>
    <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
      Easy! Fast! Reliable!
      </h2>
      <p className="mt-4 text-gray-500 sm:text-xl">
      We open your business to the world of endless possibilities with lifestyle payment and savings, and investments With Payscribe there is no limitation to your business. Power your business with our array of products.
      </p>
    </div>
    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="flex flex-col rounded-lg border-[1.5px] border-gray-300 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Products and Services
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            20+
          </dd>
        </div>
        <div className="flex flex-col rounded-lg border-[1.5px] border-gray-300 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
          Businesses and Merchants
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">100+</dd>
        </div>
        <div className="flex flex-col rounded-lg border-[1.5px] border-gray-300 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
          Transactions
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$15,000+</dd>
        </div>
        <div className="flex flex-col rounded-lg border-[1.5px] border-gray-300 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
          Uptime and Support
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">99%</dd>
        </div>
      </dl>
    </div>
  </div>
</section>


    <section className="mt-[6rem] py-[2rem] hidden">
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
    </>
  );
};

export default WhyUsePayscribe;
