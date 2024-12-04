import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react';

// Define types for your props
type TabData = {
  label: string;
  value: string;
  title: string;
  desc: string;
  img?: string;
};

type MotionVariants = {
  hidden: { opacity: number; scale: number };
  visible: { opacity: number; scale: number };
};

type TabsComponentProps = {
  data: TabData[];
  link?: string;
  linktext?: string;
  headerTitle?: string;
  headerDescription?: string;
  mobilesliderclass?: string;
  customTabBg?: string;
  customHeaderClass?: string;
  customTabContainerClass?: string;
  customTabButtonClass?: string;
  customActiveTabClass?: string;
  customContentPanelClass?: string;
  customActiveContent?: string;
  customButtonClass?: string;
  customImageClass?: string;
  onTabChange?: (activeTab: string) => void;
  onContentLoad?: (activeTab: string) => void;
  motionVariants?: MotionVariants;
  transitionTiming?: { duration: number };
  fallbackContent?: React.ReactNode;
  placeholderImage?: string;
  customTabHeader?: string;
  renderCustomButton?: (activeTab: string) => React.ReactNode;
  renderExtraContent?: (activeTab: string) => React.ReactNode;
  ariaLabelTabList?: string;
  ariaLabelTabButton?: (label: string) => string;
};

// Define the component
export function TabsComponent({
  data,
  mobilesliderclass,
  headerTitle,
  headerDescription,
  customHeaderClass,
  customTabHeader,
  link,
  linktext,
  Seclink,
  Seclinktext,
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
  motionVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 }
  },
  transitionTiming = { duration: 0.6 },
  fallbackContent,
  placeholderImage,
  renderCustomButton,
  renderExtraContent,
  ariaLabelTabList,
  ariaLabelTabButton,
}: TabsComponentProps) {
  const [activeTab, setActiveTab] = useState(data.length ? data[0].value : '');

  const tabIndex = data.findIndex((tab) => tab.value === activeTab);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && tabIndex < data.length - 1) {
      setActiveTab(data[tabIndex + 1].value);
    } else if (direction === 'right' && tabIndex > 0) {
      setActiveTab(data[tabIndex - 1].value);
    }
  };

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
      <div className={`flex justify-center font-semibold p-10 w-full ${customHeaderClass}`}>
        <div className="md:w-[50%] w-full m-3">
          <h2 className="text-center uppercase">{headerTitle}</h2>
          <p className="text-center md:text-4xl text-2xl m-5">{headerDescription}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div
        className={`md:justify-center justify-start flex md:overflow-hidden overflow-x-auto w-full relative z-10 ${customTabContainerClass}`}
        role="tablist"
        aria-label={ariaLabelTabList || 'Tab List'}
        {...swipeHandlers}
      >
        {data.map(({ label, value }, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(value)}
            className={`p-3 font-semibold text-sm cursor-pointer whitespace-nowrap mx-1 transition duration-300 ease-in-out ${
              activeTab === value ? customActiveTabClass || 'bg-white text-black ' : customTabButtonClass || 'text-white hover:bg-gray-700 hover:bg-opacity-50'
            }`}
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

      {/* Tab Content */}
      <div className={`grid grid-cols-1 md:grid-cols-[4fr_5fr] gap-5 p-5 w-full ${customContentPanelClass}`}>
        {/* Text Panel */}
        <div className="text-panel p-4 items-center flex">
          {data.map(({ value, title, desc }) => (
            <div
              key={value}
              className={`${activeTab === value ? 'block' : 'hidden'}`}
              role="tabpanel"
              id={`tabpanel-${value}`}
              aria-labelledby={`tab-${value}`}
            >
              <div className={`rounded-xl p-5 md:p-10 ${customActiveContent}`}>
                <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
                <div className="my-3">{desc}</div>
                {renderCustomButton && renderCustomButton(activeTab)}
                <Link
                  to={link || ''}
                  className={`inline-block mt-5 p-2 md:p-3 rounded-lg text-white font-semibold ${customButtonClass} hover:-translate-y-1 transform transition ease-in-out duration-300`}
                >
                  {linktext}
                </Link>
                <Link
                  to={Seclink || ''}
                  className={`inline-block mt-5 p-2 md:p-3 rounded-lg text-white font-semibold ${customButtonClass} hover:-translate-y-1 transform transition ease-in-out duration-300`}
                >
                  {Seclinktext}
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
              initial={motionVariants.hidden}
              animate={activeTab === value ? motionVariants.visible : motionVariants.hidden}
              transition={transitionTiming}
              role="tabpanel"
              id={`tabpanel-img-${value}`}
              aria-labelledby={`tab-${value}`}
            >
              <img
                src={img || placeholderImage || ''}
                alt={value}
                className={`rounded-xl max-w-full h-auto ${customImageClass}`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
