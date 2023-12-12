import { Link } from "react-router-dom";
import { FaFeatherAlt } from "react-icons/fa";

import * as Styles from "./styles";

export const Navigation = () => {
  return (
    <Styles.Nav>
      <Styles.Brand>
        <FaFeatherAlt />
        Brain Agriculture
      </Styles.Brand>
      <Styles.Links>
        <Link to="dashboard">Dashboard</Link>
        <Link to="cadastro">Cadastro</Link>
      </Styles.Links>
    </Styles.Nav>
  );
};
