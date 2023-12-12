/* eslint-disable react/prop-types */
import { findInputError, isFormInvalid } from "../../utils";
import { useFormContext, Controller } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { InputError } from "../input-error";
import { InputComponent } from "./components/InputComponent";

import * as Styles from "./styles";

export function Input({ validation, maskFn, ...props }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, props.name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <Controller
      control={control}
      name={props.name}
      rules={validation}
      defaultValue=""
      render={({ field }) => (
        <Styles.InputWrapper>
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
          <InputComponent {...field} {...props} maskFn={maskFn} />
        </Styles.InputWrapper>
      )}
    />
  );
}
