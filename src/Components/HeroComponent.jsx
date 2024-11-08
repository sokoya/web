import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { show } from '../animations'

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
  customimgstyle='scale-[70%]',
}) => {
  
  const renderElements = () => {
    return order.map((element, index) => {
      switch (element) {
        case 'text':
          return (
            <div
              key={index}
              className={`flex md:h-[80%] h-screen items-center p-1`}
            >
              <motion.div
                className={`text-white md:p-10 p-2 md:m-0 m-3 transform md:-translate-y-10 -translate-y-0 ${customSectionStyle}  ${textColor}`}
                variants={show}
                initial="hidden"
                whileInView="show"
              >
                <motion.h1
                  variants={show}
                  className="font-semibold m-2 my-1 md:text-md text-lg"
                >
                  {title}
                </motion.h1>
                <motion.h2 className="font-semibold m-2 my-5  md:my-0 md:text-5xl text-2xl">
                  {subtitle}
                </motion.h2>
                <motion.p className="m-2 md:my-1 my-10 md:leading-7 leading-6">
                  {description}
                </motion.p>
                <div className="my-10 md:block flex justify-center flex-col">
                  <Link
                  target='_blank'
                    to={primaryLink}
                    className="p-3 rounded-lg mx-2 bg-black font-semibold hover:-translate-y-1 text-center text-white transition-transform duration-300"
                  >
                    {primaryLinkText}
                  </Link>
                  <Link
                    to={secondaryLink}
                    className="p-3 rounded-lg mx-2 md:my-0 my-3 bg-white font-semibold hover:-translate-y-1 text-center  text-black transition-transform duration-300"
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
              className="flex md:h-[80%] h-auto items-center justify-start md:sticky static overflow glow"
              variants={show}
              initial="hiddenimg"
              whileInView="imageshow"
            >
              {additionalImage && (
                <img
                  src={additionalImage}
                  alt="Banner"
                  className={`transform ${customimgstyle}`}
                />
              )}
            </motion.div>
          );
        case 'additionalContent':
          return (
            <div key={index} className="flex justify-start items-center h-full">
             <p className='bg-red-800'>{additionalContent}</p>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div
      className={`h-screen ${bgColor} grid md:grid-cols-${columns} grid-cols-1`}
    >
      {renderElements()}
    </div>
  );
};

export default HeroComponent;
