import { Helmet } from 'react-helmet'
// import CustomBanner from '../Components/CustomBanner'
import LastBanner from '../Components/LastBanner';
import HeroComponent from '../Components/HeroComponent'
import { motion } from 'framer-motion'
import { show } from '../animations'
import { IoCardOutline, IoShieldHalfOutline, IoCashOutline  } from "react-icons/io5";
import { TabsComponent } from '../Components/TabsComponent';
import TabBanner1 from '../assets copy/images/homepage/tabbanner1.jpg'
import TabBanner2 from '../assets copy/images/homepage/tabbanner2.jpg'
import TabBanner3 from '../assets copy/images/homepage/tabbanner3.jpg'
import TabBanner4 from '../assets copy/images/homepage/tabbanner4.jpg'
import ContentComponent from '../Components/ContentComponent';

const issuingData = [
  {
    label: 'Lending',
    value: 'accounts-wallets',
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
        primaryLink="/register"
        primaryLinkText="Join us now"
        secondaryLink="/support"
        secondaryLinkText="Contact support"
        // bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
        textColor="text-white"
        additionalImage="https://via.placeholder.com/150"
        additionalContent={<p className="text-white"></p>}
        columns={2}
        order={['text', 'image']} 
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
          // customTabBg = "bg-teal-600"
          link="/contact"
          linktext="Contact us"
          customActiveContent="bg-amber-500 font-bold"
          customButtonClass="bg-white text-orange-700"
        />
      </div>
      <div>
      <ContentComponent
        title="Complete Payment Solutions"
        subtitle="Handle transactions with ease"
        description="Our platform offers fast and reliable payment solutions for businesses."
        features={['Fast Payments', 'Global Coverage', 'Flexible Solutions']}
        primaryLinkText="Sign Up"
        primaryLink="/register"
        secondaryLinkText="Learn More"
        secondaryLink="/contact"
        imageSrc="https://via.placeholder.com/200"
        imagePosition="right"
        bgColor="bg-gradient-to-r from-green-400 to-teal-500"
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