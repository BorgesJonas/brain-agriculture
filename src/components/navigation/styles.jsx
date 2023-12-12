import styled from "styled-components";

export const Nav = styled("nav")`
  border-bottom: solid 1px #e5e7eb;
  background-color: rgb(241 245 249 / 1);
  width: 100%;
  padding: 1.25rem 3rem;
  justify-content: space-between;
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px 0;
  }
`;

export const Brand = styled("div")`
  font-weight: 600;
  gap: 0 8px;
  display: flex;
  align-items: center;
`;

export const Links = styled("div")`
  gap: 1rem;
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    font-size: 0.875rem;
    color: inherit;
    text-decoration: inherit;
  }
`;
