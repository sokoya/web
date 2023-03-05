import React, { useState } from "react";
import NavDisclosure from "./NavDisclosure";
import { navList } from "../listData/nav";
import { Link } from "react-router-dom";
import Button from "./Button";
import { createAccount, login } from "../helpers/Links";
interface Props {
  show: boolean;
  closeNav: () => void;
}

const NavMobile = (props: Props) => {
  const [openDisclosure, setOpenDisclosure] = useState<string>("");
  const disclosures = (
    <>
      {navList.map((el) => (
        <NavDisclosure
          clicked={(val: string) => setOpenDisclosure(val.toLowerCase())}
          key={el.title}
          navitems={el.items}
          navtitle={el.title}
          documentation={el.documentation}
          open={openDisclosure}
          closeNav={props.closeNav}
        />
      ))}
    </>
  );
  return (
    <nav
      className={`${
        props.show ? "translate-x-0" : "translate-x-[100%]"
      }  bg-white overflow-scroll transition-all z-50 w-full h-screen fixed top-0 left-0`}
    >
      <div className="mt-[8rem]">{disclosures}</div>
      <div className="px-[2rem] mt-[5rem]">
        <a href={login}>
          <Button class="w-full border border-primary2 mb-4  font-semibold text-primary1 py-3 px-6   rounded-xl">
            Sign In
          </Button>
        </a>
        <a href={createAccount}>
          <Button class="w-full border border-primary2  bg-primary2  text-white py-3 px-6 mr-8 bp2:mr-0 ">
            Create Account
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default NavMobile;
