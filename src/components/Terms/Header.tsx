import React from "react";
import HeroImg from "../../assets/rewards/hero.png";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'

type Props = {};

const Header = (props: Props) => {
  return (
<>
<div className="lg:flex lg:items-center lg:justify-between px-[3rem] py-[4rem] mt-[6rem] bg-primary2">
  <div className="min-w-0 flex-1">
    <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">Terms of Service</h2>
   
  </div>
  <div className="mt-0 flex lg:mt-0 lg:ml-4">
  <div className="mt01 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
      <div className="mt-2 flex items-center text-sm text-white">
        
        Home
      </div>
      <div className="mt-2 flex items-center text-sm text-white">
        {/* Heroicon name: mini/map-pin */}
        <b>{">"}</b>
      </div>
      <div className="mt-2 flex items-center text-sm text-white">
        {/* Heroicon name: mini/currency-dollar */}
        
        Terms of Service
      </div>
     
    
    </div>
  </div>
</div>

</>

  );
};

export default Header;
