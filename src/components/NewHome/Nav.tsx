import React, { useState } from "react";
import Button from "../Button";

import Logo from "../../assets/payscribe-logo-new.png";
import NavPopOver from "../NavPopOver";
import { navList } from "../../listData/nav";
import { Link } from "react-router-dom";
import NavMobile from "../NavMobile";

import { login, createAccount } from '../../helpers/Links';

type Props = {};

const Nav = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [navber, setNavbar] = useState<boolean>(false);

  const showShadow = () => {
    if (window.scrollY > 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  };
  
  window.addEventListener("scroll", showShadow);
  const navLinksJSX = (
    <ul className="items-center flex ">
      {navList.map((el, index) => (
        <li key={index}>
          <NavPopOver
            navitems={el.items}
            navtitle={el.title}
            documentation={el.documentation}
          />
        </li>
      ))}
    </ul>
  );
  const hambugerClass = "transition-all bg-primary2 w-full h-[3px] absolute";
  return (
    <>
    <div className="mx-auto w-full bg-[#ecf5ff]">
  <div className="flex flex-col w-full lg:px-16 max-w-7xl md:flex-row md:items-center md:justify-between md:px-12 mx-auto p-5 px-8 relative xl:px-24" x-data="{ open: false }">
    <div className="flex flex-row items-center justify-between lg:justify-start">
    <Link to="/" className="items-center inline-flex text-purple-900 font-semibold gap-2 text-xl tracking-tighter">
            <img src={Logo} alt="Payscribe logo" style={{width: "150px"}} />
          </Link>
        {/* <a className="items-center inline-flex text-purple-900 font-semibold gap-2 text-xl tracking-tighter" href="/"><svg fill="none" viewBox="0 0 50 39" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" fill="#007AFF" className="ccompli1" /><path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" fill="#312ECB" className="ccustom" /></svg> Payscribe </a> */}
      <button className="items-center inline-flex focus:outline-none justify-center focus:text-purple-900 hover:text-purple-900 lg:hidden p-2 text-slate-400"><svg fill="none" viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" className="inline-flex" strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} /><path d="M6 18L18 6M6 6l12 12" className="hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg></button>
    </div>
    <nav className="hidden flex-col flex-grow lg:py-0 md:flex md:flex-row md:justify-end py-12">
      <ul className="space-y-2 lg:inline-flex lg:items-center lg:space-y-0 list-none">
        <li><a className="text-sm font-semibold hover:text-blue-600 lg:px-6 md:px-3 px-2 py-10 text-primary2" href="/overview">About us</a></li>
        <li><a className="text-sm font-semibold hover:text-blue-600 lg:px-6 md:px-3 px-2 py-10 text-primary2" href="styleguide">Get in Touch</a></li>
        <li><a className="text-sm font-semibold hover:text-blue-600 lg:px-6 md:px-3 px-2 py-10 text-primary2" href="styleguide">Developers</a></li>
        <li><a className="items-center inline-flex text-white rounded bg-primary2 text-white active:bg-blue-800 active:text-white duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none focus:ring-blue-500 ring-primary2 focus:ring-offset-2 font-medium gap-3 justify-center px-6 ring-2 ring-transparent hover:bg-[#000] py-2.5 text-sm w-auto" href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/99afe682-cc70-4d85-b19a-debb968441b1">Get Started</a></li>
      </ul>
    </nav>
  </div>
</div>

    </>
  );
};

export default Nav;
