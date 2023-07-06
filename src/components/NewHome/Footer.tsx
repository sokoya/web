import React from "react";
import Logo from "../../assets/payscribe.svg";
import { footerList } from "../../listData/homepage";
import FooterList from "../FooterList";
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
    <footer className="bg-[#000000]">
    <div className="items-center lg:px-16 max-w-7xl md:px-12 mx-auto px-8 xl:px-24 pt-12 pb-12">
      <div className="xl:gap-8 xl:grid xl:grid-cols-3">
        <div className="text-white xl:col-span-3">
           <Link to="/" className="items-center inline-flex text-purple-900 font-semibold gap-2 text-xl tracking-tighter">
            <img src={Logo} alt="Payscribe logo" style={{width: "100px"}} />
          </Link>
          {/* <a className="font-semibold inline-flex gap-2 items-center text-xl tracking-tighter text-white" href="/"><svg className="h-6 w-6" fill="none" viewBox="0 0 50 39" xmlns="http://www.w3.org/2000/svg"><path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" fill="#007AFF" className="ccompli1" /><path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" fill="#312ECB" className="ccustom" /></svg> Spazio Bianco</a> */}
          </div>
        <div className="mt-12 grid grid-cols-2 gap-8 lg:col-span-3 lg:mt-24 md:grid-cols-2">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-xl font-normal">Navigation</h3>
              <ul className="space-y-2 mt-4" role="list">
                <li><a className="items-center inline-flex font-normal hover:text-white text-sm text-white/60" href="/overview">Overview <span className="items-center inline-flex border-l-2 border-purple-500 font-medium ml-4 px-3 py-0.5 shrink-0 text-blue-400 text-xs">40+ Pages</span></a></li>
                <li><a className="font-normal hover:text-white text-white/60 text-sm" href="/styleguide">Style guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl font-normal">Other projects</h3>
              <ul className="space-y-2 mt-4" role="list">
                <li><a className="font-normal hover:text-white text-white/60 text-sm" href="https://unwrapped.design">unwrapped</a></li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-xl font-normal">Stay updated</h3>
              <ul className="space-y-2 mt-4" role="list">
                <li><a className="font-normal hover:text-white text-white/60 text-sm" href="https://www.lexingtonthemes.com/license">License</a></li>
                <li><a className="font-normal hover:text-white text-white/60 text-sm" href="https://lexingtonthemes.com/documentation/quick-start/">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl font-normal">Socials</h3>
              <ul className="space-y-2 mt-4" role="list">
                <li><a className="font-normal hover:text-white text-white/60 text-sm" href="https://twitter.com/lexingtonthemes">@lexingtonthemes</a></li>
                <li><a className="font-normal hover:text-white text-white/60 text-sm" href="https://twitter.com/Mike_Andreuzza">@Mike_Andreuzza</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 lg:mt-24 col-span-full max-w-xl md:col-span-1">
        <div className="flex justify-center col-span-full flex-col gap-6 lg:ml-auto md:flex-row"><a className="items-center inline-flex text-white rounded-full active:bg-blue-800 active:text-white duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none focus:ring-blue-500 focus:ring-offset-2 font-medium gap-3 justify-center lg:px-8 px-6 py-3.5 ring-2 ring-transparent bg-blue-500 hover:bg-blue-600 w-full" href="/overview">Start for free </a><a className="items-center inline-flex text-white rounded-full active:bg-blue-800 active:text-white duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none focus:ring-blue-500 focus:ring-offset-2 font-medium gap-3 justify-center lg:px-8 px-6 py-3.5 ring-2 ring-transparent w-full bg-transparent border border-white hover:border-blue-500" href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/99afe682-cc70-4d85-b19a-debb968441b1"><span>Talk to sales</span></a></div>
      </div>
    </div>
    <div className="items-center lg:px-16 max-w-7xl md:px-12 mx-auto px-8 xl:px-24 ¨">
      <div className="py-12 border-t border-white/10 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-xs leading-6 text-white/30">© 2023 Pscribe. All rights reserved.</h3>
        <div className="flex items-center mt-3 sm:ml-4 sm:mt-0">
          <div className="flex items-center space-x-6"><a className="text-xs font-normal hover:text-white text-white/40" href="#">Terms &amp; Conditions</a> <span className="text-blue-500">⏤</span> <a className="text-xs font-normal hover:text-white text-white/60" href="#">Privacy Policy</a> <a className="text-slate-500 hover:text-slate-400" href="#"><span className="sr-only">Instagram</span> <svg className="icon icon-tabler icon-tabler-brand-instagram" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={2} height={16} strokeLinecap="round" strokeLinejoin="round" width={16}><path d="M0 0h24v24H0z" fill="none" stroke="none" /><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg> </a>
            <a className="text-slate-500 hover:text-slate-400" href="#"><span className="sr-only">Twitter</span> <svg className="icon icon-tabler icon-tabler-brand-twitter-filled" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={2} height={16} strokeLinecap="round" strokeLinejoin="round" width={16}><path d="M0 0h24v24H0z" fill="none" stroke="none" /><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" fill="currentColor" strokeWidth={0} /></svg>                      </a><a className="text-slate-500 hover:text-slate-400" href="#"><span className="sr-only">GitHub</span> <svg className="icon icon-tabler icon-tabler-brand-github" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={2} height={16} strokeLinecap="round" strokeLinejoin="round" width={16}><path d="M0 0h24v24H0z" fill="none" stroke="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></a></div>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
