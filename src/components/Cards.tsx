import React, { ReactNode } from "react";
import testImg from "../assets/test1.svg";

interface Props {
  backgroundColor: string;
  header: string;
  body: string;
  icon?: ReactNode;
  color: string;
}

const Cards = (props: Props) => {
  return (
    <div
      style={{ backgroundColor: props.backgroundColor }}
      className="rounded-xl bg-opacity-10 px-[2rem] text-center py-[4rem] "
    >
      <div className="w-[15rem] mx-auto">
        <img src={testImg} alt="" />
      </div>
      <div className="">
        <h1
          style={{ color: props.color }}
          className="text-center font-semibold text-xl mb-6"
        >
          {props.header}
        </h1>
        <p className="text-sm">{props.body}</p>
      </div>
    </div>
  );
};

export default Cards;
