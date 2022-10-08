import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return <div className="">{props.children}</div>;
};

export default Layout;
