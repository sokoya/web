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
  const aboutContentsJSXs = (
    <ul className="flex flex-wrap  justify-center w-full px-[3rem]">
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
  const aboutContentsJSX = (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
    {aboutList.map((el) => (
        <li key={el.header} className="rounded-2xl border border-gray-200 p-8">
          {el.icon}
            <h3 className="mt-6 font-semibold text-gray-900">{el.header}</h3>
            <p className="mt-2 text-gray-700">{el.body}</p>
        </li>
         ))}
    </ul>
</div>
  )

  return (
    <section className="mt-[1rem] pt-[2rem] pb-[7rem]">
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
