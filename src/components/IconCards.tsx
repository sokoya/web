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
    <div className=" w-full  sm:w-auto  text-center mb-[2rem] sm:mb-[4rem] sm:mx-[1rem]">
      <div
        style={{ backgroundColor: props.iconBgColor, color: props.iconColor }}
        className="my-[2rem] rounded-full w-[3rem] h-[3rem] mx-auto flex items-center justify-center text-4xl "
      >
        {props.icon}
      </div>
      <h1 className="font-bold mb-[1rem] text-lg ">{props.header}</h1>
      <p className="text-secondary1">{props.content}</p>
      <a href="/">{props.linkName}</a>
    </div>
  );
};

export default IconCards;
