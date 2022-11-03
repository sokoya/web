import React from "react";
import { AiFillLock } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { TbCurrency } from "react-icons/tb";
import IconCards from "../IconCards";
import DemoImg from "../../assets/events/demo.svg";
import Button from "../Button";

type Props = {};

const Section3 = (props: Props) => {
  const list = [
    {
      header: "Event management ",
      body: "Create and post your free and paid events within minutes. Be explicit in the needed description of venues, time, date and category in the form that will be provided to you. ",
      icon: <TbCurrency />,
      bgColor: "#0082e633",
      color: "#0082E7",
    },
    {
      header: "Secure Transfer",
      body: "Our fast interface gives you the maximum smoothness and ease in booking your tickets online. ",
      icon: <MdPayment />,
      bgColor: "#f5843233",
      color: "#F58634",
    },
    {
      header: "Secure Payment",
      body: "You can request for payout at any time and get it within minutes. ",
      icon: <AiFillLock />,
      bgColor: "#ff3d3d33",
      color: "#FF3D3D",
    },
  ];
  const jsx = (
    <ul className="flex flex-wrap  justify-center w-full ">
      {list.map((el) => (
        <li
          className=" h-[25rem] lg:h-[23rem] my-[2rem] w-full sm:w-[50%] md:w-[40%] bp1:w-[33.3%]"
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
    <section className=" py-[2rem]">
      <div className="mt-[2rem]">{jsx}</div>
      <div className="flex bg-[#efefef] items-center flex-wrap">
        <div className="w-[50%]">
          <img src={DemoImg} alt="" />
        </div>
        <div className="w-[50%] px-[5rem]">
          <p className="mb-[2rem]">
            Payscribe event ticketing service provides you with a topnotch
            experience as an event planner or an attendee. Post both paid and
            free events. Find events close to you, know what is happening,
            where, and when. Events like musicals festivals, exhibitions, sport
            events, concerts, shows, and many more. Use our ticketing platform
            to buy and sell tickets online.{" "}
          </p>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.7rem] px-[2.5rem]  w-full sm:w-auto">
            <p>Start Now</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
