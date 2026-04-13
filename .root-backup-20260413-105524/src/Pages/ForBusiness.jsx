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
    label: 'Accounts and Wallets',
    value: 'accounts-wallets',
    title: 'Build seamless accounts and wallets with half the effort.',
    desc: `Enable your customers to send, receive and store money in multiple currencies. \n With support for multiple currencies, your customers can enjoy greater flexibility and convenience in handling international payments.`,
    img: TabBanner1,
  },
  {
    label: 'Card Issuing',
    value: 'issue-cards',
    title: 'Card Issuing',
    desc: `Expand your financial reach with seamless USD/NGN card issuance, enabling businesses to customize cards with their brand identity, creating a personalized and professional experience for their customers.`,
    img: TabBanner2,
  },
  {
    label: 'Savings & Investment',
    value: 'savings-investment',
    title: 'Boost savings and investments with minimal work',
    desc: `Set up tailored target savings, fixed deposits, and investment solutions to help individuals and businesses achieve their financial objectives with ease and efficiency.`,
    img: TabBanner3,
  },
  {
    label: 'Bill Payments',
    value: 'bill-payments',
    title: 'Simplify bill payments with ease',
    desc: (
      <div>
        <p>
          Effortlessly manage local and international bill payments with a
          streamlined and secure platform.
        </p>
        <p>
          From utility bills to global subscriptions, simplify the way you
          handle payments by offering a single platform for both local and
          international transactions, ensuring convenience and reliability for
          your customers.
        </p>
      </div>
    ),
    img: TabBanner4,
  },
  {
    label: 'Cross-Border Transfers',
    value: 'cross-border-transfers',
    title: 'Unlock Global Growth with Secure Cross-Border Payments',
    desc: `Expand your business globally by enabling secure cross-border payments. Our platform simplifies international financial transactions, allowing your business to offer seamless and secure transfers across borders with ease.`,
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
    title: 'Fast and Hassle-Free Payments',
    description:
      'Make payments with ease and speed. Our service ensures rapid, secure transactions, so you can manage your finances efficiently and stay on top of your bills.',
  },
  {
    icon: <MdOutlineDateRange className="text-4xl text-primary" />,
    title: 'Streamlined Bill Management',
    description:
      'Stay organized and in control of your finances. Our service allows you to track and manage all your bills in one place, ensuring you never miss a payment and keeping your finances on track.',
  },
  {
    icon: <MdLockOutline className="text-4xl text-primary" />,
    title: 'Secure and Trustworthy Transactions',
    description:
      'Pay your bills with confidence and peace of mind. Our secure and reliable service ensures that every transaction is protected and dependable, giving you complete control over your finances.',
  },
]

const gridData = [
  {
    title: 'Unified Financial Platform',
    subtitle: 'Streamlined Transactions',
    content:
      "Unify your financial operations with Payscribe's comprehensive platform. Simplify your workflow and eliminate the burden of managing multiple financial systems. Experience seamless transactions and maximize your business efficiency.",
    image: Unified,
  },
  {
    title: 'Ironclad Security',
    subtitle: 'Effortless Protection',
    content:
      "At Payscribe, we prioritize the security of your financial data. Our cutting-edge security protocols safeguard your transactions and financial information, providing peace of mind and protecting your business from potential threats.",
    image: Security,
  },
  {
    title: 'Real-Time Insights',
    subtitle: 'Instant Financial Data',
    content:
      "Stay ahead with Payscribe's real-time access to critical financial data. Gain instant insights and make informed decisions that drive your business forward. Stay ahead of the competition and achieve your growth objectives.",
    image: Data,
  },
  {
    title: 'Scalable Solutions',
    subtitle: 'Growth-Focused Flexibility',
    content:
      "Payscribe understands the unique needs of businesses at every stage of growth. Our platform adapts to your business size, offering tailored solutions that cater to your specific requirements. Whether you're a startup or a leading industry player, Payscribe provides the scalable flexibility you need to thrive and achieve your growth goals.",
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
        title="Unlock Your Business Potential with Payscribe"
        subtitle="Expert Financial Solutions Crafted for Ambitious Businesses Like Yours."
        description="Payscribe empowers you with secure transactions, cutting-edge management tools, and effortless financial integrations. Streamline your operations, amplify efficiency, and drive sustainable growth - giving you the competitive advantage to succeed and thrive in today's fast-paced market."
        secondaryLink="/book-a-demo"
        secondaryLinkText="Book a demo"
        primaryLink="https://app.payscribe.ng/auth/create"
        primaryLinkText="Create a Free Account"
        customimgstyle="scale-[70%] rotate-[-5deg]"
        // bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
        textColor="text-white"
        additionalImage={BusImg1}
        additionalContent={<p className="text-white"></p>}
        columns={2}
        order={['text', 'image']}
        // customimgstyle='md:scale-[80%] scale-[70%] md:-translate-y-0 -translate-y-[18em]'
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
                <h5 className="font-semibold">{block.title}</h5>
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
                <div key={index} className=" grid grid-cols-1">
                  <div className="flex justify-start md:order-1 order-2">
                    <img src={grid.image} className="transform scale-[70%]" />
                  </div>
                  <div className="p-5 md:order-2 order-1 flex items-end">
                    <div className='h-full'>
                    <h3 className="font-semibold p-1">{grid.title}</h3>
                    {/* <h2 className="font-semibold p-1">{grid.subtitle}</h2> */}
                    <p className="p-1">{grid.content}</p>
                    </div>
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
            Seclink="/book-a-demo"
            Seclinktext="Book a demo"
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
