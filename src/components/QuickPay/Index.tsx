import React from "react";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'
import { Link } from "react-router-dom";
import HeroImg from "../../assets/bills/hero1.svg";
import { reg_link } from "../../listData/homepage";


type Props = {
    tag: string
  };

const QuickPay = (props: Props) => {
var tag = props.tag;
const [index, setIndex] = React.useState(0)
const [amount, setAmount] = React.useState("")
const next = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIndex(1)
}
  return (
<div>
  
<div className="relative  pb-2 pt-[5rem] bg-headerBg px-[2rem]" style={{background: `url('${bg}')`}}>
  <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 transition duration-300 delay-0">
    {/* <div className="blur-[106px] h-56 bg-gradient-to-br from-grey-300 to-red-400" />
    <div className="blur-[106px] h-32 bg-gradient-to-r from-primary-400 to-yellow-300" /> */}
  </div>
  <div className="relative xl:container px-0 text-gray-500 md:px-0 mt-0 flex">
    <div className=" sm:w-4/5 md:w-2/5 xl:w-2/5">
      <div className="p-8 md:py-12">
      <img
  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
  className="w-40 rounded-full shadow-lg"
  alt="Avatar" />        
  <h2 className="mt-5 mb-1 text-3xl font-bold text-gray-800">AYOMIDE OLOYEDE</h2>
  <p className="mt-2 mb-7 font-bold">pays.be/{tag.substring(1)}</p>
        <form className="space-y-8" onSubmit={next}>
          <div className="space-y-4">
          {index == 0? <>
            <label htmlFor="username" className="text-gray-600 ">How Much Do you want to send?</label>
            <div className="relative flex items-center">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute left-4 inset-y-0 my-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>                       */}
              <svg id="Layer_1" data-name="Layer 1" className="w-4 h-4 absolute left-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.09 122.88"><title>nigeria-naira</title><path d="M13.42,0H32.1a1.25,1.25,0,0,1,1,.6L58,42.26H83.17v-41A1.23,1.23,0,0,1,84.39,0h17.28a1.23,1.23,0,0,1,1.23,1.23v41h11a1.23,1.23,0,0,1,1.23,1.23V54.55a1.23,1.23,0,0,1-1.23,1.23h-11v9.41h11a1.23,1.23,0,0,1,1.23,1.22V77.48a1.23,1.23,0,0,1-1.23,1.22h-11v43a1.23,1.23,0,0,1-1.23,1.23H84.39a1.25,1.25,0,0,1-1-.6L58,78.7H33.26v43A1.23,1.23,0,0,1,32,122.88H13.42a1.23,1.23,0,0,1-1.23-1.23V78.7h-11A1.23,1.23,0,0,1,0,77.48V66.41a1.23,1.23,0,0,1,1.23-1.22h11V55.78h-11A1.23,1.23,0,0,1,0,54.55V43.49a1.23,1.23,0,0,1,1.23-1.23h11v-41A1.23,1.23,0,0,1,13.42,0ZM33.26,55.78v9.41h17l-4.4-9.41ZM70,65.19H83.17V55.78H65.68L70,65.19ZM83.17,78.7H77.88l5.29,11v-11ZM33.26,32.76v9.5h4.57l-4.57-9.5Z" /></svg>

              <input type="number" name="amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} autoComplete="amount" placeholder="Enter an Amount" className="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary" />
              <div className="absolute right-1">
                <button type="submit" className="relative flex h-10 w-10 sm:w-max ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary2 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                  <span className="hidden relative text-base font-semibold text-white sm:block">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative w-5 h-5 text-white sm:hidden">
                    <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                  </svg>                      
                </button>
              </div>
            </div>
            </> : ""}
          </div>
          {index == 1? <div className="relative">
          <label htmlFor="username" className="text-gray-600 mb-10">How Do You want to send it?</label>
          <div className="flex flex-col gap-3 mt-5">
  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-radio-1" type="radio" defaultValue={""} name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="bordered-radio-1" className="w-full py-4 ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">BANK TRANSFER</label>
  </div>
  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input defaultChecked id="bordered-radio-2" type="radio" defaultValue={""} name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="bordered-radio-2" className="w-full py-4 ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">PAY WITH USSD</label>
  </div>
</div>


            </div>: ""}
          <p className="text-gray-500 text-sm">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Tailus and its affiliates to the number provided.</p>
          <p className="border-t border-gray-100 pt-6 text-sm text-gray-500">
            Don't have an account?
            <a href="#" className="text-primary"> Sign up</a>
          </p>
        </form>
      </div>
    </div>
    <div className=" sm:w-4/5 md:w-3/5 xl:w-2/5 sm:px-10 sm:hidden lg:block">
    <img className="ml-auto sm:hidden lg:block" src={HeroImg} alt="" />
    </div>
  </div>
</div>

  
</div>

  );
};

export default QuickPay;
