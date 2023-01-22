import React from "react";
import Logo from "../assets/payscribe.svg";
import { footerList } from "../listData/homepage";
import FooterList from "./FooterList";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import GooglePlayImg from "../assets/playstore.png"
import AppStoreImg from "../assets/applestore.png"
type Props = {};

const Footer = (props: Props) => {
  const footerListJSX = (
    <>
      {footerList.map((el, index) => (
        <div
          key={el.header}
          className=" mb-[3rem] bp4:mb-0 w-full xs:w-[40%] bp3:w-[25%] mr-[1.5rem] sm:mr-0"
        >
          <FooterList footerItems={el.list} header={el.header}/>
        </div>
      ))}
    </>
  );
  return (
    <footer className=" bg-primary3 text-white w-full px-[2rem] py-[3rem] sm:px-[3rem] sm:py-[5rem] mt-[5rem] ">
      <div className="w-full  flex items-start flex-wrap">
        <div className="w-full mb-[3rem] bp4:mb-0 bp4:w-[30%] ">
          <div className="w-[10rem] -mt-[3rem]">
            <img src={Logo} alt="logo" />
          </div>
          <div className=" mb-4 text-sm">
            <p className="w-[85%] mb-4">
              Building the world-class technology that digitizes cash payments and provides daily essentials financial services all at your finger tips.
            </p>
            <p className="mb-2">
              <a href="mailto:hello@payscribe.ng">hello@payscribe.ng</a>
            </p>
            <p className="mb-2">
              <a href="tel:+2347038067493">+234 703 806 7493</a>
            </p>
          </div>
          <div className="w-full mb-2 mr-[5rem] md:mr-8">
            <div className="flex items-center text-xl mb-[2rem] sm:mb-[5rem] md:mb-6">
                <FaFacebookSquare onClick={() => window.open("https://www.facebook.com/payscribe/")} className="mr-5" />
                <BsTwitter onClick={() => window.open("https://twitter.com/payscribeapp/")} className="mr-5" />
                <FiLinkedin onClick={() => window.open("https://www.linkedin.com/company/payscribe/")}  className="mr-5" />
                <FiInstagram onClick={() => window.open("https://www.instagram.com/payscribeng/")}  className="mr-2" />
            </div>
          </div>
          <div className="flex gap-6">
          <img src={GooglePlayImg} alt="" className="w-[10rem] mt-8" />
          <img src={AppStoreImg} alt="" className="w-[10rem] mt-8" />
          </div>
        </div>

        <div className="w-full bp4:w-[70%] flex flex-wrap justify-between sm:justify-start">
          {footerListJSX}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
