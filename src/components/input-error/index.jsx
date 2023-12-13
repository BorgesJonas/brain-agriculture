import { MdError } from "react-icons/md";

import { framer_error } from "./consts";

import * as Styles from "./styles";

export function InputError(props) {
  const { message } = props;
  return (
    <Styles.ErrorMessage {...framer_error}>
      <MdError />
      {message}
    </Styles.ErrorMessage>
  );
}
