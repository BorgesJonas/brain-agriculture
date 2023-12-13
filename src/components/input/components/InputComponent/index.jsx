import { useEffect, useState, forwardRef } from "react";

import * as Styles from "./styles";

export const InputComponent = forwardRef((props, ref) => {
  const { value, maskFn, onChange } = props;
  const [inputValue, setInputValue] = useState("");

  function handleChangeValue(valueToChange) {
    const newValue = maskFn ? maskFn(valueToChange) : valueToChange;
    setInputValue(newValue);
    onChange(newValue);
  }

  function handleChange(e) {
    handleChangeValue(e.target.value);
  }

  useEffect(() => {
    handleChangeValue(value);
  }, [maskFn, value]); // eslint-disable-line

  return (
    <Styles.Input
      {...props}
      value={inputValue}
      ref={ref}
      onChange={handleChange}
    />
  );
});

InputComponent.displayName = "InputComponent";
