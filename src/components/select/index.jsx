/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence } from "framer-motion";

import { InputError } from "../input-error";
import { findInputError, isFormInvalid } from "../../utils";

import * as Styles from "./styles";

export function Select({ options, validation, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef();
  const inputRef = useRef();
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, props.name);
  const isInvalid = isFormInvalid(inputErrors);

  function handleInputClick() {
    setIsOpen(!isOpen);
  }

  function onItemClick(option) {
    setSelectedValue(option);
    setValue(props.name, option.value);
  }

  function onSearch(e) {
    setSearchValue(e.target.value);
  }

  function getOptions() {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  }

  useEffect(() => {
    setSearchValue("");
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  return (
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
      <Styles.InputWrapper onClick={handleInputClick}>
        <Styles.Input
          {...register(props.name, validation)}
          ref={inputRef}
          value={selectedValue?.label || ""}
        />
        <Styles.IconWrapper>
          <Styles.Icon isOpen={isOpen} />
        </Styles.IconWrapper>
      </Styles.InputWrapper>
      {isOpen && (
        <Styles.OptionsList>
          <li>
            <Styles.FilterInput
              onChange={onSearch}
              value={searchValue}
              ref={searchRef}
            />
          </li>

          {getOptions().map((option) => (
            <Styles.Option
              onClick={() => onItemClick(option)}
              key={option.value}
            >
              {option.label}
            </Styles.Option>
          ))}
        </Styles.OptionsList>
      )}
    </Styles.SelectWrapper>
  );
}
