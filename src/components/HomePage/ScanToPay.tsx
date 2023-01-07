import React from "react";
import ScanImg from "../../assets/scantopay.svg";
import TrustPayscribe from "./TrustPayscribe";

type Props = {};

const ScanToPay = (props: Props) => {
  return (
    <section className="mt-[4rem] rounded-lg bg-gradient-to-b from-[#D5D1FF] to-[#E9E9E9]">
      <div className="flex flex-row-reverse sm:flex-row flex-wrap items-center py-[2rem] px-[1rem] sm:px-[3rem]">
        <div className="w-full sm:w-[50%]">
          <h1 className="text-[1.5rem] sm:text-[3.5rem] mb-14 font-bold sm:font-semibold leading-[1.7rem] sm:leading-[4rem]">
            Scan and Accept payments instantly{" "}
          </h1>
          <p className="mt-0 mb-3 text-gray-600 text-md pr-5">Empower your business with the right tools to transact anywhere while boosting your revenue</p>
          <ul className="mt-[4rem] pl-[1.1rem]">

            <li className="relative flex items-baseline gap-2 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400 timeline2">
                <div className="icon">
                <div>
                    1
                </div>
                </div>
                </div>
                <div style={{alignSelf: "center"}}>
                <p className="mt-0 mb-5 text-gray-600 text-md pr-5">   Website and Mobile
Use our various payment channels to accept online payments and donations.</p>
                </div>
            </li>
            <li className="relative flex items-baseline gap-2 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400 timeline2">
                <div className="icon">
                <div>
                    2
                </div>
                </div>
                </div>
                <div style={{alignSelf: "center"}}>
                <p className="mt-0 mb-5 text-gray-600 text-md pr-5">Payment Links
Easily send payment links and invoices through email or social media.</p>
                </div>
            </li>
            <li className="relative flex items-baseline gap-2 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-40 timeline2">
                <div className="icon">
                <div>
                    3
                </div>
                </div>
                </div>
                <div style={{alignSelf: "center"}}>
                <p className="mt-0 mb-5 text-gray-600 text-md pr-5">Improve the experience of in-person transactions by enabling payment options at your retail stores, restaurants, or events.</p>
                </div>
            </li>
            </ul>
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
