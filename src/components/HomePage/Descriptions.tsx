import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  header: string;
  body: ReactNode;
  button?: ReactNode;
}

const Descriptions = (props: Props) => {
  return (
    <div className="w-full my-[5rem]">
      <div className="flex items-center text-lg  font-medium">
        <div className="text-primary2 mr-3 text-xl ">{props.icon}</div>
        <h1 className="text-base">{props.header}</h1>
      </div>
      <p className="my-8 text-sm">{props.body}</p>
      {props.button}
    </div>
  );
};

export default Descriptions;
