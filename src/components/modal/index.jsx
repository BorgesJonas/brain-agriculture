import { useEffect } from "react";
import { MdClose } from "react-icons/md";

import { Button } from "src/components";

import * as Styles from "./styles";

export function Modal(props) {
  const { isVisible, title, message, onConfirm, onClose } = props;

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <>
      {props.isVisible && (
        <Styles.Modal>
          <Styles.Overlay />
          <Styles.Content>
            <h2>{title}</h2>
            <p>{message}</p>
            <Styles.Close onClick={onClose}>
              <MdClose />
            </Styles.Close>
            <Styles.Footer>
              <Button type="button" onClick={onConfirm} danger>
                Confirmar
              </Button>
              <Button type="button" onClick={onClose}>
                Cancelar
              </Button>
            </Styles.Footer>
          </Styles.Content>
        </Styles.Modal>
      )}
    </>
  );
}
