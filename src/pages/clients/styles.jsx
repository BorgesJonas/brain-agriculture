import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 59rem;
  padding: 1.25rem;
`;

export const UsersList = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 1.25rem 0;
  list-style-type: none;
`;

export const Panel = styled("div")`
  border-radius: 0.375rem;
  border: solid 1px #e5e7eb;
  box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
`;

export const Header = styled("header")`
  color: #333;
  background-color: rgb(241 245 249 / 1);
  border-color: #ddd;
  padding: 0.875rem 1rem;
  border-bottom: solid 1px #e5e7eb;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EditLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;

export const PanelContent = styled("div")`
  font-size: 0.875rem;
  gap: 0.5rem 0;
  padding: 0.875rem 1rem;
`;

export const PanelRow = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  strong {
    font-weight: 600;
  }

  p {
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const Crops = styled("ul")`
  display: flex;
  gap: 0 2rem;

  @media (max-width: 768px) {
    display: block;
    gap: 0;
  }
`;
