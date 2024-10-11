import React from 'react';
import PropTypes from 'prop-types';
import { delay, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoCaretUpCircleOutline } from 'react-icons/io5';

const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

// FeatureList component
const FeatureList = ({ features }) => {
  if (!features || features.length === 0) return null;
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      variants={listVariants}
      className="grid grid-cols-1 my-2 w-full font-bold"
    >
      {features.map((feature, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="flex items-center p-1 group"
        >
          <IoCaretUpCircleOutline className="md:my-2 my-1 mr-3 text-xl group-hover:rotate-90 transition ease-in-out transform" />
          {feature}
        </motion.li>
      ))}
    </motion.ul>
  );
};

FeatureList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string),
};

// Customizable Banner component
const ContentComponent = ({
  customContentStyle,
  title,
  subtitle,
  description,
  features,
  primaryLinkText,
  primaryLink,
  customLinkStyle,
  secondaryLinkText,
  secondaryLink,
  bgColor,
  textColor,
  imageSrc,
  imagePosition,
}) => {
  return (
    <div
      className={` ${bgColor} grid md:grid-cols-2 grid-cols-1 md:p-20`} id={title}
    >
      
      {imagePosition === 'left' && imageSrc && (
        <motion.div className="flex h-full items-center justify-center">
          <img
            src={imageSrc}
            alt="Banner"
            className="transform scale-[70%] rounded-4xl"
          />
        </motion.div>
      )}

      
      <div className="flex items-center p-2 md:m-5 m-2">
        <div className={`${textColor}`}>
          
          {title && (
            <motion.h1 className="font-bold uppercase m-2 my-1"><a href={'#'+title}>{title}</a></motion.h1>
          )}

          
          {subtitle && (
            <motion.h2 className="md:text-4xl text-2xl font-bold m-2 my-1 leading-[1.2em]">
              {subtitle}
            </motion.h2>
          )}

          
          {description && (
            <motion.p className="m-2 md:leading-7 leading-6">
              {description}
            </motion.p>
          )}

          
          <FeatureList features={features} />

          
          {(primaryLinkText || secondaryLinkText) && (
            <div className="my-5 transition ease-in-out duration-300 p-2">
              {primaryLink && (
                <Link
                  to={primaryLink}
                  className={`p-3 rounded-lg my-2 ${customLinkStyle} transition duration-300 ease-in-out bg-primary font-bold border-2 transform hover:-translate-y-1`}
                >
                  {primaryLinkText}
                </Link>
              )}
              {secondaryLink && (
                <Link
                  to={secondaryLink}
                  className="p-3 rounded-lg mx-2 bg-gray-300 text-black transform hover:-translate-y-1"
                >
                  {secondaryLinkText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      
      {imagePosition === 'right' && imageSrc && (
        <motion.div className="flex h-full items-center justify-center">
          <img
            src={imageSrc}
            alt="Banner"
            className="transform scale-[70%] rounded-4xl"
          />
        </motion.div>
      )}
    </div>
  );
};

// Prop types for ContentComponent
ContentComponent.propTypes = {
  customContentStyle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  primaryLinkText: PropTypes.string,
  primaryLink: PropTypes.string,
  customLinkStyle: PropTypes.string,
  secondaryLinkText: PropTypes.string,
  secondaryLink: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  imageSrc: PropTypes.string,
  imagePosition: PropTypes.oneOf(['left', 'right']),
};

// Default props
ContentComponent.defaultProps = {
  title: null,
  subtitle: null,
  description: null,
  features: null,
  primaryLinkText: null,
  primaryLink: null,
  secondaryLinkText: null,
  secondaryLink: null,
  customContentStyle: 'my-0',
  bgColor: 'bg-gradient-to-r from-blue-400 to-indigo-600',
  textColor: 'text-white',
  imageSrc: null, // No image by default
  imagePosition: 'right', // Default position
};

export default ContentComponent;
