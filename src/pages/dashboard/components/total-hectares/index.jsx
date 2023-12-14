import { Card } from "../card";

import { useClientsContext } from "src/context";
import { numberMask } from "src/utils";

export function TotalHectares() {
  const { clients } = useClientsContext();

  const totalArea = clients.reduce((total, client) => {
    return (total += client.totalArea);
  }, 0);

  return (
    <Card title="Total de Hectares">
      <p>{numberMask(totalArea.toString())} ha</p>
    </Card>
  );
}
