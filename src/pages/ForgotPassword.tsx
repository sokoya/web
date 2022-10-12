import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/Payscribe-Logo-200-x-50.png";
import HeroImg from "../assets/login/hero.svg";
import Input from "../components/Input";

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <main>
      <div className="h-screen flex">
        <div className="w-full mx-auto md:w-[60%] h-[100%]">
          <div className="my-[2rem]">
            <Link to="/">
              <img className="mx-auto" src={LogoImg} alt="" />
            </Link>
          </div>
          <div className="text-center mt-[9rem]">
            <h1 className="text-3xl mb-2">Forgot Password?</h1>
            <p className="mx-[4rem] sm:mx-0 mb-[5rem]">
              Enter your email address below and we will send you a password
              reset link
            </p>
            <form>
              <div className="w-[80%] mx-auto">
                <Input
                  type="email"
                  label="Email"
                  placeholder="Email"
                  class=" w-full px-3 py-4 "
                  divclass="my-6"
                  labelclass="text-[1.2rem]"
                />
                 <Input
                  type="submit"
                  class="w-full cursor-pointer py-3 text-white text-lg bg-primary2"
                  value="Reset Password"
                  placeholder=""
                  divclass="my-3"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-[40%] h-[100%] ml-auto bg-[#81818121] hidden md:block">
          <div className="mt-[5rem] w-[100%]">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
