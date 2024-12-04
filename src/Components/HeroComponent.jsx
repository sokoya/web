import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { show } from '../animations';
import Overlay from '/assets/exports/overlay.png'


const HeroComponent = ({
  customSectionStyle = 'md:m-5 m-2',
  title = 'FAST AND CONVENIENT',
  subtitle = 'Payout has never been easier',
  description = 'Send funds instantly to different suppliers, employees, and business partners in their local currency, straight to their bank accounts or digital wallets with Payscribe`s Payout.',
  primaryLink = 'https://app.payscribe.ng/auth/create',
  primaryLinkText = 'Get Started',
  secondaryLink = '/book-a-demo',
  secondaryLinkText = 'Reach out to us',
  bgColor = 'bg-basic-gradient',
  textColor = 'text-white',
  additionalImage,
  additionalContent,
  columns = 2,
  order = ['text', 'image'],
  customimgstyle = 'md:scale-[95%] rotate-[-5deg] scale-[90%]',
}) => {
  const renderElements = () => {
    return order.map((element, index) => {
      switch (element) {
        case 'text':
          return (
            <div
              key={index}
              className="flex items-center justify-center md:justify-start md:h-[80%] p-3 md:p-10 md:m-0 m-5"
            >
              <motion.div
                className={`transform ${customSectionStyle} ${textColor}`}
                variants={show}
                initial="hidden"
                whileInView="show"
              >
                <motion.h1
                  variants={show}
                  className="font-semibold mb-2 md:text-lg text-md"
                >
                  {title}
                </motion.h1>
                <motion.h2 className="font-semibold mb-5 md:mb-2 md:text-5xl text-2xl">
                  {subtitle}
                </motion.h2>
                <motion.p className="mb-8 md:mb-4 md:leading-7 leading-6">
                  {description}
                </motion.p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:flex-row flex-col">
                  <Link
                    target="_blank"
                    to={primaryLink}
                    className="p-3 rounded-lg bg-black text-white font-semibold hover:-translate-y-1 transition-transform duration-300 text-center"
                  >
                    {primaryLinkText}
                  </Link>
                  <Link
                    to={secondaryLink}
                    className="p-3 rounded-lg bg-white text-black font-semibold hover:-translate-y-1 transition-transform duration-300 text-center"
                  >
                    {secondaryLinkText}
                  </Link>
                </div>
              </motion.div>
            </div>
          );
        case 'image':
          return (
            <motion.div
              key={index}
              className="flex items-center justify-center md:justify-start p-5 md:p-0 h-[80%]"
              variants={show}
              initial="hiddenimg"
              whileInView="imageshow"
            >
              {additionalImage && (
                <img
                  src={additionalImage}
                  alt="Banner"
                  className={`object-contain ${customimgstyle}`}
                />
              )}
            </motion.div>
          );
        case 'additionalContent':
          return (
            <div
              key={index}
              className="flex justify-center items-center p-5 md:p-0"
            >
              <p>{additionalContent}</p>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div
      className={`min-h-screen ${bgColor} grid md:grid-cols-${columns} grid-cols-1 gap-4`}
    >
            <motion.div className='md:flex hidden absolute w-[20em] h-[20em] bg-white/10 backdrop-blur-xs top-[25%] rounded-3xl transform rotate-45 rotate-360 left-[35%]'></motion.div>
            <motion.div className='md:flex hidden absolute w-[10em] h-[10em] bg-white/10 backdrop-blur-xs bottom-[25%] rounded-3xl justify-center items-center transform rotate-45 rotate-360 right-[5%]'>
            <img src={Overlay} className='h-[3em] opacity-20'/>
            </motion.div>
            <motion.div className='md:flex hidden absolute w-[5em] h-[5em] bg-white/10 backdrop-blur-xs top-[85%] rounded-3xl justify-center items-center transform rotate-45 rotate-360 deymove left-[35%]'>
            <img src={Overlay} className='h-[2em] opacity-20'/>
            </motion.div>
            <motion.div className='md:flex hidden absolute w-[5em] h-[5em] bg-white/10 backdrop-blur-xs top-[15%] rounded-3xl justify-center items-center  transform rotate-45 rotate-360 left-[25%]'>
            <img src={Overlay} className='h-[2em] opacity-20'/>
            </motion.div>

      {renderElements()}
    </div>
  );
};

export default HeroComponent;
