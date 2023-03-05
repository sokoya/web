import React from "react";
import Button from "../Button";
import bg from "../../assets/rewards/light-curve.png";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/bills/hero1.svg";
import QR from "../../assets/contact-us/qrr.png";
import { reg_link } from "../../listData/homepage";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
  tag: string;
};

const QuickPay = (props: Props) => {
  var tag = props.tag;
  const [index, setIndex] = React.useState(0);
  const [check, setCheck] = React.useState(0);
  const [amount, setAmount] = React.useState("");
  const [bank, setBank] = React.useState("");
  const next = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIndex(1);
  };
  return (
    <div>
      <div
        className="relative  pb-2 pt-[5rem] bg-headerBg px-[2rem]"
        style={{ background: `url('${bg}')` }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 transition duration-300 delay-0"
        >
          {/* <div className="blur-[106px] h-56 bg-gradient-to-br from-grey-300 to-red-400" />
    <div className="blur-[106px] h-32 bg-gradient-to-r from-primary-400 to-yellow-300" /> */}
        </div>
        <div className="relative xl:container px-0 text-gray-500 md:px-0 mt-0 flex">
          <div className=" sm:w-4/5 md:w-2/5 xl:w-2/5">
            <div className="p-8 md:py-12">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/10/03/54/avatar-1968236__480.png"
                className="w-40 rounded-full shadow-lg"
                alt="Avatar"
              />
              <h2 className="mt-3 mb-1 text-3xl font-bold text-gray-800">
                AYOMIDE OLOYEDE
              </h2>
              <p className="mt-1 mb-4 font-bold">pays.be/{tag.substring(1)}</p>
              <form className="space-y-5" onSubmit={next}>
                <div className="space-y-4">
                  {index == 0 ? (
                    <>
                      <label htmlFor="username" className="text-gray-600 ">
                        How Much Do you want to send?
                      </label>
                      <div className="relative flex items-center">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute left-4 inset-y-0 my-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>                       */}
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          className="w-4 h-4 absolute left-5 "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 115.09 122.88"
                        >
                          <title>nigeria-naira</title>
                          <path d="M13.42,0H32.1a1.25,1.25,0,0,1,1,.6L58,42.26H83.17v-41A1.23,1.23,0,0,1,84.39,0h17.28a1.23,1.23,0,0,1,1.23,1.23v41h11a1.23,1.23,0,0,1,1.23,1.23V54.55a1.23,1.23,0,0,1-1.23,1.23h-11v9.41h11a1.23,1.23,0,0,1,1.23,1.22V77.48a1.23,1.23,0,0,1-1.23,1.22h-11v43a1.23,1.23,0,0,1-1.23,1.23H84.39a1.25,1.25,0,0,1-1-.6L58,78.7H33.26v43A1.23,1.23,0,0,1,32,122.88H13.42a1.23,1.23,0,0,1-1.23-1.23V78.7h-11A1.23,1.23,0,0,1,0,77.48V66.41a1.23,1.23,0,0,1,1.23-1.22h11V55.78h-11A1.23,1.23,0,0,1,0,54.55V43.49a1.23,1.23,0,0,1,1.23-1.23h11v-41A1.23,1.23,0,0,1,13.42,0ZM33.26,55.78v9.41h17l-4.4-9.41ZM70,65.19H83.17V55.78H65.68L70,65.19ZM83.17,78.7H77.88l5.29,11v-11ZM33.26,32.76v9.5h4.57l-4.57-9.5Z" />
                        </svg>

                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          autoComplete="amount"
                          placeholder="Enter an Amount"
                          className="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
                        />
                        <div className="absolute right-1">
                          <button
                            type="submit"
                            className="relative flex h-10 w-10 sm:w-max ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary2 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                          >
                            <span className="hidden relative text-base font-semibold text-white sm:block">
                              Next
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="relative w-5 h-5 text-white sm:hidden"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {index == 1 ? (
                  <div className="relative">
                    <button
                      onClick={() => setIndex(0)}
                      className="w-8 h-8 rounded-full mb-2 flex bg-blue-500 hover:bg-primary2 text-white"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <FaArrowLeft />
                    </button>
                    <label htmlFor="username" className="text-gray-600 mb-10">
                      How Do You want to send it?
                    </label>
                    <div className="radio-btns mt-3">
                      <div className="container">
                        <div className="option">
                          <input
                            type="radio"
                            name="card"
                            id="silver"
                            defaultValue="silver"
                            checked={check == 1}
                            onChange={(e) => {
                              setCheck(1);
                              setIndex(2);
                            }}
                          />
                          <label htmlFor="silver" aria-label="Silver">
                            <span />
                            BANK TRANSFER
                            {/* <div className="card card--white card--sm">
        <div className="card__chip" />
        <div className="card__content">
          <div className="card__text">
            <div className="text__row">
              <div className="text__loader" />
              <div className="text__loader" />
            </div>
            <div className="text__row">
              <div className="text__loader" />
              <div className="text__loader" />
            </div>
          </div>
          <div className="card__symbol">
            <span />
            <span />
          </div>
        </div>
      </div> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ justifySelf: "flex-end" }}
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="35px"
                              height="35px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <path
                                  d="M3.95709826,8.41510662 L11.47855,3.81866389 C11.7986624,3.62303967 12.2013376,3.62303967 12.52145,3.81866389 L20.0429,8.41510557 C20.6374094,8.77841684 21,9.42493654 21,10.1216692 L21,19.0000642 C21,20.1046337 20.1045695,21.0000642 19,21.0000642 L4.99998155,21.0000673 C3.89541205,21.0000673 2.99998155,20.1046368 2.99998155,19.0000673 L2.99999828,10.1216672 C2.99999935,9.42493561 3.36258984,8.77841732 3.95709826,8.41510662 Z M10,13 C9.44771525,13 9,13.4477153 9,14 L9,17 C9,17.5522847 9.44771525,18 10,18 L14,18 C14.5522847,18 15,17.5522847 15,17 L15,14 C15,13.4477153 14.5522847,13 14,13 L10,13 Z"
                                  fill="#3362B0"
                                />
                              </g>
                            </svg>
                          </label>
                        </div>
                        <div className="option">
                          <input
                            type="radio"
                            name="card"
                            id="royal"
                            defaultValue="royal"
                            checked={check == 2}
                            onChange={(e) => {
                              setCheck(2);
                              setIndex(2);
                            }}
                          />
                          <label htmlFor="royal" aria-label="Royal blue">
                            <span />
                            PAY WITH USSD
                            {/* <div className="card card--blue card--sm">
        <div className="card__chip" />
        <div className="card__content">
          <div className="card__text">
            <div className="text__row">
              <div className="text__loader" />
              <div className="text__loader" />
            </div>
            <div className="text__row">
              <div className="text__loader" />
              <div className="text__loader" />
            </div>
          </div>
          <div className="card__symbol">
            <span />
            <span />
          </div>
        </div>
      </div> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ justifySelf: "flex-end" }}
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="35px"
                              height="35px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <path
                                  d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z"
                                  fill="#3362B0"
                                  opacity="0.3"
                                />
                                <path
                                  d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z M8,1 L16,1 C17.5187831,1 18.75,2.23121694 18.75,3.75 L18.75,20.25 C18.75,21.7687831 17.5187831,23 16,23 L8,23 C6.48121694,23 5.25,21.7687831 5.25,20.25 L5.25,3.75 C5.25,2.23121694 6.48121694,1 8,1 Z M9.5,1.75 L14.5,1.75 C14.7761424,1.75 15,1.97385763 15,2.25 L15,3.25 C15,3.52614237 14.7761424,3.75 14.5,3.75 L9.5,3.75 C9.22385763,3.75 9,3.52614237 9,3.25 L9,2.25 C9,1.97385763 9.22385763,1.75 9.5,1.75 Z"
                                  fill="#3362B0"
                                  fillRule="nonzero"
                                />
                              </g>
                            </svg>
                          </label>
                        </div>
                        <div className="option">
                          <input
                            type="radio"
                            name="card"
                            id="dark"
                            defaultValue="dark"
                            checked={check == 3}
                            onChange={(e) => {
                              setCheck(3);
                              setIndex(2);
                            }}
                          />
                          <label htmlFor="dark" aria-label="Dark grey">
                            <span />
                            SCAN QR CODE
                            {/* <div className="card card--dark card--sm">
        <div className="card__chip" />
        <div className="card__content">
          <div className="card__text">
            <div className="text__row">
              <div className="text__loader" />
              <div className="text__loader" />
            </div>
            <div className="text__row">
              <div className="text__loader" />
              <div className="text__loader" />
            </div>
          </div>
          <div className="card__symbol">
            <span />
            <span />
          </div>
        </div>
      </div> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ justifySelf: "flex-end" }}
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="35px"
                              height="35px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <rect
                                  fill="#3362B0"
                                  opacity="0.3"
                                  x={4}
                                  y={4}
                                  width={8}
                                  height={16}
                                />
                                <path
                                  d="M6,18 L9,18 C9.66666667,18.1143819 10,18.4477153 10,19 C10,19.5522847 9.66666667,19.8856181 9,20 L4,20 L4,15 C4,14.3333333 4.33333333,14 5,14 C5.66666667,14 6,14.3333333 6,15 L6,18 Z M18,18 L18,15 C18.1143819,14.3333333 18.4477153,14 19,14 C19.5522847,14 19.8856181,14.3333333 20,15 L20,20 L15,20 C14.3333333,20 14,19.6666667 14,19 C14,18.3333333 14.3333333,18 15,18 L18,18 Z M18,6 L15,6 C14.3333333,5.88561808 14,5.55228475 14,5 C14,4.44771525 14.3333333,4.11438192 15,4 L20,4 L20,9 C20,9.66666667 19.6666667,10 19,10 C18.3333333,10 18,9.66666667 18,9 L18,6 Z M6,6 L6,9 C5.88561808,9.66666667 5.55228475,10 5,10 C4.44771525,10 4.11438192,9.66666667 4,9 L4,4 L9,4 C9.66666667,4 10,4.33333333 10,5 C10,5.66666667 9.66666667,6 9,6 L6,6 Z"
                                  fill="#3362B0"
                                  fillRule="nonzero"
                                />
                              </g>
                            </svg>
                          </label>
                        </div>
                      </div>

                      {/* <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-radio-1" type="radio" defaultValue={""} name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="bordered-radio-1" className="w-full py-4 ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">BANK TRANSFER</label>
  </div>
  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input defaultChecked id="bordered-radio-2" type="radio" defaultValue={""} name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="bordered-radio-2" className="w-full py-4 ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">PAY WITH USSD</label>
  </div> */}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {index == 2 && check == 1 ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        setIndex(1);
                        setCheck(0);
                      }}
                      className="w-8 h-8 rounded-full mb-2 flex bg-blue-500 hover:bg-primary2 text-white"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <FaArrowLeft />
                    </button>
                    <p className="my-2">
                      Transfer to the account details below.
                    </p>
                    <div className="">
                      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 px-4 py-1 md:p-3 md:px-4">
                        <div>
                          <h2 className="text-primary2 text-xl md:text-2xl font-bold">
                            3160020316
                          </h2>
                          <p className="text-gray-600">WEMA BANK</p>
                        </div>
                        <a
                          href="#"
                          className="inline-block bg-primary2 hover:bg-secondary active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="28px"
                            height="28px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z"
                                fill="#fff"
                                fillRule="nonzero"
                              />
                              <path
                                d="M10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L10.1818182,16 C8.76751186,16 8,15.2324881 8,13.8181818 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 Z"
                                fill="#fff"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {index == 2 && check == 2 ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        setIndex(1);
                        setCheck(0);
                        setBank("");
                      }}
                      className="w-8 h-8 rounded-full mb-2 flex bg-blue-500 hover:bg-primary2 text-white"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <FaArrowLeft />
                    </button>
                    <div>
                      <label
                        htmlFor="bank"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Bank Name
                      </label>
                      <select
                        onChange={(e) => setBank(e.target.value)}
                        name="bank"
                        className="w-full bg-gray-50 text-gray-800 border ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      >
                        <option selected hidden={bank !== ""} value="">
                          Select your bank
                        </option>
                        <option value={"044"}>Access bank</option>
                        <option value={"070"}>Fidelity bank</option>
                        <option value={"011"}>First bank</option>
                        <option value={"058"}>GTBank</option>
                        <option value={"030"}>Heritage bank</option>
                        <option value={"232"}>Sterling bank</option>
                        <option value={"032"}>Union bank</option>
                        <option value={"230"}>Unity bank</option>
                        <option value={"035"}>Wema bank</option>
                        <option value={"057"}>Zenith bank</option>
                      </select>
                    </div>

                    {bank !== "" ? (
                      <div className="ussd__info mt-2">
                        <p>Tap to dial this code</p>{" "}
                        <a
                          href="tel:*894*500*7056096988%23"
                          className="text-primary2 text-md md:text-xl font-bold"
                        >
                          *894*500*7056096988#
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}

                {index == 2 && check == 3 ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        setIndex(1);
                        setCheck(0);
                      }}
                      className="w-8 h-8 rounded-full mb-2 flex bg-blue-500 hover:bg-primary2 text-white"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <FaArrowLeft />
                    </button>
                    <h3 className="font-bold text-2xl">Scan QR CODE</h3>
                    <p className="text-sm">
                      Scan this QR Code in app to continue
                    </p>
                    <img
                      className="mt-2"
                      src={QR}
                      style={{ height: "250px" }}
                    />
                  </div>
                ) : (
                  ""
                )}
                <p className="text-gray-500 text-sm">
                  By proceeding, you consent to get calls, WhatsApp or SMS
                  messages, including by automated means, from Tailus and its
                  affiliates to the number provided.
                </p>
                <p className="border-t border-gray-100 pt-6 text-sm text-gray-500">
                  Don't have an account?
                  <a href="#" className="text-primary">
                    {" "}
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className=" sm:w-4/5 md:w-3/5 xl:w-2/5 sm:px-10 sm:hidden lg:block">
            <img className="ml-auto sm:hidden lg:block" src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPay;
