import React, { useState } from 'react';
import MobileMenuIcon from './MobileMenuIcon';
import Logo from '../../assets/images/payscribe_blk.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './MobileNav.scss';
import { menuVariant, menuItemVariant, menuListVariant } from '../../animations';



const sections = [
  { id: 'home', title: 'Home', url: '/' },
  // { id: 'individuals', title: 'Individuals' },
  { id: 'for-business', title: 'For Businesses', url: 'for-business' },
  { id: 'for-developers', title: 'For Developers' },
  { id: 'companies', title: 'Companies' },
];

// Sub-menus for "For Businesses" and "For Developers"
const subMenus = {
  // 'individuals': [
  //   { id: 'indv1', title: 'Pay Bills' },
  //   { id: 'indv2', title: 'Virtual Dollar' },
  //   { id: 'indv3', title: 'Airtime to Cash' },
  //   { id: 'indv4', title: 'Save and Earn' },
  //   { id: 'indv5', title: 'Send and Receive' },
  // ],
  'for-developers': [
    { id: 'dev1', title: 'API Documentation', url: 'https://developers.payscribe.ng/' },
    { id: 'dev2', title: 'Overview' },
  ],
  'companies': [
    { id: 'comp1', title: 'About', url: '/about' },
    { id: 'comp2', title: 'Contact us' },
    { id: 'comp3', title: 'FAQs', url: '/faqs' },
  ],
};

function MobileNav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState('main'); // Tracks the current menu being displayed

  const handleBackClick = () => {
    setActiveMenu('main');
  };

  const handleMenuClick = (id) => {
    if (subMenus[id]) {
      setActiveMenu(id);
    } else {
      setOpenMenu(false); // Close menu if it's a normal link
    }
  };

  const renderMenu = () => {
    if (activeMenu === 'main') {
      return sections.map((section, index) => (
        <motion.li
          key={index}
          className='my-2 '
          variants={menuItemVariant} // Apply individual item variants
        >
          <Link className='px-5 py-2' onClick={() => handleMenuClick(section.id)} to={section.url}>
            {section.title}
          </Link>
        </motion.li>
      ));
    } else {
      // Render sub-menu with a back button
      return (
        <>
          <motion.li
            className='my-2 '
            variants={menuItemVariant}
            onClick={handleBackClick}
          >
            <button className='px-5 py-2 border-black border-2 border-l-0'>← Back</button>
          </motion.li>
          <motion.ul
            variants={menuListVariant} // Apply staggering effect to sub-menu
            initial='hidden'
            animate='show'
          >
            {subMenus[activeMenu].map((subItem, index) => (
              <motion.li
                key={index}
                className='my-2 '
                variants={menuItemVariant} // Individual item variants for sub-menu
              >
                <Link className='px-5 py-2' to={subItem.url} onClick={() => handleMenuClick()}>
                  {subItem.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </>
      );
    }
  };

  return (
    <motion.div
      className='mobile-nav bg-white p-2'
      variants={menuVariant}
      animate={openMenu ? 'open' : 'closed'}
    >
      <div className='my-4 mx-5'>
        <img src={Logo} className='h-[2.6em] px-2' alt='Logo' />
      </div>
      <MobileMenuIcon setOpenMenu={setOpenMenu} />

      <motion.ul
        variants={menuListVariant} // Parent variant for staggering
        initial='hidden'
        animate={openMenu ? 'show' : 'hidden'}
      >
        {renderMenu()}
      </motion.ul>

      <motion.div className='alpha-text-auto font-semibold lg:ml-10 ml-2 flex flex-col text-center m-1 justify-center'>
        <Link
          to='https://app.payscribe.ng/auth/create'
          className='p-3 rounded-lg mx-2 my-1 font-bold bg-primary text-white transition ease-in-out duration-300 transform hover:-translate-y-1'
        >
          Create a Free Account
        </Link>
        <Link
          to='https://app.payscribe.ng/login'
          className='border-white border-solid border mx-2 my-1 font-bold p-3 rounded-lg bg-black text-white transition ease-in-out duration-300 transform hover:-translate-y-1'
        >
          Sign In
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default MobileNav;