import { motion } from 'framer-motion'
import { show } from '../animations'
import BusImg1 from '/assets/images/homepage/new/long.png'
import { IoFlashOutline } from 'react-icons/io5'
import { MdOutlineDateRange, MdLockOutline } from 'react-icons/md'
import { TabsComponent } from '../Components/TabsComponent'
import FAQ from '../Components/FAQ'
import LastBanner from '../Components/LastBanner'
import TabBanner1 from '/assets/images/homepage/tabbanner1.jpg'
import TabBanner2 from '/assets/images/homepage/tabbanner2.jpg'
import TabBanner3 from '/assets/images/homepage/tabbanner3.jpg'
import TabBanner4 from '/assets/images/homepage/tabbanner4.jpg'
import Growth from '/assets/exports/growth.svg'
import Data from '/assets/exports/dataprocess.svg'
import Security from '/assets/exports/ironclad.svg'
import Unified from '/assets/exports/home/unified.png'

import { Helmet } from 'react-helmet'
import HeroComponent from '../Components/HeroComponent'

const businessData = [
  {
    label: 'Accounts & Wallets',
    value: 'accounts-wallets',
    title: 'Effortless Financial Management for Your Customers',
    desc: `Offer your users a streamlined way to manage their finances with integrated accounts and digital wallets. Our API enables businesses to set up secure, user-friendly financial tools that allow for seamless transactions, saving development time while boosting customer satisfaction.`,
    img: TabBanner1,
  },
  {
    label: 'Card Issuance',
    value: 'issue-cards',
    title: 'Issue USD/NGN Cards with Ease and Expand Financial Reach',
    desc: `Enable your business to offer multi-currency card services, providing your customers with the flexibility to make both local and international payments. Our simplified card issuance platform accelerates the process of launching and managing USD/NGN cards, helping your business stay competitive in the financial landscape.`,
    img: TabBanner2,
  },
  {
    label: 'Savings & Investments',
    value: 'savings-investment',
    title: 'Empower Users with Smart Savings & Investment Tools',
    desc: `Attract and retain customers by integrating seamless savings and investment options into your fintech services. Our flexible platform allows businesses to offer robust financial growth opportunities with minimal setup, providing users with intuitive ways to save and invest directly from your application.`,
    img: TabBanner3,
  },
  {
    label: 'Bill Payments',
    value: 'bill-payments',
    title: 'Simplify Bill Payments and Maximize User Convenience',
    desc: `Make bill payments a breeze for your customers by integrating our efficient payment platform. With a user-friendly interface and hassle-free management, your business can offer customers a fast, reliable way to handle all their payment needs in one place.`,
    img: TabBanner4,
  },
  {
    label: 'Cross-Border Transfers',
    value: 'cross-border-transfers',
    title: 'Expand Globally with Secure Cross-Border Payments',
    desc: `Unlock international growth by enabling cross-border payments. Our platform simplifies global financial transactions, allowing your business to offer seamless, secure transfers across borders with ease.`,
    img: TabBanner1,
  },
  {
    label: 'Automated Payouts',
    value: 'automated-payouts',
    title: 'Automate Payouts to Suppliers and Contractors',
    desc: `Streamline your business operations by automating payments to vendors, suppliers, and contractors. Reduce manual effort and improve accuracy with our scalable payout solutions that handle high-volume transactions effortlessly.`,
    img: TabBanner2,
  },
];


const blockData = [
  {
    icon: <IoFlashOutline className="text-4xl text-primary" />,
    title: 'Convenient and Quick Payments',
    description:
      'Pay your bills conveniently and quickly. Our service ensures fast, hassle-free transactions, so you can manage your payments with ease and stay on top of your finances effortlessly.',
  },
  {
    icon: <MdOutlineDateRange className="text-4xl text-primary" />,
    title: 'Track and Manage All Bills',
    description:
      'Effortlessly track and manage all your bills in one place. Stay organized, avoid missed payments, and enjoy the convenience of our reliable service, keeping your finances in check.',
  },
  {
    icon: <MdLockOutline className="text-4xl text-primary" />,
    title: 'Secure and Reliable Transactions',
    description:
      'Pay your bills with confidence. Our secure and reliable service ensures that every transaction is safe and dependable, making it easy for you to manage your payments with peace of mind.',
  },
]

