import { Helmet } from 'react-helmet'
// import CustomBanner from '../Components/CustomBanner'
import LastBanner from '../Components/LastBanner';
import HeroComponent from '../Components/HeroComponent'
import { motion } from 'framer-motion'
import { show } from '../animations'
import { IoCardOutline, IoShieldHalfOutline, IoCashOutline  } from "react-icons/io5";
import CardImg from '/assets/exports/hero.png';
import { TabsComponent } from '../Components/TabsComponent';
import MockupPhone from '/assets/exports/mockupPhone.jpg'
import TabBanner1 from '/assets/images/homepage/tabbanner1.jpg'
import TabBanner2 from '/assets/images/homepage/tabbanner2.jpg'
import TabBanner3 from '/assets/images/homepage/tabbanner3.jpg'
import TabBanner4 from '/assets/images/homepage/tabbanner4.jpg'
import ContentComponent from '../Components/ContentComponent';

const issuingData = [
  {
    label: 'E-Commerce',
    value: 'lending',
    title: 'E-Commerce',
    desc: `Streamline online transactions with secure virtual cards, making global purchases and vendor payments effortless for online retailers.`,
    img: TabBanner1,
  },
  {
    label: 'Freelancers and Gig Economy',
    value: 'education',
    title: 'Freelancers and Gig Economy',
    desc: `Enable freelancers and gig workers to receive international payments and manage their funds with ease, supporting their global business needs.`,
    img: TabBanner2,
  },
  {
    label: 'Travel and Hospitality',
    value: 'insurance',
    title: 'Travel and Hospitality',
    desc: `Provide travelers and hospitality businesses with a convenient way to handle foreign transactions, bookings, and cross-border payments.`,
    img: TabBanner3,
  },
  {
    label: 'Subscription Services',
    value: 'market-place',
    title: 'Subscription Services',
    desc: `Optimize recurring payments for subscription-based businesses, ensuring reliable, hassle-free billing processes.`,
    img: TabBanner4,
  },
  {
    label: 'Tech Startups and SaaS Platforms',
    value: 'digital-payments',
    title: 'Tech Startups and SaaS Platforms',
    desc: `Support startups and SaaS companies in managing international expenses, vendor payouts, and employee incentives with a unified card solution.`,
    img: TabBanner2,
  },
  {
    label: 'Corporate Payouts',
    value: 'corporate-payouts',
    title: 'Automate Corporate Payments',
    desc: `Manage large-scale corporate payments effortlessly. Automate and schedule payments across departments and partners, reducing administrative strain while boosting operational efficiency.`,
    img: TabBanner4,
  },
];

const blockData = [
  {
    icon: <IoCardOutline className="text-4xl text-primary" />,
    title: 'Customizable',
    description:
      'Design a virtual card issuing solution that reflects your brand identity, seamlessly integrated with our powerful APIs',
  },
  {
    icon: <IoShieldHalfOutline  className="text-4xl text-primary" />,
    title: 'Robust Security You Can Trust',
    description:
      'Protect your business from day one with advanced fraud prevention, powered by our strong banking partnerships and deep regulatory expertise.',
  },
  {
    icon: <IoCashOutline  className="text-4xl text-primary" />,
    title: 'Maximize Revenue Potential',
    description:
      'Earn more with every card transaction by sharing in the processing fees, boosting your profitability effortlessly.',
  }
]

function Issuing() {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                
                <title>Card Issuing | Payscribe</title>
            </Helmet>
      <HeroComponent
      main={"min-h-screen"}
        title="CARD ISSUING"
        subtitle="Issue virtual debit cards easily"
        description="With Payscribe's virtual card issuing solution, you can effortlessly create, manage, and scale commercial virtual debit cards. Our platform provides all the tools you need to streamline card issuance, making it simple to offer secure, customizable payment solutions to your customers."
        primaryLink="https://app.payscribe.ng/auth/create"
        customSectionStyle=''
        primaryLinkText="Create account now"
        secondaryLink="/book-a-demo"
        secondaryLinkText="Contact support"
        // bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
        textColor="text-white"
        additionalImage={CardImg}
        additionalContent={<p className="text-white"></p>}
        columns={2}
        order={['text', 'image']} 
        // customimgstyle='md:scale-[80%] scale-[100%] md:-translate-y-0 -translate-y-[15em]'
      />

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
                <div className="my-10 flex justify-start">
                  <div className="p-5 bg-slate-50 rounded-2xl flex">{block.icon}</div>
                </div>
                <div>
                  <h5 className="font-semibold">{block.title}</h5>
                  <p className="my-3 text-ls">{block.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div>
        <TabsComponent
          data={issuingData}
          headerTitle="Virtual cards for any business"
          headerDescription="Payscribe offers virtual debit cards designed to cater to diverse business models and industries."
          customTabBg = "bg-primary"
          link="/contact"
          linktext="Contact us"
          Seclink="/book-a-demo"
          Seclinktext="Book a demo"
          customActiveContent="bg-white"
          customButtonClass="text-white bg-black"
          customActiveTabClass="text-primary bg-white"
        />
      </div>
      <div>
      <ContentComponent
        title="Complete Card Solutions"
        subtitle="Handle card transactions with ease"
        description="Seamlessly manage your virtual card issuance with a comprehensive solution designed to operate independently, giving you full control and flexibility"
        features={[
          '100% Whitelabel',
          'Global Coverage',
          'Flexible Solutions',
          'Mastercard/Visa/Verve Cards']}
        primaryLinkText="Sign Up"
        customLinkStyle="text-white"
        primaryLink="https://app.payscribe.ng/auth/create"
        secondaryLinkText="Learn More"
        secondaryLink="/contact"
        imageSrc={MockupPhone}
        imagePosition="right"
        // bgColor="bg-gradient-to-r from-green-400 to-teal-500"
        bgColor="bg-white"
        textColor="text-black"
      />
      </div>
      <div>
          <LastBanner/>
        </div>
    </div>
  )
}

export default Issuing