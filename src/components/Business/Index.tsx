import React, { useState } from "react";
import libs from "../../assets/libs.svg";
import docs from "../../assets/devs.svg";
import tut from "../../assets/tut.svg";
import { Link } from "react-router-dom";
type Props = {};

const Index = (props: Props) => {

  return (
    <>
      <main className="mb-[3rem]">
  <div className="relative overflow-hidden darrk:bg-darker lg:overflow-auto" id="home">
    <div className="mx-auto max-w-8xl px-6 md:px-12 lg:px-12 xl:px-0">
      <div className="relative ml-auto pt-40 xl:pt-36">
        <div className="gap-12 md:flex md:items-center">
          <div className="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
            <h1 className="text-5xl font-black darrk:text-white md:text-6xl xl:text-7xl">Give Your Business the Visibility It Deserves</h1>
            <div className="">
              <p className="mt-8 text-xl text-gray-700 darrk:text-gray-100">Register your business for as little as <b>₦20,000</b> and equip the business with all the tools it needs to scale.</p>
              <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                <a href="#pricing" className="bg-primary2 hover:bg-[#6c9cea] text-light font-bold py-3 px-6 rounded inline-flex items-center"><span className="text-white payscribe-RRJVYBS2">
                    Get started
                  </span></a>
              
              </div>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5">
            <div className="-ml-6 md:-mr-72 lg:mr-0">
              <img className="h-full object-cover object-left darrk:hidden lg:ml-auto" src={"/hero.png"} style={{width: "400px"}} alt="app screenshot" width={1628} height={1233} />
              <img className="hidden h-full object-cover object-left darrk:block" src="/images/hero-dark.webp" alt="app screenshot" width={1628} height={1233} />
            </div>
          </div>
        </div>
        <div className="mt-32 text-center lg:mt-20 xl:mt-16 hidden">
          <span className="text-sm font-semibold tracking-wider text-gray-800 darrk:text-white">TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</span>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale darrk:brightness-200 darrk:contrast-0 sm:justify-between lg:gap-24">
            <img className="h-8 w-auto lg:h-14 lg:w-auto" src="/images/clients/airbnb.svg" loading="lazy" alt="airbnb" width={100}  />
            <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/google.svg" loading="lazy" alt="bissell" width={100} />
            <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/ge.svg" loading="lazy" alt="ge" width={100} height={100} />
            <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/netflix.svg" loading="lazy" alt="lilly" width={100} height={100} />
            <img className="h-8 w-auto lg:h-14 lg:w-auto" src="/images/clients/microsoft.svg" loading="lazy" alt="microsoft" width={100} />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="relative pt-[5rem]" id="features">
    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
      <div className="mx-auto md:w-3/5">
        <h2 className="text-center text-3xl font-bold text-gray-900 darrk:text-white md:text-4xl lg:text-5xl">Activate your Business</h2>
        <p className="mt-4 text-center text-gray-600 darrk:text-gray-300">Get your business up-and-running in less than 3 days. You will get the following when you register your business with us.</p>
      </div>
      <div className="mt-16">
        <div className="relative grid rounded-3xl border border-gray-200 p-1 darrk:border-gray-800 lg:grid-cols-2">
          <div className="absolute inset-0 hidden h-max darrk:block lg:my-auto">
            <div aria-hidden="true" className="grid grid-cols-2 -space-x-52 opacity-50 darrk:opacity-70 2xl:mx-auto 2xl:max-w-6xl">
              <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl darrk:from-blue-700" />
              <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl darrk:from-transparent darrk:to-indigo-600" />
            </div>
          </div>
          <div>
            <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8">
            <div className="flex h-[80px] w-[80px] rounded border border-gray-200 darrk:border-gray-700">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg> */}
       <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="45px" height="45px" viewBox="0 0 24 24" version="1.1">
  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
    <rect x={0} y={0} width={24} height={24} />
    <path d="M2,6 L21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L2,18 C1.44771525,18 1,17.5522847 1,17 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M11.5,16 C13.709139,16 15.5,14.209139 15.5,12 C15.5,9.790861 13.709139,8 11.5,8 C9.290861,8 7.5,9.790861 7.5,12 C7.5,14.209139 9.290861,16 11.5,16 Z" fill="#3362b0" opacity="0.3" transform="translate(11.500000, 12.000000) rotate(-345.000000) translate(-11.500000, -12.000000) " />
    <path d="M2,6 L21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L2,18 C1.44771525,18 1,17.5522847 1,17 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M11.5,16 C13.709139,16 15.5,14.209139 15.5,12 C15.5,9.790861 13.709139,8 11.5,8 C9.290861,8 7.5,9.790861 7.5,12 C7.5,14.209139 9.290861,16 11.5,16 Z M11.5,14 C12.6045695,14 13.5,13.1045695 13.5,12 C13.5,10.8954305 12.6045695,10 11.5,10 C10.3954305,10 9.5,10.8954305 9.5,12 C9.5,13.1045695 10.3954305,14 11.5,14 Z" fill="#3362b0" />
  </g>
</svg>


              </div>
              {/* <img className="w-16" src="/images/xp.webp" alt="xp icon illustration" width={512} height={512} loading="lazy" /> */}
              <div className="mx-auto text-center sm:w-3/5">
                <h2 className="text-xl font-semibold text-gray-900 darrk:text-white">Access to funding</h2>
                <p className="mt-3 text-gray-600 darrk:text-gray-400 text-sm">Registered businesses are often more attractive to investors and lenders, as they have a formal structure and legal protections. This can make it easier to  raise capital or secure loans to help the business grow.</p>
              </div>
            </div>
          </div>
          <div className="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 darrk:bg-gray-800/50 sm:grid-cols-2">
            <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 darrk:hover:bg-gray-700/60 darrk:hover:shadow-none">
              <div className="flex h-10 w-10 rounded border border-gray-200 darrk:border-gray-700">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg> */}
                <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
    <rect x={0} y={0} width={24} height={24} />
    <rect fill="#3362b0" opacity="0.3" x={2} y={2} width={10} height={12} rx={2} />
    <path d="M4,6 L20,6 C21.1045695,6 22,6.8954305 22,8 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,8 C2,6.8954305 2.8954305,6 4,6 Z M18,16 C19.1045695,16 20,15.1045695 20,14 C20,12.8954305 19.1045695,12 18,12 C16.8954305,12 16,12.8954305 16,14 C16,15.1045695 16.8954305,16 18,16 Z" fill="#3362b0" />
  </g>
