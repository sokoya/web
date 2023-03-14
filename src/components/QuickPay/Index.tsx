import React from "react";
import Button from "../Button";
import bg from "../../assets/rewards/light-curve.png";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/bills/hero1.svg";
import QR from "../../assets/contact-us/qrr.png";
import { bankCodes, reg_link } from "../../listData/homepage";
import { FaArrowLeft } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import NotFoundPage from "../NotFound";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
type Props = {
  tag: string;
};

const QuickPay = (props: Props) => {
  let tag = props.tag;
  const [index, setIndex] = React.useState(0);
  const [check, setCheck] = React.useState('');
  const [amount, setAmount] = React.useState("");
  const [loading, setLoading] = React.useState(0);
  const [user, setUser] = React.useState<any>({});

  const [bank, setBank] = React.useState<number>(0);
  const next = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIndex(1);
  };

  React.useEffect(() => {
    var url = "https://api.payscribe.ng/api/my/user_tag/?tag=";
    fetch(url + tag.substring(1))
      .then((response) => response.json())
      .then((data) => {
        if (data.status == true) {
			setUser(data.data);
      document.title = "Send Money to " + data.data.name
			setLoading(2);
        } else {
          setLoading(1);
        }
      });
  }, []);


  if (loading == 0) {
    return (
      <main
        style={{
          height: "60vh",
          marginTop: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      <Helmet>
      <title>Send Money Quickly | Payscribe</title>
            <meta name="title" content="Send Money seamlessly | Payscribee" />
            <meta name="description" content="Stay connected and manage your finances with Payscribe. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe. Sign up now!" />
            <meta name="keywords" content="Airtime,Data,Electricity payment,Savings,Cashless payments,Digital transactions,Mobile recharge,Bill payment,Daily essentials,Convenience,Secure payments,Online top-up,Mobile wallet,Cashless living,Financial management,Utility payments,Smart payments,Easy recharge,Mobile credit,Digital wallet,Online bill payments,E-payments,Electronic payments,Mobile top-up,Digital airtime,Online data,Secure bill payments,Airtime recharge,Data bundle,Mobile money,Online savings,Electronic top-up,Mobile bill payments,Online electricity payments,Digital savings,Convenient payments,Mobile payments,Digital bill payments,Secure transactions,Mobile money payments,Digital credit,Online utility payments,Electronic bill payments,Mobile savings,Online top-up services,Airtime purchase,Data purchase,Mobile top-up services,Digital payments,Online payments,Secure mobile payments,Mobile transactions,Cashless society,Digital financial services,Airtime top-up,Data top-up,Mobile banking,Online banking,Secure online payments,Mobile services,Digital services,Cashless transactions,Financial services,Mobile financial services,Online financial services,Digital cash,Mobile cash,Online cash,Secure online banking,Mobile banking services,Digital banking services,Online banking services,Mobile money services,Digital money services,Online money services,Secure online transactions,Mobile transactions services,Digital transactions services,Online transactions services,Mobile savings services,Digital savings services,Online savings services,Secure online savings,Mobile savings account,Digital savings account,Online savings account,Mobile banking account,Digital banking account,Online banking account,Secure online banking account,Mobile money account,Digital money account,Online money account,Secure online money account" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Send Money seamlessly | Payscribe" />
            <meta property="og:description" content="Stay connected and manage your finances with Payscribe. Our platform offers a wide range of services including airtime and data purchase, electricity payments, and savings. Experience the convenience of cashless transactions and secure payments with Payscribe. Sign up now!" />
            <meta property="og:image" content="https://payscribe.ng/assets/notice.png" />
            <meta property="og:url" content="https://www.payscribe.ng" />
            <meta property="og:site_name" content="Payscribe"/>
        </Helmet>
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </main>
    );
  }


  if (loading == 1) {
    return (
      <section className="bg-white pt-16 mb-[-5rem]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl mt-[3rem] tracking-tight font-extrabold lg:text-9xl text-primary2 darrk:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-grey-500 md:text-4xl darrk:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 darrk:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              to="/"
              className="inline-flex text-white bg-primary2 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center darrk:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    );
  }


  return (
    <div>
      <div
        className="relative  pb-2 pt-[5rem] bg-headerBg px-[2rem]"
        style={{ background: `url('${bg}')` }}
      >
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 transition duration-300 delay-0" >
        </div>
        <div className="relative xl:container px-0 text-gray-500 md:px-0 mt-0 flex">
          <div className=" sm:w-4/5 md:w-2/5 xl:w-2/5">
            <div className="p-8 md:py-12">
              <img
                src={ user.profilePic || "https://cdn.pixabay.com/photo/2017/01/10/03/54/avatar-1968236__480.png" }
                className="w-40 rounded-full shadow-lg"
                alt="Avatar"
              />
              <h2 className="mt-3 mb-1 text-3xl font-bold text-gray-800 text-uppercase">
                {user.name.toUpperCase() || ""}
              </h2>
              <p className="mt-1 mb-4 font-bold">
                payscribe.ng/{tag.substring(1)}
              </p>
              <form className="space-y-5" onSubmit={next}>
                <div className="space-y-4">
                  {index == 0 ? (
                    <>
                      <label htmlFor="username" className="text-gray-600 ">
                        How much do you want to send?
                      </label>
                      <div className="relative flex items-center">
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          className="w-4 h-4 absolute left-5 "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 115.09 122.88"
                        >
                          <title>Send-Receive Money</title>
                          <path d="M13.42,0H32.1a1.25,1.25,0,0,1,1,.6L58,42.26H83.17v-41A1.23,1.23,0,0,1,84.39,0h17.28a1.23,1.23,0,0,1,1.23,1.23v41h11a1.23,1.23,0,0,1,1.23,1.23V54.55a1.23,1.23,0,0,1-1.23,1.23h-11v9.41h11a1.23,1.23,0,0,1,1.23,1.22V77.48a1.23,1.23,0,0,1-1.23,1.22h-11v43a1.23,1.23,0,0,1-1.23,1.23H84.39a1.25,1.25,0,0,1-1-.6L58,78.7H33.26v43A1.23,1.23,0,0,1,32,122.88H13.42a1.23,1.23,0,0,1-1.23-1.23V78.7h-11A1.23,1.23,0,0,1,0,77.48V66.41a1.23,1.23,0,0,1,1.23-1.22h11V55.78h-11A1.23,1.23,0,0,1,0,54.55V43.49a1.23,1.23,0,0,1,1.23-1.23h11v-41A1.23,1.23,0,0,1,13.42,0ZM33.26,55.78v9.41h17l-4.4-9.41ZM70,65.19H83.17V55.78H65.68L70,65.19ZM83.17,78.7H77.88l5.29,11v-11ZM33.26,32.76v9.5h4.57l-4.57-9.5Z" />
                        </svg>

                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          autoComplete="amount"
                          required
                          min={100}
                          max={100000}
                          placeholder="Enter an Amount"
                          className="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:rng-red-400 focus:ring-2 focus:ring-primary"
                        />
                        <div className="absolute right-1">
                          <button type="submit" className="relative flex h-10 w-10 sm:w-max ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary2 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span className="hidden relative text-base font-semibold text-white sm:block">Next</span>
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
                    <button onClick={() => setIndex(0)} className="w-8 h-8 rounded-full mb-2 flex bg-blue-500 hover:bg-primary2 text-white" style={{ alignItems: "center", justifyContent: "center" }}>
                      <FaArrowLeft />
                    </button>
                    <label htmlFor="username" className="text-gray-600 mb-10">
                      How do you prefer to send {user.name} money?
                    </label>
                    <div className="radio-btns mt-3">
                      <div className="container">
                        <div className="option">
                          <input
                            type="radio"
                            name="payment_method"
                            id="bank-transfer"
                            defaultValue="bank-transfer"
                            checked={check === 'bank'}
                            onChange={(e) => { setCheck('bank'); setIndex(2);
                            }}
                          />
                          <label htmlFor="bank-transfer" aria-label="bank-transfer">
                            <span /> BANK TRANSFER
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
                            name="payment_method"
                            id="ussd"
                            defaultValue="ussd"
                            checked={check === 'ussd'}
                            onChange={(e) => {
                              setCheck('ussd');
                              setIndex(2);
                            }}
                          />
                          <label htmlFor="ussd" aria-label="ussd ">
                            <span />PAY WITH USSD
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
                        {user && user.scanUrl ? (
                          <div className="option">
                            <input
                              type="radio"
                              name="payment_method"
                              id="scan"
                              defaultValue="scan"
                              checked={check === 'scan'}
                              onChange={(e) => {
                                setCheck('scan');
                                setIndex(2);
                              }}
                            />
                            <label htmlFor="scan" aria-label="card transfer">
                              <span />SCAN QR CODE
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
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {index == 2 && check === 'bank' ? (
                  <div className="relative">
                    <button onClick={() => { 
						setIndex(1); 
						setCheck(''); 
					}}
                      className="w-8 h-8 rounded-full mb-2 flex bg-blue-500 hover:bg-primary2 text-white"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <FaArrowLeft />
                    </button>
                    <p className="my-2">
                      Transfer {" "}
                      <b>
                        NGN{new Intl.NumberFormat().format(parseInt(amount))}
                      </b>{" "}
                      to the account details below.
                    </p>
                    <div className="">
                      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 px-4 py-1 md:p-3 md:px-4">
                        <div>
                          <h2 className="text-primary2 text-xl md:text-2xl font-bold">
                            {user.accountNumber || ""}
                          </h2>
                          <p className="text-gray-600 text-[14px] text-uppercase">
                            {user.bankName || ""} - {user.accountName || ""}
                          </p>
                        </div>
                        <Toaster position="bottom-center" />
                        <CopyToClipboard onCopy={(text, res) => res == true && toast.success("Account Number Copied!") }
                          text={user.accountNumber || ""}
                        >
                          <a href="javascript:void()"
                            className="inline-block bg-primary2 hover:bg-secondary active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-3 py-2"
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
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {index == 2 && check === 'ussd' ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        setIndex(1);
                        setCheck('');
                        setBank(0);
                      }}
                      className="w-8 h-8 rounded-full mb-2 flex bg-blue-500 hover:bg-primary2 text-white"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <FaArrowLeft />
                    </button>
                    <div>
                      <label htmlFor="bank" className="inline-block text-gray-800 text-sm sm:text-base mb-2" >
                        Select Bank Name
                      </label>
                      <select
                        onChange={(e) => setBank(parseInt(e.target.value))}
                        name="bank"
                        className="w-full bg-gray-50 text-gray-800 border ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      >
                        <option selected hidden={bank !== 0} value=""> Select your bank </option>
                        <option className={"044"} value="1"> Access bank </option>
                        <option className={"070"} value="2"> Fidelity bank </option>
                        <option className={"011"} value="3"> First bank </option>
                        <option className={"058"} value="4"> GTBank </option>
                        <option className={"030"} value="5"> Heritage bank </option>
                        <option className={"232"} value="6"> Sterling bank </option>
                        <option className={"032"} value="7"> Union bank </option> 
						<option className={"230"} value="8"> Unity bank </option>
                        <option className={"035"} value="9">Wema bank </option>
                        <option className={"057"} value="10"> Zenith bank </option>
                      </select>
                    </div>

                    {bank !== 0 ? (
                      <div className="ussd__info mt-2">
                        <p>Tap to dial this code</p>{" "}
                        <a href={`tel:${bankCodes[bank](amount, user.accountNumber)}`} className="text-primary2 text-md md:text-xl font-bold"
                        >
                          {bankCodes[bank](amount, user.accountNumber)}
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}

                {index == 2 && check === 'scan' && user && user.scanUrl ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        setIndex(1);
                        setCheck('');
                      }}
                      className="w-8 h-8 rounded-full mb-2 flex bg-blue-500 hover:bg-primary2 text-white"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <FaArrowLeft />
                    </button>
                    <h3 className="font-bold text-2xl">Scan QR CODE</h3>
                    <p className="text-sm">From your Payscribe mobile app, scan this QR Code to continue</p>
                    <img className="mt-2" src={user.scanUrl} style={{ height: "250px" }} />
                  </div>
                ) : (
                  ""
                )}



                <p className="text-gray-500 text-sm">
                  {user.name.toUpperCase()} gets the amount within a seconds. You can also send and receive money seamlessly by creating an account on Payscribe
                </p>
                <p className="border-t border-gray-100 pt-6 text-sm text-gray-500">
                  Don't have an account?
                  <a href={`${reg_link}/${tag.substring(1)}`} className="text-primary">
                    {" "}
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className=" sm:w-4/5 md:w-3/5 xl:w-2/5 sm:px-10 sm:hidden lg:block">
            <img className="ml-auto sm:hidden lg:block" src={HeroImg} alt="Send and Receive money on Payscribe at ease." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPay;
