import React from 'react'
import Logo from '../../assets copy/images/payscribe.png'
import { Link } from 'react-router-dom'
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5'
import Lightning from '../../assets copy/images/globe.png'
import SocialMediaIcons from '../SocialMediaIcons'

const lists = [
  {
    title: 'Products',
    items: [
      { title: 'Accounts and wallets', link: '/accounts-wallets' },
      { title: 'Cards Issuing', link: '/card-issuing' },
      { title: 'Bills Payments', link: '/bills-payments' },
      { title: 'Payments', link: '/payout' },
      { title: 'API Services', link: '#' },
    ],
  },
  {
    title: 'For Businesses',
    items: [
      { title: 'Why Payscribe', link: '/about' },
      { title: 'How It Works', link: '/about' },
      { title: 'Ambassadors', link: 'about' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'FAQs', link: '/faqs' },
      { title: 'Status Page', link: '/' },
      { title: 'Compliance', link: '/compliance' },
      { title: 'Book a demo', link: '/book-a-demo' },
      { title: 'Use case', link: '/use-cases' },
      { title: 'Case-studies', link: '/case-studies'}
    ],
  },
  {
    title: 'Company',
    items: [
      { title: 'About', link: '/about' },
      { title: 'Blog', link: '/' },
      { title: 'Privacy Policy', link: '/privacy-policy' },
      { title: 'Terms and Conditions', link: 'terms-and-conditions' },
    ],
  },
]

function Footer() {
  return (
    <div className="relative bg-black px-2 py-1 text-sm overflow-hidden">
      
      <div className="bg-black grid md:grid-cols-[2fr_3fr] grid-cols-1 md:p-10 p-5 ">
        <div className="md:m-5 m-1">
          <div>
            <div className="flex">
              <Link to="/" className="flex items-center">
                <img src={Logo} className="h-[2.6em] px-2" alt="Logo" />
                <span className="text-3xl text-white">Payscribe</span>
              </Link>
            </div>
          </div>
          <p className="text-slate-300 text-sm md:p-3 p-1 my-5">
            Payscribe offers a robust payment infrastructure enabling businesses
            to securely accept payments, issue USD/NGN cards for seamless
            cross-border transactions, and provide comprehensive financial
            services to their customers. Also available for individuals.
          </p>

          <div className="flex text-white text-2xl p-4">
            <div className="flex p-2 bg-slate-500 mx-2 rounded-lg items-center hover:-translate-y-2 transition duration-300 ease-in-out transform">
              <IoLogoGooglePlaystore />{' '}
              <span className="text-sm p-2">Android</span>
            </div>
            <div className="flex p-2 bg-slate-500 mx-2 rounded-lg items-center hover:-translate-y-2 transition duration-300 ease-in-out transform">
              <IoLogoApple /> <span className="text-sm p-2">iOS</span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-white p-3 grid grid-cols-2  md:grid-cols-4 relative md:my-10 my-0">
            {lists.map((listObj) => (
              <div key={listObj.title}>
                <h2 className="font-bold text-md">{listObj.title}</h2>
                <div className="text-slate-400 text-sm md:my-5 my-2">
                  {listObj.items.map((item, index) => (
                    <div to="" key={index} className="my-3">
                      <Link to={item.link}>{item.title}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-slate-300 flex mx-2 p-1">Payscribe is a fintech company, not a bank. Banking services are provided by licensed banks and financial institutions in their respective jurisdictions.</p>
          </div>
        </div>
        <img
        src={Lightning}
        className="non-selectable h-[100%] absolute -right-10 transform rotate-180 -bottom-40 opacity-[40%]"
      />
        <div className='grid grid-cols-2'>
          <div className="flex text-slate-300 items-center font-bold">
            <SocialMediaIcons />
          </div>
          {' '}
        </div>
      </div>
    </div>
  )
}

export default Footer
