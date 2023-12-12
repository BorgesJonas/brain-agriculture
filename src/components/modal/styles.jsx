import styled from "styled-components";

export const Modal = styled("div")`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const Content = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
  border-radius: 0.375rem;
  padding: 1.25rem;

  h2 {
    font-size: 1.25rem;
  }

  h2,
  p {
    margin-bottom: 1rem;
  }
`;

export const Overlay = styled("div")`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

export const Close = styled("button")`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Footer = styled("footer")`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    gap: 0.5rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
