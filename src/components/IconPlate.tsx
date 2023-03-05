import React from "react";
interface Props {
  title?: string;
  number?: string;
  body: string;
  icon: React.ReactNode;
}

const IconPlate = (props: Props) => {
  return (
    <div className=" w-full">
      <div
        className={`${
          props.number ? "flex justify-end items-center flex-row-reverse" : ""
        } `}
      >
        <div className="text-primary2 w-full text-5xl bp3:text-4xl mb-4">
          {props.icon}
        </div>
        <h1
          className={`text-3xl bp3:text-xl font-semibold mb-5 ${
            props.number ? "mr-6" : ""
          } `}
        >
          {props.title || props.number}
        </h1>
      </div>
      <p className="text-sm sm:text-xl text-[#151515f1]">{props.body}</p>
    </div>
  );
};

export default IconPlate;
