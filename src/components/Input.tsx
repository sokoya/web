import React from "react";

interface Props {
  placeholder?: string;
  changed?: () => void;
  class: string;
  label?: string;
  type: string;
  value?: string;
  divclass?: string;
  labelclass?: string;
}

const Input = (props: Props) => {
  return (
    <div className={` ${props.divclass}`}>
      {props.label ? (
        <label className={`block text-left mb-1 ${props.labelclass}`}>
          {props.label}
        </label>
      ) : null}
      <input
        className={`${props.class} border outline-none shadow-sm `}
        onChange={props.changed}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;