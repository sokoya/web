import { Helmet } from 'react-helmet'
// import CustomBanner from '../Components/CustomBanner'
import LastBanner from '../Components/LastBanner';
import HeroComponent from '../Components/HeroComponent'
import { IoTimerOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion'
import { show } from '../animations'
import { IoFlashOutline } from "react-icons/io5";
import { IoBan } from "react-icons/io5";
import { TabsComponent } from '../Components/TabsComponent';
import TabBanner1 from '../assets copy/images/homepage/tabbanner1.jpg'
import TabBanner2 from '../assets copy/images/homepage/tabbanner2.jpg'
import TabBanner3 from '../assets copy/images/homepage/tabbanner3.jpg'
import TabBanner4 from '../assets copy/images/homepage/tabbanner4.jpg'

const payoutData = [
  {
    label: 'Lending',
    value: 'lending',
    title: 'Lending',
    desc: `Skip manual processes, and instantly disburse loans to your customers after approval. Automate bulk payments to avoid tedious, repetitive admin work.`,
    img: TabBanner1,
  },
  {
    label: 'Payroll',
    value: 'payroll',
    title: 'Payroll',
    desc: `Seamlessly automate payroll, benefits, and leave management. Streamline your HR processes with our payroll, benefits, and leave management solutions.`,
    img: TabBanner2,
  },
  {
    label: 'Insurance',
    value: 'insurance',
    title: 'Insurance',
    desc: `Quick payout Insurance to your policyholders to meet their exceptations`,
    img: TabBanner3,
  },
  {
    label: 'MarketPlace',
    value: 'market-place',
    title: 'MarketPlace',
    desc: `Make instant cost-effective payout to your suppliers, marketers or employees directly into their bank account`,
    img: TabBanner4,
  },
  {
    label: 'Mobility',
    value: 'mobility',
    title: 'Mobility',
    desc: `Settle your transportation payments across multiple places, seamlessly`,
    img: TabBanner2,
  },
  {
    label: 'Digital Payments',
    value: 'digital-payments',
    title: 'Digital Payments',
    desc: `Payments have never been made easier with our easy to use API which you can integerate easily to your exsting applications at a very affordable price`,
    img: TabBanner2,
  }


]

const blockData = [
  {
    icon: <IoBan className="text-4xl text-primary" />,
    title: 'Efficient',
    description:
      'Eliminate data entry mistakes and automate reconciliation to improve efficiency',
  },
  {
    icon: <IoFlashOutline className="text-4xl text-primary" />,
    title: 'Fast',
    description:
      'Instantly deploy thousands of payout with bulk disbursements',
  },
  {
    icon: <IoTimerOutline className="text-4xl text-primary" />,
    title: 'Save Time',
    description:
      'Reduce payment processing cost from traditional banks with a cost effective solution',
  },
  {
    icon: <IoRocketOutline className="text-4xl text-primary" />,
    title: 'Growth',
    description: 'Integrate once, launch to new markets and drive growth on a global scale'
  }
]

function Payout() {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                
                <title>Payout | Payscribe</title>
            </Helmet>
      <HeroComponent
        title="PAY OUT WITH EASE"
        subtitle="Seamless financial transactions"
        description="Instant payments to suppliers, employees, and partners, directly into their accounts."
        primaryLink="/start"
        primaryLinkText="Join Us"
        secondaryLink="/support"
        secondaryLinkText="Contact Support"
        // bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
        textColor="text-white"
        additionalImage="https://via.placeholder.com/150"
        additionalContent={<p className="text-white"></p>}
        columns={2}
        order={['text', 'image']} 
      />


      <div className='md:m-10 m-5'>
        <div className='flex justify-center '>
          <div className='w-[70%]'>
          <h2 className='text-5xl text-center my-5 text-black font-bold flex justify-center'>Make multiple payments instantly and simutaneously</h2>
          <p className='text-slate-600 text-center flex justify-center my-2'>With our API you can instantly send local and international payouts anywhere</p>
        </div>
        </div>

        <motion.div
            variants={show} // Applying stagger to the parent
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 relative sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 my-5 sm:px-10 px-2 py-5 gap-5"
          >
            {blockData.map((block, index) => (
              <motion.div
                key={index}
                variants={show} // Also apply variants to child elements
                className="p-5  rounded-4xl"
              >
                <div className="mx-0 my-10 flex justify-start">
                  <div className="p-5 bg-slate-50 rounded-2xl flex">{block.icon}</div>
                </div>
                <div>
                  <h5 className="font-bold">{block.title}</h5>
                  <p className="my-3 text-ls">{block.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
      </div>

      <div>
        <TabsComponent
          data={payoutData}
          headerTitle="Explore"
          headerDescription="Discover the Full Range of Services We Offer to Empower Your Business"
          // customTabBg = "bg-teal-600"
          link="/contact"
          linktext="Contact us"
          customActiveContent="bg-amber-500 font-bold"
          customButtonClass="bg-primary text-orange-700"
        />
      </div>

      <div>
          <LastBanner/>
        </div>

      {/* <div className="container mx-auto">
      <CustomBanner
        title="Welcome to Our Service"
        description="Experience the best solutions with us."
        bgColor="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        textColor="text-white"
        image="https://via.placeholder.com/1500"
        columns={2} 
      />
    </div> */}
    </div>
  )
}

export default Payout
