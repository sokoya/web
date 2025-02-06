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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import GradientList from '../components/GradientList';
import GradientNumberedCard from '../components/GradientNumberedCard';
import { Helmet } from 'react-helmet';

const partnertypes = [
  {
    name: 'Affiliate',
    description: (
      <GradientList
        title="Benefits"
        items={[
          'Earn up to 30% commission on every successful referral',
          'Access to exclusive marketing materials and promotional content',
          'Real-time tracking of referrals and earnings',
          'Monthly performance bonuses for top affiliates',
          'Dedicated affiliate success manager',
        ]}
      />
    ),
    icon: Signature,
    cta: 'Start Earning',
  },
  {
    name: 'Referral Partner',
    description: (
      <GradientList
        title="Benefits"
        items={[
          'Earn lifetime commissions on referred business accounts',
          'Priority access to new features and beta programs',
          'Custom integration support for your platform',
          'Co-marketing opportunities and joint promotional events',
          'Quarterly business review and strategy sessions',
        ]}
      />
    ),
    icon: TrendingUp,
    cta: 'Join Program',
  },
];

const perkBenefits = [
  {
    title: "Commission Rewards",
    desc: "Earn up to 30% commission on every successful referral, with additional bonuses for high-performing partners",
    icon: DollarSign
  },
  {
    title: "Exclusive Tools",
    desc: "Get access to premium marketing materials, tracking tools, and real-time analytics to optimize your performance",
    icon: Shield
  },
  {
    title: "Priority Support",
    desc: "Dedicated partner success manager and priority technical support to help you succeed",
    icon: Users
  },
  {
    title: "Growth Platform",
    desc: "Access our partner ecosystem and networking events to expand your business opportunities",
    icon: TrendingUp
  }
];

const testimonials = [
  {
    name: "Olamide Ashiru",
    role: "Digital Marketing Agency",
    content: "Partnering with Payscribe has been transformative for our business. The commission structure is incredibly competitive, and the support team is always there when we need them.",
    avatar: "/api/placeholder/32/32"
  },
  {
    name: "Sokoya Phillip",
    role: "E-commerce Consultant",
    content: "The tracking tools and analytics provided by Payscribe are best-in-class. It's made managing our affiliate campaigns so much easier and more profitable.",
    avatar: "/api/placeholder/32/32"
  }
];

const steps = [
  {
    title: "Choose Your Path",
    description: "Select between Affiliate or Referral partnership based on your goals",
    icon: Target
  },
  {
    title: "Sign Up",
    description: "Create your account in minutes and get instant access to our partner dashboard",
    icon: Users
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
  { label: "Active Partners", value:300, suffix: "+", icon: Users },
  { label: "Average Monthly Earnings", value: 1250000, prefix: "₦", icon: DollarSign },
  { label: "Success Rate", value: 94, suffix: "%", icon: Award },
  { label: "Partner Satisfaction", value: 4.9, suffix: "/5", icon: Gift }
];
const WavePath = () => (
  <svg className="absolute left-0 right-0 w-full h-24 -mt-24 transform rotate-180" preserveAspectRatio="none" viewBox="0 0 1440 320">
    <path 
      fill="rgb(239 246 255)" 
      fillOpacity="1" 
      d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,144C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
);

const StepSection = () => (
  <div className="relative py-24 bg-white overflow-hidden">
    <CurvedPath />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
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
        <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={staggerContainer}
         className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
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
        </motion.div>
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
            const increment = (endValue / duration) * 16.67;
  
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

  

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
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




const Affiliate = () => {
  return (
    <div className="bg-white font-sans">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Affiliate Program | Payscribe</title>
        <meta name="keywords" content="Payscribe Affiliate Partner Program, Earn Commission, Business Partnership" />
        <meta name="description" content="Join Payscribe's Affiliate Program and earn competitive commissions while growing your business with our comprehensive partnership solutions." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Turn Your Influence Into Income
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of successful partners earning substantial commissions 
              by promoting Payscribe's trusted payment solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                  Start Earning Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/partners-list" className="text-md text-center justify-center font-semibold leading-6 text-gray-900 flex group p-3 border-black border items-center rounded-lg">
                Other Partners <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

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

      

      {/* Partner Types Section */}
      <div className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Partnership Path
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Select the partnership model that best fits your business goals and start earning
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            {partnertypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                                                  <svg width={260} height={260} className='absolute right-[-3em] bottom-[-3em] md:opacity-100 opacity-35'>
                                                  <defs>
            <linearGradient id={`wave-gradient`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#3730A3" stopOpacity="0.95" />
            </linearGradient>
          </defs>
                    <circle cy={190} cx={135} r={90} fill={`url(#wave-gradient)`}/>
                  </svg>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50">
                    <type.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{type.name}</h3>
                </div>
                <div className="text-gray-600 mb-8">{type.description}</div>
                <Button 
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto group"
                >
                  {type.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Partner With Payscribe?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the advantages of joining our partner ecosystem
            </p>
          </div>
          <motion.div 
                          initial='hidden'
                          whileInView='visible'
                          variants={staggerContainer}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {perkBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}

                // transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <benefit.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
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

      <div className="bg-blue-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-16">
            Partner Success Stories
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >

                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
                    
              </div>

      {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24 relative">

                    <div className=" py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
              Join our partner community today and unlock unlimited earning potential
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full sm:w-auto group bg-white text-blue-600 hover:bg-blue-50"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-100 transition-colors flex items-center">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
            </div>

    </div>
  );
};

export default Affiliate;