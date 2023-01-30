import React from "react";
import Logo from "../assets/payscribe.svg";
import { footerList } from "../listData/homepage";
import FooterList from "./FooterList";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import GooglePlayImg from "../assets/playstore.png"
import AppStoreImg from "../assets/applestore.png"

import { Link } from "react-router-dom";
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

        <div className="mt-[3rem] mx-auto border-t border-gray-50 py-4">
          <p className="text-center text-white font-light text-xs">
            Pscribe Digital Sevices Ltd (Payscribe) is not a bank but provides a bills payment and spending management technology platform.<br />
            The account number is a virtual bank account number in line with the Nigeria Uniform Bank Account Number (NUBAN) formating system. The NUBAN accounts are generated through our bank partner
            Providus Bank PLC - licensed and regulated by the CBN and money is duly insured by NDIC.<br />
            The information provided on this website is not an exhaustive representation of all the products and services offered by Payscribe.
            By using this website, you accept our <Link to="/privacy" title="Payscribe Privacy">Privacy Policy</Link> and <Link to="/terms" title="Terms of use">Terms of Use</Link>. <br />
            Google Play and the Google Play logo are trademarks of Google LLC. Apple, the Apple logo, and iPhone are trademarks of Apple Inc. registered in the U.S.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