</svg>

       </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 darrk:text-white">
                Instant Account Number 
                </h2>
                <p className="mt-3 text-gray-600 darrk:text-gray-400 text-sm">
                We save you the stress of long paper, queue. Get instant current account number on your business name.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 darrk:hover:bg-gray-700/60 darrk:hover:shadow-none">
              <div className="flex h-10 w-10 rounded border border-gray-200 darrk:border-gray-700">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="m-auto">
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect x={0} y={0} width={24} height={24} />
                  <path d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z" fill="#3362b0" fillRule="nonzero" opacity="0.3" />
                  <path d="M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z" fill="#3362b0" />
                </g>
              </svg>

              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 darrk:text-white">
                Free Ecommerce Store
                </h2>
                <p className="mt-3 text-gray-600 darrk:text-gray-400 text-sm">
                Reach potential customers with an online store. More growth for your business. With just few clicks you can start selling online in your personalized domain name.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 darrk:hover:bg-gray-700/60 darrk:hover:shadow-none">
              <div className="flex h-10 w-10 rounded border border-gray-200 darrk:border-gray-700">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg> */}
                <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
    <rect x={0} y={0} width={24} height={24} />
    <circle fill="#3362b0" opacity="0.3" cx={12} cy={12} r={10} />
    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#3362b0" fillRule="nonzero" />
  </g>
