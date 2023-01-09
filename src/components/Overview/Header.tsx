import React from "react";
import HeroImg from "../../assets/rewards/hero.png";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'
import { Link } from "react-router-dom";
import { reg_link } from "../../listData/homepage";

type Props = {};

const Header = (props: Props) => {
  return (
<div>
  
  <div className="relative pt-40 pb-20 lg:pt-44 lg:pl-[1.5rem]"  style={{background: `url('${bg}')`}}>
    <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
      <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-2xl text-center sm:text-2xl md:text-5xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">PAYSCRIBE FOR DEVELOPERS<br className="l:block hiden" /> <span className="relative bg-clip-text bg-gradient-to-r text-black text-[23px]">Adopt top-notch payment experience for your web and mobile application.</span></h1>
      <div className="lg:flex">
        <div className="relative mt-8 md:mt-10 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
          <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
          We've made it easy for you to accept payments, pay daily essential bills with just a few lines of code.
          </p>
          <div className="flex md:justify-start justify-start">
              <Link to={reg_link}>
          <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.8rem]  px-[2.2rem]  w-full sm:w-auto">
            <p>Get Started &nbsp; &rarr;</p>
          </Button>
          </Link>
          </div>
          {/* <div className="dark:text-gray-300">
            🔥🌟 
            <span>Other integrations :</span> 
            <a href="#" className="font-semibold text-gray-700 dark:text-gray-200">Discord,</a>
            <a href="#" className="font-semibold text-gray-700 dark:text-gray-200">Telegram</a>
          </div>
          <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
            <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
            <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
            <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
            <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
          </div> */}
        </div>
        {/* <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
          <div className="relative w-full">
            <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl" />
            <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg" className="relative w-full" alt="wath illustration" loading="lazy" width={320} height={280} />
          </div>
        </div> */}
      </div>
    </div>
  </div>
</div>

  );
};

export default Header;
