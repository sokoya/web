import React from "react";
import IconCards from "../IconCards";

import { aboutList } from "../../listData/homepage";

type Props = {};

const About = (props: Props) => {
  const aboutContentsJSX = (
    <ul className="flex flex-wrap  justify-center w-full ">
      {aboutList.map((el, index) => (
        <li className="w-full  sm:w-[33.3%]" key={el.header}>
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
    <section className="mt-[7rem] py-[2rem]">
      <div className=" ">
        <h1 className=" text-center sm:text-left text-4xl  xs:text-5xl font-bold">
          Pay with Payscribe anywhere
        </h1>
      </div>
      <div className="mt-[4rem]">{aboutContentsJSX}</div>
    </section>
  );
};

export default About;
