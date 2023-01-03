import React from "react";
import HeroImg from "../../assets/rewards/hero.png";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'
import Phone from '../../assets/contact-us/home_2.png'

type Props = {};

const EndSection = (props: Props) => {
  return (

<section className="bg-gray-50" style={{marginBottom: "-50px"}}>
  <div className="mx-auto w-full px-2 py-10 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Brief Description of
        <strong className="font-extrabold text-primary2 sm:block">
        Technology.
        </strong>
      </h1>
      <p className="mt-4 sm:text-xl sm:leading-relaxed">
      We currently run a wallet based, and peer-to-peer system where user can seamlessly receive money and send out money with no hassle.
Some of the technology that supports our product/services are
Nigeria Telecommunication: Leveraging on Nigeria telecommunication industry as made it easy for our users to be able to purchase internet data, airtime purchase to connect with their friends and family
      </p>

      <h1 className="text-3xl mt-4 font-extrabold sm:text-5xl">
        <strong className="font-extrabold text-primary2 sm:block">
        Bank
        </strong>
      </h1>
      <p className="mt-4 sm:text-xl sm:leading-relaxed">
      As a wallet system, we are been powered by bank to create a virtual account numbers to our customer, this in turns as helped our users to fund their wallet easily.
      </p>
      
    </div>
    
  </div>
</section>

  );
};

export default EndSection;
