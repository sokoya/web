import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return <div className="px-[2rem] md:px-[3rem] max-w-[1500px] mx-auto">{props.children}</div>;
};

export default Layout;
