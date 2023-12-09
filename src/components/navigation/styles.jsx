import styled from "styled-components";

export const Nav = styled("nav")`
  border-bottom: solid 1px #e5e7eb;
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
  width: 100%;
  padding: 1.25rem 3rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const Brand = styled("div")`
  font-weight: 600;
`;

export const Links = styled("div")`
  font-size: 1.125rem;
  line-height: 1.75rem;
  gap: 1rem;
  display: flex;
  align-items: center;

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
