import React from "react";
import Logo from "../assets/payscribe.svg";
import { footerList } from "../listData/homepage";
import FooterList from "./FooterList";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import GooglePlayImg from "../assets/play_store.png"
type Props = {};

const Footer = (props: Props) => {
  const footerListJSX = (
    <>
      {footerList.map((el, index) => (
        <div
          key={el.header}
          className=" mb-[3rem] bp4:mb-0 w-full xs:w-[40%] bp3:w-[25%] mr-[1.5rem] sm:mr-0"
        >
          <FooterList footerItems={el.list} header={el.header} />
        </div>
      ))}
    </>
  );
  return (
    <footer className=" bg-primary3 text-white w-full px-[3rem] py-[7rem] mt-[5rem] ">
      <div className="w-full  flex items-start flex-wrap">
        <div className="w-full mb-[3rem] bp4:mb-0 bp4:w-[30%] ">
          <div className="w-[10rem] -mt-[3rem]">
            <img src={Logo} alt="logo" />
          </div>
          <div className=" mb-4 text-sm">
            <p className="w-[85%] mb-4">
              95 Oreta Road, Opposite Clay View Hotel, Ikorodu, Lagos State
            </p>
            <p className="mb-2">hello@payscribe.ng</p>
            <p className="mb-2">+234 703 806 7493</p>
          </div>
          <div className="w-full mb-7 mr-[5rem] md:mr-8">
            <div className="flex items-center text-xl mb-[3rem] sm:mb-[5rem] md:mb-6">
              <FaFacebookSquare className="mr-5" />
              <BsTwitter className="mr-5" />
              <FiInstagram className="mr-2" />
            </div>
          </div>
          <img src={GooglePlayImg} alt="" className="w-[10rem] mt-8" />
        </div>

        <div className="w-full bp4:w-[70%] flex flex-wrap justify-between sm:justify-start">
          {footerListJSX}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
