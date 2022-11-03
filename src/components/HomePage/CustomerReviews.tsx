import React from "react";
import { reviewsList } from "../../listData/homepage";
import Button from "../Button";
import Customers from "../Customers";

const CustomerSection = () => {
  const reviewsJSX = (
    <>
      {reviewsList.map((el, index) => (
        <Customers
          index={index}
          key={el.name}
          comment={el.review}
          customer_name={el.name}
        />
      ))}
    </>
  );
  return (
    <section className="mt-[10rem]">
      <h1 className="font-bold text-4xl xxs:text-5xl mb-[5rem] text-center">
        What Our Customers Think
      </h1>
      <div className="flex justify-between flex-wrap">{reviewsJSX}</div>
      <div className="flex justify-center mt-[5rem]">
        <Button class="bg-primary2 text-white px-[2rem] py-4">Read More Reviews</Button>
      </div>
    </section>
  );
};

export default CustomerSection;
