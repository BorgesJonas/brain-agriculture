import * as Styles from "./styles";

export function Button(props) {
  const { variant, ...otherProps } = props;

  return (
    <Styles.Button {...otherProps} variant={variant}>
      {props.children}
    </Styles.Button>
  );
}
