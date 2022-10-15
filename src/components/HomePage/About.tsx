import React from "react";
import IconCards from "../IconCards";

import { aboutList } from "../../listData/homepage";

type Props = {};

const About = (props: Props) => {
  const aboutContentsJSX = (
    <ul className="flex flex-wrap  justify-center w-full ">
      {aboutList.map((el) => (
        <li className=" h-[23rem] lg:h-[20rem] my-[2rem] sm:my-0 w-full sm:w-[50%] md:w-[40%] bp1:w-[33.3%]" key={el.header}>
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
      <div className=" text-center ">
        <h1 className=" text-4xl mb-3  xs:text-5xl font-bold">More than bills</h1>
        <p className= "w-[90%] sm:w-[40%] text-lg mx-auto text-secondary1 ">
          Our suite of products make financial transactions faster, easier and
          smarter
        </p>
      </div>
      <div className="mt-[4rem]">{aboutContentsJSX}</div>
    </section>
  );
};

export default About;
