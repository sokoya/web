import React from "react";
import Button from "../Button";
import HeroImg from "../../assets/airtime/hero1.svg";
import TheCheck from "../../assets/ambassadors/thecheck.webp";
import { Link, useNavigate } from "react-router-dom";
import { reg_link } from "../../listData/homepage";

type Props = {};

function Body({}: Props) {
  let history = useNavigate();
  const [activeAccordion, setActiveAccordion] = React.useState(0);
  return (

  <>
  <section className="bg-gray-50 py-32 dark:bg-darker">
  <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Play a role </h2>
      <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">in shaping how money moves in Africa.</p>
    </div>
    <div className="mt-12 grid gap-8 md:grid-cols-2">
      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
        <div className="flex h-full flex-col justify-center space-y-6 md:space-y-8">
          <img className="mr-auto h-12 w-auto" src="https://ampire.netlify.app/images/clients/microsoft.svg" loading="lazy" alt="microsoft" />
          <p className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl">
            <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <br />
            <br />
            Esse, sint sit aut ducimus ea ipsam velit saepe earum dolorem, dignissimos minima voluptate quo accusamus corporis, quaerat beatae aliquid. Impedit, accusamus. <span className="font-serif">"</span>
          </p>
          <div className="flex items-center gap-3">
            <img className="h-12 w-12 rounded-full" src="https://ampire.netlify.app/images/avatars/avatar-2.webp" loading="lazy" alt="user avatar" width={200} height={200} />
            <div>
              <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Andy Doe</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
        <img className="h-12 w-auto" src="https://ampire.netlify.app/images/clients/airbnb.svg" loading="lazy" alt="airbnb" />
        <p className="text-gray-600 dark:text-gray-300"><span className="font-serif">"</span>Sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Provident, omnis ut, sapiente veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
        <div className="flex items-center gap-3 text-left">
          <img className="h-12 w-12 rounded-full" src="https://ampire.netlify.app/images/avatars/avatar-3.webp" alt="user avatar" width={200} height={200} loading="lazy" />
          <div>
            <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Janet Doe</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">UX Designer</span>
          </div>
        </div>
      </div>
      <div className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
        <img className="h-12 w-auto" src="https://ampire.netlify.app/images/clients/ge.svg" loading="lazy" alt="ge" />
        <p className="text-gray-600 dark:text-gray-300"><span className="font-serif">"</span>Sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Provident, omnis ut, sapiente veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
        <div className="flex items-center gap-3 text-left">
          <img className="h-12 w-12 rounded-full" src="https://ampire.netlify.app/images/avatars/avatar-4.webp" alt="user avatar" width={200} height={200} loading="lazy" />
          <div>
            <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">John Doe</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="my-32">
  <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Ambassador Benefits:</h2>
    </div>
    <div style={{borderBottomLeftRadius: "0", borderBottomRightRadius: "0"}} className="mt-12 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 dark:divide-gray-700 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0">
      <div className="group relative bg-white transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
        <div className="relative space-y-8 p-8 py-12">
          <img src="/images/icons8-exclusive-58.png" loading="lazy" className="w-12" width={512} height={512} alt="burger illustration" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-700 transition group-hover:text-primary dark:text-white dark:group-hover:text-primaryLight">Exclusive Access:</h3>
            <p className="text-gray-600 dark:text-gray-400">Ambassadors will receive early access to new Payscribe features, product updates, and exclusive promotions.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-white transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
        <div className="relative space-y-8 p-8 py-12">
          <img src="/images/icons8-support-96.png" loading="lazy" className="w-12" width={512} height={512} alt="burger illustration" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-700 transition group-hover:text-primary dark:text-white dark:group-hover:text-primaryLight">Personalized Support:</h3>
            <p className="text-gray-600 dark:text-gray-400">Ambassadors will have direct access to a dedicated Payscribe representative for assistance and support.</p>
          </div>
        
        </div>
      </div>
      <div className="group relative bg-white transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
        <div className="relative space-y-8 p-8 py-12">
          <img src="/images/icons8-profit-64.png" loading="lazy" className="w-12" width={512} height={512} alt="burger illustration" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-700 transition group-hover:text-primary dark:text-white dark:group-hover:text-primaryLight">Financial Rewards:</h3>
            <p className="text-gray-600 dark:text-gray-400">Ambassadors will earn financial rewards, such as commission or bonuses, based on their performance and referrals.</p>
          </div>
        
        </div>
      </div>
      <div className="group relative bg-gray-50 transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-900 lg:hidden">
        <div className="relative space-y-8 p-8 py-12 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png" loading="lazy" className="w-12" width={512} height={512} alt="burger illustration" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-700 transition group-hover:text-primary dark:text-white dark:group-hover:text-primaryLight">Recognition: </h3>
            <p className="text-gray-600 dark:text-gray-400">Ambassadors will be recognized as Payscribe Financial Champions on the Payscribe website and social media platforms.</p>
          </div>
      
        </div>
      </div>
    </div>
    <div  style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}} className="mt-0 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 dark:divide-gray-700 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0">
      <div className="group relative bg-white transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
        <div className="relative space-y-8 p-8 py-12">
         
        </div>
      </div>
      <div className="group relative bg-white transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
        <div className="relative space-y-8 p-8 py-12">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png" loading="lazy" className="w-12" width={512} height={512} alt="burger illustration" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-700 transition group-hover:text-primary dark:text-white dark:group-hover:text-primaryLight">Community of like-minded individuals.</h3>
            <p className="text-gray-600 dark:text-gray-400">Become part of a vibrant community of young intellectuals across different schools nationwide.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-white transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
       
      </div>
    </div>
  </div>
