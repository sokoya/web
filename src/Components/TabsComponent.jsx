import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export function TabsComponent({ data, headerTitle, headerDescription }) {
  const [activeTab, setActiveTab] = useState(data[0].value); // Track active tab

  return (
    <div className="bg-black flex flex-col items-center w-full">
      {/* Header Section */}
      <div className="flex justify-center font-bold text-white p-10 w-full">
        <div className="md:w-[50%] w-full m-3">
          <h2 className="text-center uppercase">{headerTitle}</h2>
          <p className="text-center text-4xl m-5">{headerDescription}</p>
        </div>
      </div>

      {/* Tab Header */}
      <div
        className="md:justify-center justify-start flex md:overflow-hidden overflow-x-auto w-full relative z-10"
        role="tablist"
        aria-label="Tab List"
      >
        <div className="flex p-1 border-2 border-white justify-center rounded-full w-max">
          {data.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              className={`p-3 font-bold text-sm cursor-pointer whitespace-nowrap mx-1 transition duration-300 ease-in-out 
              ${activeTab === value ? "bg-white text-black rounded-full" : "text-white hover:bg-gray-700 hover:bg-opacity-50 rounded-full"}`}
              role="tab"
              aria-selected={activeTab === value}
              aria-controls={`tabpanel-${value}`}
              id={`tab-${value}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-[4fr_5fr] gap-5 p-5 w-full">
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
              <div className="bg-rose-100 rounded-xl p-5 md:p-10">
                <h3 className="text-black text-2xl md:text-3xl font-bold">{title}</h3>
                <p className="text-black my-3">{desc}</p>
                <Link
                  to="/register"
                  className="inline-block mt-5 p-2 md:p-3 rounded-lg bg-primary text-white hover:-translate-y-1 transform transition ease-in-out duration-300"
                >
                  Create a Free Account
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Image Panel */}
        <div className="image-panel text-black p-4">
          {data.map(({ value, img }) => (
            <motion.div
              key={value}
              className={`${activeTab === value ? 'block' : 'hidden'} flex justify-center`}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={activeTab === value ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              role="tabpanel"
              id={`tabpanel-img-${value}`}
              aria-labelledby={`tab-${value}`}
            >
              <img src={img} alt={value} className="rounded-xl max-w-full h-auto" loading="lazy" />
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
    img: PropTypes.string.isRequired,
  })).isRequired,
  headerTitle: PropTypes.string,
  headerDescription: PropTypes.string,
};

TabsComponent.defaultProps = {
  headerTitle: "Default Header Title",
  headerDescription: "Default header description.",
};
