import { Link } from "react-router-dom";
import LogoImg from "../assets/Payscribe-Logo-200-x-50.png";
import HeroImg from "../assets/login/hero.svg";
import Input from "../components/Input";

type Props = {};

const Login = (props: Props) => {
  return (
    <main className="">
      <div className="w-full h-screen flex ">
        <div className="w-full md:w-[60%] relative ">
          <div className="my-[2rem]">
            <Link to="/">
              <img className="mx-auto" src={LogoImg} alt="" />
            </Link>
          </div>
          <div className="text-center mt-[5rem] md:mt-0">
            <h1 className="text-[2.7rem] mb-1">Login</h1>
            <p className="mb-8">Welcome back! Please enter your credentials</p>
            <div className="w-[90%] sm:w-[70%] mx-auto">
              <form>
                <Input
                  type="email"
                  label="Email *"
                  placeholder="Email"
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
                <div className="text-sm flex items-center my-6">
                  <label className="mr-auto flex items-center">
                    <Input class="mr-1" type="checkbox" />
                    Remeber Me
                  </label>
                </div>
                <Input
                  type="submit"
                  class="w-full cursor-pointer py-3 text-white text-lg bg-primary2"
                  value="Login"
                  placeholder=""
                  divclass="my-3"
                />
              </form>
              <div className="flex items-center">
                <Link className="mr-auto" to={"/forgot-password"}>
                  <p className=" text-primary2">Forgot Password?</p>
                </Link>
                <div className="text-center flex">
                  <p className="mr-1">Not signed up yet?</p>
                  <Link to="/signup">
                    <p className="text-primary2">Create</p>
                  </Link>
                </div>
              </div>
            </div>
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

export default Login;
