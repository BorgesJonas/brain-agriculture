/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { MdClose } from "react-icons/md";

import { Button } from "src/components";

import * as Styles from "./styles";

export function Modal(props) {
  useEffect(() => {
    if (props.isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [props]);

  return (
    <>
      {props.isVisible && (
        <Styles.Modal>
          <Styles.Overlay />
          <Styles.Content>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            <Styles.Close onClick={props.onClose}>
              <MdClose />
            </Styles.Close>
            <Styles.Footer>
              <Button type="button" danger>
                Confirmar
              </Button>
              <Button type="button" onClick={props.onClose}>
                Cancelar
              </Button>
            </Styles.Footer>
          </Styles.Content>
        </Styles.Modal>
      )}
    </>
  );
}
