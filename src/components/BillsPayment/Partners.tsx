import React from "react";
import { billsList } from "../../listData/bills";
type Props = {};

const Partners = (props: Props) => {
  const jsx = (
    <>
      {billsList.map((el) => (
        <div className="mt-[4rem] sm:px-[6rem] text-center" key={el.header}>
          <h1 className="text-4xl md:text-3xl mb-[2rem] sm:mb-3 font-semibold">{el.header}</h1>
          <div className="my-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {el.images.map((img) => (
              // <div className={`${el.header === "TV subscriptions"? "w-[35%] sm:w-[25%] md:w-[15%]" : "w-[30%] sm:w-[22%] md:w-[12%] "} mb-5 sm:mb-0 pr-12`} key={img}>
              //   <img src={img} alt="logo" />
              // </div>
              <a className="relative flex h-16 items-center justify-center border p-1 text-center hover:bg-gray-50 dark:bg-white" href="#" title="" rel="noopener" target="_blank">
              <img className="max-h-[56px] w-auto max-w-full" src={img} alt="" />
            </a>
            
            ))}
          </div>
        </div>
      ))}
    </>
  );
  return (
    <section className="mt-[7rem] px-4 sm:px-0">
      <h1 className="text-center font-bold text-5xl mb-[5rem] ">Our Partners</h1>
      <div className="">{jsx}</div>
    </section>
  );
};

export default Partners;
