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
    header: "Transfer Money",
    body: "Fast and free to any Payscriber. Locally and Internationally.",
    icon: <TbCurrencyNaira />,
    bgColor: "#0082e633",
    color: "#0082E7",
  },
  {
    header: "Bills Payment",
    body: "TV Subscription, Electricity Payment, Airtime Topup (locally and internationally), Internet Subscription",
    icon: <MdPayment />,
    bgColor: "#f5843233",
    color: "#F58634",
  },
  {
    header: "Smart Lock",
    body: "You dont have to spend it all, Get 5% to 15% annual interest on every money you lock. Target a saving, spend and save and let it yield",
    icon: <AiFillLock />,
    bgColor: "#ff3d3d33",
    color: "#FF3D3D",
  },
  {
    header: "Airtime to Cash",
    body: "Convert that mistakenly loaded airtime to instant cash",
    icon: <GiTakeMyMoney />,
    bgColor: "#eec41b33",
    color: "#EEC21A",
  },
  {
    header: "Educational Voucher",
    body: "Pay for all educational result checker",
    icon: <MdCastForEducation />,
    bgColor: "#0082e633",
    color: "#0082E7",
  },
  {
    header: "Sell Giftcard",
    body: "Trade all gift cards; instant payout.",
    icon: <MdCardGiftcard />,
    bgColor: "#eec41b33",
    color: "#EEC21A",
  },
  {
    header: "Bulk SMS",
    body: "Send bulk SMS for groups, teams, and campaigns.",
    icon: <FaMailBulk />,
    bgColor: "#f5843233",
    color: "#F58634",
  },
];

export const tabs = [
  {
    label: <img src={tab1Img} alt="tab1img" />,
    header: "Header 1",
    color: "#F58634",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas incidunt nostrum recusandae aliquid earum tempora mollitia velit voluptatum consequatur dicta omnis aspernatur, repellat facilis, ab quisquam minus odit laudantium accusantium.",
  },
  {
    label: <img src={tab2Img} alt="tab2img" />,
    header: "Header2",
    color: "#F16436",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas incidunt nostrum recusandae aliquid earum tempora mollitia velit voluptatum consequatur dicta omnis aspernatur, repellat facilis, ab quisquam minus odit laudantium accusantium.",
  },
  {
    label: <img src={tab3Img} alt="tab2img" />,
    header: "Header3",
    color: "#EEC21A",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas incidunt nostrum recusandae aliquid earum tempora mollitia velit voluptatum consequatur dicta omnis aspernatur, repellat facilis, ab quisquam minus odit laudantium accusantium.",
  },
];

export const footerList = [
  {
    header: "Products",
    list: [
      "Payments",
      "Sell Giftcards",
      "Virtual Dollar",
      "Rewards",
      "Airtime To Cash",
      "Save & Earn",
      "Bill Payments",
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
