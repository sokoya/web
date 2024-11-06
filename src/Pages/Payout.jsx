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
// import JustPhone from "../assets/exports/JustPhone.png"
import CardInPhone from "../assets/exports/CardInPhone.png"
import WhiteStar from "../assets/exports/WhiteStar.svg"
import { TabsComponent } from '../Components/TabsComponent';
import OnlinePayments from '../assets/exports/online-payments.svg'
import AroundWorld from '../assets/exports/around-world.svg'
import Payroll from '../assets/exports/payroll.svg'
import Transfer from '../assets/exports/transfer.svg'
import Transaction from '../assets/exports/transactions.svg'

const payoutData = [
  {
    label: 'Lending',
    value: 'lending',
    title: 'Lending',
    desc: `Skip manual processes, and instantly disburse loans to your customers after approval. Automate bulk payments to avoid tedious, repetitive admin work.`,
    img: Transaction,
  },
  {
    label: 'Payroll',
    value: 'payroll',
    title: 'Payroll',
    desc: `Seamlessly automate payroll, benefits, and leave management. Streamline your HR processes with our payroll, benefits, and leave management solutions.`,
    img: Payroll,
  },
  // {
  //   label: 'Insurance',
  //   value: 'insurance',
  //   title: 'Insurance',
  //   desc: `Quick payout Insurance to your policyholders to meet their exceptations`,
  //   img: TabBanner3,
  // },
  {
    label: 'MarketPlace',
    value: 'market-place',
    title: 'MarketPlace',
    desc: `Make instant cost-effective payout to your suppliers, marketers or employees directly into their bank account`,
    img: Transfer,
  },
  {
    label: 'Mobility',
    value: 'mobility',
    title: 'Mobility',
    desc: `Pay from anywhere, everywhere without any restriction or stress.`,
    img: AroundWorld,
  },
  {
    label: 'Digital Payments',
    value: 'digital-payments',
    title: 'Digital Payments',
    desc: `Payments have never been made easier with our easy to use API which you can integerate easily to your exsting applications at a very affordable price`,
    img: OnlinePayments,
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
      customSectionStyle='-my-5'
        title="PAY OUT WITH EASE"
        subtitle="Seamless financial transactions"
        description="Instant payments to suppliers, employees, and partners, directly into their accounts."
        primaryLink="/start"
        primaryLinkText="Join Us"
        secondaryLink="/support"
        secondaryLinkText="Contact Support"
        // bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
        textColor="text-white"
        additionalImage={CardInPhone}
        additionalContent={
          <div>
            <img src={WhiteStar} alt="" className="absolute left-[50%] top-[25%]" />
            {/* <img src={WhiteStar} alt="" className="absolute left-[55%] top-[65%]" />
            <img src={WhiteStar} alt="" className="absolute left-[60%] top-[50%]" /> */}

          </div>
        }
        columns={2}
        order={['text', 'image', 'additionalContent']}
        customimgstyle='md:scale-[80%] scale-[70%] md:-translate-y-0 -translate-y-[22.5em]'
      />

      <div className="md:m-10 m-5">
        <div className="flex justify-center ">
          <div className="w-[70%]">
            <h2 className="text-5xl text-center my-5 text-black font-bold flex justify-center">
              Make multiple payments instantly and simutaneously
            </h2>
            <p className="text-slate-600 text-center flex justify-center my-2">
              With our API you can instantly send local and international
              payouts anywhere
            </p>
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
                <div className="p-5 bg-slate-50 rounded-2xl flex">
                  {block.icon}
                </div>
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
        <hr/>
        <TabsComponent
          data={payoutData}
          headerTitle="Explore"
          headerDescription="Discover the Full Range of Services We Offer to Empower Your Business"
          customHeaderClass="text-black"
          customTabBg = "bg-white"
          customTabHeader='border-black'
          link="/contact"
          linktext="Contact us"
          customActiveTabClass="bg-black text-white"
          customTabButtonClass="text-black"
          customActiveContent="bg-black text-white font-bold"
          customButtonClass="bg-primary text-white"
          customImageClass={'transform scale-[70%] '}
          mobilesliderclass=""
        />
      </div>

      <div>
        <LastBanner />
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
