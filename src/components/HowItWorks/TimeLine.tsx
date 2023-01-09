import React from "react";
import { Link } from "react-router-dom";
import Hero1Img from "../../assets/why-payscribe/WhyHeader.png";
import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/HowItWorks/3.png"
import img2 from "../../assets/HowItWorks/4.png"
import img3 from "../../assets/HowItWorks/2.png"
import back from "../../assets/HowItWorks/back.png"
import '../../assets/HowItWorks/timeline.css'
import { reg_link } from "../../listData/homepage";

type Props = {};

const TimeLine = (props: Props) => {
  return (
    <section className="timeline px-[5rem] py-[2rem] flex-wrap items-center w-full mt-[3rem]" style={{background: `url('${back}')`}}>
    <h1 className="mt-[2rem] mb-[5rem]">Leverage Your Business on Payscribe</h1>
    <div className="column mt-[2rem] px-[5rem]">
      <div className="row">
        <div className="text">
          <h3>Create an Account</h3>
          <p>With our seamless onboarding process, you can set up an coount in less than 5 min</p>
        </div>
        <div className="icon">
          <div>
           1
          </div>
          <svg width="200px" height="200px" viewBox="0 0 200 300">
            <line x1={100} x2={100} y1={30} y2={280} stroke="#D9D9D9" strokeWidth={15} strokeLinecap="round" strokeDasharray="1, 30" />
            </svg>

        </div>
        <div className="time">
          <time><img src={img1} /></time>
        </div>
      </div>
      <div className="row">
        <div className="text">
          <h3>Top up your Wallet </h3>
          <p>Select any payment method that suites you and top your wallet to get started </p>
        </div>
        <div className="icon">
          <div>
            2
          </div>
          <svg width="200px" height="200px" viewBox="0 0 200 300">
                <line x1={100} x2={100} y1={30} y2={280} stroke="#D9D9D9" strokeWidth={15} strokeLinecap="round" strokeDasharray="1, 30" />
          </svg>
        </div>
        <div className="time">
          <time><img src={img3} /></time>
        </div>
      </div>
      <div className="row">
        <div className="text">
          <h3>Integrate Payscribe</h3>
          <p>Integrate Payscribe on your website and app with our easy to use API. SDKs also available
        You're all set!!! </p>
        </div>
        <div className="icon">
          <div>
            3
          </div>
    
        </div>
        <div className="time">
          <time><img src={img2} /></time>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center mt-[5rem] pt-[5rem]">
          <Link to={reg_link}>
            <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.5rem]  px-[1.5rem]  w-full sm:w-auto">
              <p className="flex items-center">Get Started <BsArrowRight className="ml-[1rem]" /></p>
            </Button>
          </Link>
        </div> 
  </section>
  
  );
};

export default TimeLine;
