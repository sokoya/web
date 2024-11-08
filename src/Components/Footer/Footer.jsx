import Logo from '/assets/exports/logo-white.png'
import { Link } from 'react-router-dom'
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5'
import Lightning from '/assets/images/globe.png'
import SocialMediaIcons from '../SocialMediaIcons'
import Audit from '/assets/exports/ndpr-audit.svg'
// import Twinkle from '/assets/exports/star1.png'
import Overlay from '/assets/exports/overlay.png'

const lists = [
  {
    title: 'Products',
    items: [
      // { title: 'Accounts and wallets', link: '/accounts-wallets' },
      { title: 'Cards Issuing', link: '/card-issuing' },
      // { title: 'Bills Payments', link: '/bills-payments' },
      { title: 'Payments', link: '/payout' },
      { title: 'API Services', link: 'https://developers.payscribe.ng/' },
    ],
  },
  {
    title: 'For Businesses',
    items: [
      { title: 'Why Payscribe', link: '/for-business' },
      { title: 'How It Works', link: 'https://developers.payscribe.ng/' },
      // { title: 'Ambassadors', link: 'about' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'FAQs', link: '/faqs' },
      // { title: 'Status Page', link: '/' },
      { title: 'Compliance', link: '/compliance' },
      { title: 'Book a demo', link: '/book-a-demo' },
      { title: 'Use case', link: '/use-cases' },
      { title: 'Case-studies', link: '/case-studies' },
    ],
  },
  {
    title: 'Company',
    items: [
      { title: 'About', link: '/about' },
      { title: 'Blog', link: 'https://blog.payscribe.ng/' },
      { title: 'Privacy Policy', link: '/privacy-policy' },
      { title: 'Terms and Conditions', link: 'terms-and-conditions' },
    ],
  },
]

function Footer() {
  return (
    <div className=''>
         <div className="relative bg-black px-2 py-1 text-sm overflow-hidden">
         <img src={Overlay} className="absolute md:top-[10%] blue-filter transform rotate-[10deg] md:opacity-5 opacity-5 top-[50%] glower mx-auto md:h-[80%] h-[40%] md:left-[60%] left-[12%] "/> 

      {/* <img
        src={Lightning}
        className="md:block hidden non-selectable h-[100%] absolute -right-10 transform rotate-180 -bottom-40 opacity-[40%]"
      /> */}
      <div className="bg-black grid md:grid-cols-[2fr_3fr] grid-cols-1 md:p-10 p-2 ">
        <div className="md:m-5 m-1">
          <div>
            <div className="flex my-5">
              <Link to="/" className="flex items-center">
                <img src={Logo} className="h-[3.5em] px-2" alt="Logo" />
              </Link>
            </div>
          </div>
          <p className="text-slate-300 text-sm md:p-3 p-1 md:my-5 my-10">
            Payscribe offers a robust payment infrastructure enabling businesses
            to securely accept payments, issue USD/NGN cards for seamless
            cross-border transactions, and provide comprehensive financial
            services to their customers. Also available for individuals.
          </p>
          <div>
          <img src={Audit} className="h-[3em] px-2" alt="NDPR" />
          </div>
          <br/>
          <div className="md:flex grid grid-cols-2 text-white text-2xl md:justify-start justify-center">
            <div className="flex p-2 md:my-0 my-2 bg-slate-500 mx-2 rounded-lg items-center hover:-translate-y-2 transition duration-300 ease-in-out transform justify-center">
              <IoLogoGooglePlaystore />{' '}
              <span className="text-sm p-2 ">Android</span>
            </div>
            <div className="flex p-2 md:my-0 my-2 bg-slate-500 mx-2 rounded-lg items-center hover:-translate-y-2 transition duration-300 ease-in-out transform justify-center">
              <IoLogoApple /> <span className="text-sm p-2 ">iOS</span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-white p-3 grid grid-cols-2  md:grid-cols-4 relative md:my-10 my-0">
            {lists.map((listObj) => (
              <div key={listObj.title} className='md:my-0 my-5'>
                <h2 className="font-semibold text-md md:text-left text-center">{listObj.title}</h2>
                <div className="text-slate-400 text-sm md:my-5 my-2">
                  {listObj.items.map((item, index) => (
                    <div key={index} className="my-4 md:text-left text-center">
                      {item.link.startsWith('http') ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='md:text-left text-center'
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link to={item.link}
                        className='md:text-left text-center'>{item.title}</Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className='z-20'>
            <p className="text-slate-300 flex mx-2 p-1 z-10 text-center text-sm">
              Payscribe is a fintech company, not a bank. Banking services are
              provided by licensed banks and financial institutions in their
              respective jurisdictions.
            </p>
          </div>
        </div>

        <div className="md:grid block grid-cols-2">
          <div className="flex text-slate-300 items-center font-semibold md:justify-start justify-center md:my-0 my-5">
            <SocialMediaIcons />
          </div>{' '}
        </div>
      </div>
    </div>
    </div>

  )
}

export default Footer
