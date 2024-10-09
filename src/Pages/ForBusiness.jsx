import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { show } from '../animations';
import BusImg1 from '../assets copy/images/homepage/new/long.png'
import { IoFlashOutline } from "react-icons/io5";
import { MdOutlineDateRange, MdLockOutline } from "react-icons/md";
import { TabsComponent } from '../Components/TabsComponent';
import FAQ from '../Components/FAQ';
import LastBanner from '../Components/LastBanner';
import TabBanner1 from "../assets copy/images/homepage/tabbanner1.jpg";
import TabBanner2 from "../assets copy/images/homepage/tabbanner2.jpg";
import TabBanner3 from "../assets copy/images/homepage/tabbanner3.jpg";
import TabBanner4 from "../assets copy/images/homepage/tabbanner4.jpg";
import Block1 from "../assets copy/images/homepage/peer.png";
import { Helmet } from 'react-helmet';


const businessData = [
  {
    label: "Accounts and Wallets",
    value: "accounts-wallets",
    title: "Build seamless accounts and wallets with half the effort.",
    desc: `Effortlessly integrate account and wallet services into your fintech platform, allowing your users to manage their finances easily and securely. Our robust API simplifies the process, reducing development time and effort.`,
    img: TabBanner1,
  },
  {
    label: "Issue USD/NGN Cards",
    value: "issue-cards",
    title: "Expand financial reach with effortless USD/NGN card issuance",
    desc: `Enhance your fintech offerings with our seamless USD/NGN card issuance. Easily provide your users with cards for both international and local transactions, all through a straightforward setup and management process.`,
    img: TabBanner2,
  },
  {
    label: "Savings & Investment",
    value: "savings-investment",
    title: "Boost savings and investments with minimal work",
    desc: `Enhance your fintech services by offering effortless savings and investment solutions. Our platform simplifies the process, allowing users to manage and grow their funds with minimal effort. This streamlined approach enables you to provide robust financial tools without complex implementation.`,
    img: TabBanner3,
  },
  {
    label: "Bill Payments",
    value: "bill-payments",
    title: "Simplify bill payments with ease",
    desc: `Streamline bill payments effortlessly with our platform. Enable your users to manage and pay their bills with minimal hassle, offering a smooth and efficient solution that integrates seamlessly into your services.`,
    img: TabBanner4,
  },
];

const blockData = [
  {
    icon: <IoFlashOutline className="text-4xl text-primary" />,
    title: 'Convenient and Quick Payments',
    description:
      'Pay your bills conveniently and quickly. Our service ensures fast, hassle-free transactions, so you can manage your payments with ease and stay on top of your finances effortlessly.',
  },
  {
    icon: <MdOutlineDateRange className="text-4xl text-primary" />,
    title: 'Track and Manage All Bills',
    description:
      'Effortlessly track and manage all your bills in one place. Stay organized, avoid missed payments, and enjoy the convenience of our reliable service, keeping your finances in check.',
  },
  {
    icon: <MdLockOutline className="text-4xl text-primary" />,
    title: 'Secure and Reliable Transactions',
    description:
      'Pay your bills with confidence. Our secure and reliable service ensures that every transaction is safe and dependable, making it easy for you to manage your payments with peace of mind.',
  },
]

const gridData = [
  {
    title: "Swift Payments",
    subtitle: "Secure Transactions",
    content: " Effortlessly connect your business with multiple financial services through our unified platform, simplifying processes and reducing complexity.",
    image: Block1
  },
  {
    title: "Swift Payments",
    subtitle: "Seamless Integration",
    content: "Enjoy peace of mind with our robust security measures, ensuring that all your financial data and transactions are protected.",
    image: Block1
  },
  {
    title: "Swift Payments",
    subtitle: "Real-Time Data Access",
    content: "Access up-to-date financial information instantly, allowing you to make informed decisions and respond quickly to market changes.",
    image: Block1
  },
  {
    title: "Swift Payments",
    subtitle: "Scalable Solutions",
    content: "Our platform grows with your business, offering flexible tools that adapt to your needs, from startups to established enterprises.",
    image: Block1
  }
]