</section>
<section className="mt-32">
  <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">All you need to become an <br/> Ambassador</h2>
    </div>
    <div className="mt-20">
      <div className="gap-6 space-y-12 md:flex md:space-y-0">
        <div className="relative md:w-1/2">
          <div className="panel visible inset-0 flex scale-100 flex-col justify-center opacity-100 transition duration-500 md:absolute" id="panel-0">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">To become a Payscribe ambassador,<br /> you should:</h3>
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex h-10 w-10 rounded border border-gray-200 bg-white p-0 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img className="m-auto h-5 w-auto" src={TheCheck} alt="icon illustration" loading="lazy" width={512} height={512} />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Be passionate about financial education.</h4>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex h-10 w-10 rounded border border-gray-200 bg-white p-0 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img className="m-auto h-5 w-auto" src={TheCheck} alt="icon illustration" loading="lazy" width={512} height={512} />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Be eager to learn effective communication skills.</h4>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex h-10 w-10 rounded border border-gray-200 bg-white p-0 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img className="m-auto h-5 w-auto" src={TheCheck} alt="icon illustration" loading="lazy" width={512} height={512} />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Be enthusiastic about teamwork and collaboration.</h4>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex h-10 w-10 rounded border border-gray-200 bg-white p-0 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img className="m-auto h-5 w-auto" src={TheCheck} alt="icon illustration" loading="lazy" width={512} height={512} />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Be excited about creating innovation and showcasing creativity.</h4>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex h-10 w-10 rounded border border-gray-200 bg-white p-0 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img className="m-auto h-5 w-auto" src={TheCheck} alt="icon illustration" loading="lazy" width={512} height={512} />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Be open to active learning and personal development.</h4>
                  </div>
                </div>
              </div>
              <button
              onClick={()=> history("/join-waitlist")}
                  type="button"
                  className="px-4 py-3 mt-10 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
                >
                  <span className="ml-2">Join Our Waitlist</span>
                </button>
            </div>
          </div>
          <div className="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500" id="panel-1">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make work flow across teams while connecting back to company goals</h3>
              <p className="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png" alt="icon illustration" loading="lazy" width={512} height={512} />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Together as one</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusantium nemo perspiciatis delectus atque autem!</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/2313/2313906.png" alt="icon illustration" loading="lazy" width={512} height={512} />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">New ideas</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500" id="panel-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make work flow across teams while connecting back to company goals</h3>
              <p className="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/3340/3340200.png" alt="icon illustration" loading="lazy" width={512} height={512} />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Together as one</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusantium nemo perspiciatis delectus atque autem!</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                    <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/5405/5405929.png" alt="icon illustration" loading="lazy" width={512} height={512} />
                  </div>
                  <div className="w-[calc(100%-7.5rem)]">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Growth</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
          <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
            <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
              <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                <img src="/images/jason-goodman-Oalh2MojUuk-unsplash.jpeg" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width={850} height={1780} />
              </div>
              <div data-target="panel-1" className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10">
                <img src="https://ampire.netlify.app/images/screenshots/tailus-home-dark.webp" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot dark-mode" loading="lazy" width={850} height={1780} />
              </div>
              <div data-target="panel-2" className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10">
                <img src="https://ampire.netlify.app/images/screenshots/tailus-contact.webp" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus contact screenshot" loading="lazy" width={850} height={1780} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="my-32">
  <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
    <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Frequently Asqued Questions</h2>
    <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
      <div>
        <dl className="faq mx-auto max-w-2xl">
          <dt className="text-lg">
            <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-0" data-active="false" onClick={() => setActiveAccordion(1)}>
              <span className="font-medium text-gray-900 dark:text-white">Who is eligible to apply?</span>
              <span className="ml-6 flex h-7 items-center">
                <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </dt>
          <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-0" style={{maxHeight: activeAccordion == 1? "96px" : "0px"}}>
            <p className="pb-6 text-base text-gray-600 dark:text-gray-400">Any student of a tertiary institution in Nigeria is eligible to apply.</p>
          </dd>
        </dl>
      </div>
      <div>
        <dl className="faq mx-auto max-w-2xl">
          <dt className="text-lg">
            <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-1" data-active="false" onClick={() => setActiveAccordion(2)}>
              <span className="font-medium text-gray-900 dark:text-white">Is the program for only students in the finance field?</span>
              <span className="ml-6 flex h-7 items-center">
                <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </dt>
          <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-1" style={{maxHeight: activeAccordion == 2? "96px" : "0px"}}>
            <p className="pb-6 text-base text-gray-600 dark:text-gray-400">The program is open to all fields of study. We are building a community of students with diverse backgrounds and varying interests.</p>
          </dd>
        </dl>
      </div>
      <div>
        <dl className="faq mx-auto max-w-2xl">
          <dt className="text-lg">
            <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-2" data-active="false" onClick={() => setActiveAccordion(3)}>
              <span className="font-medium text-gray-900 dark:text-white">I am a freshman, can I still apply?</span>
              <span className="ml-6 flex h-7 items-center">
                <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </dt>
          <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-2" style={{maxHeight: activeAccordion == 3? "96px" : "0px"}}>
            <p className="pb-6 text-base text-gray-600 dark:text-gray-400">Yes, students across all levels are welcome to join the program</p>
          </dd>
        </dl>
      </div>
      <div>
        <dl className="faq mx-auto max-w-2xl">
          <dt className="text-lg">
            <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-4" data-active="false" onClick={() => setActiveAccordion(4)}>
              <span className="font-medium text-gray-900 dark:text-white">How much would it cost to apply?</span>
              <span className="ml-6 flex h-7 items-center">
                <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </dt>
          <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-4" style={{maxHeight: activeAccordion == 4? "96px" : "0px"}}>
            <p className="pb-6 text-base text-gray-600 dark:text-gray-400">No cost at all. It is completely free!</p>
          </dd>
        </dl>
      </div>
      <div>
        <dl className="faq mx-auto max-w-2xl">
          <dt className="text-lg">
            <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-5" data-active="false" onClick={() => setActiveAccordion(5)}>
              <span className="font-medium text-gray-900 dark:text-white">If I have information or inquiries about the program, who do I reach?</span>
              <span className="ml-6 flex h-7 items-center">
                <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </dt>
          <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-5" style={{maxHeight: activeAccordion == 5? "96px" : "0px"}}>
            <p className="pb-6 text-base text-gray-600 dark:text-gray-400">Please send an email (not your application) to <a href="mailto:hello@payscribe.ng" className="text-primary">hello@payscribe.ng</a> for inquiries.</p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</section>

</>
  );
}

export default Body;
