import { Link } from "react-router-dom";
import HeroImg from "../assets/login/hero.svg";
import LogoImg from "../assets/Payscribe-Logo-200-x-50.png";
import Input from "../components/Input";
import { useState } from "react";
import RadioGroup from "../components/RadioGroup";
import Button from "../components/Button";
type Props = {};

const Signup = (props: Props) => {
  const [optionpage, setOptionpage] = useState<boolean>(true);
  let content;
  if (optionpage) {
    content = (
      <>
        <div className="text-center">
          <h1 className=" mx-4 sm:mx-0 text-3xl">
            What do you want to use payscribe for?
          </h1>
          <RadioGroup />

          <Button
            clicked={() => setOptionpage(false)}
            class="w-[90%] sm:w-[80%] bg-primary2 text-white py-4"
          >
            Next
          </Button>
          <div className="text-center justify-center mt-2 flex">
            <p className="mr-1">Already have an account?</p>
            <Link to="/login">
              <p className="text-primary2">Login</p>
            </Link>
          </div>
        </div>
      </>
    );
  }

  if (!optionpage) {
    content = (
      <>
        <Button
          clicked={() => setOptionpage(true)}
          class="absolute top-[3rem] left-[3rem] underline"
        >
          Go Back
        </Button>
        <h1 className="text-center text-4xl">Create your Account</h1>
        <div className="mx-auto w-[90%] sm:w-[70%]">
          <form action="">
            <div className=" boder flex my-6 justify-between w-full items-center">
              <Input
                class="w-full py-3 px-3 "
                divclass="w-[48%]"
                type="text"
                label="First Name *"
                placeholder="First Name"
              />
              <Input
                class="w-full py-3 px-3"
                divclass="w-[48%]"
                type="text"
                label="Last Name *"
                placeholder="Last Name"
              />
            </div>
            <Input
              class="w-full py-3 px-3"
              divclass="my-6"
              label="Phone"
              type="text"
              placeholder="Enter Your Phone Number"
            />
            <Input
              type="email"
              label="Email *"
              placeholder="Email"
              class="w-full px-3 py-4 "
              divclass="my-6"
            />
            <Input
              type="text"
              label="Referred By (optional)"
              placeholder="payscribe.ng"
              class="w-full px-3 py-4 "
              divclass="my-6"
            />
            <Input
              type="passowrd"
              label="Passowrd *"
              placeholder="Password"
              class="w-full px-3 py-4"
              divclass="my-6"
            />
            <Input
              type="passowrd"
              label="Confirm Passowrd *"
              placeholder="Password"
              class="w-full px-3 py-4"
              divclass="my-6"
            />
            <div className="text-sm  mx-auto flex items-center my-6">
              <label className="mr-auto flex items-center">
                <Input class="mr-2" type="checkbox" />
                <p>
                  I have read, understand and agree to Payscribe's Privacy
                  Policy and Terms and Conditions
                </p>
              </label>
            </div>
            <Input
              type="submit"
              class="w-full cursor-pointer py-3 text-white text-lg bg-primary2"
              value="Create Account"
              placeholder=""
            />
            <div className="text-center justify-center my-3 flex">
              <p className="mr-1">Have an account already?</p>
              <Link to="/login">
                <p className="text-primary2">Login</p>
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  }
  return (
    <main className="">
      <div className="w-full h-screen flex ">
        <div className="w-full md:w-[50%] relative ">
          <div className="my-[2rem] mb-[5rem] mb:mt-0 mt-[5rem] md:mt-0">
            <Link to="/">
              <img className="mx-auto" src={LogoImg} alt="" />
            </Link>
          </div>
          {content}
        </div>
        <div className="w-[50%]  fixed top-0 right-0 h-[100%] ml-auto bg-[#81818121] hidden md:block">
          <div className="mt-[5rem]   w-[100%]">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
