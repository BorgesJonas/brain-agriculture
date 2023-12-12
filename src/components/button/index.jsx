/* eslint-disable react/prop-types */
import * as Styles from "./styles";

export function Button({ danger, ...props }) {
  return (
    <Styles.Button {...props} danger={danger}>
      {props.children}
    </Styles.Button>
  );
}