</svg>

              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 darrk:text-white">
                Brand Identity
                </h2>
                <p className="mt-3 text-gray-600 darrk:text-gray-400 text-sm">
                Get the brand identity that makes your business professional. Your customers trust you more when your brand is protected, Get a professional brand logo, letterhead that will make your business stand out.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 darrk:hover:bg-gray-700/60 darrk:hover:shadow-none">
              <div className="flex h-10 w-10 rounded border border-gray-200 darrk:border-gray-700">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg> */}
                <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
    <rect x={0} y={0} width={24} height={24} />
    <path d="M19,16 L19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 L5,16 L19,16 Z M21,16 L3,16 L3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 L21,16 Z" fill="#3362b0" fillRule="nonzero" opacity="0.3" />
    <path d="M5,14 L6,14 C7.1045695,14 8,14.8954305 8,16 L8,19 C8,20.1045695 7.1045695,21 6,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,16 C3,14.8954305 3.8954305,14 5,14 Z M18,14 L19,14 C20.1045695,14 21,14.8954305 21,16 L21,19 C21,20.1045695 20.1045695,21 19,21 L18,21 C16.8954305,21 16,20.1045695 16,19 L16,16 C16,14.8954305 16.8954305,14 18,14 Z" fill="#3362b0" />
  </g>
