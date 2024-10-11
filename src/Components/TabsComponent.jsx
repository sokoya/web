import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export function TabsComponent({
  data,
  headerTitle,
  headerDescription,
  customHeaderClass,
  link,
  linktext,
  customTabBg,
  customTabContainerClass,
  customTabButtonClass,
  customActiveTabClass,
  customContentPanelClass,
  customActiveContent,
  customButtonClass,
  customImageClass,
  onTabChange,
  onContentLoad,
  motionVariants,
  transitionTiming,
  fallbackContent,
  placeholderImage,
  renderCustomButton,
  renderExtraContent,
  ariaLabelTabList,
  ariaLabelTabButton,
}) {
  const [activeTab, setActiveTab] = useState(data.length ? data[0].value : null);

  
  useEffect(() => {
    if (onTabChange && activeTab) {
      onTabChange(activeTab);
    }
  }, [activeTab, onTabChange]);

  
  useEffect(() => {
    if (onContentLoad && activeTab) {
      onContentLoad(activeTab);
    }
  }, [onContentLoad, activeTab]);

  
  if (!data.length) {
    return fallbackContent || <p>No tabs available</p>;
  }

  return (
    <div className={`bg-black ${customTabBg} flex flex-col items-center w-full`}>
      {/* Header Section */}
      <div className={`flex justify-center font-bold text-white p-10 w-full ${customHeaderClass}`}>
        <div className="md:w-[50%] w-full m-3">
          <h2 className="text-center uppercase">{headerTitle}</h2>
          <p className="text-center text-4xl m-5">{headerDescription}</p>
        </div>
      </div>
      {/* Tab Header */}
      <div
        className={`md:justify-center justify-start flex md:overflow-hidden overflow-x-auto w-full relative z-10 ${customTabContainerClass}`}
        role="tablist"
        aria-label={ariaLabelTabList || "Tab List"}
      >
        <div className="flex p-1 border-2 border-white justify-center rounded-full w-max">
          {data.map(({ label, value, index }) => (
            <button
              key={index}
              onClick={() => setActiveTab(value)}
              className={`p-3 font-bold text-sm cursor-pointer whitespace-nowrap mx-1 transition duration-300 ease-in-out 
              ${activeTab === value ? customActiveTabClass || "bg-white text-black " : customTabButtonClass || "text-white hover:bg-gray-700 hover:bg-opacity-50"}
              ${[ data[0].value, data[ data.length - 1 ].value ].includes(value) ? 
                 data[0].value === value ? 'rounded-l-full' : 'rounded-r-full' : 
                 '' }
              `}
              
              role="tab"
              aria-selected={activeTab === value}
              aria-controls={`tabpanel-${value}`}
              id={`tab-${value}`}
              aria-label={ariaLabelTabButton ? ariaLabelTabButton(label) : `Tab ${label}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-[4fr_5fr] gap-5 p-5 w-full ${customContentPanelClass}`}>
        {/* Text Panel */}
        <div className="text-panel text-black p-4">
          {data.map(({ value, title, desc }) => (
            <div
              key={value}
              className={`${activeTab === value ? 'block' : 'hidden'}`}
              role="tabpanel"
              id={`tabpanel-${value}`}
              aria-labelledby={`tab-${value}`}
            >
              <div className={`bg-rose-100 text-black ${customActiveContent} rounded-xl p-5 md:p-10`}>
                <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
                <p className=" my-3">{desc}</p>
                {renderCustomButton && renderCustomButton(activeTab)}
                <Link
                  to={link}
                  className={`inline-block mt-5 p-2 md:p-3 rounded-lg bg-primary text-white ${customButtonClass} hover:-translate-y-1 transform transition ease-in-out duration-300`}
                >
                  {linktext}
                </Link>
              </div>
              {renderExtraContent && renderExtraContent(activeTab)}
            </div>
          ))}
        </div>

        {/* Image Panel */}
        <div className="image-panel text-black p-4">
          {data.map(({ value, img }) => (
            <motion.div
              key={value}
              className={`${activeTab === value ? 'block' : 'hidden'} flex justify-center`}
              initial={motionVariants?.hidden || { opacity: 0, scale: 1.2 }}
              animate={activeTab === value ? (motionVariants?.visible || { opacity: 1, scale: 1 }) : { opacity: 0, scale: 1.2 }}
              transition={transitionTiming || { duration: 0.6 }}
              role="tabpanel"
              id={`tabpanel-img-${value}`}
              aria-labelledby={`tab-${value}`}
            >
              <img src={img || placeholderImage} alt={value} className={`rounded-xl max-w-full h-auto ${customImageClass}`} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

TabsComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string,
  })).isRequired,
  link: PropTypes.string,
  linktext: PropTypes.string,
  headerTitle: PropTypes.string,
  headerDescription: PropTypes.string,
  customTabBg: PropTypes.string,
  customHeaderClass: PropTypes.string,
  customTabContainerClass: PropTypes.string,
  customTabButtonClass: PropTypes.string,
  customActiveTabClass: PropTypes.string,
  customContentPanelClass: PropTypes.string,
  customActiveContent: PropTypes.string,
  customButtonClass: PropTypes.string,
  customImageClass: PropTypes.string,
  onTabChange: PropTypes.func,
  onContentLoad: PropTypes.func,
  motionVariants: PropTypes.object,
  transitionTiming: PropTypes.object,
  fallbackContent: PropTypes.node,
  placeholderImage: PropTypes.string,
  renderCustomButton: PropTypes.func,
  renderExtraContent: PropTypes.func,
  ariaLabelTabList: PropTypes.string,
  ariaLabelTabButton: PropTypes.func,
};

TabsComponent.defaultProps = {
  headerTitle: "Default Header Title",
  headerDescription: "Default header description.",
  link: "/register",
  linktext: "Create a free Account",
  customHeaderClass: "",
  customTabContainerClass: "",
  customTabButtonClass: "",
  customActiveTabClass: "",
  customContentPanelClass: "",
  customImageClass: "",
  onTabChange: null,
  onContentLoad: null,
  motionVariants: null,
  transitionTiming: null,
  fallbackContent: null,
  placeholderImage: "",
  renderCustomButton: null,
  renderExtraContent: null,
  ariaLabelTabList: "Tab List",
  ariaLabelTabButton: null,
};
