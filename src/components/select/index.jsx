/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence } from "framer-motion";

import { InputError } from "../input-error";
import { findInputError, isFormInvalid } from "../../utils";

import * as Styles from "./styles";

const CloseIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export function Select({ options, validation, isMulti, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : "");
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
    let newValue;
    if (isMulti) {
      if (selectedValue.find((selected) => selected.value === option.value)) {
        newValue = selectedValue.filter(
          (selected) => selected.value !== option.value
        );
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    setValue(props.name, newValue);
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
    console.log("SELECTED", selectedValue);
  }, [selectedValue]);

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

  function onTagRemove(option) {
    const newValue = selectedValue.filter((o) => o.value !== option.value);
    setSelectedValue(newValue);
    // onChange(newValue);
  }

  function getDisplay() {
    if (isMulti) {
      return (
        <Styles.MultiTags>
          {selectedValue.map((option) => (
            <div key={option.value}>
              {option.label}
              <button
                onClick={() => onTagRemove(option)}
                className="dropdown-tag-close"
              >
                <CloseIcon />
              </button>
            </div>
          ))}
        </Styles.MultiTags>
      );
    }
    return selectedValue.label;
  }

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
        <Styles.SelectValue>{getDisplay()}</Styles.SelectValue>
        <Styles.Input
          value=""
          {...register(props.name, validation)}
          ref={inputRef}
        />
        <Styles.OpenButton onClick={handleInputClick} isOpen={isOpen} />
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
