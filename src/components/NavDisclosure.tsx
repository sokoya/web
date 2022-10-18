import { Disclosure } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import { INavItems } from "../listData/nav";
interface Props {
  navtitle: string;
  navitems: INavItems[];
  documentation: boolean;
  clicked: (val: string) => void;
  open: string;
}
export default function NavDisclosure(props: Props) {
  const buttonHandler = () => {
    if (
      props.open &&
      props.open.toLowerCase() !== props.navtitle.toLowerCase()
    ) {
      props.clicked(props.navtitle);
    } else if (!props.open) {
      props.clicked(props.navtitle);
    } else {
      props.clicked("");
    }
  };
  return (
    <div className=" w-full my-8 px-[2rem]">
      <button
        className="text-2xl sm:text-4xl  w-full flex items-center outline-none "
        onClick={buttonHandler}
      >
        <p className="mr-auto">{props.navtitle}</p>
        <RiArrowDownSLine />
      </button>
      <div
        className={` ${
          props.open === props.navtitle.toLowerCase()
            ? "max-h-[1000rem] mt-12"
            : "max-h-0"
        } flex items-center  flex-wrap transition-all`}
      >
        {props.navitems.map((el) => (
          <div
            key={el.name}
            className={` ${
              props.open === props.navtitle.toLowerCase() ? "flex" : "hidden"
            } items-center w-[100%] sm:w-[50%] mb-[3rem]`}
          >
            <div className="flex mr-[2rem]  bg-primary2 rounded-md   items-center justify-center text-white h-20 w-20 text-[3rem]">
              {el.icon}
            </div>
            <div className="w-[60%]">
              <h1 className="font-bold text-xl sm:text-2xl">{el.name}</h1>
              <p>{el.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
