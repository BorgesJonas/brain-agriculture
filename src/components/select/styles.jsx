import styled from "styled-components";

export const SelectWrapper = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

export const LabelWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled("label")`
  font-weight: 600;
  text-transform: capitalize;
`;