</svg>

              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 darrk:text-white">
                Business Support
                </h2>
                <p className="mt-3 text-gray-600 darrk:text-gray-400 text-sm">
                We are with you all the way, We will provide professional, administrative, technical, and creative assistance that you need to succeed in the business journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="pt-44" id="solution">
    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
      <div className="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
        <div className="relative ml-auto h-full md:w-1/2">
          <img className="darrk:hidden" src="/bizz.jpeg" alt="app milestone" width={1174} height={1134} />
          <img className="hidden darrk:block" src="/bizz.jpeg" alt="app milestone" width={1174} height={1134} />
        </div>
        <div className="md:w-1/2 lg:w-[47%]">
          <h2 className="text-3xl font-bold text-gray-900 darrk:text-white md:text-4xl lg:text-5xl">New or Existing Business?</h2>
          <p className="my-12 text-gray-600 darrk:text-gray-300">
          CAC Business name registration helps you add more credibility to your business whether you operate online or offline. <br />
            <br />For NGN 20,000 Only today, Join over 1,870 business owners like you who are benefiting from this one time offer!
          </p>
        </div>
      </div>
      <div className="my-32">
        <h3 className="text-2xl font-bold text-gray-900 darrk:text-white md:w-2/3 md:text-3xl lg:text-4xl">Customize your customer experience, Go beyond with our top products</h3>
        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <img className="w-10" src="/images/security.webp" alt="safety icon illustration" height={512} width={512} />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 darrk:text-white">Create Profile </h4>
                <p className="mt-3 text-gray-600 darrk:text-gray-400">Create a business and personal profile </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <img className="w-10" src="/images/card.webp" alt="payment card icon illustration" height={512} width={512} />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 darrk:text-white">Upload IDs</h4>
                <p className="mt-3 text-gray-600 darrk:text-gray-400">Upload all necessary documents to make your business a top-notch.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <img className="w-10" src="/crd.png" alt="xp icon illustration" height={512} width={512} />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 darrk:text-white">Make Payment</h4>
                <p className="mt-3 text-gray-600 darrk:text-gray-400">Complete registration by making payment for the business.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center gap-6 sm:w-4/5 md:w-full md:flex-row lg:gap-12 hidden">
        <div className="relative md:w-1/2">
          <div aria-hidden="true" className="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40 darrk:opacity-60">
            <div className="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] darrk:from-blue-700" />
            <div className="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px] darrk:to-indigo-600" />
          </div>
          <img className="relative darrk:hidden" src="/images/illus.webp" alt="stats illustration" width={1746} height={1746} />
          <img className="relative hidden darrk:block" src="/images/illus-dark.webp" alt="stats illustration" width={1746} height={1746} />
        </div>
        <div className="ml-auto h-full md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-900 darrk:text-white md:text-3xl lg:text-4xl">Go beyond with our top products</h3>
          <p className="my-12 text-gray-600 darrk:text-gray-300">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat ? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. <br />
            <br /> Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet.
          </p>
          <a href="#pricing" className="before:bg-primary payscribe-RRJVYBS2"><span className="text-white payscribe-RRJVYBS2">
              Get started
            </span></a>
        </div>
      </div>
    </div>
  </div>
  <div className="my-24 mx-auto md:px-12 px-12">
  {/* Section: Design Block */}
  <section className="mb-32">
    <div className="flex flex-wrap">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
        <div className="flex lg:py-12">
          <img src="/bizzz.jpeg" className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]" alt="image" />
        </div>
      </div>
      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
        <div className="flex h-full items-center rounded-lg bg-primary2 p-6 text-center text-white lg:pl-12 lg:text-left">
          <div className="lg:pl-12">
            <h2 className="mb-6 text-3xl font-bold">
              Are you ready?
            </h2>
            <p className="mb-6 pb-2 lg:pb-0">
              Give your business the credibility it deserves. Get started with Payscribe business today.
            </p>
            <button type="button" className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200" data-te-ripple-init data-te-ripple-color="light">
              Get Started today
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section: Design Block */}
</div>

  <div className="mt-44 text-gray-600 darrk:text-gray-300 lg:mt-20 hidden" id="reviews">
    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
      <div className="mx-auto md:w-3/5">
        <h2 className="text-center text-3xl font-bold text-gray-900 darrk:text-white md:text-4xl lg:text-5xl">Trusted by thousands</h2>
        <p className="mt-4 text-center text-gray-600 darrk:text-gray-300">Repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.</p>
      </div>
      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <div className="flex gap-4">
                <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar.webp" alt="user avatar" width={400} height={400} loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 darrk:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 darrk:text-gray-300">Mobile dev</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <div className="flex gap-4">
                <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar-1.webp" alt="user avatar" width={400} height={400} loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 darrk:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 darrk:text-gray-300">@hundler</p>
                </div>
              </div>
              <p>Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <div className="flex gap-4">
                <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar-1.webp" alt="user avatar" width={400} height={400} loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 darrk:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 darrk:text-gray-300">Mobile dev</p>
                </div>
              </div>
              <p>Nostrum minus libero sit amet consectetur, adipisicing elit ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <div className="flex gap-4">
                <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar-3.webp" alt="user avatar" width={400} height={400} loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 darrk:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 darrk:text-gray-300">Mobile dev</p>
                </div>
              </div>
              <p>Nostrum minus libero sit amet consectetur, adipisicing elit ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <div className="flex gap-4">
                <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar-2.webp" alt="user avatar" width={400} height={400} loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 darrk:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 darrk:text-gray-300">@hundler</p>
                </div>
              </div>
              <p>Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 sm:hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <div className="flex gap-4">
                <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar.webp" alt="user avatar" width={400} height={400} loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 darrk:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 darrk:text-gray-300">Mobile dev</p>
                </div>
              </div>
              <p>Architecto laboriosam. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <div className="flex gap-4">
                <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar-4.webp" alt="user avatar" width={400} height={400} loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 darrk:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 darrk:text-gray-300">@hundler</p>
                </div>
              </div>
              <p>Illum aliquid quo deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px darrk:from-gray-700 darrk:via-gray-800 darrk:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 darrk:bg-gray-900">
              <div className="flex gap-4">
                <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar.webp" alt="user avatar" width={400} height={400} loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 darrk:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 darrk:text-gray-300">@hundler</p>
                </div>
              </div>
              <p>Illum aliquid quo deleniti aperiam ab veniam Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="relative pt-44 hidden" id="pricing">
    <div aria-hidden="true" className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 darrk:opacity-80">
      <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] darrk:from-blue-700" />
      <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] darrk:to-indigo-600" />
    </div>
    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
      <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2 className="text-3xl font-bold text-gray-900 darrk:text-white md:text-4xl lg:text-5xl">Start managing your company smarter today</h2>
      </div>
      <div className="mt-20">
        <div className="relative rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/20 transition duration-500 darrk:border-white/10 darrk:bg-gray-900 darrk:shadow-none">
          <div className="flex flex-col gap-12 divide-y p-12 darrk:divide-gray-800 md:flex-row md:divide-y-0 md:divide-x">
            <div className="text-center md:w-5/12">
              <h3 className="text-3xl font-bold text-gray-900 darrk:text-white">Suite Enterprise</h3>
              <p className="text-lg text-gray-600 darrk:text-gray-300">For your company of any size</p>
              <span className="mb-6 mt-12 inline-block text-6xl font-bold text-gray-900 darrk:text-white"><span className="text-4xl text-primary darrk:text-gray-200">$</span>234</span>
              <div className="flex justify-center">
                <button className="before:bg-primary payscribe-RRJVYBS2" type="button"><span className="text-white payscribe-RRJVYBS2">
                    Get started
                  </span></button>
              </div>
              <p className="mt-12 text-sm text-gray-500 darrk:text-gray-400">Includes : Security, Unlimited Storage, Payment, Search engine, and all features</p>
            </div>
            <div className="relative md:w-7/12 md:pl-12">
              <ul role="list" className="space-y-4 py-6 text-gray-600 darrk:text-gray-300">
                <li className="space-x-2">
                  <span className="font-semibold text-primary darrk:text-gray-300">✓</span>
                  <span>First premium advantage</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-primary darrk:text-gray-300">✓</span>
                  <span>Second advantage weekly</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-primary darrk:text-gray-300">✓</span>
                  <span>Third advantage donate to project</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-primary darrk:text-gray-300">✓</span>
                  <span>Fourth, access to all components weekly</span>
                </li>
              </ul>
              <p className="text-gray-700 darrk:text-white">Team can be any size, and you can add or switch members as needed. Companies using our platform include:</p>
              <div className="mt-12 flex flex-wrap items-center justify-between gap-6 grayscale">
                <img className="h-8 w-auto lg:h-12" src="/images/clients/airbnb.svg" width={100} alt="airbnb" />
                <img className="h-6 w-auto lg:h-8" src="/images/clients/netflix.svg" width={100} alt="bissell" />
                <img className="h-8 w-auto lg:h-10" src="/images/clients/ge.svg" width={100} height={100} alt="ge" />
                <img className="ww-auto h-8 lg:h-12" src="/images/clients/microsoft.svg" width={100} alt="microsoft" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 flex flex-col gap-12 lg:flex-row">
        <div className="text-center lg:w-5/12 lg:pl-12 lg:text-left">
          <h2 className="text-2xl font-bold text-gray-800 darrk:text-white md:text-3xl lg:text-4xl">Frequently Asqued Questions</h2>
          <p className="mt-4 text-gray-600 darrk:text-gray-300">piente optio repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.</p>
        </div>
        <div className="divide-y divide-gray-200 border-y border-gray-200 darrk:divide-gray-800 darrk:border-gray-800 lg:w-7/12">
          <div>
            <dl className="faq mx-auto max-w-2xl">
              <dt className="text-lg">
                <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-1" data-active="false">
                  <span className="font-medium text-gray-900 darrk:text-white">
                    How to customize the template ?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-1">
                <p className="pb-6 text-base text-gray-600 darrk:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
              </dd>
            </dl>
          </div>
          <div>
            <dl className="faq mx-auto max-w-2xl">
              <dt className="text-lg">
                <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-2" data-active="false">
                  <span className="font-medium text-gray-900 darrk:text-white">
                    How many times can I use the template ?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-2">
                <div className="pb-6 text-base text-gray-600 darrk:text-gray-400">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam
                    rem!</p>
                  <ul className="mt-4 list-outside list-disc pl-4">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              </dd>
            </dl>
          </div>
          <div>
            <dl className="faq mx-auto max-w-2xl">
              <dt className="text-lg">
                <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-3" data-active="false">
                  <span className="font-medium text-gray-900 darrk:text-white">
                    How to customize the template ?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-3">
                <p className="pb-6 text-base text-gray-600 darrk:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
              </dd>
            </dl>
          </div>
          <div>
            <dl className="faq mx-auto max-w-2xl">
              <dt className="text-lg">
                <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-4" data-active="false">
                  <span className="font-medium text-gray-900 darrk:text-white">
                    How to customize the template ?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-4">
                <p className="pb-6 text-base text-gray-600 darrk:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
              </dd>
            </dl>
          </div>
          <div>
            <dl className="faq mx-auto max-w-2xl">
              <dt className="text-lg">
                <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-5" data-active="false">
                  <span className="font-medium text-gray-900 darrk:text-white">
                    How to customize the template ?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-5">
                <p className="pb-6 text-base text-gray-600 darrk:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  );
};

export default Index;
