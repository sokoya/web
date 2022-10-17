import React, { useState } from "react";
import Button from "./Button";
import Logo from "../assets/Payscribe-Logo-2000x-634.png";
import NavPopOver from "./NavPopOver";
import { navList } from "../listData/nav";
import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";
type Props = {};

const Nav = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const navLinksJSX = (
    <ul className="items-center flex ">
      {navList.map((el, index) => (
        <li key={index}>
          <NavPopOver
            navitems={el.items}
            navtitle={el.title}
            documentation={el.documentation}
          />
        </li>
      ))}
    </ul>
  );
  const hambugerClass = "transition-all bg-primary2 w-full h-[3px] absolute";
  return (
    <>
    <div className=" block md:hidden">

      <NavMobile show={open} />
    </div>
      <nav
        className={`flex fixed bg-white z-[120] w-full left-0 px-[2rem] md:px-[3rem] top-0 items-center py-[1.5rem]`}
      >
        <div className="w-[8rem] mr-auto">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden bp4:block mr-auto">{navLinksJSX}</div>
        <div className=" hidden bp4:block">
          <Link to="/login">
            <Button class="  font-semibold text-primary1 py-3 px-6   rounded-xl">
              Sign In
            </Button>
          </Link>
          <Link to="/login">
            <Button class="bg-primary2  text-white py-2 px-6 mr-8 bp2:mr-0 ">
              Create Account
            </Button>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="w-[2rem] sm:w-[1.5rem] h-[12px] relative block bp4:hidden transition-all"
        >
          <div
            className={`${hambugerClass} ${
              open ? "-rotate-45 top-[5px]" : "top-0"
            } `}
          ></div>
          <div
            className={`${hambugerClass} ${open ? "opacity-0" : ""}  top-[7px]`}
          ></div>
          <div
            className={`${hambugerClass} ${
              open ? "top-[5px] rotate-45" : "top-[14px]"
            } `}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
