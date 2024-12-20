import React from 'react'
import {Helmet} from "react-helmet";
import Data from '/assets/exports/data.svg'
import Security from '/assets/exports/security.svg'
import Secure from '/assets/exports/secure.svg'
import { motion } from 'framer-motion';
import { show } from '../animations'

function Compliance() {
  return (
      <div className="">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Compliance | Payscribe</title>
                 <meta name="keywords" content="Payscribe complicance, payscribe security, payscribe data security" />

            </Helmet>
        <div className="grid md:grid-cols-2 grid-cols-1 md:m-[4.5em] m-1  h-screen md:h-auto md:my-[3em] my-0">
          <div className="flex justify-center items-center">
            <div className="p-3 m-2 ">
              <span className="p-3 bg-black font-semibold text-white inline-flex rounded-xl my-3">
                Compliance
              </span>
              <h2 className="md:text-6xl text-3xl leading-15">
                Compliance is built into every product we have.
              </h2>
              <p className="text-slate-600 my-5">
                At Payscribe, We build protective measures to guard our customers,
                make use of best-in-class products embedded with guardrails that
                make sure our clients remain compliant at all times.
              </p>
            </div>
          </div>
          <div>
          <motion.div 
          className="md:order-1 order-2"
          variants={show}
          initial="hiddenimg"
          whileInView="imageshow"
          >
            <img src={Secure} alt="Security" className='transform scale-[70%]'/>
          </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2  grid-cols-1 md:m-[4.5em] m-1  h-screen md:h-auto">
          <div className="flex justify-center items-center md:order-2 order-1">
            <div className="p-3 m-2">
              <span className="p-3 bg-black font-semibold text-white inline-flex rounded-xl my-3">
                Security
              </span>
              <h2 className="md:text-6xl text-3xl leading-15">
                Safeguarding your financial interests.
              </h2>
              <p className="text-slate-600 my-5">
                Security is paramount at Payscribe. We employ state-of-the-art
                security measures to protect sensitive data and transactions.
                Our commitment to robust security protocols ensures that your
                financial activities remain private and secure.
              </p>
            </div>
          </div>
          <motion.div 
          className="md:order-1 order-2"
          variants={show}
          initial="hiddenimg"
          whileInView="imageshow"
          >
            <img src={Security} alt="Security" className='transform scale-[70%]'/>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:m-[4.5em] m-1  h-screen md:h-auto">
          <div className="flex justify-center items-center">
            <div className="p-3 m-2 ">
              <span className="p-3 bg-black font-semibold text-white inline-flex rounded-xl my-3">
                Data
              </span>
              <h2 className="md:text-6xl text-3xl leading-15">
                Harnessing insights for growth.
              </h2>
              <p className="text-slate-600 my-5">
                Data is a valuable asset in the financial world. At Payscribe, we
                leverage advanced analytics to derive meaningful insights that
                help our clients make informed decisions. Our data-driven
                approach empowers businesses to identify trends and seize growth
                opportunities.
              </p>
            </div>
          </div>
          <motion.div
           variants={show}
           initial="hiddenimg"
           whileInView="imageshow">
            <img src={Data} alt='Data' className='transform scale-[70%]' />
          </motion.div>
        </div>
    </div>
  )
}

export default Compliance
