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
    <div className="rounded-3xl h-[30rem] bg-primary3-light bg-opacity-10 text-center py-[.4rem] ">
      <div className="w-[96%] mx-auto">{props.cardImg}</div>
      <div className="">
        <h1 className="text-center mt-4 font-semibold text-xl mb-2 text-white">
          {props.header}
        </h1>
        <p className="text-white px-[2rem]">{props.body}</p>
      </div>
    </div>
  );
};

export default Cards;
