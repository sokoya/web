import React from "react";
import IconCards from "../IconCards";
import { SiFsecure } from "react-icons/si";
import { MdOutlineEventAvailable, MdPayment } from "react-icons/md";

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
    icon: <SiFsecure />,
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
        <div className="w-[33%]">
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
  return <div className="flex items-center justify-between mt-[3rem]">{aboutJSX}</div>;
};

export default About;
