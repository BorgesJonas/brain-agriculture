/* eslint-disable react/prop-types */
import { MdError } from "react-icons/md";

import * as Styles from "./styles";

export function InputError({ message }) {
  return (
    <Styles.ErrorMessage {...framer_error}>
      <MdError />
      {message}
    </Styles.ErrorMessage>
  );
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
