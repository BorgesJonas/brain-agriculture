import React from "react";
import styled, { css } from "styled-components";

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

export const InputWrapper = styled("div")`
  position: relative;
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
  cursor: pointer;
`;

export const OpenButton = styled(({ className, isOpen, onClick }) => (
  <button
    className={className}
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
  >
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      stroke="#222"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>
))`
  position: absolute;
  pointer-events: auto;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      svg {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
      }
    `}
`;

export const OptionsList = styled("ul")`
  padding: 5px;
  position: absolute;
  -webkit-transform: translateY(6px);
  -ms-transform: translateY(6px);
  transform: translateY(6px);
  border: 1px solid #dbdbdb;
  border-radius: 6px;
  overflow: auto;
  background-color: #fff;
  z-index: 99;
  max-height: 312px;
  min-height: 50px;
  top: 80%;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const FilterInput = styled("input")`
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Option = styled("li")`
  padding: 7px 10px;
  cursor: pointer;
  -webkit-transition: background-color 0.35s ease;
  transition: background-color 0.35s ease;
  border-radius: 6px;
  font-weight: 500;
`;

export const SelectValue = styled("div")`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.25rem;
  font-weight: 500;
  font-size: 0.875rem;
`;

export const MultiTags = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
