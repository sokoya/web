import React from 'react'
import { Link } from 'react-router-dom'
import About1 from '../../assets copy/images/friends.jpg'
import { fadeSlideStagger, show } from '../../animations'
import { motion } from 'framer-motion'
import { FaRegUser } from 'react-icons/fa'
import { VscTools } from 'react-icons/vsc'
import { GiWorld } from 'react-icons/gi'
import FAQ from '../../Components/FAQ'
import { Helmet } from 'react-helmet'

const blockData = [
  {
    icon: <FaRegUser className="text-4xl text-primary" />,
    title: 'Why Payscribe?',
    description:
      'We saw that managing finances was often complicated and fragmented. Our mission is to address these gaps and improve how people manage their finances.',
  },
  {
    icon: <VscTools className="text-4xl text-primary" />,
    title: 'How We Achieve This',
    description:
      'We blend advanced technology with smart design to deliver a seamless, secure, and efficient financial platform, focusing on innovation and user experience.',
  },
  {
    icon: <GiWorld className="text-4xl text-primary" />,
    title: 'Our Plans for the Future',
    description:
      'We aim to expand our services, advance our technology, and continually enhance user experience, staying ahead of financial trends with innovative solutions.',
  },
]

const teamMembers = [
  {
    name: 'Sokoya Phillips',
    role: 'Project Manager',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bob Smith',
    role: 'Backend Developer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Cathy Lee',
    role: 'UI/UX Designer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Olamide Ashiru',
    role: 'Software Developer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Eva Green',
    role: 'QA Engineer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Frank White',
    role: 'DevOps Engineer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Grace Kelly',
    role: 'Marketing Lead',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Henry Ford',
    role: 'Product Owner',
    image: 'https://via.placeholder.com/150',
  },
]

function About() {
  return (
    <div className="bg-white">
      <Helmet>
                <meta charSet="utf-8" />
                
                <title>About | Payscribe</title>
            </Helmet>
      <div className="h-screen bg-basic-gradient grid md:grid-cols-2 grid-cols-1 ">
        <div className="flex md:h-[80%] h-[100%] md:my-0 my-5 items-center md:py-10 py-1 md:px-5 px-1">
          <motion.div
            className="text-white p-2 md:m-5 m-2"
            variants={show}
            initial="hidden"
            whileInView="show"
          >
            <motion.h1 variants={show} className="font-bold m-2 my-1">
              WHO WE ARE
            </motion.h1>
            <motion.h1 className="md:text-5xl text-2xl font-bold m-2 my-1 leading-[1.2em]">
              Transforming Financial Services for Individuals, Businesses, and
              Beyond.
            </motion.h1>
            <motion.p
              variants={show}
              initial="hidden"
              whileInView="show"
              className="m-2 md:leading-7 leading-6"
            >
              We are on a mission to bridge the gap between individuals and
              fintech innovation. By offering a platform that serves both
              personal finance and the sophisticated requirements of businesses,
              we’re creating a seamless ecosystem where everyone can thrive.
            </motion.p>
            <br />

            <div className="my-2 transform  transition ease-in-out duration-300">
              <Link
                to="/register"
                className="p-3 rounded-lg mx-2 bg-white font-bold hover:-translate-y-1 text-black"
              >
                Create a Free Account
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex h-[80%] items-center  top-0 sticky">
          <img src={About1} className="transform scale-[70%] rounded-4xl " />
        </div>
      </div>
      <div className="md:py-10 py-1 md:px-5 px-1">
        <div className="md:w-1/2 w-full ">
          <h2 className="md:text-3xl text-2xl font-bold md:px-10 md:py-5 py-4 px-4">
            From Idea to Impact:
            <br />
            Our goals and aspirations
          </h2>
          <p className="font-semibold md:px-10 px-4 py-2 leading-7">
            Our journey started with the goal to reshape financial services for
            everyone. We aimed to create a platform that meets current needs and
            adapts to future demands. We plan to expand our services, enhance
            our technology, and continuously improve user experience. Our
            commitment is to offer reliable, innovative solutions that support
            individuals and businesses in achieving their financial goals.
          </p>
        </div>
        <div>
          <motion.div
            variants={show} // Applying stagger to the parent
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 relative sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 my-5 sm:px-10 px-2 py-5 gap-5"
          >
            {blockData.map((block, index) => (
              <motion.div
                key={index}
                variants={show} // Also apply variants to child elements
                className="p-5  rounded-4xl"
              >
                <div className="mx-5 my-10 flex justify-start">
                  <div className="p-5 bg-slate-200 rounded-2xl flex">{block.icon}</div>
                </div>
                <div>
                  <h5 className="font-bold">{block.title}</h5>
                  <p className="my-3 text-ls">{block.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-black text-white z-10 flex justify-center">
        <div className="container p-8">
          <h1 className="text-3xl font-bold text-center my-10">Our Team</h1>
          <motion.div
            variants={fadeSlideStagger.container} // Apply stagger to the container
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:my-10 my-5"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeSlideStagger} // Apply fade and slide to individual items
                className="rounded-lg shadow-lg p-6 flex flex-col md:m-3 m-0 items-center transform hover:scale-105  transition-transform duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-35 h-35 rounded-3xl mb-10 object-cover"
                />
                <p className="text-xl font-semibold">{member.name}</p>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div>
        <FAQ />
      </div>
    </div>
  )
}

export default About