function ForBusiness() {
  return (
    
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                
                <title>For Business | Payscribe</title>
            </Helmet>
      <div className="h-screen bg-basic-gradient grid md:grid-cols-2 grid-cols-1">
        <div className="flex md:h-[80%] h-[100%] md:my-0 my-5 items-center md:py-10 py-1 md:px-5 px-1">
          <motion.div
            className="text-white p-2 md:m-5 m-2"
            variants={show}
            initial="hidden"
            whileInView="show"
          >
            <motion.h1 variants={show} className="font-bold m-2 my-1">
              TAILORED FOR BUSINESS GROWTH
            </motion.h1>
            <motion.h1 className="md:text-5xl text-2xl font-bold m-2 my-1 leading-[1.2em]">
              Comprehensive Financial Solutions Tailored for Your Business
              Growth.
            </motion.h1>
            <motion.p
              variants={show}
              initial="hidden"
              whileInView="show"
              className="m-2 md:leading-7 leading-6"
            >
              Empower your business with secure transactions, advanced
              management tools, and seamless financial integrations. Our
              innovative solutions streamline operations, boost efficiency, and
              drive sustainable growth, giving your business the edge it needs
              to thrive.
            </motion.p>
            <br />

            <div className="my-2 md:flex">
              <p>
                <Link
                  to="/register"
                  className="p-3 rounded-lg mx-2 bg-white font-bold hover:-translate-y-1 text-black transition-transform duration-300"
                >
                  Create a Free Account
                </Link>
              </p>
              <br />
              <p>
                <Link
                  to="/contact-us"
                  className="p-3 rounded-lg mx-2 md:my-0 my-3 bg-white font-bold hover:-translate-y-1 hover:bg-slate-500 text-black transition-transform duration-300"
                >
                  Reach out to us
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={show}
          initial="hiddenimg"
          whileInView="imageshow"
          className="flex h-[80%] items-center top-0 sticky justify-start"
        >
          <img
            src={BusImg1}
            className="transform scale-[70%] rounded-4xl flex justify-start"
          />
        </motion.div>
      </div>

      <div>
        <motion.div
          variants={show}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 relative sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 my-5 sm:px-10 px-2 py-5 gap-5"
        >
          {blockData.map((block, index) => (
            <motion.div key={index} variants={show} className="p-5 rounded-4xl">
              <div className="my-10 ">
                <div className="p-5">{block.icon}</div>
              </div>
              <div>
                <h5 className="font-bold">{block.title}</h5>
                <p className="my-3 text-ls">{block.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div>
        <div className='md:p-10 p-2'>
          <div className='grid md:grid-cols-2 gap-3 grid-cols-1'>
            {gridData.map((grid, index) => (
               <div className={`${[0,3].includes( index ) ? "bg-slate-300" : "md:bg-black bg-slate text-white" } space-x-2 md:p-5 p-1 md:m-5 m-1 md:rounded-xl rounded-none`}>
               <div key={index} className=''>
               <div className='flex justify-start h-1/4'>
                 <img src={grid.image} className='transform scale-[70%]'/>
               </div>
               <div className='p-5'>
                 <h3 className='font-bold p-1'>{grid.title}</h3>
                 <h2 className='font-bold p-1'>{grid.subtitle}</h2>
                 <p>{grid.content}</p>
                 </div>
               </div>
             </div>

            ))}
         
          </div>
        </div>
      </div>

      <div>
        <TabsComponent
          data={businessData}
          headerTitle="Effortless Financial Integration"
          headerDescription="Discover the Full Range of Services We Offer to Empower Your Business"
        />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <LastBanner />
      </div>
    </div>
  )
}

export default ForBusiness;
