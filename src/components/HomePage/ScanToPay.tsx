import React from "react";
import ScanImg from "../../assets/scantopay.svg";
import TrustPayscribe from "./TrustPayscribe";

type Props = {};

const ScanToPay = (props: Props) => {
  return (
    <section className="mt-[4rem] rounded-lg bg-gradient-to-b from-[#D5D1FF] to-[#E9E9E9]">
      <div className="flex flex-row-reverse sm:flex-row flex-wrap items-center py-[5rem] px-[1rem] sm:px-[3rem]">
        <div className="w-full sm:w-[50%]">
          <h1 className="text-[2.5rem] sm:text-[4.5rem] mb-14 font-bold sm:font-semibold leading-[2.7rem] sm:leading-[5rem]">
            Scan and Accept payments instantly{" "}
          </h1>
          <p className="w-full sm:w-[85%] mb-[1rem] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            quis fugit natus ex,
          </p>
          <p className="text-primary3-light sm:w-[85%] mb-[3rem] sm:mb-0">
            {" "}
            est vero nemo fugiat explicabo architecto voluptatem aliquid rem
            minus dolorum suscipit incidunt, maxime veritatis unde velit.
          </p>
        </div>
        <div className="w-full sm:w-[50%]">
          <img src={ScanImg} alt="scantopay" />
        </div>
      </div>
      <TrustPayscribe />
    </section>
  );
};

export default ScanToPay;
