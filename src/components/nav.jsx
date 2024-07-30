import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/images/payscribe.png";
import LogoBlk from "../assets/images/payscribe_blk.png";
import { Drawer, Dropdown } from "antd";

import MenuIcon from "../assets/images/icons/menu.svg";
import MenuBlackIcon from "../assets/images/icons/menu-black.svg";
import Cancel from "../assets/images/icons/x.svg";
import CancelWhite from "../assets/images/icons/x-white.svg";
import AppRoutes from "../utils/routes";
import LogoBlack from "../assets/images/logo.png";

const Navigation = props => {

    const [fixedNav, setFixed] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])

    const [mobileNavDisplay, setMobileNavDisplay] = useState(false);

    const businessItems = [
        {
            key: "1",
            label: (
                <Link to="/">
                    Why Payscribe
                </Link>
            )
        },
        {
            key: "2",
            label: (
                <Link to="/">
                    How It Works
                </Link>
            )
        }
    ];

    const solutionItems = [
        {
            key: '1',
            label: (
                <Link to="/">
                    Sell Giftcards
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/">
                    Virtual Dollar (coming soon)
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link to="/">
                    Airtime to Cash
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link to="/">
                    Save and Earn
                </Link>
            ),
        },
        {
            key: '5',
            label: (
                <Link to="/">
                    Events
                </Link>
            ),
        }
        // {
        //     key: '6',
        //     label: (
        //         <Link to="/">
        //             Why Payscribe
        //         </Link>
        //     ),
        // },
        // {
        //     key: '7',
        //     label: (
        //         <Link to="/">
        //             How It Works
        //         </Link>
        //     ),
        // }
    ];

    const developerItems = [
        {
            key: '1',
            label: (
                <Link to="/">
                    Overview
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/">
                    API Documentation
                </Link>
            ),
        }
    ];

    const companyItems = [
        {
            key: '1',
            label: (
                <Link to="/">
                    About
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/">
                    Contact Us
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="3">
                    Frequently Asked Questions
                </Link>
            ),
        }
    ];

    const toggleMobileNavDisplay = () => setMobileNavDisplay(!mobileNavDisplay);

    return (
        <div className={`navigation ${fixedNav ? 'fixed' : ''} ${props?.pageFixedNav ? 'fixed' : ''}`}>
            <div className="nav-box">
                <div className="inline-nav">
                    {fixedNav ?
                        <div className="div-logo">
                            <img src={LogoBlk} alt="logo" className="logo" />
                        </div>
                        :
                        <div className="div-logo">
                            <img src={Logo} alt="logo" className="logo" />
                            <h2 className="logo-title">Payscribe</h2>
                        </div>
                    }
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
                                    <Link to="/">Products</Link>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown
                                    menu={{
                                        items: businessItems
                                    }}
                                >
                                    <Link to="/">For Businesses</Link>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown
                                    menu={{
                                        items: developerItems,
                                    }}
                                >
                                    <Link to="/">For Developers</Link>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown
                                    menu={{
                                        items: companyItems,
                                    }}
                                >
                                    <Link to="/">Companies</Link>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="desktop-only">
                    <ul className="extra-nav">
                        <li>
                            <Link className="btn btn-white" to="/">Sign In Now</Link>
                        </li>
                        <li>
                            <Link className="btn btn-main" to="/">Open a Free Account</Link>
                        </li>
                    </ul>
                </div>
                <div className="mobile-only">
                    <div
                    // onClick={toggleMobileNavDisplay}
                    >
                        {fixedNav ?
                            <img src={MenuBlackIcon} alt="menu" />
                            : <img src={MenuIcon} alt="menu" />
                        }
                    </div>
                </div>
            </div>
            <Drawer footer={null} className="nav-drawer" onClose={toggleMobileNavDisplay} open={mobileNavDisplay}>
                <div className="drawer-nav-block">
                    <div>
                    </div>
                    <div>
                        <div className="nav-control">
                            <img onClick={toggleMobileNavDisplay} src={CancelWhite} alt="Cancel" />
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="mobile-nav">
                        <li className="mobile-nav-list">
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNavDisplay}
                                to="/">Home</NavLink>
                        </li>
                        <li className="mobile-nav-list">
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNavDisplay}
                                to={AppRoutes.home}>Products</NavLink>
                        </li>
                        <li className="mobile-nav-list">
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNavDisplay}
                                to={AppRoutes.home}>For Businesses</NavLink>
                        </li>
                        <li className="mobile-nav-list">
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMobileNavDisplay}
                                to={AppRoutes.home}>Gallery</NavLink>
                        </li>
                        <li className="mobile-nav-list">
                            <NavLink onClick={e => {
                                toggleMobileNavDisplay();
                                e.preventDefault();
                            }} className={({ isActive }) => isActive ? 'active' : ''}
                                to={AppRoutes.home}>For Developers</NavLink>
                        </li>
                        <li className="mobile-nav-list">
                            <NavLink onClick={e => {
                                toggleMobileNavDisplay();
                                e.preventDefault();
                            }} className={({ isActive }) => isActive ? 'active' : ''}
                                to={AppRoutes.home}>Companies</NavLink>
                        </li>
                        <li className="mobile-nav-list">
                            <NavLink onClick={e => {
                                toggleMobileNavDisplay();
                                e.preventDefault();
                            }} className={({ isActive }) => isActive ? 'active' : ''}
                                to={AppRoutes.home}>Sign In</NavLink>
                        </li>
                        <li className="mobile-nav-list">
                            <NavLink onClick={e => {
                                toggleMobileNavDisplay();
                                e.preventDefault();
                            }} className={({ isActive }) => isActive ? 'active' : ''}
                                to={AppRoutes.home}>Open a Free Account</NavLink>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </div>
    )
}

export default Navigation;