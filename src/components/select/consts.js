export const selectStyles = {
  input: (provided) => ({
    ...provided,
    fontSize: "0.875rem",
    fontWeight: "500",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: "0.875rem",
    fontWeight: "500",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "0.875rem",
    fontWeight: "500",
  }),
  control: (provided, state) => ({
    ...provided,
    padding: "0.75rem",
    borderRadius: "0.375rem",
    borderColor: state.isFocused ? "#000" : "#e5e7eb",
    border: state.isFocused ? "2px solid #000" : provided.border,
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
    "&:hover": {
      borderColor: state.isFocused ? "#000" : "#e5e7eb",
      border: state.isFocused ? "2px solid #000" : provided.border,
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
    },
  }),
};
