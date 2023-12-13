/* eslint-disable react/prop-types */
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { AnimatePresence } from "framer-motion";

import { InputError } from "../input-error";
import { findInputError, isFormInvalid } from "../../utils";

import * as Styles from "./styles";
import { selectStyles } from "./consts";

export function SelectTest({ options, validation, isMulti, ...props }) {
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
      defaultValue={[]}
      rules={validation}
      render={({ field }) => (
        <Styles.SelectWrapper>
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
