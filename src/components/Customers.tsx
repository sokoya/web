import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  comment: string;
  customer_name: string;
  index: number;
}

const Customers = (props: Props) => {
  return (
    <div
      className={`${
        props.index === 2 ? "block sm:hidden md:block" : ""
      } w-full sm:w-[45%] md:w-[28%] mb-6 sm:mb-0  mx-[1rem] bp1:mx-[1.2rem] lg:mx-[1.5rem]`}
    >
      <div className="flex items-start">
        <FaUserCircle className="text-[8rem] mr-[2rem] -mt-[2rem]" />
        <div className="">
          <p className="text-secondary1 text-lg sm:text-sm mb-4">{props.comment}</p>
          <h2 className="font-semibold">{props.customer_name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Customers;
