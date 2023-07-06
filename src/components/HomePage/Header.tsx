import React from "react";
import {useNavigate} from 'react-router-dom';
import Button from "../Button";
import HeroImg from "../../assets/homepage/heroImg.png";
import Avatar from "../../assets/contact-us/avatar2.png";
import HomeSmile from "../../assets/homepage/payscribe-welcome-smile.png";
import { Link } from "react-router-dom";
import { reg_link } from "../../listData/homepage";
import { login } from "../../helpers/Links";
import GooglePlayImg from "../../assets/playstore.png"
import AppStoreImg from "../../assets/applestore.png"

type Props = {};

const Header = (props: Props) => {
  const [trans, setTrans] = React.useState<any[]>([]);
  const history = useNavigate();
  React.useEffect(() => {
    var url = "https://api.payscribe.ng/api/my/get_transactions";
    fetch(url)
        .then(response => response.json())
        .then(data => data.status == true && setTrans(data.data));
  }, []);
  return (
    <header className="flex flex-wrap bg-headerBg items-center w-full mt-[3rem] px-[2rem]">
      <div className="w-full sm:w-[60%] mx-auto md:w-[50%] mt-[5rem] lg:pl-[1rem]">
        <h5 className="mb-6 ">
          <span className="font-bold mr-1 text-primary3">Payscribe </span> =
          Payment + Subscription
        </h5>
        <div className=" w-[90%] text-[2.5rem] sm:text-[3.5rem]  lg:text-header font-bold leading-[4rem] lg:leading-[5rem]">
          <h1 className=" ">
            Pay Lifestyle bills and manage your{" "}
            <span className="text-primary3">finances</span> at ease
          </h1>
        </div>
        <h2 className="mt-[2rem] w-full sm:w-[70%] text-secondary1 text-lg sm:text-base">
          Be at the centre of your finances when you send, receive or save
          money, and pay for everyday essentials.
        </h2>

        {trans.length > 1 ? (
          <div className="scroll-parent mt-3 hidden">
            <div className="scroll-element primary">
              
              {trans.slice(0, Math.floor(trans.length / 2)).map((d, i) => i  < 4 && <div
                className="flex border py-1 px-1 mx-[1px] gap-1 dd"
                onClick={() => history("/"+d.tag)}
                style={{
                  width: "650px",
                  alignItems: "center",
                  background: "#fff",
                  overflowX: "scroll",
                  borderRadius: "3px"
                }}
              >
                <img
                  src={d.imgSrc || Avatar}
                  style={{borderRadius: "3px"}}
                  alt={d.tag || ""}
                />
                <span style={{ fontSize: "10px", overflowX: "hidden"}}>
                  <b>{d.displayText || ""}</b> 
                </span>
              </div>
              // <div
              //   className="flex border py-2 px-1 mx-2 gap-1"
              //   style={{
              //     width: "600px",
              //     alignItems: "center",
              //     background: "#fff",
              //   }}
              // >
              //   <img
              //     src="https://avatars.dicebear.com/api/adventurer/tosin-jerugba.svg"
              //     alt="tosin jerugba"
              //   />
              //   <span style={{ fontSize: "10px" }}>
              //     <b>@ayo</b> just recieved NGN500
              //   </span>
              // </div>
              // <div
              //   className="flex border py-2 px-1 mx-2 gap-1"
              //   style={{
              //     width: "600px",
              //     alignItems: "center",
              //     background: "#fff",
              //   }}
              // >
              //   <img
              //     src="https://avatars.dicebear.com/api/adventurer/fiyin-jerugba.svg"
              //     alt="fiyin jerugba"
              //   />
              //   <span style={{ fontSize: "10px" }}>
              //     <b>@ayo</b> just recieved NGN500
              //   </span>
              // </div>
              )}
            </div>
            <div className="scroll-element secondary">
              
              {trans.slice(Math.floor(trans.length / 2), trans.length).map((d, i) =>  i  < 4 &&  <div
                className="flex border py-1 px-1 mx-[1px] gap-1 dd"
                onClick={() => history("/"+d.tag)}
                style={{
                  width: "650px",
                  alignItems: "center",
                  background: "#fff",
                  overflowX: "scroll",
                  borderRadius: "3px"
                }}
              >
                 <img
                  src={d.imgSrc || Avatar}
                  style={{borderRadius: "3px"}}
                  alt={d.tag || ""}
                />
                <span style={{ fontSize: "10px" }}>
                  <b>{d.displayText || ''}</b>
                </span>
              </div>
      
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="relative flex overflow-x-hidden">
          <div className="py-5 animate-marquee whitespace-nowrap flex">
          {trans.map((d, i) => <div
                className="flex border py-1 px-1 mx-[1px] gap-1 dd"
                onClick={() => history("/"+d.tag)}
                style={{
                  width: "220px",
                  alignItems: "center",
                  background: "#fff",
                  overflowX: "scroll",
                  borderRadius: "3px"
                }}
              >
                <img
                  src={d.imgSrc || Avatar}
                  style={{borderRadius: "3px", height: "25px"}}
                  alt={d.tag || ""}
                />
                <span style={{ fontSize: "10px", overflowX: "hidden"}}>
                  <b>{d.displayText || ""}</b> 
                </span>
              </div>
          )}
          </div>

          <div className="absolute top-0 pt-5 pb-2 animate-marquee2 whitespace-nowrap flex">
          {trans.map((d, i) => <div
                className="flex border py-1 px-1 mx-[1px] gap-1 dd"
                onClick={() => history("/"+d.tag)}
                style={{
                  width: "220px",
                  alignItems: "center",
                  background: "#fff",
                  overflowX: "scroll",
                  borderRadius: "3px"
                }}
              > 
                <img
                  src={d.imgSrc || Avatar}
                  style={{borderRadius: "3px", height: "25px"}}
                  alt={d.tag || ""}
                />
                <span style={{ fontSize: "10px", overflowX: "hidden"}}>
                  <b>{d.displayText || ""}</b>  
                </span>
              </div>
          )}
          </div>
        </div>
        <div className={trans.length > 1 ? "flex items-center mt-0 mb-6" : "flex items-center mt-12 mb-6"}>
          {/* <Link href={login}> */}
          <Link to="/new-home">
            <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.8rem]  px-[2.3rem]  w-full sm:w-auto">
              <p>Get Started &nbsp; &rarr; </p>
            </Button>
          </Link>
        </div>
        <div className="flex gap-6 mb-6">

          <div onClick={() => window.open("https://bit.ly/payscribe-android")} style={{cursor: "pointer"}} className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
            <div className="mr-3">
              <svg viewBox="30 336.7 120.9 129.2" width={30}>
                <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
                <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
              </svg>
            </div>
            <div>
              <div className="text-xs">GET IT ON</div>
              <div className="text-xl font-semibold font-sans -mt-1">Google Play</div>
            </div>
          </div>


          <div onClick={() => window.open("https://apple.co/3y7gi0x")} style={{cursor: "pointer"}}  className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center">
            <div className="mr-3">
              <svg viewBox="0 0 384 512" width={30}>
                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            </div>
            <div>
              <div className="text-xs">Download on the</div>
              <div className="text-2xl font-semibold font-sans -mt-1">App Store</div>
            </div>
          </div>

          </div>
      </div>
      <div className="w-[100%] md:w-[50%] mt-[4rem]">
        <img
          src={HomeSmile}
          alt="Payscribe - Manage your finances while spending on daily essential bills."
        />
      </div>
    </header>
  );
};

export default Header;
