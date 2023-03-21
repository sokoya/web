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
            <img src={Logo} alt="Payscribe Logo" />
          </div>
          <div className=" mb-4 text-sm">
            <p className="w-[85%] mb-4">
              Building the world-class technology that digitalize cash payments and provides daily essentials financial services all at your finger tips.
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

          <div onClick={() => window.open("https://bit.ly/payscribe-android")} style={{cursor: "pointer"}} className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
            <div className="mr-3">
              <svg viewBox="30 336.7 120.9 129.2" width={30}>
                <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
                <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
              </svg>
            </div>
            <div>
              <div className="text-xs">GET IT ON</div>
              <div className="text-xl font-semibold font-sans -mt-1">Google Play</div>
            </div>
          </div>


          <div onClick={() => window.open("https://apple.co/3y7gi0x")} style={{cursor: "pointer"}}  className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center">
            <div className="mr-3">
              <svg viewBox="0 0 384 512" width={30}>
                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            </div>
            <div>
              <div className="text-xs">Download on the</div>
              <div className="text-2xl font-semibold font-sans -mt-1">App Store</div>
            </div>
          </div>

          </div>
          {/* <div className="flex gap-6">
            <a target={"_blank"} href="https://bit.ly/payscribe-android">
            <img src={GooglePlayImg} alt="" className="w-[10rem] mt-8" style={{height: "55px"}} />
            </a>
            <a target="_blank" href="https://apple.co/3y7gi0x">
              <img src={AppStoreImg} alt="" className="w-[10rem] mt-8" />
            </a>
          </div> */}
        </div>
        <div className="w-full bp4:w-[70%] flex flex-wrap justify-between sm:justify-start">
          {footerListJSX}
        </div>

        <div className="mt-[3rem] mx-auto border-t border-gray-50 py-4">
          <p className="text-center text-white font-light text-xs">
            Pscribe Digital Sevices Ltd (Payscribe) is a financial technology company not a bank.<br />
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
