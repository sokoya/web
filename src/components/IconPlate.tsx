import React from "react";
interface Props {
  title: string;
  body: string;
  icon: React.ReactNode;
}

const IconPlate = (props: Props) => {
  return (
    <div className="mb-[2rem]">
      <div className="text-primary2 text-4xl mb-4">{props.icon}</div>
      <h1 className="text-xl font-semibold mb-1">{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};

export default IconPlate;
