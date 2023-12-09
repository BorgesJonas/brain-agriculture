import styled from "styled-components";

export const InputWrapper = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LabelWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled("label")`
  font-weight: 600;
  text-transform: capitalize;
`;

export const Input = styled("input")`
  font-weight: 500;
  padding: 1.25rem;
  border-color: rgb(203 213 225 / 1);
  border-width: 1px;
  border-radius: 0.375rem;
  width: 100%;
  border-style: solid;
  border-color: #e5e7eb;
  font-size: 0.875rem;
`;
