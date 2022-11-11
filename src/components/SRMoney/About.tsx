import IconCards from "../IconCards";
import EasyToUse from "../lottie-animations/Easy to use.json";
import SecuredTransfer from "../lottie-animations/secured payment.json";
import SaveMoney from "../lottie-animations/save money.json";
import AccountNumber from "../lottie-animations/Account number.json";
import Insured from "../lottie-animations/insured.json";
import Channel from "../lottie-animations/channels.json";
import Lottie from "lottie-react";

type Props = {};

const About = (props: Props) => {
  const aboutList = [
    {
      header: "Save Money On Every Transaction",
      body: "onveniently receive and send money without paying unreasonable charges",
      icon: <Lottie width={2000} animationData={SaveMoney} />,
    },
    {
      header: "Secure Transfer",
      body: "You can bank on our proven reliability, enterprise-grade encryption and multi-signature authorisation of our system. All your funds and transactions are safe.",
      icon: <Lottie animationData={SecuredTransfer} />,
    },
    {
      header: "Quick and Easy To Use",
      body: "Our high-tech powered payment solutions send money in seconds ensuring a seemless experience for both sender and recipient.",
      icon: <Lottie animationData={EasyToUse} />,
    },
    {
      header: "Dedicated Account Number",
      body: "When you sign up with Payscribe, you're assigned a virtual account number, which you can use to receive money from any local bank, fast and easy",
      icon: <Lottie animationData={AccountNumber} />,
    },
    {
      header: "NDIC insured",
      body: "Your deposits are securely managed by our bank partners who are NDIC-insured, and PCI-DSS Compliance certified. 100% Secured",
      icon: <Lottie animationData={Insured} />,
    },
    {
      header: "More channels",
      body: "Having multiple channels to receive payment has never been this easy. Conveniently receive money using your Phone number or a dedicated QR Code.",
      icon: <Lottie animationData={Channel} />,
    },
  ];
  const aboutContentsJSX = (
    <ul className="flex flex-wrap  justify-center w-full ">
      {aboutList.map((el) => (
        <li
          className=" sm:h-[28rem] lg:h-[26rem]  w-full sm:w-[50%] md:w-[40%] bp1:w-[33.3%]"
          key={el.header}
        >
          <IconCards content={el.body} header={el.header} icon={el.icon} />
        </li>
      ))}
    </ul>
  );
  return (
    <section className="mt-[5rem] py-[2rem]">
      <h1 className="text-center text-5xl font-bold">What You Gain</h1>
      <div className="mt-[2rem]">{aboutContentsJSX}</div>
    </section>
  );
};

export default About;
