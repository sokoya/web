import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/images/payscribe.png";
import LogoBlk from "../assets/images/blk_logo.png";
import { Drawer, Dropdown } from "antd";

import MenuIcon from "../assets/images/icons/menu.svg";
import MenuBlackIcon from "../assets/images/icons/menu-black.svg";
import Cancel from "../assets/images/icons/x.svg";
import CancelWhite from "../assets/images/icons/x-white.svg";
import AppRoutes from "../utils/routes";
import LogoBlack from "../assets/images/logo.png";

const Navigation = (props) => {
  const [fixedNav, setFixed] = useState(false);

  const [currentView, setCurrentView] = useState("default");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, []);

  const [mobileNavDisplay, setMobileNavDisplay] = useState(false);

  const businessItems = [
    {
      key: "1",
      label: <Link to="/">Why Payscribe</Link>,
    },
    {
      key: "2",
      label: <Link to="/">How It Works</Link>,
    },
  ];

  const solutionItems = [
    {
      key: "1",
      label: (
        <Link
          to=""
          // to={AppRoutes.bills}
        >
          Pay Bills
        </Link>
      ),
    },
    {
      key: "2",
      label: <Link to="/">Save and Invest</Link>,
    },
    {
      key: "4",
      label: <Link to="/">Virtual Dollar</Link>,
    },
    {
      key: "5",
      label: <Link to="/">Send and Receive Payments</Link>,
    },
  ];

  const developerItems = [
    {
      key: "1",
      label: <Link to="/">Overview</Link>,
    },
    {
      key: "2",
      label: <Link to="/">API Documentation</Link>,
    },
  ];

  const companyItems = [
    {
      key: "1",
      label: <Link to="/">About</Link>,
    },
    {
      key: "2",
      label: <Link to="/">Contact Us</Link>,
    },
    {
      key: "3",
      label: <Link to="/">Frequently Asked Questions</Link>,
    },
  ];

  const toggleMobileNavDisplay = () => setMobileNavDisplay(!mobileNavDisplay);

  return (
    <div
      className={`navigation ${fixedNav ? "fixed" : ""} ${
        props?.pageFixedNav ? "fixed" : ""
      }`}
    >
      <div className="nav-box">
        <div className="inline-nav">
          {fixedNav ? (
            <div className="div-logo">
              <img src={LogoBlk} alt="logo" className="logo" />
              <h2 className="logo-title">Payscribe</h2>
            </div>
          ) : (
            <div className="div-logo">
              <img src={Logo} alt="logo" className="logo" />
              <h2 className="logo-title">Payscribe</h2>
            </div>
          )}
          <div className="desktop-only">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Dropdown
                  menu={{
                    items: solutionItems,
                  }}
                >
                  <div className="relative-bar">
                    <Link to="#">Individuals</Link>
                    {/* <div className="ps-dropdown-bar">
                                        <div className="ps-dropdown-b">
                                            <div className="nav-inline-list">
                                                <div className="nav-inline-text-bar">
                                                    <div className="nav-inline-text-box">
                                                        <ul>
                                                            <li>
                                                                <Link to={AppRoutes.handle_payments}>
                                                                    <div className="nav-inline-bar">
                                                                        <div className="nav-inline-img-cover">
                                                                            <ion-icon name="telescope-outline"></ion-icon>
                                                                        </div>
                                                                        <div className="nav-inline-text-cover">
                                                                            <div>
                                                                                <h3>Handle Payments</h3>
                                                                                <p>Get your Payscribe smart card for all payment types</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={AppRoutes.sell_giftcards}>
                                                                    <div className="nav-inline-bar _2">
                                                                        <div className="nav-inline-img-cover">
                                                                            <ion-icon name="server-outline"></ion-icon>
                                                                        </div>
                                                                        <div className="nav-inline-text-cover">
                                                                            <div>
                                                                                <h3>Sell Giftcards</h3>
                                                                                <p>Get your Payscribe smart card for all payment types</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={AppRoutes.airtime_to_cash}>
                                                                    <div className="nav-inline-bar _3">
                                                                        <div className="nav-inline-img-cover">
                                                                            <ion-icon name="wallet-outline"></ion-icon>
                                                                        </div>
                                                                        <div className="nav-inline-text-cover">
                                                                            <div>
                                                                                <h3>Airtime to Cash</h3>
                                                                                <p>Get your Payscribe smart card for all payment types</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={AppRoutes.save_and_earn}>
                                                                    <div className="nav-inline-bar _4">
                                                                        <div className="nav-inline-img-cover">
                                                                            <ion-icon name="trophy-outline"></ion-icon>
                                                                        </div>
                                                                        <div className="nav-inline-text-cover">
                                                                            <div>
                                                                                <h3>Save and Earn</h3>
                                                                                <p>Get your Payscribe smart card for all payment types</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={AppRoutes.bills}>
                                                                    <div className="nav-inline-bar _1">
                                                                        <div className="nav-inline-img-cover">
                                                                            <ion-icon name="telescope-outline"></ion-icon>
                                                                        </div>
                                                                        <div className="nav-inline-text-cover">
                                                                            <div>
                                                                                <h3>Pay Bills</h3>
                                                                                <p>Get your Payscribe smart card for all payment types</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={AppRoutes.events}>
                                                                    <div className="nav-inline-bar _2">
                                                                        <div className="nav-inline-img-cover">
                                                                            <ion-icon name="wine-outline"></ion-icon>
                                                                        </div>
                                                                        <div className="nav-inline-text-cover">
                                                                            <div>
                                                                                <h3>Events</h3>
                                                                                <p>Get your Payscribe smart card for all payment types</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nav-side-img">
                                                    <div className="nav-side-img-cover"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  </div>
                  {/* <div>

                                    </div> */}
                </Dropdown>
              </li>
              <li>
                <Link to="/">For Businesses</Link>
              </li>
              <li>
                <Dropdown
                  menu={{
                    items: developerItems,
                  }}
                >
                  <Link to="#">For Developers</Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  menu={{
                    items: companyItems,
                  }}
                >
                  <Link to="#">Companies</Link>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
        <div className="desktop-only">
          <ul className="extra-nav">
            {/* <li>
                            <Link className="" to="/">Sales: +234 (813) 227 7316</Link>
                        </li> */}
            <li>
              <a
                href="https://app.payscribe.ng/login"
                className="btn btn-white"
              >
                Sign In Now
              </a>
            </li>
            <li>
              <a
                href="https://app.payscribe.ng/auth/create"
                className="btn btn-main"
              >
                Open a Free Account
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-only">
          {fixedNav ? (
            <div onClick={toggleMobileNavDisplay}>
              <img src={MenuBlackIcon} alt="menu" />
            </div>
          ) : (
            <div onClick={toggleMobileNavDisplay}>
              <img src={MenuIcon} alt="menu" />
            </div>
          )}
        </div>
      </div>
      <Drawer
        footer={null}
        className="nav-drawer"
        onClose={toggleMobileNavDisplay}
        open={mobileNavDisplay}
      >
        <div className="drawer-nav-block">
          <div>
            <div className="div-logo">
              <img src={LogoBlk} alt="logo" className="logo" />
              <h2 className="logo-title">Payscribe</h2>
            </div>
          </div>
          <div>
            <div className="nav-control">
              {currentView === "default" ? (
                <img
                  onClick={toggleMobileNavDisplay}
                  src={CancelWhite}
                  alt="Cancel"
                />
              ) : (
                <ion-icon
                  style={{ fontSize: "2.4rem" }}
                  onClick={() => setCurrentView("default")}
                  name="arrow-back-circle-outline"
                ></ion-icon>
              )}
            </div>
          </div>
        </div>
        <div className="nav-main-list">
          {currentView === "default" ? (
            <>
              <ul className="mobile-nav">
                <li className="mobile-nav-list">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={toggleMobileNavDisplay}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mobile-nav-list">
                  <NavLink
                    onClick={(e) => {
                      toggleMobileNavDisplay();
                      e.preventDefault();
                    }}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={AppRoutes.home}
                  >
                    About Us
                  </NavLink>
                </li>
                <li
                  onClick={() => setCurrentView("products")}
                  className="mobile-nav-list"
                >
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="#"
                  >
                    <div>Products</div>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </NavLink>
                </li>
                <li className="mobile-nav-list">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={toggleMobileNavDisplay}
                    to="/"
                  >
                    For Businesses
                  </NavLink>
                </li>
                <li className="mobile-nav-list">
                  <NavLink
                    onClick={(e) => {
                      toggleMobileNavDisplay();
                      e.preventDefault();
                    }}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={AppRoutes.home}
                  >
                    For Developers
                  </NavLink>
                </li>
                <li className="mobile-nav-list">
                  <a
                    href="https://app.payscribe.ng/auth/create"
                    onClick={(e) => {
                      toggleMobileNavDisplay();
                      e.preventDefault();
                    }}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Our FAQs
                  </a>
                </li>
                <li className="mobile-nav-list">
                  <NavLink
                    onClick={(e) => {
                      toggleMobileNavDisplay();
                      e.preventDefault();
                    }}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={AppRoutes.home}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <div className="nav-footer">
                <div className="">
                  <div className="">
                    <Link to="" className="btn btn-border-main">
                      Sign In
                    </Link>
                  </div>
                  <div className="mt_2">
                    <Link to="" className="btn btn-main">
                      Create a free account
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <ul className="mobile-nav">
              <li className="mobile-nav-list">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={toggleMobileNavDisplay}
                  to="/"
                >
                  Pay Bills
                </NavLink>
              </li>
              <li className="mobile-nav-list">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={toggleMobileNavDisplay}
                  to="/"
                >
                  Save and Invest
                </NavLink>
              </li>
              <li className="mobile-nav-list">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={toggleMobileNavDisplay}
                  to="/"
                >
                  Sell Giftcards
                </NavLink>
              </li>
              <li className="mobile-nav-list">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={toggleMobileNavDisplay}
                  to="/"
                >
                  Send and Receive Payments
                </NavLink>
              </li>
              <li className="mobile-nav-list">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={toggleMobileNavDisplay}
                  to="/"
                >
                  Virtual Cards
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default Navigation;
