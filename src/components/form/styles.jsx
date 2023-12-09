import styled from "styled-components";

export const Form = styled("form")`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 59rem;
  padding: 1.25rem;
`;

export const FormInputs = styled("div")`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
