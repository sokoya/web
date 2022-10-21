import React from "react";
import { BsQuestionLg, BsLightningFill } from "react-icons/bs";
import { MdPayment, MdBusinessCenter } from "react-icons/md";
import {VscLibrary} from "react-icons/vsc"
import BillsImg from "../assets/nav/Bills Payment.svg";
import GiftCardImg from "../assets/nav/giftcard.svg";
import GiftImg from "../assets/nav/giftcard2.svg";
import SavingsImg from "../assets/nav/Savings.svg";
import VirtualCardImg from "../assets/nav/VirtualCard.svg";
import EventImg from "../assets/nav/Top Up2.svg";
import AirtimeImg from "../assets/nav/Excess Airtime2.svg";
import PaymentImg from "../assets/nav/Virtual card2.svg";



export interface INavItems {
  name: string;
  href: string;
  icon: React.ReactNode;
  description: string;
}

export const navList: {
  title: string;
  items: INavItems[];
  documentation: boolean;
}[] = [
  {
    title: "Products",
    items: [
      {
        name: "Send/Recive Payments",
        href: "send-receive-money",
        icon: <img src={PaymentImg} alt="" className="w-[3rem] md:w-[1.2rem]" />,
        description:
          "Accept unrestricted payment with your phone number, dedicated QR",
      },
      {
        name: "Airtime to Cash",
        href: "/airtime-to-cash",
        icon: <img src={AirtimeImg} alt="" className="w-[3rem] md:w-[1.2rem]" />,
        description: "Convert that mistakenly loaded airtime to instant cash",
      },
      {
        name: "Sell Giftcards",
        href: "/sell-giftcards",
        icon: <img src={GiftCardImg} alt="" className="w-[3rem] md:w-[1.2rem]" />,
        description:
          "An easy to use platform that helps you exchange Giftcards at finger licking rates.",
      },
      {
        name: "Save & Earn",
        href: "/",
        icon: <img src={SavingsImg} alt="" className="w-[3rem] md:w-[1.2rem]" />,
        description:
          "Upto 12%p.a for every target saving, let your money work for you",
      },
      {
        name: "Virtual Dollar (Coming soon)",
        href: "/",
        icon: <img src={VirtualCardImg} alt="" className="w-[3rem] md:w-[1.2rem]" />,
        description:
          "Experience the truly borderless payment with Payscribe virtual Card",
      },
      {
        name: "Bills Payment",
        href: "/bills-payment",
        icon: <img src={BillsImg} alt="" className="w-[3rem] md:w-[1.2rem]" />,
        description:
          "Our system can make auto subscription for you, while you attend to what matter most.",
      },
      {
        name: "Rewards",
        href: "/",
        icon: <img src={GiftImg} alt="" className="w-[3rem] md:w-[1.2rem]" />,
        description:
          "Rewards for every transaction and task, Yes! You deserve it.",
      },
      {
        name: "Event",
        href: "/",
        icon: <img src={EventImg} alt="" className="w-[3rem] md:w-[1.2rem]" />,
        description: "Buy and sell event tickets around you.",
      },
    ],
    documentation: false,
  },
  {
    title: "For Business",
    items: [
      {
        name: "Why Payscribe",
        href: "/",
        icon: <BsQuestionLg />,
        description:
          "Set up in a minute, topup bulk airtime, data, and pay bills, anyhow, how you want it",
      },
      {
        name: "How it works",
        href: "/",
        icon: <MdBusinessCenter />,
        description:
          "Learn how we can help you grow your business by integrating our services",
      },
    ],
    documentation: false,
  },
  {
    title: "For Developers",
    items: [
      {
        name: "Quick Start",
        href: "/",
        icon: <BsLightningFill />,
        description: "Integrate Payscribe products and tools in a minute",
      },
      {
        name: "Libraries",
        href: "/",
        icon: <VscLibrary />,
        description:
          "Use our SDK to integrate Payscribe product. stay in control",
      },
    ],
    documentation: true,
  },
  {
    title: "Company",
    items: [
      {
        name: "About",
        href: "/",
        icon: <MdPayment />,
        description: "Empowering digital and lifestyle services with no limit",
      },
      {
        name: "Contact",
        href: "/",
        icon: <MdPayment />,
        description: "Reach out to us, we are friendly.",
      },
      {
        name: "Blog",
        href: "/",
        icon: <MdPayment />,
        description:
          "Stay ahead with stories, insights and new from Payscribe team",
      },
    ],
    documentation: false,
  },
];
