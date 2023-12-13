import { findInputError, isFormInvalid } from "../../utils";
import { useFormContext, Controller } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { InputError } from "../input-error";
import { InputComponent } from "./components/InputComponent";

import * as Styles from "./styles";

export function Input(props) {
  const { validation, maskFn, id, label, name } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <Controller
      control={control}
      name={name}
      rules={validation}
      defaultValue=""
      render={({ field }) => (
        <Styles.InputWrapper>
          <Styles.LabelWrapper>
            <Styles.Label htmlFor={id}>{label}</Styles.Label>
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
