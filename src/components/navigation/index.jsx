import { BsGithub, BsTwitter } from "react-icons/bs";

import * as Styles from "./styles";

export const Navigation = () => {
  return (
    <Styles.Nav>
      <Styles.Brand>Brain Agriculture</Styles.Brand>
      <Styles.Links>
        <a
          href="https://github.com/Yazdun/react-fcc-forms"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a href="https://twitter.com/Yazdun" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </Styles.Links>
    </Styles.Nav>
  );
};
