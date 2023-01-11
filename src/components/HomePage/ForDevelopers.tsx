import React from "react";
import Button from "../Button";
import HeroImg from "../../assets/homepage/heroImg.png";
import { Link } from "react-router-dom";
import { reg_link } from "../../listData/homepage";

type Props = {};

const ForDevelopers = (props: Props) => {
    const [openTab, setOpenTab] = React.useState(1);
    const pythonCode = `
    print(
        "Hello, World!"
    )
`
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="md:h-[30rem] flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
        {/* image - start */}
        <div className="w-full sm:w-1/2 lg:w-1/2 h-48 sm:h-auto order-first sm:order-none bg-[#002451]">

        <div>
            <div className="mx-auto mt-5 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                    <ul className="flex space-x-2 w-full px-3 justify-start" style={{justifyContent: "flex-start"}}>
                        <li>
                            <a
                                href="javascript: void(0);"
                                onClick={() => setOpenTab(1)}
                                className={` ${openTab === 1 ? "bg-[#27456b] text-white" : ""} inline-block px-4 py-2 text-[#fff] rounded`}
                            >
                               Node.JS
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript: void(0);"
                                onClick={() => setOpenTab(2)}
                                className={` ${openTab === 2 ? "bg-[#27456b] text-white" : ""} inline-block px-4 py-2 text-[#fff] rounded `}


                            >
                                Curl
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript: void(0);"
                                onClick={() => setOpenTab(3)}
                                className={` ${openTab === 3 ? "bg-[#27456b] text-white" : ""} inline-block px-4 py-2 text-[#fff] rounded`}


                            >
                                PHP
                            </a>
                        </li>
                    </ul>
                    <div className="p-3 mt-6 w-full mx-2 text-white">
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            {" "}
                            <React.Fragment>{pythonCode}</React.Fragment>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"}>
                            React JS with Tailwind CSS Tab 2 Content show
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"}>
                            React JS with Tailwind CSS Tab 3 Content show
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/* image - end */}
        {/* content - start */}
        <div className="w-full sm:w-1/2 lg:w-1/2 flex flex-col p-4 sm:p-8">
          <p>For Developers</p>
          <h2 className="text-gray-900 text-xl md:text-2xl lg:text-4xl font-bold mb-4">Powerful APIS built with ease in mind: choose your preferred code language - we'll adapt.</h2>
          <p className="max-w-md text-gray-600 mb-8">Whatever it is you want to build we try to make it as easy as possible. Our APIs and SDKs are tried and true!. Documentation as well as other resources to make you setup within 10 minutes.</p>
          <div className="mt-auto flex gap-3">
            <a href="#" className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact support</a>
            <a href="#" className="inline-block bg-primary2 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact support</a>

          </div>
        </div>
        {/* content - end */}
      </div>
    </div>
  </div>
  
  );
};

export default ForDevelopers;
