import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
  motionVariants,
  transitionTiming,
  fallbackContent,
  placeholderImage,
  renderCustomButton,
  renderExtraContent,
  ariaLabelTabList,
  ariaLabelTabButton,
}) {
  const location = useLocation();
  const headerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(data.length ? data[0].value : null);
  const tabIndex = data.findIndex((tab) => tab.value === activeTab);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setActiveTab(tabIndex < data.length - 1 ? data[tabIndex + 1].value : data[0].value);
    } else if (direction === 'right') {
      setActiveTab(tabIndex > 0 ? data[tabIndex - 1].value : data[data.length - 1].value);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlActiveTab = params.get('tab');
    if (urlActiveTab && data.some((tab) => tab.value === urlActiveTab)) {
      setActiveTab(urlActiveTab);
      headerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, data]);

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
    <div ref={headerRef} className={`bg-black ${customTabBg} flex flex-col items-center w-full`}>
      {/* Header Section */}
      <div className={`flex justify-center font-semibold p-10 w-full ${customHeaderClass}`}>
        <div className="md:w-[50%] w-full m-3">
          <h2 className="text-center uppercase">{headerTitle}</h2>
          <p className="text-center md:text-4xl text-2xl m-5">
            {headerDescription}
          </p>
        </div>
      </div>

      <div
        className={`md:justify-center justify-start flex md:overflow-hidden overflow-x-auto w-full relative z-10 ${customTabContainerClass}`}
        role="tablist"
        aria-label={ariaLabelTabList || 'Tab List'}
        {...swipeHandlers}
      >
        <div className={`md:hidden flex justify-center w-full ${mobilesliderclass}`}>
          <div>
            <div>
              <p className="text-center w-full p-3">Swipe left and right to navigate</p>
            </div>
            <div className="flex justify-between items-center">
              <FaChevronLeft className="" />
              <div className={`${customActiveContent} text-black font-semibold text-center m-3 p-3 rounded-xl`}>
                {activeTab.toUpperCase()}
              </div>
              <FaChevronRight className="" />
            </div>
          </div>
        </div>

        <div className={`hidden p-1 border-2 justify-center rounded-full w-max md:flex ${customTabHeader}`}>
          {data.map(({ label, value, index }) => (
            <button
              key={index}
              onClick={() => setActiveTab(value)}
              className={`p-3 font-semibold text-sm cursor-pointer whitespace-nowrap mx-1 transition duration-300 ease-in-out 
                ${activeTab === value ? customActiveTabClass || 'bg-white text-black ' : customTabButtonClass || 'text-white hover:bg-gray-700 hover:bg-opacity-50'}
                ${[data[0].value, data[data.length - 1].value].includes(value)
                  ? data[0].value === value ? 'rounded-l-full' : 'rounded-r-full' : ''}`}
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

      {/* Tab Content */}
      <div className={`grid grid-cols-1 md:grid-cols-[4fr_5fr] gap-5 p-5 w-full ${customContentPanelClass}`}>
        <div className="text-panel p-4 items-center flex">
          {data.map(({ value, title, desc }) => (
            <div
              key={value}
              className={`${activeTab === value ? 'block' : 'hidden'}`}
              role="tabpanel"
              id={`tabpanel-${value}`}
              aria-labelledby={`tab-${value}`}
            >
              <div className={` ${customActiveContent} rounded-xl p-5 md:p-10`}>
                <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
                <p className="my-3">{desc}</p>
                {renderCustomButton && renderCustomButton(activeTab)}
                <div className="">
                <Link
                  to={link}
                  className={`inline-block mt-5 p-2 md:p-3 rounded-lg text-white font-semibold ${customButtonClass} hover:-translate-y-1 transform transition ease-in-out duration-300`}
                >
                  {linktext}
                </Link>
                <Link
                  to={Seclink || ''}
                  className={`inline-block mt-5 p-2 mx-4md:p-3 rounded-lg font-semibold ${customContentPanelClass} ring-2   ring-black hover:-translate-y-1 transform transition ease-in-out duration-300`}
                >
                  {Seclinktext}
                </Link>
                </div>

               
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
              animate={
                activeTab === value
                  ? motionVariants?.visible || { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.2 }
              }
              transition={transitionTiming || { duration: 0.6 }}
              role="tabpanel"
              id={`tabpanel-img-${value}`}
              aria-labelledby={`tab-${value}`}
            >
              <img
                src={img || placeholderImage}
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


TabsComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      img: PropTypes.string,
    }),
  ).isRequired,
  link: PropTypes.string,
  linktext: PropTypes.string,
  headerTitle: PropTypes.string,
  headerDescription: PropTypes.string,
  mobilesliderclass: PropTypes.string,
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
  customTabHeader: PropTypes.string,
  renderCustomButton: PropTypes.func,
  renderExtraContent: PropTypes.func,
  ariaLabelTabList: PropTypes.string,
  ariaLabelTabButton: PropTypes.func,
}

TabsComponent.defaultProps = {
  headerTitle: 'Default Header Title',
  headerDescription: 'Default header description.',
  link: 'https://app.payscribe.ng/create',
  linktext: 'Create a free Account',
  customHeaderClass: 'text-white',
  mobilesliderclass: 'text-white',
  customTabHeader: 'border-white',
  customTabContainerClass: '',
  customTabButtonClass: '',
  customActiveTabClass: '',
  customContentPanelClass: 'text-black',
  customActiveContent: 'bg-white text-black',
  customButtonClass: 'bg-black',
  customImageClass: '',
  onTabChange: null,
  onContentLoad: null,
  motionVariants: null,
  transitionTiming: null,
  fallbackContent: null,
  placeholderImage: '',
  renderCustomButton: null,
  renderExtraContent: null,
  ariaLabelTabList: 'Tab List',
  ariaLabelTabButton: null,
}