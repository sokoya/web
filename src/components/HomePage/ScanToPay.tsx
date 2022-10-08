import React from "react";
import ScanImg from "../../assets/scantopay.svg";
type Props = {};

const ScanToPay = (props: Props) => {
  return (
    <section className="bg-[#f584340b]">
      <div className="flex flex-row-reverse sm:flex-row flex-wrap items-center py-[5rem]  px-[3rem]">
        <div className="w-full sm:w-[50%]">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] mb-6 font-semibold leading-[5rem]">
            Scan and Accept payments instantly{" "}
          </h1>
          <p className="w-full sm:w-[70%] text-secondary1 mb-[3rem] sm:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            quis fugit natus ex, est vero nemo fugiat explicabo architecto
            voluptatem aliquid rem minus dolorum suscipit incidunt, maxime
            veritatis unde velit.
          </p>
        </div>
        <div className="w-full sm:w-[50%]">
          <img src={ScanImg} alt="scantopay" />
        </div>
      </div>
    </section>
  );
};

export default ScanToPay;
