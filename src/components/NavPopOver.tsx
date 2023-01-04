import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { RiArrowDownSLine } from "react-icons/ri";
import { Fragment, useState } from "react";
import { INavItems } from "../listData/nav";
import APIImg from "../assets/nav/API.svg";
import {Link} from "react-router-dom"

interface Props {
  navtitle: string;
  navitems: INavItems[];
  documentation: boolean;
}

export default function NavPopOver(props: Props) {
  const [openNav, setOpen] = useState<boolean>(false);
  return (
    <div className="  max-w-sm  ">
      <Popover className="relative">
        <Popover.Button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className={`
                ${openNav ? "" : "text-opacity-90"}
                hover:text-[#7b9fd8] group inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-primary1 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span>{props.navtitle}</span>
          <RiArrowDownSLine
            className={`${openNav ? " rotate-180" : "text-opacity-70"}
              ml-1 h-5 w-5 text-sm  transition duration-150 ease-in-out group-hover:text-opacity-80`}
            aria-hidden="true"
          />
        </Popover.Button>
        <Transition
          show={openNav}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="absolute  left-1/2 z-10 mt-0 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
          >
            <div className="py-[1rem] overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative text-sm grid gap-8 bg-white p-7 lg:grid-cols-2">
                {props.navitems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className=" -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <div
                      className="flex w-[.5rem] bg-primary2 rounded-md  shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 text-sm"
                    >
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              {props.documentation ? (
                <div className="bg-gray-50 p-4 flex items-center">
                  <img src={APIImg} alt="" className="w-[1.5rem] mr-2" />
                  <a
                    href="##"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <span className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        API Documentation
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500">
                      Guides and references to build Payscribe
                    </span>
                  </a>
                </div>
              ) : null}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
