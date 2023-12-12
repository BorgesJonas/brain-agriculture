/* eslint-disable react/prop-types */
import { useEffect, useState, forwardRef } from "react";

import * as Styles from "./styles";

export const InputComponent = forwardRef(({ maskFn, ...props }, ref) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const newValue = maskFn ? maskFn(e.target.value) : e.target.value;
    setValue(newValue);
    props.onChange(newValue);
  }

  useEffect(() => {
    const newValue = maskFn ? maskFn(props.value) : props.value;
    setValue(newValue);
    props.onChange(newValue);
  }, [maskFn, props.value]); // eslint-disable-line

  return (
    <Styles.Input {...props} value={value} ref={ref} onChange={handleChange} />
  );
});

InputComponent.displayName = "InputComponent";
