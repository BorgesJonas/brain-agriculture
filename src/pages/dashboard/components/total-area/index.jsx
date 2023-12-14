import { Card } from "../card";

import { useClientsContext } from "src/context";
import { numberMask } from "src/utils";

export function TotalArea() {
  const { clients } = useClientsContext();

  const total = clients.length;

  return (
    <Card title="Total de Fazendas">
      <p>{numberMask(total.toString())}</p>
    </Card>
  );
}
