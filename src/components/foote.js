import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/payscribe.png";
import { Controller, useForm } from "react-hook-form";
import { Divider, Input } from "antd";

const Footer = () => {
    const { control } = useForm({});
    return (
        <div className="footer">
            <div className="container">
                <div className="grid-4-bias">
                    <div className="logo-div">
                        <div className="div-logo">
                            <img src={Logo} alt="logo" className="logo" />
                            <h2 className="logo-title">Payscribe</h2>
                        </div>
                        <p>Building the world-class technology that digitalize cash payments and provides daily essentials financial
                            services all at your finger tips.</p>
                        <div className="flex-div">
                            <a href="mailTo:hello@payscribe.ng"><ion-icon name="mail-open-outline"></ion-icon> hello@payscribe.ng</a>
                            <a href="tel:+2347038067493"><ion-icon name="call-outline"></ion-icon> +234 703 806 7493</a>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="inline-flex">
                        <div>
                            <h5>Products</h5>
                            <ul>
                                <li>
                                    <Link to="">Sell Giftcards</Link>
                                </li>
                                <li>
                                    <Link to="">Virtual Dollar (coming soon)</Link>
                                </li>
                                {/* <li>
                                    <Link to="">Rewards</Link>
                                </li> */}
                                <li>
                                    <Link to="">Airtime to Cash</Link>
                                </li>
                                <li>
                                    <Link to="">Save and Earn</Link>
                                </li>
                                <li>
                                    <Link to="">Events</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>For Businesses</h5>
                            <ul>
                                <li>
                                    <Link to="">Why Payscribe</Link>
                                </li>
                                <li>
                                    <Link to="">How It Works</Link>
                                </li>
                                <li>
                                    <Link to="">Ambassadors</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="inline-flex">
                        <div>
                            <h5>Products</h5>
                            <ul>
                                <li>
                                    <Link to="">Sell Giftcards</Link>
                                </li>
                                <li>
                                    <Link to="">Virtual Dollar (coming soon)</Link>
                                </li>
                                {/* <li>
                                    <Link to="">Rewards</Link>
                                </li> */}
                                <li>
                                    <Link to="">Airtime to Cash</Link>
                                </li>
                                <li>
                                    <Link to="">Save and Earn</Link>
                                </li>
                                <li>
                                    <Link to="">Events</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Company</h5>
                            <ul>
                                <li>
                                    <Link to="">About</Link>
                                </li>
                                <li>
                                    <Link to="">Blog</Link>
                                </li>
                                <li>
                                    <Link to="">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="">Terms and Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid-flex mt_2">
                    <div>
                        <form action="">
                            <label htmlFor="">Follow our latest news</label>
                            <div className="footer-form">
                                <Controller name="email" control={control} defaultValue=""
                                    render={({ field }) => (
                                        <Input {...field} name="email" style={{ height: "5rem", display: "block", width: "100%" }} />
                                    )} />
                                <button className="btn btn-black">Join our mailing list</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="button-flex">
                            <button className="btn btn-accent"><ion-icon name="logo-google-playstore"></ion-icon> Android</button>
                            <button className="btn btn-accent"><ion-icon name="logo-apple"></ion-icon> iOS</button>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="grid-flex">
                    <div>
                        <p>Payscribe &copy; 2024. All rights reserved </p>
                    </div>
                    <div>
                        <div className="social-box">
                            <div>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;