import React from "react";
import { billsList } from "../../listData/bills";
type Props = {};

const Partners = (props: Props) => {
  const jsx = (
    <>
      {billsList.map((el) => (
        <div className="mt-[7rem] text-center" key={el.header}>
          <h1 className="text-4xl md:text-3xl mb-10 font-semibold">{el.header}</h1>
          <div className="flex justify-center items-center flex-wrap w-full">
            {el.images.map((img) => (
              <div className={`${el.header === "TV subscriptions"? "w-[35%] sm:w-[25%] md:w-[15%]" : "w-[30%] sm:w-[22%] md:w-[12%] "} mb-5 sm:mb-0 pr-12`} key={img}>
                <img src={img} alt="logo" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
  return (
    <section className="mt-[7rem]">
      <h1 className="text-center font-bold text-5xl mb-[5rem] ">Our Partners</h1>
      <div className="">{jsx}</div>
    </section>
  );
};

export default Partners;
