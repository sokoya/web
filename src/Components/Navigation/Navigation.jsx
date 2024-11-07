import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import Logo from '/assets/images/payscribe_blk.png';
import MobileNav from './MobileNav';
import MobileMenuIcon from './MobileMenuIcon';

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
    id: 'developers', title: 'For Developers', link: '#',
     subMenu: [
      { title: 'Overview', link: '/overview' },
      { title: 'API Documentation', link: 'https://developers.payscribe.ng/' }
    ]
  },
  { id: 'company', title: 'Company', link: '#', subMenu: [
      { title: 'About', link: '/about' },
      { title: 'Contact Us', link: '/book-a-demo' },
      { title: 'FAQs', link: '/faqs' }
    ]
  }
];

const Navigation = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);  // Track the hovered menu

  // Function to handle hover event
  const handleMouseEnter = (id) => {
    setHoveredMenu(id);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <>
      <nav className="grid xl:grid-cols-[1fr_3fr] grid-cols-[1fr] sticky lg:p-4 md:p-3 p-4 w-full top-0 shadow-sm bg-white">
        {/* Logo Space */}
        <div>
          <Link to="/">
            <img src={Logo} className="h-[2.6em] px-2" alt="Logo" />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden absolute right-0 items-center h-full px-4">
          <MobileMenuIcon />
          <MobileNav />
        </div>

        {/* Desktop Navigation */}
        <div className="md:grid hidden grid-cols-[3fr_2fr]">
          <ul className="space-x-5 flex font-semibold justify-center items-center">
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
                        <li key={index} className="px-4 py-2 hover:bg-gray-100 text-sm">
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
            target='_blank'
              to="https://app.payscribe.ng/auth/create"
              className="p-3 rounded-lg mx-2 bg-primary text-white transition ease-in-out duration-300 transform hover:-translate-y-1"
            >
              Create a Free Account
            </Link>
            <Link
            target='_blank'
              to="https://app.payscribe.ng/login"
              className="border-white border-solid border mx-2 p-3 rounded-lg bg-white text-black transition ease-in-out duration-300 transform hover:-translate-y-1"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
