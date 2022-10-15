import React from "react";
interface Props {
  title?: string;
  number?: string;
  body: string;
  icon: React.ReactNode;
}

const IconPlate = (props: Props) => {
  return (
    <div className=" w-[100%] bp3:w-[45%] my-[2rem] ">
      <div className={`${props.number ? "flex justify-end items-center flex-row-reverse" : ""} `}>
        <div className="text-primary2 text-5xl bp3:text-4xl mb-4">
          {props.icon}
        </div>
        <h1 className="text-3xl bp3:text-xl font-semibold mb-5 mr-6">
          {props.title || props.number}
        </h1>
      </div>
      <p className="text-2xl bp3:text-base text-[#151515f1]">{props.body}</p>
    </div>
  );
};

export default IconPlate;
