/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { findInputError, isFormInvalid } from "../../utils";
import { useFormContext } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { InputError } from "../input-error";

import * as Styles from "./styles";

export function Input({ validation, className, maskFn, ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputErrors = findInputError(errors, props.name);
  const isInvalid = isFormInvalid(inputErrors);

  function handleChange(event) {
    if (maskFn) {
      event.target.value = maskFn(event.target.value);
    }
  }

  return (
    <Styles.InputWrapper className={className}>
      <Styles.LabelWrapper>
        <Styles.Label htmlFor={props.id}>{props.label}</Styles.Label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </Styles.LabelWrapper>

      <Styles.Input
        {...register(props.name, validation)}
        {...props}
        onChange={handleChange}
      />
    </Styles.InputWrapper>
  );
}
