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
          <p className="w-full sm:w-[85%] mb-[1rem] ">
          Empower your business with the right tools to transact anywhere while boosting your revenue
          </p>
          <p className="w-full sm:w-[85%] mb-[1rem] ">
   Website and Mobile
Use our various payment channels to accept online payments and donations.
          </p>
          <p className="w-full sm:w-[85%] mb-[1rem] ">

Payment Links
Easily send payment links and invoices through email or social media.
          </p>
          <p className="w-full sm:w-[85%] mb-[1rem] ">Point of Sale (POS)
Improve the experience of in-person transactions by enabling payment options at your retail stores, restaurants, or events.
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
