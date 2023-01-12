import React from "react";
import IconCards from "../IconCards";
import Control from "../lottie-animations/You are in control.json";
import Manage from "../lottie-animations/manage your money.json";
import Flexible from "../lottie-animations/flexible savings.json";
import Lottie from "lottie-react";

type Props = {};

const About = (props: Props) => {
  const aboutList = [
    {
      header: "You're in Control",
      body: "Set how and when a certain % of money should be saved for you on every transaction you make on Airtime, Data purchase, Bills payment etc",
      icon: <Lottie style={{ width: "70px" }} animationData={Control} />,
    },
    {
      header: "Manage Your Money",
      body: "Set a saving target for a fixed period of time, and watch it grow while attending to other things that matters to you.",
      icon: <Lottie style={{ width: "70px" }} animationData={Manage} />,
    },
    {
      header: "Flexible Savings",
      body: "Save as you wish, with different saving methods and duration daily, weekly, monthly fully automated",
      icon: <Lottie style={{ width: "70px" }} animationData={Flexible} />,
    },
  ];
  const aboutContentsJSX = (
    <ul className="flex flex-wrap  justify-center w-full ">
      {aboutList.map((el) => (
        <li
          className=" h-[23rem] px-8 lg:h-[22rem] my-[.5rem] sm:my-[2rem] w-full sm:w-[50%] md:w-[40%] bp1:w-[33.3%]"
          key={el.header}
        >
          <IconCards content={el.body} header={el.header} icon={el.icon} />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="mt-[6rem] py-[2rem]">
      <div className=" text-center ">
        <h1 className=" text-4xl mb-3  xs:text-5xl font-bold">
          Stay Discipline! Remain Committed!
        </h1>
        <p className="w-[90%] sm:w-[40%] text-lg mx-auto text-secondary1 ">
          Lock funds to avoid spending all, and earn interest
        </p>
      </div>
      <div className="">{aboutContentsJSX}</div>
    </section>
  );
};

export default About;
