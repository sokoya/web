import { Link } from 'react-router-dom';
import '../../index.scss';
import './Hero.scss';
import { motion } from 'framer-motion';
import Dashboard1 from '/assets/images/homepage/dashboard-img.png';
import BannerArrowLeft from '/assets/images/homepage/bannerarrowleft.svg';
import BannerArrowRight from '/assets/images/homepage/bannerarrowright.svg';
import { show, slideIn } from '../../animations';
import IconLine from '../IconLine';
import Overlay from '/assets/exports/overlay.png';


function Hero() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="bg-black lg:p-4 p-2 h-screen">
          <div className="lg:m-10 m-2">
            <div className='flex justify-center'>
            <motion.div
              className="lg:mx-5 mx-1 md:mt-[0em] my-10 md:w-[80%] w-full"
              variants={show}
              initial="hidden"
              whileInView="show"
            >
              <motion.h2
                variants={show}
                className="text-white md:text-6xl text-3xl md:font-semibold text-center  "
              >
                <span className='basic-gradient bg-clip-text md:span'>Empowering Businesses with the Future of </span> Financial Innovation<span className='span bg-clip-text'>.</span>
              </motion.h2>
            </motion.div>
            </div>
            <div className="flex justify-center md:mx-10 mx-2 md:my-5 my-2">
              <motion.h2
                variants={show}
                initial="hidden"
                whileInView="show"
                className=" text-slate-400 text-lg md:text-md text-center md:w-[70%] w-full"
              >
               Payscribe provides businesses with a robust payment infrastructure to securely accept payments, issue USD/NGN cards for seamless cross-border transactions, and deliver a full range of financial services to enhance customer experience
               </motion.h2>
            </div>
          </div>
          <motion.div
          variants={show}
          initial="hidden"
          whileInView="show"
            className="flex font-semibold justify-center my-10"
          >
            <div className="flex items-center justify-center md:flex-row flex-col md:my-0 my-12 w-[80%]">
              <Link
              target='_blank'
                to="https://app.payscribe.ng/auth/create"
                className="p-3 rounded-lg mx-2 bg-primary my-1 md:w-auto w-full  text-center text-white transition ease-in-out duration-300 transform hover:-translate-y-1"
              >
                Create a Free Account
              </Link>
              <Link
              to="/book-a-demo"
              className=" border-white border-solid border mx-2 p-3 md:w-auto w-full  rounded-lg bg-white my-1 text-center text-black transition ease-in-out duration-300 transform hover:-translate-y-1 "
            >
              Book a demo
            </Link>
            </div>
          </motion.div>
          {/* <IconLine /> */}
         
          {/* <motion.div 
           variants={slideIn}
           initial="hidden"
           whileInView="visible"
           transition={{ delay: 1.2 }} 
           className=' justify-end mx-28 transform xl:scale-[80%] relative scale-[220%] left-0 h-auto  md:hidden flex bottom-0'> */}
            {/* <motion.div
        className="icon-container absolute "
        initial={{ scale: 1 }}
        animate={ { scale: 1.2, filter: 'drop-shadow(0 0 10px #1D4ED8) drop-shadow(0 0 20px #1D4ED8) drop-shadow(0 0 30px #1D4ED8)' } }
        transition={{ delay: 0.5, duration: 0.5 }}
      > */}
        {/* <FaStar className="icon" /> */}
        {/* <Link to="/"><img src={Overlay} className='icon h-10'/></Link> */}

      {/* </motion.div> */}
      <motion.div className="relative md:hidden block"
  variants={slideIn}
  initial="hidden"
  whileInView="visible"
  transition={{ delay: 1.2 }} >
  <motion.img src={Dashboard1}
    // variants={show} // define a new variant for the inner element
    // initial="hidden"
    animate={ { filter: 'drop-shadow(0 0 10px #1D4ED8) drop-shadow(0 0 20px #1D4ED8)' } }
    className='absolute transform scale-[180%] left-[16em] top-[7em] block' />
</motion.div>
           
          {/* </motion.div> */}

          <motion.div 
           variants={show}
           initial="hiddenimg"
           whileInView="imageshow"
           transition={{ delay: 1.2 }} 
           className=' justify-center mx-auto transform xl:scale-[80%]  scale-[120%] md:h-auto w-full h-[50%] absolute -my-[3em] md:flex hidden bottom-0'>

            <img src={BannerArrowLeft} className='transform scale-150 -translate-y-3 translate-x-20  -z-10 '/>
            <img src={Dashboard1} className=' rounded-t-[3em] transform scale-[80%] '/>
            <img src={BannerArrowRight} className='transform scale-150 -translate-y-3 -translate-x-20 -z-10'/>
          </motion.div>
          
        </div>

      
      </div>
    </>
  )
}

export default Hero
