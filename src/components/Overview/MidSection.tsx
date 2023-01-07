import React from "react";
import HeroImg from "../../assets/rewards/hero.png";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'

type Props = {};

const MidSection = (props: Props) => {
  return (
      <>
<div className="py-16">
  <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
    <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div className="md:5/12 lg:w-1/2">
        <img src="https://tailus.io/sources/blocks/right-illustration/preview/images/pie.svg" alt="image" loading="lazy" />
      </div>
      <div className="md:7/12 lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Nuxt development is carried out by passionate developers
        </h2>
        <p className="my-8 text-gray-600 dark:text-gray-300">
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
        </p>
        <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
          <div className="mt-8 flex gap-4 md:items-center">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
              </svg>        
            </div>
            <div className="w-5/6">
              <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">Chat Anytime</h4>
              <p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
            </div> 
          </div> 
          <div className="pt-4 flex gap-4 md:items-center">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>                                      
            </div>
            <div className="w-5/6">
              <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Real Time Location</h4>
              <p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
            </div> 
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>


<div className="py-16"> 
  <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
    <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16">
      <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
          Buy now and benefit up to <span className="text-primary dark:text-sky-300">30% off</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Be part of millions people around the world using tailus in modern User Interfaces.
        </p>
        <div className="flex flex-wrap gap-6">
          <a href="#" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
            <span className="relative text-base font-semibold text-white dark:text-dark">Shop now</span>
          </a>
          <a href="#" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
            <span className="relative text-base font-semibold text-primary dark:text-white">More about</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
        <div className="col-span-2 row-span-4">
          <img src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/kushagra.webp" className="rounded-full" width={640} height={960} alt="shoes" loading="lazy" />
        </div>
        <div className="col-span-2 row-span-2">
          <img src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp" className="h-full w-full rounded-xl object-cover object-top" width={640} height={640} alt="shoe" loading="lazy" />
        </div>
        <div className="col-span-3 row-span-3">
          <img src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/daniel.webp" className="h-full w-full rounded-xl object-cover object-top" width={640} height={427} alt="shoes" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</div>
</>
  );
};

export default MidSection;
