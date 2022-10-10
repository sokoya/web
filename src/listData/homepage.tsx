import React from "react";
import tab1Img from "../assets/tab1.svg";
import tab2Img from "../assets/tab2.svg";
import tab3Img from "../assets/tab3.svg";
import { MdPayment, MdCastForEducation, MdCardGiftcard } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaMailBulk } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";

export const aboutList = [
  {
    header: "Get more value",
    body: "Say No to charges, hello rewards! With Payscribe you get whooping cashbacks and rewards for every transactions",
    icon: <TbCurrencyNaira />,
    bgColor: "#0082e633",
    color: "#0082E7",
  },
  {
    header: "Receive money in peace",
    body: "Body: Send or receive instant transfer from any bank account within Nigeria, or through your mobile phone number, payment link, or QR code.",
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
    header: "Financial control in your pocket",
    body: "Body: Upgrade your lifestyle with a secure and convenient way to pay bills, buy bulk internet data, send bulk SMS (group, team, campaigns) and lots more",
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
  }
];

export const tabs = [
  {
    label: <img src={tab1Img} alt="tab1img" />,
    header: "The only app you need",
    color: "#F58634",
    body: "We designed payscribe app for your busy lifestyle, set auto renewal, tap-and-pay with no need to fill long form. No sweat. Send and reveive money at ease. Save money as you spend with our Earn-as-you-spend feature Do what matters most while Payscribe handles all your recurring bills    (Airtime, internet data, TV Subscription, Power) and so much more.",
  },
  {
    label: <img src={tab2Img} alt="tab2img" />,
    header: "Header2",
    color: "#F16436",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas incidunt nostrum recusandae aliquid earum tempora mollitia velit voluptatum consequatur dicta omnis aspernatur, repellat facilis, ab quisquam minus odit laudantium accusantium.",
  },
  {
    label: <img src={tab3Img} alt="tab2img" />,
    header: "We’re always happy to help you",
    color: "#EEC21A",
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
    header: "Set Recuring Bills",
    body: "Do what matters most in your life, and we do the auto renewal subscription for you",
  },
  {
    color: "#00BEE7",
    backgroundColor: "#00bde70d",
    header: "Tap and Pay",
    body: "Avoid the long stress of filling forms over and over. Tap and pay with just a single click",
  },
  {
    color: "#EEC21A",
    backgroundColor: "#eec41a0d",
    header: "Payment Link",
    body: "Receive Payments to your wallet with your unique link",
  },
  {
    color: "#00BEE7",
    backgroundColor: "#00bde70d",
    header: "Scan and Receive Payments",
    body: "Scan, receive payments using your niqur QR code, instant pop up",
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
