import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.scss';
import './Hero.scss';
import { motion } from 'framer-motion';
import Dashboard1 from '../../assets copy/images/homepage/dashboard-img.png';
import BannerArrowLeft from '../../assets copy/images/homepage/bannerarrowleft.svg';
import BannerArrowRight from '../../assets copy/images/homepage/bannerarrowright.svg';
import { show } from '../../animations';


// And is there a way I can write the animation code separately in a different file so I can use it here
function Hero() {
  return (
    <>
      <div className="relative">
        <div className="bg-black lg:p-4 p-2 h-screen">
          <div className="lg:m-10 m-5">
            <motion.div
              className="lg:mx-5 mx-2 md:my-10 my-20"
              variants={show}
              initial="hidden"
              whileInView="show"
            >
              <motion.h2
                variants={show}
                className="text-white md:text-5xl text-3xl md:font-semibold text-center "
              >
                Versatile payment solutions designed to fit your business needs.
              </motion.h2>
            </motion.div>
            <div className="flex justify-center md:mx-10 mx-2 my-10">
              <motion.h2
                variants={show}
                initial="hidden"
                whileInView="show"
                className=" text-slate-400 text-sm md:text-md text-center md:w-[70%] w-full"
              >
                Payscribe offers a robust payment infrastructure enabling
                businesses to securely accept payments, issue USD/NGN cards for
                seamless cross-border transactions, and provide comprehensive
                financial services to their customers.
              </motion.h2>
            </div>
          </div>
          <motion.div
          variants={show}
          initial="hidden"
          whileInView="show"
            className="flex font-semibold justify-center"
          >
            <div className="flex items-center flex-row">
              <Link
                to="/register"
                className="p-3 rounded-lg mx-2 bg-primary text-white transition ease-in-out duration-300 transform hover:-translate-y-1"
              >
                Create a Free Account
              </Link>
              <Link
              to="/login"
              className=" border-white border-solid border mx-2 p-3 rounded-lg bg-white text-black transition ease-in-out duration-300 transform hover:-translate-y-1 "
            >
              Sign in
            </Link>
            </div>
          </motion.div>

          <motion.div 
           variants={show}
           initial="hiddenimg"
           whileInView="imageshow"
           transition={{ delay: 1.2 }} 
           className='flex justify-center transform scale-60 md:h-auto h-[40%] md:absolute md:my-0 my-20 bottom-0'>
            <img src={BannerArrowLeft} className='transform scale-150 -translate-y-3 md:block hidden -z-10 '/>
            <img src={Dashboard1} className=''/>
            <img src={BannerArrowRight} className='transform scale-150 -translate-y-3 md:block hidden -z-10'/>
          </motion.div>
          
        </div>

      
      </div>
    </>
  )
}

export default Hero
