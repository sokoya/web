import React from "react";
import { AiFillLock } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { TbCurrency } from "react-icons/tb";
import IconCards from "../IconCards";

type Props = {};

const About = (props: Props) => {
  const aboutList = [
    {
      header: "Save Money On Every Transaction",
      body: "onveniently receive and send money without paying unreasonable charges",
      icon: <TbCurrency />,
      bgColor: "#0082e633",
      color: "#0082E7",
    },
    {
      header: "Secure Transfer",
      body: "You can bank on our proven reliability, enterprise-grade encryption and multi-signature authorisation of our system. All your funds and transactions are safe.",
      icon: <MdPayment />,
      bgColor: "#f5843233",
      color: "#F58634",
    },
    {
      header: "Quick and Easy To Use",
      body: "Our high-tech powered payment solutions send money in seconds ensuring a seemless experience for both sender and recipient. With Payscribe you move money smoothly with no delays, and get the transactions done as quick as lightning.",
      icon: <AiFillLock />,
      bgColor: "#ff3d3d33",
      color: "#FF3D3D",
    },
  ];
  const aboutContentsJSX = (
    <ul className="flex flex-wrap  justify-center w-full ">
      {aboutList.map((el) => (
        <li
          className=" h-[28rem] lg:h-[26rem] my-[2rem] w-full sm:w-[50%] md:w-[40%] bp1:w-[33.3%]"
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
    <section className="mt-[2rem] py-[2rem]">
      <div className="mt-[4rem]">{aboutContentsJSX}</div>
    </section>
  );
};

export default About;
