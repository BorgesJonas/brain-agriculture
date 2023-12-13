import * as Styles from "./styles";

export function Card(props) {
  return (
    <Styles.Card>
      <h5>{props.title}</h5>
      {props.children}
    </Styles.Card>
  );
}
