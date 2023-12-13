import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { AnimatePresence } from "framer-motion";

import { InputError } from "../input-error";
import { findInputError, isFormInvalid } from "../../utils";

import * as Styles from "./styles";
import { selectStyles } from "./consts";

export function SelectTest(props) {
  const { options, validation, isMulti, name, id, label } = props;
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
      defaultValue={[]}
      rules={validation}
      render={({ field }) => (
        <Styles.SelectWrapper>
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
          <Select
            {...field}
            {...props}
            placeholder=""
            options={options}
            isMulti={isMulti}
            styles={selectStyles}
            noOptionsMessage={() => "Nenhum resultado encontrado"}
          />
        </Styles.SelectWrapper>
      )}
    />
  );
}
