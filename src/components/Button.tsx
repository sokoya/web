import React, { ReactNode } from "react";

interface Props {
  class: string;
  children: ReactNode;
}

const Button = (props: Props) => {
  return <button className={props.class}>{props.children}</button>;
};

export default Button;
