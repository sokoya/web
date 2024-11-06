import Hero from '../../Components/Hero/Hero'
import BannerVideo1 from '../../assets/images/homepage/2ndpagebannervid.mp4'
import BannerVideo2 from '../../assets/images/homepage/3ndpagebannervidLeft.mp4'
import BannerVideo3 from '../../assets/images/homepage/3ndpagebannervidRight.mp4'
// import { TabsComponent } from '../../Components/TabsComponent'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import PageBanner4 from '../../assets/images/homepage/4thpagebanner.png'
import { IoCaretUpCircleOutline } from 'react-icons/io5'
import BlockGrid from '../../Components/BlockGrid'
import './Home.scss'
import { show, listVariants, itemVariants, charVariants } from '../../animations'
import { motion } from 'framer-motion'
import LastBanner from '../../Components/LastBanner'
import {TabsComponent} from '../../Components/TabsComponent';
import TabBanner1 from "../../assets/images/homepage/tabbanner1.jpg";
import TabBanner2 from "../../assets/images/homepage/tabbanner2.jpg";
import TabBanner3 from "../../assets/images/homepage/tabbanner3.jpg";
import TabBanner4 from "../../assets/images/homepage/tabbanner4.jpg";
window.scrollTo(0, 0);


const homeData = [
  {
    label: "Accounts and Wallets",
    value: "accounts-wallets",
    title: "Build seamless accounts and wallets with half the effort.",
    desc: `Effortlessly integrate account and wallet services into your fintech platform, allowing your users to manage their finances easily and securely.`,
    img: TabBanner1,
  },
  {
    label: "Issue USD/NGN Cards",
    value: "issue-cards",
    title: "Expand financial reach with effortless USD/NGN card issuance",
    desc: `Enhance your fintech offerings with our seamless USD/NGN card issuance.`,
    img: TabBanner2,
  },
  {
    label: "Savings & Investment",
    value: "savings-investment",
    title: "Boost savings and investments with minimal work",
    desc: `Enhance your fintech services by offering effortless savings and investment solutions.`,
    img: TabBanner3,
  },
  {
    label: "Bill Payments",
    value: "bill-payments",
    title: "Simplify bill payments with ease",
    desc: `Streamline bill payments effortlessly with our platform.`,
    img: TabBanner4,
  },
];

const freelancerFeatures = [
  'Free Payment Links',
  'Multiple Payment Options',
  'Global Usability',
  'Streamlined Transactions',
  'Professional Appearance',
  'Increased Efficiency',
]

const individualFeatures = [
  'Track Your Expenses',
  'Budget Optimization',
  'Manage Your Spending',
  'Financial Clarity',
  'Detailed Reports',
  'Audit Preparation',
]

const forbusinessptxt = "At our core, we are dedicated to powering global growth through innovative solutions that simplify transactions, reduce costs, and increase financial inclusion. Our commitment is to democratize financial services, ensuring that everyone has the opportunity to participate in the global economy."

const FeatureList = ({ features }) => (
  <motion.ul
    initial="hidden"
    whileInView="show"
    variants={listVariants}
    className="grid sm:grid-cols-2 grid-cols-1 my-2"
  >
    {features.map((feature, index) => (
      <motion.li
        key={index}
        variants={itemVariants}
        className="flex items-center p-1 group"
      >
        <IoCaretUpCircleOutline className="md:my-2 my-1 mr-3 group-hover:rotate-90 transition ease-in-out transform" />
        {feature}
      </motion.li>
    ))}
  </motion.ul>
);

