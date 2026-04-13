import React from 'react';

const CustomBanner = ({ title, description, bgColor = 'bg-blue-500', textColor = 'text-white', image, columns = 2 }) => {
  return (
    <div className={`relative w-full py-8 px-4 ${bgColor} rounded-lg shadow-lg overflow-hidden`}>
      {/* Background Image */}
      {image && (
        <img
          src={image}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}
      {/* Blurry Background */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div>
      
      {/* Content */}
      <div className={`relative z-10 grid grid-cols-1 sm:grid-cols-${columns} gap-4`}>
        <div className={`col-span-${columns} text-center`}>
          <h1 className={`text-4xl font-semibold ${textColor}`}>{title}</h1>
          {description && <p className={`mt-4 ${textColor} text-lg`}>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default CustomBanner;
