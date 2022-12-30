import React, { ReactNode } from "react";

interface Props {
  content: ReactNode;
  header: string;
  icon?: ReactNode;
  links?: ReactNode;
  linkName?: ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  extraClass?: string;
  alignStyle?: "left";
}

const IconCards2 = (props: Props) => {
  return (
    <div
      className={` h-full  pt-[1rem]  w-full ${
        props.alignStyle === "left" ? "" : "text-center"
      } ${
        props.extraClass ? props.extraClass : ""
      } mb-[1rem] sm:mb-[4rem] `}
    >
      <div className="my-auto">
        <div
          style={{ backgroundColor: props.iconBgColor, color: props.iconColor }}
          className={`my-[2rem] mb-[3rem] rounded-full h-[5rem] w-[5rem] ${
            props.alignStyle === "left" ? "" : "mx-auto "
          } flex items-center justify-center text-4xl `}
        >
          {props.icon}
        </div>
        <h1 className="font-bold mb-[2rem] text-lg ">{props.header}</h1>
        <p className="text-[#151515f1]">{props.content}</p>
        <a href="/">{props.linkName}</a>
      </div>
    </div>
  );
};

export default IconCards2;
