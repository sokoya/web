import React from "react";
import IconCards2 from "../IconCards2";
import Control from "../lottie-animations/You are in control.json";
import Manage from "../lottie-animations/manage your money.json";
import Flexible from "../lottie-animations/flexible savings.json";
import Group1 from "../../assets/HowItWorks/Group1.png"
import Group2 from "../../assets/HowItWorks/Group2.png"
import Group3 from "../../assets/HowItWorks/Group3.png"
import Group4 from "../../assets/HowItWorks/Group4.png"
import Lottie from "lottie-react";

type Props = {};

const Features = (props: Props) => {
  const aboutList = [
    {
      header: "For Businesses/Developers",
      body: "We give you tools and resources to help you grow your business",
      icon: <img style={{ width: "100px", marginTop: "-150px" }} src={Group1} />,
    },
    {
      header: "Earn More Money",
      body: "Take advantage of our low fees and earn more commission with Payscribe so you stay ahead.",
      icon: <img style={{ width: "100px", marginTop: "-160px" }} src={Group2} />,
    },
    {
      header: "Reliable Network",
      body: "Enjoy peace of mind with a fast and reliable network. 99.9% uptime on all our services",
      icon: <img style={{ width: "100px", marginTop: "-140px" }} src={Group3} />
    },
    {
        header: "Dedicated Customer Service",
        body: "You are not alone. Active and dedicated customer support for you all the way",
        icon: <img style={{ width: "100px", marginTop: "-150px" }} src={Group4} />
      },
  ];
  const aboutContentsJSX = (
    <ul className="flex flex-wrap  justify-center w-full ">
      {aboutList.map((el) => (
        <li
          className=" h-[23rem] px-4 lg:h-[22rem] my-[.5rem] sm:my-[2rem] w-full sm:w-[50%] md:w-[40%] bp1:w-[23.3%]"
          key={el.header}
        >
          <IconCards2 content={el.body} header={el.header} icon={el.icon} extraClass={"bg-white rounded-2xl px-[0.5rem]"} />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="mt-[6rem] bg-[#EEEDED]  py-[3rem]">
      <div className="">{aboutContentsJSX}</div>
    </section>
  );
};

export default Features;
