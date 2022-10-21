import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { SiConvertio } from "react-icons/si";
import IconPlate from "../IconPlate";

type Props = {};

const list = [
  {
    title: "Dedicated Account Number",
    body: "When you sign up with Payscribe, you're assigned a virtual account number, which you can use to receive money from any local bank, fast and easy",
    icon: <AiOutlineUser className="text-[#226c1a68] mx-auto" />,
  },
  {
    title: "NDIC insured",
    body: "Your deposits are securely managed by our bank partners who are NDIC-insured, and PCI-DSS Compliance certified. 100% Secured",
    icon: <GiMoneyStack className="text-[#82111168] mx-auto" />,
  },
  {
    title: "More channels",
    body: "Having multiple channels to receive payment has never been this easy. Conveniently receive money using your Phone number or a dedicated QR Code.",
    icon: <SiConvertio className="text-[#12109868] mx-auto" />,
  },
];
const Section3 = (props: Props) => {
  const jsx = (
    <>
      {list.map((el) => (
        <div className="text-center w-[100%] sm:w-[40%] md:w-[45%] my-[2rem] ">
          <IconPlate
            title={el.title}
            body={el.body}
            icon={el.icon}
            key={el.title}
          />
        </div>
      ))}
    </>
  );
  return <div className="w-full flex flex-wrap justify-center">{jsx}</div>;
};

export default Section3;
