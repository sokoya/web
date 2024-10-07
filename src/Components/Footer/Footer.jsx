import React from 'react'
import Logo from '../../assets copy/images/payscribe.png'
import { Link } from 'react-router-dom'
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import Lightning from '../../assets copy/images/globe.png'
import SocialMediaIcons from '../SocialMediaIcons';

const lists = [
  {
    title: "Products",
    items: [
      "Pay Bills",
      "Virtual Dollar",
      "Airtime to Cash",
      "Save and Earn"
    ]
  },
  {
    title: "For Businesses",
    items: [
      "Why Payscribe",
      "How It Works",
      "Ambassadors"
    ]
  },
  {
    title: "Resources",
    items: [
      "FAQs",
      "Status Page",
      "Compliance"
    ]
  },
  {
    title: "Company",
    items: [
      "About",
      "Blog",
      "Privacy Policy",
      "Terms and Conditions"
    ]
  }
];


function Footer() {
  return (
    <div className="relative bg-black px-2 py-1 text-sm overflow-hidden">
      <img
        src={Lightning}
        className="non-selectable h-[100%] absolute -right-10 transform rotate-180 -bottom-40 opacity-[40%]"
      />
      <div className="bg-black grid md:grid-cols-[2fr_3fr] grid-cols-1 md:p-10 p-5 ">
        <div className="m-5">
          <div>
            <div className="flex">
              <Link to="/" className="flex items-center">
                <img src={Logo} className="h-[2.6em] px-2" alt="Logo" />
                <span className="text-3xl text-white">Payscribe</span>
              </Link>
            </div>
          </div>
          <p className="text-slate-300 text-sm md:p-3 p-1 my-5">
            Payscribe offers a robust payment infrastructure enabling businesses
            to securely accept payments, issue USD/NGN cards for seamless
            cross-border transactions, and provide comprehensive financial
            services to their customers. Also available for individuals.
          </p>

          <div className="flex text-white text-2xl p-4">
            <div className="flex p-2 bg-slate-500 mx-2 rounded-lg items-center hover:-translate-y-2 transition duration-300 ease-in-out transform">
              <IoLogoGooglePlaystore />{' '}
              <span className="text-sm p-2">Android</span>
            </div>
            <div className="flex p-2 bg-slate-500 mx-2 rounded-lg items-center hover:-translate-y-2 transition duration-300 ease-in-out transform">
              <IoLogoApple /> <span className="text-sm p-2">iOS</span>
            </div>
          </div>
        </div>

        <div className="text-white p-3 grid grid-cols-2  md:grid-cols-4 relative md:my-20 my-0">
          {lists.map((listObj) => (
            <div key={listObj.title}>
              <h2 className="font-bold text-md">{listObj.title}</h2>
              <div className="text-slate-400 text-sm my-5">
                {listObj.items.map((item, index) => (
                  <div to="" key={index} className="my-3">
                    <Link to={item}>{item}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex text-slate-300 items-center font-bold">
            <SocialMediaIcons />
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Footer
