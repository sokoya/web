import React from "react";
import HeroImg from "../../assets/rewards/hero.png";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'
import Phone from '../../assets/contact-us/home_2.png'
import Mailing from '../../assets/contact-us/mailing.png'

type Props = {};

const EndSection = (props: Props) => {
  return (
      <section>
        <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-[6rem]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-32 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img alt="mailing" src={Mailing} className="absolute inset-0 rounded-lg h-full w-full object-contain" style={{backgroundPosition: "right"}}/>
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Let's do this together</h2>
              <p className="mt-4 text-sm text-gray-600">
              We're proud to collaborate, support, and celebrate with incredible leaders from the Global African community. Kindly hit us up for event sponsorship, speaking opportunities or becoming a Payscribe Ambassador, we'd love to hear from you. 
              </p>
              <a href="mailto:marketing@payscribe.ng" className="mt-8 inline-flex items-center rounded border border-primary2 bg-primary2 px-8 py-3 text-white hover:bg-transparent hover:text-primary2 focus:outline-none focus:ring active:text-indigo-500">
                <span className="text-sm font-medium"> Send Us A Message </span>
                <svg className="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default EndSection;
