import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart2, 
  PieChart, 
  TrendingUp, 
  Signature, 
  X,
  Gift,
  Users,
  DollarSign,
  Award,
  Shield,
  Zap,
  Target,
  Rocket,
  Heart,
  Star,
  Coffee
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import GradientList from '../components/GradientList';
import GradientNumberedCard from '../components/GradientNumberedCard';
import { Helmet } from 'react-helmet';

// Add new sections data
const steps = [
  {
    title: "Sign Up",
    description: "Create your account in minutes and get instant access to our partner dashboard",
    icon: Users
  },
  {
    title: "Choose Your Path",
    description: "Select between Affiliate or Referral partnership based on your goals",
    icon: Target
  },
  {
    title: "Start Promoting",
    description: "Use our marketing tools and resources to promote Payscribe",
    icon: Rocket
  },
  {
    title: "Earn Rewards",
    description: "Get paid for every successful referral and unlock bonus rewards",
    icon: Gift
  }
];

const achievements = [
  {
    title: "Global Reach",
    value: "50+",
    description: "Countries with active partners"
  },
  {
    title: "Partner Growth",
    value: "300%",
    description: "Year-over-year partner growth"
  },
  {
    title: "Success Rate",
    value: "94%",
    description: "Partner satisfaction rate"
  }
];

const stats = [
  { label: "Active Partners", value: 2000, suffix: "+", icon: Users },
  { label: "Average Monthly Earnings", value: 2500, prefix: "$", icon: DollarSign },
  { label: "Success Rate", value: 94, suffix: "%", icon: Award },
  { label: "Partner Satisfaction", value: 4.9, suffix: "/5", icon: Gift }
];

// Wave SVG Path Component
const WavePath = () => (
  <svg className="absolute left-0 right-0 w-full h-24 -mt-24 transform rotate-180" preserveAspectRatio="none" viewBox="0 0 1440 320">
    <path 
      fill="rgb(239 246 255)" 
      fillOpacity="1" 
      d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,144C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
);

// Curved Path for Steps
const CurvedPath = () => (
  <svg className="absolute left-0 w-full h-full" style={{ zIndex: -1 }}>
    <path
      d="M 50 100 Q 175 25, 300 100 T 550 100"
      stroke="#dbeafe"
      strokeWidth="4"
      fill="none"
    />
  </svg>
);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// Enhanced StatCounter with whileInView
const StatCounter = ({ stat, index }) => {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <stat.icon className="h-8 w-8 text-blue-600 mb-4" />
      </motion.div>
      <motion.p 
        className="text-3xl font-bold text-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={() => {
          let startValue = 0;
          const endValue = stat.value;
          const duration = 1000;
          const increment = (endValue / duration) * 16.67; // 60fps

          const timer = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(startValue));
            }
          }, 16.67);
        }}
      >
        {stat.prefix || ''}{count}{stat.suffix || ''}
      </motion.p>
      <p className="text-sm text-gray-500">{stat.label}</p>
    </motion.div>
  );
};

// New Components
const StepSection = () => (
  <div className="relative py-24 bg-white overflow-hidden">
    <CurvedPath />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get started with Payscribe partnership in four simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4"
                >
                  <step.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

const AchievementsSection = () => (
  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            variants={scaleUp}
            className="text-center text-white"
          >
            <motion.p
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              className="text-4xl font-bold mb-2"
            >
              {achievement.value}
            </motion.p>
            <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
            <p className="text-blue-100">{achievement.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

// Update the main component to include new sections
const Affiliate = () => {
  return (
    <div className="bg-white font-sans">
      {/* Existing sections remain the same until Stats Section */}
      
      {/* Enhanced Stats Section with Wave Path */}
      <div className="relative bg-blue-50 py-16">
        <WavePath />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCounter key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Add Steps Section after Stats */}
      <StepSection />

      {/* Add Achievements Section before Partner Types */}
      <AchievementsSection />

      {/* Rest of the existing sections remain the same */}
      
      {/* Enhanced testimonials with floating animation */}
      <div className="bg-blue-50 py-24 relative overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            transition: { 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          className="absolute inset-0 opacity-50"
        >
          {/* Add subtle floating shapes */}
          <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-blue-200" />
          <div className="absolute top-40 right-40 w-24 h-24 rounded-full bg-indigo-200" />
          <div className="absolute bottom-20 left-1/2 w-20 h-20 rounded-full bg-purple-200" />
        </motion.div>
        
        {/* Existing testimonials content */}
      </div>

      {/* Enhanced CTA with gradient animation */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient 15s ease infinite"
          }}
        />
        {/* Existing CTA content */}
      </div>
    </div>
  );
};

export default Affiliate;