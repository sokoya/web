import React from "react";
import Logo from "../assets/Payscribe-Logo-2000x-634.png";
import { footerList } from "../listData/homepage";
import FooterList from "./FooterList";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
type Props = {};

const Footer = (props: Props) => {
  const footerListJSX = (
    <>
      {footerList.map((el, index) => (
        <div key={el.header} className=" mb-[3rem] bp4:mb-0  w-[40%] bp4:w-[25%]  mr-[1.2rem] sm:mr-0">
          <FooterList  footerItems={el.list} header={el.header} />
        </div>
      ))}
    </>
  );
  return (
    <footer className=" bg-[#050931] text-white w-full px-[3rem] py-[7rem] mt-[5rem] ">
      <div className="w-full  flex items-start flex-wrap">
        <div className="w-full mb-[3rem] bp4:mb-0 bp4:w-[30%] ">
          <div className="w-[10rem] mb-6">
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-[70%] xs:w-[20%] mb-7 mr-[5rem] md:mr-8">
            <p className="mb-4">email@email.com</p>
            <div className="flex text-3xl mb-[5rem] md:mb-6">
              <FaFacebookSquare className="mr-2" />
              <BsTwitter className="mr-2" />
              <FiInstagram className="mr-2" />
            </div>
          </div>
        </div>

        <div className="w-[70%] flex flex-wrap justify-between sm:justify-start">{footerListJSX}</div>
      </div>
    </footer>
  );
};

export default Footer;
