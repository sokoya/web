import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GradientNumberedCard = ({ number, title, description, ringStyle = 'single' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const waveVariants = {
    initial: {
      y: "100%",
      transition: { duration: 0 }
    },
    hover: {
      y: "10%",
      transition: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] 
      }
    }
  };

  const ringStyles = {
    single: (
      <motion.circle
        cx="16"
        cy="16"
        r="14"
        fill={`url(#number-gradient-${number})`}
        animate={{
          fill: isHovered ? "#ffffff" : `url(#number-gradient-${number})`
        }}
        transition={{ duration: 0.3 }}
      />
    ),
    double: (
      <>
        <motion.circle
          cx="16"
          cy="16"
          r="12"
          fill={`url(#number-gradient-${number})`}
          animate={{
            fill: isHovered ? "#ffffff" : `url(#number-gradient-${number})`
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.circle
          cx="16"
          cy="16"
          r="10"
          fill={`url(#number-gradient-${number})`}
          animate={{
            fill: isHovered ? "#ffffff" : `url(#number-gradient-${number})`
          }}
          className="opacity-20"
        />
      </>
    ),
    none: <></>,
  };

  return (
    <motion.div 
      className="bg-gradient-to-br font-sans md:w-64 md:h-auto cursor-default h-64 w-full md:p-6 p-5 rounded-md border border-gray-200 relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-[150%]"
        >
          <defs>
            <linearGradient id={`wave-gradient-${number}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#3730A3" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 100 C20 95, 50 105, 100 100 L100 0 L0 0 Z"
            fill={`url(#wave-gradient-${number})`}
            variants={waveVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          />
        </svg>
      </div>

      <div className="gap-4 flex flex-col md:justify-center justify-start md:h-auto h-full relative z-10">
        <motion.div 
          className="flex-shrink-0 flex justify-center my-5"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <svg className="w-8 h-8" viewBox="0 0 32 32">
            <defs>
              <linearGradient
                id={`number-gradient-${number}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
            
            <motion.circle
              cx="16"
              cy="16"
              r="16"
              className="opacity-10"
              animate={{
                fill: isHovered ? "#ffffff" : `url(#number-gradient-${number})`
              }}
            />
            
            {ringStyles[ringStyle]}
            
            <motion.text
              x="16"
              y="16"
              textAnchor="middle"
              dy="0.35em"
              className="text-sm font-semibold"
              animate={{
                fill: isHovered ? `url(#number-gradient-${number})` : "#ffffff"
              }}
              transition={{ duration: 0.3 }}
            >
              {number}
            </motion.text>
          </svg>
        </motion.div>

        <motion.div 
          className="space-y-2 z-[1] text-center"
          animate={{
            color: isHovered ? "#ffffff" : "#1F2937"
          }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-sm leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GradientNumberedCard;