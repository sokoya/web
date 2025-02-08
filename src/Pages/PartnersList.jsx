import React, { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Package,
  Shield,
  Gift,
  ArrowRight,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const placeholderPartners = [
  {
    id: 1,
    name: 'Connekit',
    logo: 'https://connekit-eo.net/images/connekit-eo.png',
    description: 'Leading provider of cloud infrastructure services',
    category: 'Infrastructure',
    benefits: [
      '30% off first year subscription',
      'Free migration support',
      '24/7 premium support',
      'Custom training sessions',
    ],
  },
  {
    id: 2,
    name: 'Gamepride',
    logo: 'https://res.cloudinary.com/duyaimdq3/image/upload/v1726532347/ICON_-_GREEN_ok5aym.png',
    description:
      'A unified gaming plaform with lots and lots of events and benefits',
    category: 'Gaming',
    benefits: [
      '10% discount on all costumes',
      'Access to gamepass free for one month',
      'Advanced threat protection',
      'Early access to new features',
    ],
  },
  {
    id: 3,
    name: 'Kredapay',
    logo: 'https://kash247.com/public/backend/images/web-settings/image-assets/e78e1dc1-d71f-4848-a359-516dd2855082.webp',
    description: 'Finance Management Platform',
    category: 'Finance',
    benefits: [
      'Extended free trial period',
      'Custom dashboard setup',
      'Priority API access',
      'Monthly strategy sessions',
    ],
  },
  {
    id: 4,
    name: 'Connekit',
    logo: 'https://connekit-eo.net/images/connekit-eo.png',
    description: 'Leading provider of cloud infrastructure services',
    category: 'Infrastructure',
    benefits: [
      '30% off first year subscription',
      'Free migration support',
      '24/7 premium support',
      'Custom training sessions',
    ],
  },
  {
    id: 5,
    name: 'Gamepride',
    logo: 'https://res.cloudinary.com/duyaimdq3/image/upload/v1726532347/ICON_-_GREEN_ok5aym.png',
    description:
      'A unified gaming plaform with lots and lots of events and benefits',
    category: 'Gaming',
    benefits: [
      '10% discount on all costumes',
      'Access to gamepass free for one month',
      'Advanced threat protection',
      'Early access to new features',
    ],
  },
  {
    id: 6,
    name: 'Kredapay',
    logo: 'https://kash247.com/public/backend/images/web-settings/image-assets/e78e1dc1-d71f-4848-a359-516dd2855082.webp',
    description: 'Finance Management Platform',
    category: 'Finance',
    benefits: [
      'Extended free trial period',
      'Custom dashboard setup',
      'Priority API access',
      'Monthly strategy sessions',
    ],
  },
  {
    id: 7,
    name: 'Connekit',
    logo: 'https://connekit-eo.net/images/connekit-eo.png',
    description: 'Leading provider of cloud infrastructure services',
    category: 'Infrastructure',
    benefits: [
      '30% off first year subscription',
      'Free migration support',
      '24/7 premium support',
      'Custom training sessions',
    ],
  },
  {
    id: 8,
    name: 'Gamepride',
    logo: 'https://res.cloudinary.com/duyaimdq3/image/upload/v1726532347/ICON_-_GREEN_ok5aym.png',
    description:
      'A unified gaming plaform with lots and lots of events and benefits',
    category: 'Gaming',
    benefits: [
      '10% discount on all costumes',
      'Access to gamepass free for one month',
      'Advanced threat protection',
      'Early access to new features',
    ],
  },
  {
    id: 9,
    name: 'Kredapay',
    logo: 'https://kash247.com/public/backend/images/web-settings/image-assets/e78e1dc1-d71f-4848-a359-516dd2855082.webp',
    description: 'Finance Management Platform',
    category: 'Finance',
    benefits: [
      'Extended free trial period',
      'Custom dashboard setup',
      'Priority API access',
      'Monthly strategy sessions',
    ],
  },
]

const PartnerCard = ({ partner }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showBenefits, setShowBenefits] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: 45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: -45,
      transition: { duration: 0.3 },
    },
  }

  const benefitsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={containerVariants}
      viewport={{ once: false, margin: '-100px' }}
      className="w-full max-w-lg m-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Partners | Payscribe</title>
        <meta name="keywords" content="Partners with Payscribe" />
      </Helmet>

      <motion.div
        className="bg-white  rounded-3xl shadow-lg overflow-hidden"
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="p-6 z-10 ">
          <motion.div
            className="flex items-center justify-between relative"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
          >
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src={partner.logo}
              alt={`${partner.name} logo`}
              className=" h-16 rounded-2xl "
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                {partner.name}
              </h3>
              <span className="text-sm text-blue-500 font-medium">
                {partner.category}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="mt-4 cursor-pointer bg-gray-50 rounded-2xl p-3 "
            whileHover={{ backgroundColor: '#f3f4f6' }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center">
                <Package className="w-4 h-4 mr-2" />
                <span className="font-medium">About Partner</span>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={benefitsVariants}
                >
                  <p className="mt-2 text-gray-600">{partner.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="mt-4 cursor-pointer bg-gray-50 rounded-2xl p-3"
            whileHover={{ backgroundColor: '#f3f4f6' }}
            onClick={() => setShowBenefits(!showBenefits)}
          >
            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center">
                <Gift className="w-4 h-4 mr-2" />
                <span className="font-medium">Partner Benefits</span>
              </div>
              <motion.div
                animate={{ rotate: showBenefits ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>

            <AnimatePresence>
              {showBenefits && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={benefitsVariants}
                  className="mt-2 space-y-2"
                >
                  {partner.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-600"
                    >
                      <Shield className="w-4 h-4 mr-2 text-blue-700" />
                      {benefit}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const PartnersList = () => {
  return (
    <motion.div
      className="md:p-12 p-2 bg-basic-gradient min-h-screen "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-4xl text-center font-bold text-gray-50 my-8">
        Our Partners
      </h2>
      <div className="flex flex-wrap justify-center items-stretch gap-6 w-full mx-auto mt-10">
        {placeholderPartners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>

      <div className="bg-transparent py-24 relative">
        <div className=" py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
                Join our partner community today and unlock unlimited earning
                potential
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
                <Link
                  to="/contact"
                  className="text-white hover:text-blue-100 transition-colors flex items-center"
                >
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PartnersList
