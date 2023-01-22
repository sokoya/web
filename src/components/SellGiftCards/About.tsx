import React from "react";
import IconCards from "../IconCards";
import { SiFsecure } from "react-icons/si";
import { MdOutlineEventAvailable, MdPayment } from "react-icons/md";
import GiftImg from "../../assets/giftcards/giftImg.svg";
import Button from "../Button";
import Lottie from "lottie-react";
import Secured from "../lottie-animations/secured payment.json";

type Props = {};

const aboutList = [
  {
    header: "SECURED TRANSACTION",
    content: (
      <p>
        We assures you the maximum level of security and professionally managed
        exchange system.
      </p>
    ),
    bgColor: "#0082e633",
    color: "#0082E7",
    icon: <Lottie animationData={Secured} />,
  },
  {
    header: "CROSS-PLATFORM AVAILABILITY ",
    content: (
      <p>
        Sell your Gift Cards (Steam, American Express, Apple, Google Play,
        Nordstrom, Razer Gold, Sephora, etc) in Nigeria, anytime, using our
        state-of-the-art trading service available on Android, iOS and Web
        browser.{" "}
      </p>
    ),
    bgColor: "#eec41b33",
    color: "#EEC21A",
    icon: <MdOutlineEventAvailable />,
  },
  {
    header: "INSTANT PAYMENT",
    content: (
      <p>
        With the credibility built on thousands of users, and our efficient
        payment procedures, you are guaranteed to get your payment sent to your
        account within minutes.{" "}
      </p>
    ),
    bgColor: "#f5843233",
    color: "#F58634",
    icon: <MdPayment />,
  },
];
const About = (props: Props) => {
  const aboutJSX = (
    <>
      {aboutList.map((el) => (
        <div className="w-full sm:w-[80%] md:w-[50%] px-[2.5rem] lg:w-[33%] md:mb-11 lg:mb-0  md:h-[25rem] lg:h-[24rem]">
          <IconCards
            content={el.content}
            header={el.header}
            iconBgColor={el.bgColor}
            iconColor={el.color}
            icon={el.icon}
          />
        </div>
      ))}
    </>
  );
  return (
    <section className="mt-[7rem]">
      <h1 className="text-center text-5xl font-bold">What You Gain</h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-between mt-[3rem]">
        {aboutJSX}
      </div>
      <div className=" bg-secondary3 flex flex-wrap justify-between items-center mt-[5rem] py-[3rem] px-4">
        <div className=" mb-[3rem] lg:mb-0 w-full md:w-[50%] ">
          <img src={GiftImg} alt="gift img" />
        </div>
        <div className="w-full md:w-[45%]">
          <h1 className=" text-4xl font-bold mb-[2rem]">
            Every year,{" "}
            <span className="text-primary3">
              Giftcards worth billions of dollars &nbsp;
            </span>
            are wasted, left unused and discarded.
          </h1>
          <p className="mb-8 text-[#151515f1] text-sm sm:text-2xl bp3:text-base">
            This became a global problem, and Payscribe stepped in as the number
            one problem-solving platform that it is. Payscribe allows users in
            Nigeria to sell their unused Giftcards for instant cash at amazing
            rates. 
            </p>
            <p className="mb-8 text-[#151515f1] text-sm sm:text-2xl bp3:text-base">
            Using Payscribe, you can sell various Giftcards in Nigeria,
            including but not limited to iTunes, Amazon, Steam Wallet, Google
            Play, eBay, Walmart, Sephora, OneVanilla, American Express,
            Offgamers, Best Buy, Gamestop, Nike, PlayStation and others.{" "}
          </p>
          <Button class="font-bold text-lg xs:text-lg bg-primary2 text-white py-[1rem]  px-[2.5rem]  w-full sm:w-auto">
            <p>Get Started</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
