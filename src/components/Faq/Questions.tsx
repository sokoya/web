import React from "react";
import { Link } from "react-router-dom";
import Hero1Img from "../../assets/why-payscribe/WhyHeader.png";
import Button from "../Button";
import { BsArrowRight, BsDash, BsPlus } from "react-icons/bs";
import { bills, general, payment, questions, savings } from "../../listData/questions";

type Props = {};
const Questions = (props: Props) => {
        const [openTab, setOpenTab] = React.useState(1);
        var color = "pink"

        
        return (
          <>
            <div className="flex flex-wrap lg:px-[5rem] mt-3">
              <div className="w-full flex">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-0 pb-4 flex-col gap-3" style={{width: "20%"}}
                  role="tablist"
                >
                  <li className="-mb-px last:mr-0 flex-uto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 border rounded block leading-normal " +
                        (openTab === 1
                          ? "text-white bg-primary2"
                          : "text-primary2" + " bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      <i className="fas fa-space-shuttle text-base mr-1"></i> About Us
                    </a>
                  </li>
                  <li className="-mb-px last:mr-0 flex-ato text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 border rounded block leading-normal " +
                        (openTab === 2
                            ? "text-white bg-primary2"
                            : "text-primary2" + " bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      <i className="fas fa-cog text-base mr-1"></i>  Payment Link
                    </a>
                  </li>
                  <li className="-mb-px last:mr-0 flex-uto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 border rounded block leading-normal " +
                        (openTab === 3
                            ? "text-white bg-primary2"
                            : "text-primary2" + " bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      <i className="fas fa-briefcase text-base mr-1"></i>  General App
                    </a>
                  </li>
                  <li className="-mb-px last:mr-0 flex-uto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 border rounded block leading-normal " +
                        (openTab === 4
                            ? "text-white bg-primary2"
                            : "text-primary2" + " bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#link4"
                      role="tablist"
                    >
                      <i className="fas fa-briefcase text-base mr-1"></i>  Savings
                    </a>
                  </li>
                  <li className="-mb-px last:mr-0 flex-uto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 border rounded block leading-normal " +
                        (openTab === 5
                            ? "text-white bg-primary2"
                            : "text-primary2" + " bg-white")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(5);
                      }}
                      data-toggle="tab"
                      href="#link5"
                      role="tablist"
                    >
                      <i className="fas fa-briefcase text-base mr-1"></i>  Bills
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 border rounded lg:ml-[1.5rem]">
                  <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                      <div className={openTab === 1 ? "block px-4" : "hidden px-4"} id="link1">
                      {questions.map((el) => (
                        <div className="py-2" style={{border: "none"}}>
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-[#fff] border border-[#3362b0] border-[2px] rounded py-[15px] px-[15px]">
                            <span className="text-[#3362b0]">{el.header}</span>
                            <span className="transition group-open:hidden text-[#3362B0]">
                                <BsPlus className="text-2xl font-bold text-[#3362B0]" />
                            </span>
                            <span className="transition hidden group-open:block text-[#3362B0]">
                            <BsDash className="text-2xl font-bold text-[#3362B0]"/>
                            </span>
                            </summary>
                            <p className="text-neutral-600 my-3 group-open:animate-fadeIn px-[1rem]">
                            {el.body}
                            </p>
                            {el.list.length > 0? <ul className="text-neutral-600 mb-2 group-open:animate-fadeIn px-[1rem]" style={{marginTop: "-5px", alignContent: "baseline"}}>
                                
                            {el.list.map((l, key) => <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-primary2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className="text-sm">{l['markup']?  <span dangerouslySetInnerHTML={{__html: l['title']}} /> : l['title']}</p>
                            </li>)}</ul> : ""}
                        </details>
                        </div>))}
                      </div>
                      <div className={openTab === 2 ? "block px-4" : "hidden px-4"} id="link2">
                      {payment.map((el) => (
                        <div className="py-2" style={{border: "none"}}>
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-[#fff] border border-[#3362b0] border-[2px] rounded py-[15px] px-[15px]">
                            <span className="text-[#3362b0]">{el.header}</span>
                            <span className="transition group-open:hidden text-[#3362B0]">
                                <BsPlus className="text-2xl font-bold text-[#3362B0]" />
                            </span>
                            <span className="transition hidden group-open:block text-[#3362B0]">
                            <BsDash className="text-2xl font-bold text-[#3362B0]"/>
                            </span>
                            </summary>
                            <p className="text-neutral-600 my-3 group-open:animate-fadeIn px-[1rem]">
                            {el.body}
                            </p>
                            {el.list.length > 0? <ul className="text-neutral-600 mb-2 group-open:animate-fadeIn px-[1rem]" style={{marginTop: "-5px", alignContent: "baseline"}}>
                                
                            {el.list.map((l, key) => <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-primary2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className="text-sm">{l['markup']?  <span dangerouslySetInnerHTML={{__html: l['title']}} /> : l['title']}</p>
                            </li>)}</ul> : ""}
                        </details>
                        </div>))}
                      </div>
                      <div className={openTab === 3 ? "block px-4" : "hidden  px-4"} id="link3">
                      {general.map((el) => (
                        <div className="py-2" style={{border: "none"}}>
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-[#fff] border border-[#3362b0] border-[2px] rounded py-[15px] px-[15px]">
                            <span className="text-[#3362b0]">{el.header}</span>
                            <span className="transition group-open:hidden text-[#3362B0]">
                                <BsPlus className="text-2xl font-bold text-[#3362B0]" />
                            </span>
                            <span className="transition hidden group-open:block text-[#3362B0]">
                            <BsDash className="text-2xl font-bold text-[#3362B0]"/>
                            </span>
                            </summary>
                            <p className="text-neutral-600 my-3 group-open:animate-fadeIn px-[1rem]">
                            {el.body}
                            </p>
                            {el.list.length > 0? <ul className="text-neutral-600 mb-2 group-open:animate-fadeIn px-[1rem]" style={{marginTop: "-5px", alignContent: "baseline"}}>
                                
                            {el.list.map((l , key) => <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-primary2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className="text-sm">{l['markup']?  <span dangerouslySetInnerHTML={{__html: l['title']}} /> : l['title']}</p>
                            </li>)}</ul> : ""}
                        </details>
                        </div>))}
                      </div>
                      <div className={openTab === 4 ? "block px-4" : "hidden px-4"} id="link4">
                      {savings.map((el) => (
                        <div className="py-2" style={{border: "none"}}>
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-[#fff] border border-[#3362b0] border-[2px] rounded py-[15px] px-[15px]">
                            <span className="text-[#3362b0]">{el.header}</span>
                            <span className="transition group-open:hidden text-[#3362B0]">
                                <BsPlus className="text-2xl font-bold text-[#3362B0]" />
                            </span>
                            <span className="transition hidden group-open:block text-[#3362B0]">
                            <BsDash className="text-2xl font-bold text-[#3362B0]"/>
                            </span>
                            </summary>
                            <p className="text-neutral-600 my-3 group-open:animate-fadeIn px-[1rem]">
                            {el.body}
                            </p>
                            {el.list.length > 0? <ul className="text-neutral-600 mb-2 group-open:animate-fadeIn px-[1rem]" style={{marginTop: "-5px", alignContent: "baseline"}}>
                                
                            {el.list.map((l, key) => <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-primary2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className="text-sm">{l['markup']?  <span dangerouslySetInnerHTML={{__html: l['title']}} /> : l['title']}</p>
                            </li>)}</ul> : ""}
                        </details>
                        </div>))}
                      </div>

                      <div className={openTab === 5 ? "block px-4" : "hidden px-4"} id="link5">
                      {bills.map((el) => (
                        <div className="py-2" style={{border: "none"}}>
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-[#fff] border border-[#3362b0] border-[2px] rounded py-[15px] px-[15px]">
                            <span className="text-[#3362b0]">{el.header}</span>
                            <span className="transition group-open:hidden text-[#3362B0]">
                                <BsPlus className="text-2xl font-bold text-[#3362B0]" />
                            </span>
                            <span className="transition hidden group-open:block text-[#3362B0]">
                            <BsDash className="text-2xl font-bold text-[#3362B0]"/>
                            </span>
                            </summary>
                            <p className="text-neutral-600 my-3 group-open:animate-fadeIn px-[1rem]">
                            {el.body}
                            </p>
                            {el.list.length > 0? <ul className="text-neutral-600 mb-2 group-open:animate-fadeIn px-[1rem]" style={{marginTop: "-5px", alignContent: "baseline"}}>
                                
                            {el.list.map((l, key) => <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-primary2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className="text-sm">{l['markup']?  <span dangerouslySetInnerHTML={{__html: l['title']}} /> : l['title']}</p>
                            </li>)}</ul> : ""}
                        </details>
                        </div>))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      };
      

export default Questions;
