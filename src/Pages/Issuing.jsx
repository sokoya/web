import { Helmet } from 'react-helmet'
// import CustomBanner from '../Components/CustomBanner'
import LastBanner from '../Components/LastBanner';
import HeroComponent from '../Components/HeroComponent'
import { motion } from 'framer-motion'
import { show } from '../animations'
import { IoCardOutline, IoShieldHalfOutline, IoCashOutline  } from "react-icons/io5";
import CardImg from '../assets/exports/hero.png';
import { TabsComponent } from '../Components/TabsComponent';
import MockupPhone from '../assets/exports/mockupPhone.jpg'
import TabBanner1 from '../assets/images/homepage/tabbanner1.jpg'
import TabBanner2 from '../assets/images/homepage/tabbanner2.jpg'
import TabBanner3 from '../assets/images/homepage/tabbanner3.jpg'
import TabBanner4 from '../assets/images/homepage/tabbanner4.jpg'
import ContentComponent from '../Components/ContentComponent';

const issuingData = [
  {
    label: 'Smart Lending',
    value: 'lending',
    title: 'Instant Loan Disbursement',
    desc: `Transform your lending operations with automated loan disbursement. Skip the paperwork and instantly approve and transfer funds to your customers with minimal effort. No more tedious manual processes.`,
    img: TabBanner1,
  },
  {
    label: 'Effortless Payroll',
    value: 'education',
    title: 'HR Simplified for Education',
    desc: `Empower your education institution with automated payroll and benefits management. Say goodbye to administrative headaches and streamline your HR processes with precision and ease.`,
    img: TabBanner2,
  },
  {
    label: 'Fast Claims',
    value: 'insurance',
    title: 'Insurance Payouts Made Simple',
    desc: `Deliver quick and reliable payouts to your policyholders. With our solution, you can meet expectations and settle claims efficiently, enhancing customer satisfaction.`,
    img: TabBanner3,
  },
  {
    label: 'Marketplace Solutions',
    value: 'market-place',
    title: 'Seamless Supplier Payouts',
    desc: `Effortlessly pay your marketplace suppliers, marketers, or employees with our instant, cost-effective payout system. Direct deposits into bank accounts ensure smooth, hassle-free payments.`,
    img: TabBanner4,
  },
  {
    label: 'Next-Gen Payments',
    value: 'digital-payments',
    title: 'Digital Transactions Reinvented',
    desc: `Integrate our digital payment API with ease and transform your business. Experience seamless, affordable payments directly within your existing systems, delivering convenience at a fraction of the cost.`,
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
      'Create a virtual card issuing solution that is fully branded as your own with our APIs.',
  },
  {
    icon: <IoShieldHalfOutline  className="text-4xl text-primary" />,
    title: 'Safe and Secure',
    description:
      'Prevent fraud from day 1 by leveraging our banking relationships and regulatory expertise.',
  },
  {
    icon: <IoCashOutline  className="text-4xl text-primary" />,
    title: 'Increase Profit Margin',
    description:
      'Unlock more revenue with shared profits on processing fees on every card transaction.',
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
        title="CARD ISSUING"
        subtitle="Collect virtual debit cards easily"
        description="Everything you need to easily build, manage and scale a commercial virtual card issuing solution."
        primaryLink="https://app.payscribe.ng/auth/create"
        customSectionStyle=''
        primaryLinkText="Join us now"
        secondaryLink="/support"
        secondaryLinkText="Contact support"
        // bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
        textColor="text-white"
        additionalImage={CardImg}
        additionalContent={<p className="text-white"></p>}
        columns={2}
        order={['text', 'image']} 
        customimgstyle='md:scale-[80%] scale-[100%] md:-translate-y-0 -translate-y-[15em]'
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
                <div className="mx-5 my-10 flex justify-start">
                  <div className="p-5 bg-slate-50 rounded-2xl flex">{block.icon}</div>
                </div>
                <div>
                  <h5 className="font-bold">{block.title}</h5>
                  <p className="my-3 text-ls">{block.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div>
        <TabsComponent
          data={issuingData}
          headerTitle="Virtual cards for any business"
          headerDescription="Payscribe provides virtual debit cards that support a range of business models and industries."
          customTabBg = "bg-primary"
          link="/contact"
          linktext="Contact us"
          customActiveContent="bg-white font-bold"
          customButtonClass="text-white bg-black"
          customActiveTabClass="text-primary bg-white"
        />
      </div>
      <div>
      <ContentComponent
        title="Complete Payment Solutions"
        subtitle="Handle transactions with ease"
        description="Our platform offers fast and reliable payment solutions for businesses."
        features={['Fast Payments', 'Global Coverage', 'Flexible Solutions']}
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