import React from 'react';

const GradientList = ({ items, title }) => {
  return (
    <ul className="space-y-4">
      {title && (
        <h2 className="font-semibold text-md text-gray-900 mb-4">{title}</h2>
      )}
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 group">
          <div className="relative w-6 h-6 mt-1 flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <defs>
                <linearGradient id={`bullet-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
              <circle
                cx="8"
                cy="8"
                r="5"
                fill="none"
                stroke={`url(#bullet-gradient-${index})`}
                strokeWidth="1"
                className="opacity-20"
              />
              <circle
                cx="10"
                cy="10"
                r="5"
                fill={`url(#bullet-gradient-${index})`}
                className="transform scale-100 group-hover:scale-100 transition-transform duration-200"
              />
            </svg>
          </div>
          <span className="text-gray-600 leading-tight pt-0.5">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default GradientList;