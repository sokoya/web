import React from "react";

interface Props {
  footerItems: string[];
  header: string;
}

const FooterList = (props: Props) => {
  const footerListJSX = (
    <div className="text-white  ">
      <h1 className="mb-4 font-bold opacity-60 text-xl">{props.header}</h1>

      {props.footerItems.map((el, index) => (
        <li className="my-2" key={index}>
          <a className="text-lg" href="/">{el}</a>
        </li>
      ))}
    </div>
  );
  return <ul>{footerListJSX}</ul>;
};

export default FooterList;