function Home() {
  const forbusinessptxtchars = forbusinessptxt.split("");
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <meta name="title" content="Payscribe"/>
  <meta name="description"
    content="Payscribe is a fintech company that offers services aimed at simplifying financial transactions. They allow freelancers to create invoices, generate payment links, and receive payments through these links. Additionally, they offer features like creating USD cards for international payments and handling bill payments, providing a comprehensive suite of financial tools for their users." />
  <meta name="keywords"
    content="Payscribe,Fintech,Financial Services,Invoice Generation,Payment Links,Freelance Payments,USD Cards,International Payments,Bill Payments,Payment Processing,Online Invoicing,Digital Payments,Financial Tools,Freelancer Finances,Easy Payments"/>
  <meta name="robots" content="index, follow"/>
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="language" content="English"></meta>
                
                <title>Payscribe | Veratile Payment Solution for all your business needs</title>
            </Helmet>
      <div className="bg-backgroundLight">
        {/* Here is the Hero Component */}
        <Hero />
        <div className="">
          <div className="md:m-12 md:my-[3em] my-[1em] m-5">
            <div className="md:mx-10 mx-2 md:my-[2em] my-10">
              <h2 className="text-3xl text-left md:w-[35%] sm:w-1/2 w-full text-textDark font-bold">
                Comprehensive Financial Tools for All Users
              </h2>
            </div>

            <div className="md:m-5 m-1 text-white ">
              <div className="bg-[#144BC7] md:p-5 p-2 rounded-xl  ">
                <div className="flex justify-center md:flex-row flex-col-reverse">
                  <div className="md:p-2 p-1">
                    <h2 className="text-md font-bold my-1 md:my-2 m-2">
                      FOR BUSINESSES
                    </h2>
                    <h2 className="text-xl font-bold m-2 my-1 md:my-5">
                      Fueling Global Growth with Innovative Payments Solutions.
                    </h2>

                    <motion.p
                      initial="hidden"
                      whileInView="reveal"
                      transition={{ staggerChildren: 0.015 }}
                      className="m-2 text-slate-300 text-md"
                    >
                      {forbusinessptxtchars.map((char) => (
                        <motion.span
                          key={char}
                          transition={{ duration: 0.4 }}
                          variants={charVariants}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.p>
                  </div>

                  <div className="m-0 md:my-0 my-10">
                    <video
                      loop
                      autoPlay
                      playsInline
                      disableRemotePlayback
                      preload="metadata"
                      muted
                    >
                      <source src={BannerVideo1} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="p-3 md:my-0 my-5 ">
                  <Link
                    to="/rgister"
                    className="bg-white text-primary p-3 rounded-md text-md font-bold my-20 md:my-0 hover:-translate-y-1 transform transition duration-300 ease-in-out"
                  >
                    Start accepting payments
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex md:flex-row flex-col-reverse justify-center p-2 md:m-12 md:my-[5em] my-[3em] m-5 md:space-x-4 space-x-0">
            <div className="bg-[#EFEFEF] p-5 rounded-lg border md:border-none border-[#76767a]">
              <div>
                <video
                  loop
                  autoPlay
                  playsInline
                  disableRemotePlayback
                  preload="metadata"
                  muted
                >
                  <source src={BannerVideo2} type="video/mp4" />
                </video>
              </div>
              <div className="text-black p-2 md:my-0 my-10">
                <h2 className="text-md font-bold my-1 md:my-2 m-2 uppercase">
                  For Freelancers
                </h2>
                <h2 className="text-xl text-black font-bold m-2 my-1 md:my-5">
                  Stay On Top of Your Game.
                </h2>

                <p className="m-2 text-black text-md">
                  Effortlessly manage and track your projects, payments, and
                  expenses, giving you the freedom to concentrate on honing your
                  skills and expanding your business.
                </p>
              </div>
            </div>
            <div className="bg-[black] p-5 rounded-lg md:my-0 my-5">
              <div>
                <video
                  loop
                  autoPlay
                  playsInline
                  disableRemotePlayback
                  preload="metadata"
                  muted
                >
                  <source src={BannerVideo3} type="video/mp4" />
                </video>
              </div>
              <div className="text-white p-2 md:my-0 my-10">
                <h2 className="text-md font-bold my-1 md:my-2 m-2 uppercase">
                  For Individuals
                </h2>
                <h2 className="text-xl font-bold m-2 my-1 md:my-5">
                  Take Control of Your Finances.
                </h2>

                <p className="m-2 text-slate-300 text-md ">
                  Handle your finances effortlessly. Payscribe simplifies money
                  management, so you can handle your bills and payments with
                  ease and focus more on what you enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
        <TabsComponent
  data={homeData}
  headerTitle="Effortless Financial Integration"
  customHeaderClass="text-white"
  headerDescription="Streamline Your Financial Services with Ease"
  link="https://app.payscribe.ng/auth/create"
  linktext="Get Started"
/>
    </div>

        <div className="max-w-[1580px] mx-auto">
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 p-3">
              <motion.div
                variants={show}
                initial="hiddenimg"
                whileInView="imageshow"
                transition={{ delay: 3 }}
                className='flex md:justify-end justify-center p-1'
              >
                <img src={PageBanner4} className="md:h-[80%] h-[100%]" />
              </motion.div>

              <div className="flex items-center">
                <div className="text-black p-2 md:m-5 m-2">
                  <h1 className="font-bold text-xs m-2 my-1">
                    GLOBAL PAYMENT SOLUTIONS
                  </h1>
                  <h1 className="md:text-4xl text-2xl font-bold m-2 my-1 leading-[1.2em]">
                    Simplify Payments with Versatile Payment Links Usable
                    Anywhere in the World
                  </h1>
                  <p className="m-2 md:leading-7 leading-6">
                    Freelancers and business professionals can effortlessly
                    create payment links and share them with clients for easy
                    transactions. These links offer multiple payment options and
                    can be used globally. Here's what you can expect:
                  </p>

                  <div className="max-w-[1580px] mx-auto">
                    <FeatureList features={freelancerFeatures} />
                  </div>
                  <br />
                  <div className="my-2 transform hover:-translate-y-1 transition ease-in-out duration-300">
                    <Link
                      to="https://app.payscribe.ng/auth/create"
                      className="p-3 rounded-lg mx-2 bg-primary text-white"
                    >
                      Create a Free Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="grid md:grid-cols-[1fr_1fr] grid-cols-[1fr] align-top bg-black p-3">
            <motion.div
              variants={show}
              initial="hiddenimg"
              whileInView="imageshow"
              transition={{ delay: 3 }}
              className="p-1 flex md:justify-start justify-center md:order-2 items-center order-1"
            >
              <img src={PageBanner4} className="md:h-[80%] h-[100%]" />
            </motion.div>

            <div className="text-white p-2 md:m-5 m-2 md:order-1 order-2 flex items-center">
              <div className="">
                <h1 className="font-bold text-xs m-2 my-1">
                  EASY FINANCIAL MANAGEMENT
                </h1>
                <h1 className="md:text-4xl text-2xl font-bold m-2 my-1 leading-[1.2em]">
                  Gain Insight into Your Finances with Comprehensive Expense
                  Tracking and Detailed Reports
                </h1>
                <p className="m-2 md:leading-7 leading-6">
                  Take control of your finances with our advanced tracking and
                  reporting tools. Understand your spending habits and make
                  informed decisions to optimize your budget. Here’s how our
                  features can help you:
                </p>

                <div className="">
                  <FeatureList features={individualFeatures} />
                </div>
                <br />
                <div className="my-2 transform hover:-translate-y-1 transition ease-in-out duration-300">
                  <Link
                    to="https://app.payscribe.ng/auth/create"
                    className="p-3 rounded-lg mx-2 bg-primary text-white"
                  >
                    Create a Free Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <BlockGrid />
        </div>

        <div>
          <LastBanner/>
        </div>
      </div>
    </>
  )
}

export default Home
