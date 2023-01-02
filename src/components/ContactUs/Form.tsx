import React from "react";
import { Link } from "react-router-dom";
import Hero1Img from "../../assets/contact-us/home.jpeg";
import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";
import '../../assets/contact-us/forms.css'

type Props = {};

const Form = (props: Props) => {
  return (
    <div className="max-w-xl mx-auto px-[1rem] py-12 divide-y md:max-w-7xl contact-form flex flex-wrap items-center w-full ">
        {/* <div className="py-8">
            <h1 className="text-4xl font-bold">@tailwindcss/forms examples</h1>
            <p className="mt-2 text-lg text-gray-600">
            An opinionated form reset designed to make form elements easy to style with utility
            classes.
            </p>
            <div className="mt-4 flex space-x-4">
            <a className="text-lg underline" href="https://github.com/tailwindlabs/tailwindcss-forms">Documentation</a>
            <a className="text-lg underline" href="/kitchen-sink.html">Kitchen Sink</a>
            </div>
        </div> */}
        <div className="py-12 sm:px-[2rem]  w-[100%] md:w-[50%] mt-[0rem]">
            <h2 className="text-xl font-bold">We’re Always Here For You!</h2>
            <p className="mt-2 text-md text-gray-600">For general enquiries send us a message with the form below.</p>
            <div className="mt-5 max-w-md">
            <div className="grid grid-cols-1 gap-6">
                <div className="flex gap-2">
                <label className="block w-full">
                <span className="text-gray-700">First name</span>
                <input type="text" className="rounded-lg mt-1 block w-full" placeholder="test" />
                </label>
                <label className="block w-full">
                <span className="text-gray-700">Last name</span>
                <input type="text" className="rounded-lg mt-1 block w-full" placeholder="test" />
                </label>
                </div>
                <label className="block">
                <span className="text-gray-700">Email address</span>
                <input type="email" className="rounded-lg mt-1 block w-full" placeholder="john@example.com" />
                </label>
                <label className="block">
                <span className="text-gray-700">Phone Number</span>
                <input type="tel" className="rounded-lg mt-1 block w-full" placeholder="+23470000000000" />
                </label>
                
                <label className="block">
                <span className="text-gray-700">Message</span>
                <textarea className="mt-1 block w-full" rows={3} defaultValue={""} />
                </label>
                <Button class="font-bold bg-primary2 text-lg xs:text-lg text-white py-[.5rem]  px-[1.5rem]  w-full sm:w-auto">
              <p className="flex items-center justify-center">Submit </p>
                </Button>
            </div>
            </div>
        </div>
        <div className="hidden md:block w-[100%] md:w-[50%] mt-[0rem]">
        <img src={Hero1Img} alt="hero" style={{height: "100%"}}/>
      </div>
        </div>

  );
};

export default Form;
