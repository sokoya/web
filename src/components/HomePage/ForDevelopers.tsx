import React from "react";
import Button from "../Button";
import HeroImg from "../../assets/homepage/heroImg.png";
import { Link } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import  tomorrowNightBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue';


import { developersCode } from "../../listData/homepage";
import { createAccount, developersPage } from '../../helpers/Links'

type Props = {};

const ForDevelopers = (props: Props) => {
    const [openTab, setOpenTab] = React.useState(0);

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="md:h-[30rem] flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
                    
                    <div className="w-full sm:w-1/2 lg:w-1/2  sm:h-auto order-first sm:order-none bg-[#002451]">
                        <div className="mx-auto mt-5 w-full">
                            <div className="flex flex-col items-center justify-center w-full ">
                                <ul className="flex space-x-2 w-full px-3 justify-start" style={{justifyContent: "flex-start"}}>
                                    {developersCode.map(({lang}, index) => (
                                        <li key={`${lang}-${index}`}>
                                            <a
                                                href="javascript: void(0);"
                                                onClick={() => setOpenTab(index)}
                                                className={` ${openTab === index ? "bg-[#27456b] text-white" : ""} inline-block px-4 py-2 text-[#fff] rounded`}
                                            >
                                            {lang}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <pre className="p-3 mt-6 w-full mx-2 text-white sm:h-100 whitespace-pre-wrap overflow-y-auto h-[400px]">
                                    {developersCode.map(({code, lang}, index) => (
                                        <div  className={openTab === index ? "block" : "hidden"}>
                                        <SyntaxHighlighter language={lang} style={tomorrowNightBlue} key={index}>
                                        {code}
                                        </SyntaxHighlighter>
                                        </div>
                                    ))}
                                </pre>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full sm:w-1/2 lg:w-1/2 flex flex-col p-4 sm:p-8">
                        <p className="my-4">
                            For Developers
                        </p>
                        <h2 className="text-gray-900 text-xl md:text-2xl lg:text-4xl font-bold mb-4">
                            Powerful APIs built by developers for developers. Choose your preferred code lang.
                        </h2>
                        <p className="max-w-md text-gray-600 mb-8">
                            Whatever it is you want to build we have made it easy as possible with our APIs and SDKs, documentation as well as other resouces to make you setup in less than 5 minutes.
                        </p>

                        {/* action btn */}
                        <div className="mt-auto flex gap-3">
                            <a href={createAccount} className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Get Started</a>
                            <a href={developersPage} className="inline-block bg-primary2 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-white hover:text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Developers</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    
    );
};

export default ForDevelopers;
