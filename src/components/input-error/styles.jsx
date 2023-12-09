import styled from "styled-components";

import { motion } from "framer-motion";

export const ErrorMessage = styled(motion.p)`
  opacity: 1;
  transform: none;
  color: rgb(239 68 68 / 1);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: rgb(254 226 226 / 1);
  border-radius: 0.375rem;
  gap: 0.25rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  margin: 0;
`;
