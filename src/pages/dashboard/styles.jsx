import styled from "styled-components";

export const Section = styled("section")`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 1.25rem;
  display: flex;
  gap: 1.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Col = styled("div")`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Totals = styled("div")`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
