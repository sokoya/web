import React, { ReactNode } from "react";

interface Props {
  class: string;
  children: ReactNode;
  clicked?: ()=>void
}

const Button = (props: Props) => {
  return <button onClick={props.clicked} className={`${props.class} rounded-md`}>{props.children}</button>;
};

export default Button;
