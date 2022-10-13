import React from "react";
import Header from "../components/AirtimeToCash/Header";
import HowItWorks from "../components/AirtimeToCash/HowItWorks";
import Button from "../components/Button";

type Props = {};

const AirtimeToCash = (props: Props) => {
  return (
    <>
      <Header />
      <HowItWorks />
      <div className="mt-[5rem]">
        <p className="text-2xl mb-[2rem]">
          The mistake of overrecharged airtime is common
        </p>
        <p className="mb-2">
          If it hasn't happened to you, it has happened to someone close to you.
          And sometimes, you might be financially pressed while having an ample
          amount of airtime.
        </p>
        <p className="mb-2">
          But you cannot spend that, can you? Payscribe, as a problem-solving
          platform, provides a solution for this by offering this Airtime to
          Instant Cash service.
        </p>
        <p className="mb-[3rem]">
          At juicy rates, you can convert your excess airtime of any network and
          get your money in naira instantly.
        </p>
        <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.6rem]  px-[2.5rem]  w-full sm:w-auto">
          <p>Register Now</p>
        </Button>
      </div>
    </>
  );
};

export default AirtimeToCash;
