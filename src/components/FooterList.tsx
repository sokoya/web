import React from "react";
import { Link } from "react-router-dom";

interface Props {
  footerItems: any[];
  header: string;
}

const FooterList = (props: Props) => {
  const footerListJSX = (
    <div className="text-white  ">
      <h1 className="mb-4 font-bold text-lg">{props.header}</h1>

      {props.footerItems.map((el, index) => (
        <li className="my-2" key={index}>
          <Link className="font-light text-sm" target={el.blank? "_blank" : ""} to={el.url}>{el.title}</Link>
        </li>
      ))}
    </div>
  );
  return <ul>{footerListJSX}</ul>;
};

export default FooterList;
