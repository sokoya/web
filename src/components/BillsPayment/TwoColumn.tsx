import React from "react";
import { billsList } from "../../listData/bills";
import { AiOutlineUser } from "react-icons/ai";
import { GiMoneyStack, GiPowerGenerator } from "react-icons/gi";
import { SiConvertio } from "react-icons/si";
import VerticalItems2 from "../VerticalItems2";
import Button from "../Button";
type Props = {};

const TwoColumn = (props: Props) => {
    const HowToPayList = [
        {
          title: "Customer Support",
          content: `24/7 friendly customer support`,
          icon: <AiOutlineUser className="text-primary2" />,
        },
        {
          title: "No Hidden Fee",
          content: "No service charge whatsoever.",
          icon: <GiMoneyStack className="text-primary2" />,
        },
        {
          title: "High Cashback",
          content: "Pay and earn for every transaction",
          icon: <SiConvertio className="text-primary2" />,
        },
        {
            title: "99.9% Uptime",
            content: "We mean business, all services are always up and running.",
            icon: <GiPowerGenerator className="text-primary2" />,
          },
      ];
  return (
            <section>
            <div className="max-w-screen-xl px-4 pt-16 pb-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:items-center lg:gap-x-8">
                <div className="mx-auto w-full px-[2rem] py-[1.5rem] rounded-2xl text-center lg:mx-0 lg:text-left bg-primary2">
                    <h2 className="text-3xl mt-4 font-bold sm:text-4xl text-white">Why Payscribe</h2>
                    <div className="flex flex-wrap justify-between">
                        {/* {jsx} */}
                        <VerticalItems2
                            items={HowToPayList}
                        />
                    </div>
                </div>
                <div>
                <h2 className="text-3xl font-bold sm:text-4xl mb-[1rem] text-primary2 text-center">Who Can Use Payscribe</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-primary2 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </span>
                    <h2 className="mt-2 font-bold">Personal Use</h2>
                    <p className="hdden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Use Payscribe for your daily essential payment.
                    </p>
                    </a>
                    <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-primary2 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </span>
                    <h2 className="mt-2 font-bold">Startup</h2>
                    <p className="hidde sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Scale your startup with our high-tech Open API. Developers friendly
                    </p>
                    </a>
                    <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-primary2 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </span>
                    <h2 className="mt-2 font-bold">Business Owners</h2>
                    <p className="hidde sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Boost your business revenue with our array of products such as payment link, bulk SMS, airtime to cash, and lots more
                    </p>
                    </a>
                    {/* <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-primary2 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </span>
                    <h2 className="mt-2 font-bold">Accountant</h2>
                    <p className="hidde sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    </a> */}
                </div>
                <Button class="font-bold bg-primary2  mt-6 text-lg xs:text-lg text-white py-[.8rem]  px-[2.2rem]  w-full sm:w-auto">
                    <p>Contact Us &nbsp; &rarr;</p>
                </Button>
                </div>
                </div>
            </div>
            </section>

  );
};

export default TwoColumn;
