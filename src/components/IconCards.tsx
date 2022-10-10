import React, { ReactNode } from "react";

interface Props {
  content: ReactNode;
  header: string;
  icon?: ReactNode;
  links?: ReactNode;
  linkName?: ReactNode;
  iconBgColor: string;
  iconColor: string;
}

const IconCards = (props: Props) => {
  return (
    <div className=" bg-white shadow-lg h-[23rem] lg:h-[20rem] px-8  w-full  sm:w-auto  text-center mb-[2rem] sm:mb-[4rem] sm:mx-[1rem]">
      <div className="my-auto">
        <div
          style={{ backgroundColor: props.iconBgColor, color: props.iconColor }}
          className="my-[2rem] mb-[3rem] rounded-full h-[5rem] w-[5rem] mx-auto flex items-center justify-center text-4xl "
        >
          {props.icon}
        </div>
        <h1 className="font-bold mb-[2rem] text-lg ">{props.header}</h1>
        <p className="text-secondary1">{props.content}</p>
        <a href="/">{props.linkName}</a>
      </div>
    </div>
  );
};

export default IconCards;
