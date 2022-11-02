import React from "react";
import tab1Img from "../assets/tab1.svg";
import tab2Img from "../assets/tab2.svg";
import tab3Img from "../assets/tab3.svg";
import { MdPayment, MdCastForEducation, MdCardGiftcard } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaMailBulk } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import Startups from "../assets/Startups.png"
import Personal from "../assets/personal.png"
import Event from "../assets/event.png"
import Business from "../assets/Business.png"

export const aboutList = [
  {
    header: "Get More Value",
    body: "Say No to charges, hello rewards! With Payscribe you get whooping cashbacks and rewards for every transactions",
    icon: <TbCurrencyNaira />,
    bgColor: "#0082e633",
    color: "#0082E7",
  },
  {
    header: "Receive Money in Peace",
    body: "Send or receive instant transfer from any bank account within Nigeria, or through your mobile phone number, payment link, or QR code.",
    icon: <MdPayment />,
    bgColor: "#f5843233",
    color: "#F58634",
  },
  {
    header: "Earn-as-you-spend",
    body: "You dont have to spend it all,  Get 5% to 15% annual interest on every money you lock. Target a saving, spend and save and let it yield",
    icon: <AiFillLock />,
    bgColor: "#ff3d3d33",
    color: "#FF3D3D",
  },
  {
    header: "Airtime to Cash",
    body: "No more panic. Send Payscribe the airtime you erroneously recharged, and we will give you the equivalent cash. Easy and simple.",
    icon: <GiTakeMyMoney />,
    bgColor: "#eec41b33",
    color: "#EEC21A",
  },
  {
    header: "Financial Control in your Pocket",
    body: "Upgrade your lifestyle with a secure and convenient way to pay bills, buy bulk internet data, send bulk SMS (group, team, campaigns) and lots more",
    icon: <MdCastForEducation />,
    bgColor: "#0082e633",
    color: "#0082E7",
  },
  {
    header: "Event Management",
    body: "Discover what is happening around you. Purchase event tickets without stress.",
    icon: <MdCardGiftcard />,
    bgColor: "#eec41b33",
    color: "#EEC21A",
  },
];

export const tabs = [
  {
    label: <img src={tab1Img} alt="tab1img" />,
    header: "The only app you need",
    color: "#3362B0",
    body: "We designed payscribe app for your busy lifestyle, set auto renewal, tap-and-pay with no need to fill long form. No sweat. Send and reveive money at ease. Save money as you spend with our Earn-as-you-spend feature Do what matters most while Payscribe handles all your recurring bills    (Airtime, internet data, TV Subscription, Power) and so much more.",
  },
  {
    label: <img src={tab2Img} alt="tab2img" />,
    header: "Secure & Guaranteed",
    color: "#3362B0",
    body: "We take security so dearly. Funds are protected with the same 256-bit HTTPs SSL as well as other banks. Get started to enjoy flawless transactions.",
  },
  {
    label: <img src={tab3Img} alt="tab2img" />,
    header: "We’re always happy to help you",
    color: "#3362B0",
    body: "You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.",
  },
];

export const footerList = [
  {
    header: "Products",
    list: [
      "Sell Giftcards",
      "Virtual Dollar",
      "Rewards",
      "Airtime To Cash",
      "Save & Earn",
      "Event",
    ],
  },
  {
    header: "For Business",
    list: ["Why Payscribe", "How It Works"],
  },
  {
    header: "For Developers",
    list: ["Quick Start", "Libraries", "API Documentation"],
  },
  {
    header: "Company",
    list: ["About", "Libraries", "Blog"],
  },
];

export const featuresList = [
  {
    color: "#F16436",
    backgroundColor: "#f165360d",
    header: "Startups",
    cardImg: <img src={Startups} alt="img" />,
    body: "Leverage on Payscribe lifestyle bills payment, power your app with our all-in-one solution.",
  },
  {
    color: "#00BEE7",
    backgroundColor: "#00bde70d",
    header: "Business ",
    cardImg: <img src={Business} alt="img" />,
    body: "Looking to send run a bulk SMS, own a Point of Sale (POS) or to scale up your business? Payscribe got you cover",
  },
  {
    color: "#EEC21A",
    backgroundColor: "#eec41a0d",
    header: "Event Organizer",
    cardImg: <img src={Event} alt="img" />,
    body: "Tap into the world of endless opportunites with our top-notch event ticketing system.",
  },
  {
    color: "#00BEE7",
    backgroundColor: "#00bde70d",
    header: "Personal Use",
    cardImg: <img src={Personal} alt="img" />,
    body: "Subscribe all daily essential lifestyle bills, ranging from Airtime purchase, internet data, electricity bill, vable subscription etc",
  },
  {
    color: "#F16436",
    backgroundColor: "#f165360d",
    header: "Reward and Loyalty",
    body: "You deserve to earn something for every transctions you and your referred downline make",
  },
];

export const reviewsList = [
  {
    name: "Customer1",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla vero repellendus vel quo neque, maiores",
  },
  {
    name: "Customer2",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla vero repellendus vel quo neque, maiores",
  },
  {
    name: "Customer3",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla vero repellendus vel quo neque, maiores",
  },
];

//: Exquisite USB port for high speed-data transmission.
//: Easy to understand and use
//: International security technologies - PCI and NFC Contactless
//: Ultra-small size meets the needs of multi-scenario applications
