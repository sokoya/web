import { fadeSlideStagger, show } from '../../animations'
import { motion } from 'framer-motion'
import { FaRegUser } from 'react-icons/fa'
import { VscTools } from 'react-icons/vsc'
import { GiWorld } from 'react-icons/gi'
import FAQ from '../../Components/FAQ'
import { Helmet } from 'react-helmet'
import HeroComponent from '../../Components/HeroComponent'
import LastBanner from '../../Components/LastBanner'
import WhiteStar from "/assets/exports/WhiteStar.svg"


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
            <HeroComponent
        customSectionStyle='my-10'
        title="ABOUT US"
        subtitle="Empowering Your Financial Journey"
        description="At Payscribe, we’re more than just a financial solutions provider—we’re your partner in progress. Whether you’re a business looking to scale, an individual managing your money, or a freelancer navigating global opportunities, we’re here to make it easier for you to achieve your goals."
        primaryLink="/start"
        primaryLinkText="Create account"
        secondaryLink="https://app.payscribe.ng/auth/create"
        secondaryLinkText="Create a Free Account"
        // bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
        textColor="text-white"
        // additionalImage={About1}
        additionalContent={
          <div className='absolute top-10'>
            <img src={WhiteStar} alt="" className="absolute left-[50%] top-[25%] glow" />
            <img src={WhiteStar} alt="" className="absolute left-[55%] top-[65%] glow" />
            <img src={WhiteStar} alt="" className="absolute left-[60%] top-[50%] glow" />

          </div>
        }
        columns={1}
        order={['text']}
      />
      <div className="md:py-10 py-1 md:px-5 px-1">
        <div className="md:w-1/2 w-full ">
          <h2 className="md:text-3xl text-2xl font-semibold md:px-10 md:py-5 py-4 px-4 md:my-1 my-8">
            From Idea to Impact:
            <br />
            Our goals and aspirations
          </h2>
          <p className="font-light md:px-10 px-4 py-2 leading-7">
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
                  <div className="p-5 bg-slate-50 rounded-2xl flex">{block.icon}</div>
                </div>
                <div>
                  <h5 className="font-semibold">{block.title}</h5>
                  <p className="my-3 text-ls">{block.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div>

      </div>

      <div className="bg-black text-white z-10 flex justify-center">
        <div className="container p-8">
          <h1 className="text-3xl font-semibold text-center my-10">Our Team</h1>
          {/* <motion.div
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
          </motion.div> */}
        </div>
      </div>
      <div>
        <div className='md:m-5 m-2 my-10'>
          <h2 className='text-primary text-center font-semibold text-2xl m-2'>Our Story</h2>
          <p className='text-black text-center'>We started with a simple idea: to make financial services smarter, faster, and accessible to everyone. Today, that idea has evolved into a platform trusted by thousands for its reliability, innovation, and simplicity.</p>
        </div>

        <div className='md:m-5 m-2 my-10'>
          <h2 className='text-primary text-center font-semibold text-2xl m-2'>What Makes Us Different?</h2>
          <p className='text-black text-center'>Seamless Financial Solutions: From accepting payments to issuing cards and building financial tools, we bring everything together in one secure, easy-to-use platform.</p>
        </div>

        <div>
          
        </div>
      </div>

      <div>
        <FAQ />
      </div>
      <LastBanner/>
    </div>
  )
}

export default About
