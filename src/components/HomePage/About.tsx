import React from "react";
import IconCards from "../IconCards";

import { aboutList } from "../../listData/homepage";

type Props = {};

const About = (props: Props) => {
  const aboutContentsJSX = (
    <ul className="flex flex-wrap  justify-between w-full ">
      {aboutList.map((el) => (
        <li
          className=" sm:h-[23rem] h-[18rem] px-8 sm:mx-[1rem] lg:h-[15rem] my-[.5rem] sm:my-[2rem] w-full sm:w-[50%] md:w-[40%] bp1:w-[30.3%]"
          key={el.header}
        >
          <IconCards
            iconBgColor={el.bgColor}
            iconColor={el.color}
            content={el.body}
            header={el.header}
            icon={el.icon}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="mt-[4rem] py-[2rem]">
      <div className=" text-center ">
        <h1 className=" text-gray-900 text-xl md:text-2xl lg:text-4xl font-bold mb-4">
          More than bills
        </h1>
        <p className="w-[90%] sm:w-[40%] text-lg mx-auto text-secondary1 ">
          Our suite of products make <span className="text-primary3">financial transactions</span> faster,
          easier and smarter
        </p>
      </div>
      <div className="">{aboutContentsJSX}</div>
    </section>
  );
};

export default About;
