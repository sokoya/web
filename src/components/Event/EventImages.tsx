import React from "react";
import classes from "../../styles/events.module.css";

type Props = {};

const EventImages = (props: Props) => {
  return (
    <section className="mt-[7rem] px-[2rem]">
      <div className="flex flex-wrap justify-between text-white">
        <div className={`h-[20rem] relative w-[59%] mb-3  ${classes.Lagos}`}>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <p>Lagos</p>
          </div>
        </div>
        <div className={`h-[20rem] relative w-[40%] ${classes.Abuja}`}>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <p>Abuja</p>
          </div>
        </div>
        <div className={`h-[20rem] relative w-[39%] mb-3 ${classes.Port}`}>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <p>Porthacourt</p>
          </div>
        </div>
        <div className={`h-[20rem] relative w-[60%] ${classes.Kano}`}>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <p>Kano</p>
          </div>
        </div>
        <div className={`h-[20rem] relative w-[59%] ${classes.Ogun}`}>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <p>Ogun</p>
          </div>
        </div>
        <div className={`h-[20rem] relative w-[40%] ${classes.Ibadan}`}>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <p>Ibadan</p>
          </div>
        </div>
      </div>
      {/* <p className="mt-[2rem]">
        and many more. There are many reasons Payscribe is one of the best
        ticketing platform in Nigeria.
      </p> */}
    </section>
  );
};

export default EventImages;
