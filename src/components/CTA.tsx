import React from "react";
import CTAImg from "../assets/cta/heroImg.png";
import Button from "./Button";

function CTA() {
  return (
    <section className="  px-[2rem] mx-auto sm:py-[1rem] mt-[4rem] block ">
      <div className="flex  flex-wrap items-center sm:h-[50vh]  md:h-[60vh]">
        <div className="w-full sm:w-[40%] sm:px-[3rem]  mb-[5rem] sm:mb-0 text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-8 ">Ready To get Started ?</h1>
          <p className="mb-8">
            You can create an account directly from the web, or download
            <span className="text-primary3"> Payscribe mobile app</span>- Google play store or App Store
          </p>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.6rem]  px-[2.5rem]  w-full sm:w-auto">
            <p>Get Started</p>
          </Button>
        </div>
        <div className="w-full sm:w-[60%]">
          <div className="">
            <img src={CTAImg} alt="cta" className=" w-[50rem] mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
