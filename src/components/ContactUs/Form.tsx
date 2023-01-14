import React from "react";
import { Link } from "react-router-dom";
import Hero1Img from "../../assets/contact-us/home.jpeg";
import Home from "../../assets/contact-us/icon-home-fill.svg";
import Mail from "../../assets/contact-us/mail.png";
import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";
import '../../assets/contact-us/forms.css'

type Props = {};

const Form = (props: Props) => {
  return (
    <div className="bgg-[#efefef] bg-headerBg relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] lg:mt-[120px] mt-[70px] lg:rounded-[20px] lg:mx-[3rem]">
      <div className="mx-auto relative max-w-[1320px]"><img className="absolute right-0 max-w-[95px] top-[-50px]" src={Mail} alt="mail image" />
        <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">Contact us</p>
        <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">We’re Always Here For You!
        </h2>
        <p className="text-text text-gray-600 mb-[30px] md:mb-[60px]">For general enquiries send us a message with the form below
        </p>
        <div className="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
          <div>
            <div className="flex gap-[13px] mb-[15px] md:mb-[25px]"> <i> <img src={Home} alt="home icon" /></i>
              <p className="text-heading-6 font-bold font-chivo">PAYSCRIBE NG</p>
            </div>
            <p className="text-text text-gray-600">95 Oreta Road Tipper Garrage.
            </p>
            <p className="text-text text-gray-600 mb-[10px] md:mb-[16px]"> Ikorodu.
              Lagos State
            </p>
            <p className="text-text text-gray-600 underline">07038067493
            </p>
            <p className="text-text text-gray-600 underline">hello@payscribe.ng
            </p>
          </div>
          <form className="flex-1" action="/">
            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
              <input className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Enter your name" />
              <input className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Company (optional)" />
            </div>
            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
              <input className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Your email" />
              <input className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Phone number" />
            </div>
            <textarea className="w-full py-2 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]" name="" cols={100} rows={10} placeholder="Reason for contacting us" defaultValue={""} />
            <div className="flex flex-col gap-5">
              <button className="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[15px] rounded-[5px] font-chivo font-semibold text-md md:text-lg text-white bg-primary2 w-fit" type="submit">Send Message<i></i>
              </button>
            
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Form;
