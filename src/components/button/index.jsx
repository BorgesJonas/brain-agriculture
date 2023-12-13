import * as Styles from "./styles";

export function Button(props) {
  const { danger } = props;
  return (
    <Styles.Button {...props} danger={danger}>
      {props.children}
    </Styles.Button>
  );
}
