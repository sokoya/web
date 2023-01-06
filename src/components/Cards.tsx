import React, { ReactNode } from "react";
import testImg from "../assets/test1.svg";

interface Props {
  backgroundColor: string;
  header: string;
  body: string;
  icon?: ReactNode;
  color: string;
  cardImg: ReactNode;
}

const Cards = (props: Props) => {
  return (
    <div className=" w-full rounded-3xl  h-[28rem] bp5:h-[30rem] bg-primary3-light bg-opacity-10 text-center py-[.4rem] mb-7 mx-[1rem] bp1:mx-[1.2rem] lg:mx-[1.5rem]">
      <div className="w-[96%] mx-auto">{props.cardImg}</div>
      <div className="">
        <h1 className="text-center mt-4 font-semibold text-lg mb-2 text-white">
          {props.header}
        </h1>
        <p className="text-white px-[2rem] text-sm">{props.body}</p>
      </div>
    </div>
  );
};

export default Cards;