const gridData = [
  {
    title: 'Unified Financial Platform',
    subtitle: 'Streamlined Transactions',
    content:
      'Unlock seamless access to a wide range of financial services, all integrated into one platform to keep your business moving smoothly without the hassle of juggling multiple systems.',
    image: Unified,
  },
  {
    title: 'Ironclad Security',
    subtitle: 'Effortless Protection',
    content:
      'Rest easy knowing your transactions are backed by cutting-edge security protocols, ensuring the highest level of protection for your financial data.',
    image: Security,
  },
  {
    title: 'Real-Time Insights',
    subtitle: 'Instant Financial Data',
    content:
      'Stay ahead of the game with real-time access to critical financial data, giving you the power to make smart, quick decisions when they matter most.',
    image: Data,
  },
  {
    title: 'Scalable Solutions',
    subtitle: 'Growth-Focused Flexibility',
    content:
      'No matter where your business stands, our platform scales with you, providing tailored solutions that evolve as your company grows, from startups to industry leaders.',
    image: Growth,
  },
];


function ForBusiness() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <title>For Business | Payscribe</title>
      </Helmet>

      <HeroComponent
        title="TAILORED FOR BUSINESS GROWTH"
        subtitle=" Comprehensive Financial Solutions Tailored for Your Business Growth."
        description=" Empower your business with secure transactions, advanced management tools, and seamless financial integrations. Our innovative solutions streamline operations, boost efficiency, and drive sustainable growth, giving your business the edge it needs  to thrive."
        primaryLink="/start"
        primaryLinkText="Join Us"
        secondaryLink="https://app.payscribe.ng/auth/create"
        secondaryLinkText="Create a Free Account"
        // bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
        textColor="text-white"
        additionalImage={BusImg1}
        additionalContent={<p className="text-white"></p>}
        columns={2}
        order={['text', 'image']}
        customimgstyle='md:scale-[80%] scale-[70%] md:-translate-y-0 -translate-y-[18em]'
      />

      <div>
        <motion.div
          variants={show}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 relative sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 my-5 sm:px-10 px-2 py-5 gap-5"
        >
          {blockData.map((block, index) => (
            <motion.div key={index} variants={show} className="p-5 rounded-4xl">
              <div className="my-10 ">
                <div className="p-5">{block.icon}</div>
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
        <div className="md:p-10 p-2">
          <div className="grid md:grid-cols-2 gap-3 grid-cols-1">
            {gridData.map((grid, index) => (
              // eslint-disable-next-line react/jsx-key
              <div
                className={`${[0, 3].includes(index) ? 'md:bg-slate-300 bg-white' : 'md:bg-black bg-slate md:text-white text-black'} space-x-2 md:p-5 p-1 md:m-5 m-1 md:rounded-xl rounded-none`}
              >
                <div key={index} className=" grid grid-col-1">
                  <div className="flex justify-start md:order-1 order-2">
                    <img src={grid.image} className="transform scale-[70%]" />
                  </div>
                  <div className="p-5 md:order-2 order-1">
                    <h3 className="font-bold p-1">{grid.title}</h3>
                    <h2 className="font-bold p-1">{grid.subtitle}</h2>
                    <p className="p-1">{grid.content}</p>
                  </div>
                  <hr className='md:hidden visible'/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <TabsComponent
          data={businessData}
          headerTitle="Effortless Financial Integration"
          headerDescription="Discover the Full Range of Services We Offer to Empower Your Business"
          link="https://app.payscribe.ng/auth/create"
  customHeaderClass="text-white"
          linktext="Create a free Account"
        />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <LastBanner />
      </div>
    </div>
  )
}

export default ForBusiness
