import React from "react";
import { FaUserCircle } from "react-icons/fa";
import QuoteImg from "../assets/quote.svg";

interface Props {
  comment: string;
  customer_name: string;
  index: number;
  role: string;
}

const Customers = (props: Props) => {
  return (
    <div
      className={`w-full relative h-[27rem] xs:h-[23rem] sm:h-[18rem] light-shadow bg-white py-[2rem] px-[1rem] rounded-md  my-[2rem] mb-[2rem]  mx-[1rem] bp1:mx-[1.2rem] lg:mx-[1.5rem]`}
    >
      <div className="">
        <img className="mb-9" src={QuoteImg} alt="quoteimg" />
        <div className="">
          <p className="text-secondary1 text-sm sm:text-sm mb-9">
            {props.comment}
          </p>
          <div className="flex items-center absolute bottom-6 ">
            <FaUserCircle className="text-[2.5rem] mr-4" />
            <div className="">
              <h2 className="font-semibold">{props.customer_name}</h2>
              <p>{props.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
