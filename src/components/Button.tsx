import React, { ReactNode } from "react";

interface Props {
  class: string;
  children: ReactNode;
}

const Button = (props: Props) => {
  return <button className={`${props.class} rounded-md`}>{props.children}</button>;
};

export default Button;
