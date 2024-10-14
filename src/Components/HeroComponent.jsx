import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { show } from '../animations'

const HeroComponent = ({
  customSectionStyle = 'md:m-5 m-2',
  title = 'FAST AND CONVENIENT',
  subtitle = 'Payout has never been easier',
  description = 'Send funds instantly to different suppliers, employees, and business partners in their local currency, straight to their bank accounts or digital wallets with Payscribe`s Payout.',
  primaryLink = '/register',
  primaryLinkText = 'Get Started',
  secondaryLink = '/contact-us',
  secondaryLinkText = 'Reach out to us',
  bgColor = 'bg-basic-gradient',
  textColor = 'text-white',
  additionalImage,
  additionalContent,
  columns = 2, 
  order = ['text', 'image'], 
}) => {
  
  const renderElements = () => {
    return order.map((element, index) => {
      switch (element) {
        case 'text':
          return (
            <div
              key={index}
              className={`flex md:h-[80%] h-[100%] items-center md:py-10 py-1 md:px-5 px-1`}
            >
              <motion.div
                className={`text-white md:p-10 p-2 ${customSectionStyle}  ${textColor}`}
                variants={show}
                initial="hidden"
                whileInView="show"
              >
                <motion.h1
                  variants={show}
                  className="font-bold m-2 my-1"
                >
                  {title}
                </motion.h1>
                <motion.h2 className="font-bold m-2 my-1 md:text-5xl text-2xl">
                  {subtitle}
                </motion.h2>
                <motion.p className="m-2 md:leading-7 leading-6">
                  {description}
                </motion.p>
                <div className="my-10 flex">
                  <Link
                    to={primaryLink}
                    className="p-3 rounded-lg mx-2 bg-white font-bold hover:-translate-y-1 text-black transition-transform duration-300"
                  >
                    {primaryLinkText}
                  </Link>
                  <Link
                    to={secondaryLink}
                    className="p-3 rounded-lg mx-2 md:my-0 my-3 bg-white font-bold hover:-translate-y-1 hover:bg-slate-500 text-black transition-transform duration-300"
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
              className="flex h-[80%] items-center justify-start sticky top-0"
              variants={show}
              initial="hiddenimg"
              whileInView="imageshow"
            >
              {additionalImage && (
                <img
                  src={additionalImage}
                  alt="Banner"
                  className="transform scale-[70%] rounded-4xl"
                />
              )}
            </motion.div>
          );
        case 'additionalContent':
          return (
            <div key={index} className="flex justify-center items-center h-full">
              {additionalContent}
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
