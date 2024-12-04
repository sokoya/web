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
// import JustPhone from "/assets/exports/JustPhone.png"
import CardInPhone from "/assets/exports/CardInPhone.png"
import WhiteStar from "/assets/exports/WhiteStar.svg"
import { TabsComponent } from '../Components/TabsComponent';
import OnlinePayments from '/assets/exports/online-payments.svg'
import AroundWorld from '/assets/exports/around-world.svg'
import Payroll from '/assets/exports/payroll.svg'
import Transfer from '/assets/exports/transfer.svg'
import Transaction from '/assets/exports/transactions.svg'

const payoutData = [
  {
    label: 'Lending',
    value: 'lending',
    title: 'Lending',
    desc: `Use Payscribe Payout API to automate loan disbursements directly to borrowers' accounts. With instant, secure payouts, you can ensure that borrowers receive their funds without delay, improving customer satisfaction and accelerating the lending process.`,
    img: Transaction,
  },
  {
    label: 'Payroll',
    value: 'payroll',
    title: 'Payroll',
    desc: `Integrate Payscribe Payout API into your payroll system to instantly pay employees, contractors, or freelancers. Set up automated salary transfers in any currency, ensuring timely, hassle-free payments that keep your workforce happy and productive.`,
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
    desc: `Empower your marketplace by integrating Payscribe Payout API to automate vendor payments. Instantly pay your sellers, whether it’s for commissions, earnings, or refunds, all through a simple, secure, and scalable payout system that helps grow your platform.`,
    img: Transfer,
  },
  {
    label: 'Mobility',
    value: 'mobility',
    title: 'Mobility',
    desc: `Integrate Payscribe Payout API to instantly pay your drivers, delivery personnel, or service providers as they complete their tasks. This ensures real-time, hassle-free payouts that enhance efficiency and support the fast-paced demands of the mobility industry.`,
    img: AroundWorld,
  },
  {
    label: 'Digital Payments',
    value: 'digital-payments',
    title: 'Digital Payments',
    desc: `Leverage Payscribe Payout API to streamline digital payments by instantly transferring funds to users, merchants, or service providers. With seamless integration, you can offer fast, secure payouts across borders, boosting your payment platform’s reliability and user satisfaction.`,
    img: OnlinePayments,
  }


]

const blockData = [
  {
    icon: <IoBan className="text-4xl text-primary" />,
    title: 'Streamlined Payouts',
    description:
      'Experience seamless and efficient payout processes, ensuring quick and reliable transactions every time.',
  },
  {
    icon: <IoFlashOutline className="text-4xl text-primary" />,
    title: 'Instant Transfers',
    description:
      "Send payouts instantly with our fast and secure system, reducing waiting times and enhancing your business's cash flow.",
  },
  {
    icon: <IoTimerOutline className="text-4xl text-primary" />,
    title: 'Save Valuable Time',
    description:
      'Optimize your operations by cutting down on manual processes, allowing you to focus more on growing your business.',
  },
  {
    icon: <IoRocketOutline className="text-4xl text-primary" />,
    title: 'Fuel Business Growth',
    description: 'Leverage our payout solutions to scale your business effortlessly, with reliable and timely payments driving your growth.'
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
        subtitle="Payments, fund transfers, and money management"
        description="Seamlessly handle transactions, move money across accounts, and manage funds with ease and security."
        primaryLink="https://app.payscribe.ng/auth/create"
        primaryLinkText="Create account"
        secondaryLink="/book-a-demo"
        secondaryLinkText="Contact Support"
        // bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
        textColor="text-white"
        additionalImage={CardInPhone}
        additionalContent={
          <div>
            <img src={WhiteStar} alt="" className="absolute md:left-[50%] left-[75%] top-[25%]" />
            {/* <img src={WhiteStar} alt="" className="absolute left-[55%] top-[65%]" />
            <img src={WhiteStar} alt="" className="absolute left-[60%] top-[50%]" /> */}


          </div>
        }
        columns={2}
        order={['text', 'image', 'additionalContent']}
        // customimgstyle='md:scale-[80%] scale-[70%] md:-translate-y-0 -translate-y-[22.5em]'
      />

      <div className="md:m-10 m-5">
        <div className="flex justify-center ">
          <div className="w-[70%]">
            <h2 className="text-5xl text-center my-5 text-black font-semibold flex justify-center">
              Make single/bulk payments instantly and simutaneously
            </h2>
            <p className="text-slate-600 text-center flex justify-center my-2">
            Our API & dashboard enables you to quickly process local and international payouts across Africa.
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
                <h5 className="font-semibold">{block.title}</h5>
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
          Seclink="https://app.payscribe.ng/auth/create"
          Seclinktext="Get started"
          customActiveTabClass="bg-black text-white"
          customTabButtonClass="text-black"
          customActiveContent="bg-black text-white font-semibold"
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
