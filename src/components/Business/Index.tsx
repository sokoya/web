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
    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
      <div className="relative ml-auto pt-40 xl:pt-36">
        <div className="gap-12 md:flex md:items-center">
          <div className="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
            <h1 className="text-5xl font-black darrk:text-white md:text-6xl xl:text-7xl">Give Your Business the Visibility It Deserves</h1>
            <div className="">
              <p className="mt-8 text-lg text-gray-700 darrk:text-gray-100">Register your business for as little as ₦25,000 and equip the business with all the tools it needs to scale.</p>
              <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                <a href="#pricing" className="before:bg-primary2 payscribe-RRJVYBS2"><span className="text-white payscribe-RRJVYBS2">
                    Get started
                  </span></a>
              
              </div>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5">
            <div className="-ml-6 md:-mr-72 lg:mr-0">
              <img className="h-full object-cover object-left darrk:hidden" src="/images/hero.webp" alt="app screenshot" width={1628} height={1233} />
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
              <img className="w-16" src="/images/xp.webp" alt="xp icon illustration" width={512} height={512} loading="lazy" />
              <div className="mx-auto text-center sm:w-3/5">
                <h2 className="text-xl font-semibold text-gray-900 darrk:text-white">Access to funding</h2>
                <p className="mt-3 text-gray-600 darrk:text-gray-400 text-sm">Registered businesses are often more attractive to investors and lenders, as they have a formal structure and legal protections. This can make it easier to  raise capital or secure loans to help the business grow.</p>
              </div>
            </div>
          </div>
          <div className="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 darrk:bg-gray-800/50 sm:grid-cols-2">
            <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 darrk:hover:bg-gray-700/60 darrk:hover:shadow-none">
              <div className="flex h-10 w-10 rounded border border-gray-200 darrk:border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
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
          <img className="darrk:hidden" src="/images/milestone.webp" alt="app milestone" width={1174} height={1134} />
          <img className="hidden darrk:block" src="/images/milestone-dark.webp" alt="app milestone" width={1174} height={1134} />
        </div>
        <div className="md:w-1/2 lg:w-[47%]">
          <h2 className="text-3xl font-bold text-gray-900 darrk:text-white md:text-4xl lg:text-5xl">Just focus on your business startegy</h2>
          <p className="my-12 text-gray-600 darrk:text-gray-300">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. <br />
            <br /> Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet.
          </p>
          <div className="space-y-4 divide-y divide-gray-100 darrk:divide-gray-800">
            <div className="mt-8 flex gap-4 md:items-center">
              <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 darrk:border-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <div className="w-5/6">
                <h3 className="text-lg font-semibold text-gray-700 darrk:text-white">Chat Anytime</h3>
                <p className="text-gray-500 darrk:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
              </div>
            </div>
            <div className="flex gap-4 pt-4 md:items-center">
              <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 darrk:border-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 darrk:text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="w-5/6">
                <h3 className="text-lg font-semibold text-gray-700 darrk:text-white">Real Time Location</h3>
                <p className="text-gray-500 darrk:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
              </div>
            </div>
          </div>
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
              <img className="w-10" src="/images/xp.webp" alt="xp icon illustration" height={512} width={512} />
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
  <div className="mt-44 text-gray-600 darrk:text-gray-300 lg:mt-20" id="reviews">
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
