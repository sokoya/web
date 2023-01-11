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
      body: "We have done the work for you to get you to get buy/sell that event tickets.",
      icon: <TbCurrency />,
      bgColor: "#0082e633",
      color: "#0082E7",
    },
    {
      header: "Easy Booking",
      body: "Make bookings for your favourite events and secure a spot anytime, anywhere. ",
      icon: <MdPayment />,
      bgColor: "#f5843233",
      color: "#F58634",
    },
    {
      header: "Secure Payment",
      body: "Receive instant payout for every tickets sold. No downtime! No holidays. ",
      icon: <AiFillLock />,
      bgColor: "#ff3d3d33",
      color: "#FF3D3D",
    },
  ];
  const jsx = (
    <ul className="flex flex-wrap  justify-center w-full ">
      {list.map((el) => (
        <li
          className=" h-[25rem] lg:h-[23rem] my-[2rem] px-[4rem]  w-full sm:w-[50%] md:w-[40%] bp1:w-[33.3%]"
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
      <div className="flex bg-[#efefef] items-center flex-wrap" style={{marginBottom: "-120px"}}>
        <div className="w-[50%]">
          <img src={DemoImg} alt="" />
        </div>
        <div className="w-[50%] px-[5rem]">
          <h3 className="font-bold text-4xl mb-3">It's time to do the most!!</h3>
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
