import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { show } from '../animations';
import BusImg1 from '../assets/images/homepage/new/long.png'
import { IoFlashOutline } from "react-icons/io5";
import { MdOutlineDateRange, MdLockOutline } from "react-icons/md";


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
  

function Paybills() {
  return (
    <div>
      <div className="h-screen bg-basic-gradient grid md:grid-cols-2 grid-cols-1">
        <div className="flex md:h-[80%] h-[100%] md:my-0 my-5 items-center md:py-10 py-1 md:px-5 px-1">
          <motion.div
            className="text-white p-2 md:m-5 m-2"
            variants={show}
            initial="hidden"
            whileInView="show"
          >
            <motion.h1 variants={show} className="font-bold m-2 my-1 uppercase">
              manage your bills
            </motion.h1>
            <motion.h1 className="md:text-5xl text-2xl font-bold m-2 my-1 leading-[1.2em]">
              Simple Bill Payments: Manage and Pay Bills Quickly and Securely.
            </motion.h1>
            <motion.p
              variants={show}
              initial="hidden"
              whileInView="show"
              className="m-2 md:leading-7 leading-6"
            >
              Pay your bills quickly and securely with our easy-to-use service.
              Manage your regular expenses with ease, track payments
              effortlessly, and enjoy a smooth, hassle-free experience. Stay on
              top of your bills without any stress or complications.
            </motion.p>
            <br />

            <div className="my-2 md:flex">
              <p>
                <Link
                  to="https://app.payscribe.ng/auth/create"
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
          className="flex h-[80%] items-center top-0 sticky"
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
    </div>
  )
}

export default Paybills
