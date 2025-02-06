import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'
import Logo from '/assets/images/payscribe_blk.png'
import MobileNav from './MobileNav'
import MobileMenuIcon from './MobileMenuIcon'
import ScrollIndicator from '../ScrollIndicator'

// Define menu items and submenus
const menuItems = [
  { id: 'home', title: 'Home', link: '/' },
  // { id: 'individuals', title: 'Individuals', link: '/individuals', subMenu: [
  //     { title: 'Pay Bills', link: '/pay-bills' },
  //     { title: 'Virtual Dollar', link: '/virtual-dollar' },
  //     { title: 'Airtime to Cash', link: '/airtime-to-cash' },
  //     { title: 'Save and Earn', link: '/save-and-earn' },
  //     { title: 'Send and Receive', link: '/send-and-receive' }
  //   ]
  // },
  { id: 'business', title: 'For Businesses', link: '/for-business' },
  {
    id: 'developers',
    title: 'For Developers',
    link: '#',
    subMenu: [
      // { title: 'Overview', link: '/overview' },
      { title: 'API Documentation', link: 'https://developers.payscribe.ng/' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    link: '#',
    subMenu: [
      // { title: 'About', link: '/about' },
      { title: 'Contact Us', link: '/contact' },
      { title: 'FAQs', link: '/faqs' },
      // { title: 'Affiliate', link: '/affiliate' },
    ],
  },
]

const Navigation = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null) // Track the hovered menu
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Function to handle hover event
  const handleMouseEnter = (id) => {
    setHoveredMenu(id)
  }

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredMenu(null)
  }

  return (
    <>
      {/* <nav className="grid xl:grid-cols-[1fr_3fr] grid-cols-[1fr] fixed lg:p-6 md:p-3 p-4 w-full top-0 shadow-sm bg-white/5 backdrop-blur-lg"> */}
      {/* Logo Space */}
      {/* <nav className=" md:fixed sticky lg:p-4 md:p-3 p-4 w-full top-0 shadow-sm bg-white md:bg-white/5 md:backdrop-blur-lg"> */}
      <nav
        className={` lg:p-4 md:p-3 p-4 w-full top-0 shadow-sm bg-white md:bg-white/5 md:backdrop-blur-lg ${isSticky ? 'fixed' : 'sticky'}`}
      >
        <div className="bg-whit  w-full grid xl:grid-cols-[1fr_3fr] grid-cols-[1fr] rounded-lg">
          <div>
            <div>
              <ScrollIndicator />
            </div>

            <div className="flex items-center">
              <Link to="/">
                <img
                  src={Logo}
                  className="h-[3.5em] py-2 md:px-10 bg-white rounded-lg"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden absolute right-0 items-center h-full px-4 my-1">
            <MobileMenuIcon className="flex items-center" />
            <MobileNav className="my-1" />
          </div>

          {/* Desktop Navigation */}
          <div className="md:grid hidden grid-cols-[3fr_2fr]">
            <ul className="space-x-5 flex font-bold justify-center items-center bg-white rounded-lg">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={item.link} className="text-slate-700">
                    {item.title}
                  </Link>

                  {item.subMenu && hoveredMenu === item.id && (
                    <div className="absolute bg-white shadow-lg rounded mt-0 w-[12em]">
                      <ul className="text-gray-700 w-full">
                        {item.subMenu.map((subItem, index) => (
                          <li
                            key={index}
                            className="px-4 py-4 hover:bg-gray-100 text-sm"
                          >
                            <Link to={subItem.link}>{subItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Registration Links */}
            <div className="flex items-center font-semibold lg:ml-10 ml-2">
              <Link
                target="_blank"
                to="https://app.payscribe.ng/auth/create"
                className="p-3 rounded-lg mx-2 bg-primary text-white transition ease-in-out duration-300 transform hover:-translate-y-1"
              >
                Create a Free Account
              </Link>
              <Link
                target="_blank"
                to="https://app.payscribe.ng/login"
                className="border-white border-solid border mx-2 p-3 rounded-lg bg-white text-black transition ease-in-out duration-300 transform hover:-translate-y-1"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
