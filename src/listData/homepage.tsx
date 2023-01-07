import React from "react";
import tab1Img from "../assets/tab1.svg";
import tab2Img from "../assets/tab2.svg";
import tab3Img from "../assets/tab3.svg";
import { MdCastForEducation } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import Startups from "../assets/Startups.png";
import Personal from "../assets/personal.png";
import Event from "../assets/event.png";
import Business from "../assets/Business.png";
import ReceiveMoney from "../components/lottie-animations/Receive money.json";
import Earn from "../components/lottie-animations/Earn as you spend.json";
import Airtime from "../components/lottie-animations/Airtime to cash.json";
import EventMan from "../components/lottie-animations/Event management.json";
import GTV from "../components/lottie-animations/Get more value.json";
import FinancialControl from "../components/lottie-animations/financial management.json";
import Lottie from "lottie-react";

export const aboutList = [
  {
    header: "Get More Value",
    body: "Say No to charges, hello rewards! With Payscribe you get whooping cashbacks and rewards for every transactions",
    icon: <Lottie style={{ height: "350px" }} animationData={GTV} />,
  },
  {
    header: "Receive Money in Peace",
    body: "Send or receive instant transfer from any bank account within Nigeria, or through your mobile phone number, payment link, or QR code.",
    icon: <Lottie style={{ height: "250px" }} animationData={ReceiveMoney} />,
  },
  {
    header: "Earn-as-you-spend",
    body: "You dont have to spend it all,  Get 5% to 15% annual interest on every money you lock. Target a saving, spend and save and let it yield",
    icon: <Lottie style={{ height: "250px" }} animationData={Earn} />,
  },
  {
    header: "Airtime to Cash",
    body: "No more panic. Send Payscribe the airtime you erroneously recharged, and we will give you the equivalent cash. Easy and simple.",
    icon: <Lottie style={{ height: "250px" }} animationData={Airtime} />,
    bgColor: "#eec41b33",
    color: "#EEC21A",
  },
  {
    header: "Financial Control in your Pocket",
    body: "Upgrade your lifestyle with a secure and convenient way to pay bills, buy bulk internet data, send bulk SMS (group, team, campaigns) and lots more",
    icon: <Lottie style={{ height: "250px" }} animationData={FinancialControl} />,
  },
  {
    header: "Event Management",
    body: "Discover what is happening around you. Purchase event tickets without stress.",
    icon: <Lottie style={{ height: "250px" }} animationData={EventMan} />,
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
      {
        title: "Sell Giftcards",
        url: "/sell-giftcards",
        blank: false
      },
      {
        title: "Virtual Dollar(coming soon)",
        url: "/",
        blank: false
      },
      {
        title: "Rewards",
        url: "/rewards",
        blank: false
      },
      {
        title: "Airtime To Cash",
        url: "/airtime-to-cash",
        blank: false
      },
      {
        title: "Save & Earn",
        url: "/save-earn",
        blank: false
      },
      {
        title: "Events",
        url: "/events",
        blank: false
      },
    ],
  },
  {
    header: "For Business",
    list: [
      {
        title: "Why Payscribe",
        url: "/why-payscribe",
        blank: false
      }, 
      {
        title: "How It Works",
        url: "/how-it-works",
        blank: false
      }],
  },
  {
    header: "For Developers",
    list: [
      {
        title: "Overview",
        url: "/developers",
        blank: false
      },
     {
        title: "Api Documentation",
        url: "/",
        blank: false
      }],
  },
  {
    header: "Company",
    list: [
      {
        title: "About",
        url: "/about-us",
        blank: false
      },
     {
      title: "Blog",
      url: "/",
      blank: true
    }],
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
];

export const reviewsList = [
  {
    name: "govina samson ese",
    review:
      "This app is awesome, but I have one problem with the app, printing of recharge cards is not yet working, I can't generate cards to print, hope you people will try as much as possible so we can be able to print cards",
  },
  {
    name: "SimoN “PhilSTRING” Philemon",
    review:
      "Payscribe is the best ever, please you people should do something so that we can get SMS deposit alart when founding the wallet",
  },
  {
    name: "Ofofo Movie",
    review:
      "The best platform in Nigeria to trade giftcards. They have swift payment mode for iTunes card. Well done Payscribe",
  },
  {
    name: "Benjamin Abayomi",
    review:
      "Payscribe is the best data site have seen ever....I love payscribe and I can't stop using it..",
  },
  {
    name: "Aminu Aliyu",
    review:
      "Payscribe are doing great but please I suggest you reduce your data price if possible Regards",
  },
];

//: Exquisite USB port for high speed-data transmission.
//: Easy to understand and use
//: International security technologies - PCI and NFC Contactless
//: Ultra-small size meets the needs of multi-scenario applications
