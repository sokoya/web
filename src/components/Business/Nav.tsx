import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/payscribe-logo-new.png";
import { createAccount, login } from "../../helpers/Links";


type Props = {};

const Nav = (props: Props) => {
  const toggleNav = () => {
    var el = document.getElementById("mobile-nav");
    el?.classList?.toggle("hidden");
    var el2 = document.getElementById("mobile_svg1");
    el2?.classList?.toggle("hidden");
    var el3 = document.getElementById("mobile_svg2");
    el3?.classList?.toggle("hidden");
  };
  return (
    <>
<header className="payscribe-MDGWKRRQ">
  <nav className="absolute z-10 w-full payscribe-MDGWKRRQ">
    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
      <div className="relative flex flex-wrap items-center justify-between gap-6 py-2 md:gap-0 md:py-4 payscribe-MDGWKRRQ">
        <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden payscribe-MDGWKRRQ" />
        <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max payscribe-MDGWKRRQ">
          {/* <a href="#home" aria-label="logo" className="flex items-center space-x-2 payscribe-MDGWKRRQ">
            <div aria-hidden="true" className="flex space-x-1 payscribe-MDGWKRRQ">
              <div className="h-4 w-4 rounded-full bg-gray-900 darrk:bg-white payscribe-MDGWKRRQ" />
              <div className="h-6 w-2 bg-primary payscribe-MDGWKRRQ" />
            </div>
            <span className="text-2xl font-bold text-gray-900 darrk:text-white payscribe-MDGWKRRQ">PAYSCRIBE</span>
          </a> */}
           <Link className="w-[8rem] block text-teal-600 flex items-center space-x-2 payscribe-MDGWKRRQ" to="/">
                <img src={Logo} alt="Payscribe developers" />
              </Link>
          <div className="relative flex max-h-10 items-center lg:hidden payscribe-MDGWKRRQ">
            <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative -mr-6 p-6 payscribe-MDGWKRRQ">
              <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 darrk:bg-gray-300 payscribe-MDGWKRRQ" />
              <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 darrk:bg-gray-300 payscribe-MDGWKRRQ" />
            </label>
          </div>
        </div>
        <div aria-hidden="true" className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 darrk:bg-gray-900/70 lg:hidden payscribe-MDGWKRRQ" />
        <div className="invisible absolute top-full left-0 z-20 w-full origin-top translate-y-1 scale-95 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 peer-checked:visible peer-checked:scale-100 peer-checked:opacity-100 darrk:border-gray-700 darrk:bg-gray-800 darrk:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0 payscribe-MDGWKRRQ">
          <div className="mt-12 lg:mt-0 payscribe-MDGWKRRQ">
            <a href="#pricing" className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary2 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max payscribe-MDGWKRRQ">
              <span className="relative text-sm font-semibold text-white payscribe-MDGWKRRQ"> Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

    </>
  );
};

export default Nav;
