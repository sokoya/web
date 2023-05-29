import React from "react";
import Button from "../Button";
import StudentImg from "../../assets/ambassadors/student2.jpeg";
import MainImg from "../../assets/ambassadors/students.jpeg";
import { Link } from "react-router-dom";
import { reg_link } from "../../listData/homepage";
import { useNavigate } from "react-router-dom";


type Props = {};

function Header({}: Props) {
  let history = useNavigate();
  return (
    <>
      <section className="pt-32 sm:pt-36 md:pt-40 lg:pt-36">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 pb-[0px]">
          <div className="text-center">
            <div className="items-center gap-12 lg:flex">
              <div className="md:mx-auto md:w-3/4 lg:ml-0 lg:w-1/2">
                <h1 className="text-center text-4xl font-bold text-blue-900 dark:text-white sm:text-5xl lg:text-left lg:text-6xl">
                  Be financially educated.
                </h1>
                <p className="mt-5 mb-4 text-center text-sm text-gray-600 dark:text-gray-300 sm:text-sm lg:text-left">
                  Payscribe ambassador program is a national experiential
                  learning program that empowers students with the tools needed
                  to learn and cultivate personal financial management skills
                  very early in life.
                </p>

                <button
                onClick={() => history("/join-waitlist")}
                  type="button"
                  className="px-4 py-3 mt-5 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
                >
                  <span className="ml-2">Join Our Waitlist</span>
                </button>
              </div>
              <img
                className="mt-12 md:mx-auto md:w-2/3 lg:mt-0 lg:ml-0 lg:w-1/2"
                src={MainImg}
                alt="Users"
                width={1865}
                height={1750}
                style={{borderRadius: "10px"}}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-13" style={{background: "#e1f6ff"}}>
  <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
    <div className="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
      <div className="md:5/12 lg:w-6/12 py-5" style={{display: "flex", justifyContent: "center"}}>
        <img className="md:-ml-8" src={StudentImg} alt="Student" style={{borderRadius: "10px", height: "550px"}} loading="lazy" width={1779} height={1592} />
      </div>
      <div className="md:7/12 lg:w-6/12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl" style={{fontSize: "3.3rem", letterSpacing: "-1px", lineHeight: '1.25', color: "#082552"}}>Build career-relevant skills</h2>
        <p className="mt-8 mb-[30px] text-gray-600 dark:text-gray-300" style={{color: "rgba(8,37,82,.6)!important", fontSize: "1.3rem"}}>Build tech skills through task-driven networking and collaboration with your peers from over 80 campuses in Nigeria.</p>
        <a href="#" className="relative flex h-11 w-max items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
          <span style={{color: "#0066f5", fontSize: "12.5px"}}>LEARN MORE ↓</span>
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Header;
