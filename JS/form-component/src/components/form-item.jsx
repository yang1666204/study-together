import React from "react";
export default function FormItem(props) {
  let { setValue, name, label, value } = props;
  const onChange = (value) => {
    setValue(value, name);
  };
  return (
    <div>
      <span>{props.label}:</span>
      {React.isValidElement(props.children) &&
      props.children.type.displayName === "input"
        ? React.cloneElement(props.children, { onChange, value })
        : null}
    </div>
  );
}
FormItem.displayName = "formItem";
