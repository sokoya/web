import React from "react";

import heroImg from "../../assets/save&earn/hero.png";
import IconCards from "../IconCards";
import Interest from "../../assets/save&earn/Group 5.svg";
import Secure from "../../assets/save&earn/Group 6.svg";
import Button from "../Button";
type Props = {};

const Goals = (props: Props) => {
  const goalsList = [
    {
      header: "Amazing Interest",
      body: "With returns up to 11% per annum, Watch your money grow and works for itself",
      icon: <img src={Interest} alt="" />,
    },
    {
      header: "Safe, Secure & Fast",
      body: "All funds are securely managed by our bank partners who are NDIC insured",
      icon: <img src={Secure} alt="" />,
    },
  ];
  return (
    <section className="bg-[#D7D4FE]">
      <div className="flex items-center py-[3rem] sm:py-[2rem] px-[2rem]">
        <div className="w-[50%] scale-x-[-1] hidden md:block">
          <img src={heroImg} alt="" />
        </div>
        <div className="w-full md:w-[50%]">
          <h3>Achieve Goals</h3>
          <p>
            Payscribe allows you to grow your money and reach your saving goals
            while also building credibility
          </p>
          <div className="">
            <ul className="flex flex-wrap items-center justify-between w-full">
              {goalsList.map((el) => (
                <li
                  className=" w-full sm:w-[48%] h-[20rem] sm:h-[23rem] lg:h-[22rem] my-[.5rem] sm:my-[2rem]"
                  key={el.header}
                >
                  <IconCards
                    content={el.body}
                    header={el.header}
                    icon={el.icon}
                    alignStyle={"left"}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.6rem]  px-[2.1rem]  w-full sm:w-auto">
            <p>Register Now &nbsp; &rarr; </p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Goals;
