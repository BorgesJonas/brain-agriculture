import styled, { css } from "styled-components";

export const Button = styled("button")`
  background-color: #0d6efd;
  border-radius: 0.375rem;
  border-color: #0d6efd;
  cursor: pointer;
  padding: 1.25rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: #fff;

  ${({ danger }) =>
    danger &&
    css`
      background-color: rgb(239 68 68 / 1);
      border-color: rgb(239 68 68 / 1);
    `};
`;
