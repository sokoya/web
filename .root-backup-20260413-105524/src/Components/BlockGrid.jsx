import React from 'react'
import {
  IoAlarmOutline,
  IoExtensionPuzzleOutline,
  IoShapesOutline,
  IoPricetagOutline,
} from 'react-icons/io5'
import { motion } from 'framer-motion'
import { show } from '../animations'



const blockData = [
  {
    icon: <IoAlarmOutline className='text-3xl text-primary'/>,
    title: 'Round-the-clock customer support, ready to assist',
    description:
      "Experience tailored assistance with Payscribe's dedicated team of account managers, providing expert support.",
  },
  {
    icon: <IoExtensionPuzzleOutline className='text-3xl text-primary'/>,
    title: 'Streamlined development process with our unified gateway',
    description:
      'Simplify your payment infrastructure with our single API integration, designed to streamline your payment processing capabilities.',
  },
  {
    icon: <IoShapesOutline className='text-3xl text-primary'/>,
    title: 'Gain Valuable Payment Insights Right at Your Fingertips',
    description:
      'Unlock a complete view of your business performance through our user-friendly boards and cutting-edge real-time analytics.',
  },
  {
    icon: <IoPricetagOutline className='text-3xl text-primary'/>,
    title: 'No hidden fees – clear and transparent financial solutions',
    description:
      'Experience complete transparency with our financial solutions — no hidden charges, just simple straightforward and clear pricing.',
  },
]

const BlockGrid = () => {
  return (
    <div className='p-3 text-black max-w-[1580px] mx-auto'>
      <div className='grid md:w-1/2 w-full grid-cols-1 '>
        <h2 className='md:text-4xl text-2xl font-semibold md:p-10 p-4'>Why Businesses And Consumers Love Payscribe?</h2>
        <p className='md:px-10 px-4 md:py-5 py-2'>
          Payscribe simplifies financial management, providing intuitive tools
          and top-notch support for businesses and consumers alike. Our platform
          ensures secure, efficient, and hassle-free financial transactions.
          Payscribe simplifies financial management, providing intuitive tools.
        </p>
      </div>
      <motion.div 
  variants={show}  // Applying stagger to the parent
  initial="hidden"
  whileInView="show"
  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 my-0 sm:px-10 px-2 py-5 gap-4"
>
  {blockData.map((block, index) => (
    <motion.div
      key={index}
      variants={show} // Also apply variants to child elements
      className="p-4 bg-white rounded-xl"
    >
      <div className="md:mx-5 mx-1 my-10 flex">
        <div className='md:p-5 p-3 backdrop-blur-lg rounded-2xl flex bg-slate-200/50'>{block.icon}</div>
      </div>
      <div className="my-5">
        <h5 className='font-semibold text-md'>{block.title}</h5>
        <p className='my-3 text-sm text-slate-800'>{block.description}</p>
      </div>
    </motion.div>
  ))}
</motion.div>

    </div>
  )
}

export default BlockGrid
