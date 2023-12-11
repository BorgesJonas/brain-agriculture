/* eslint-disable react/prop-types */
import * as Styles from "./styles";

export function Button(props) {
  return <Styles.Button {...props}>{props.children}</Styles.Button>;
}
