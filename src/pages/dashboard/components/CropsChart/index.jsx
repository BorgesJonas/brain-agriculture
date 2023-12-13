import { Pie } from "react-chartjs-2";

import { useClientsContext } from "src/context";
import { crops, generateColors } from "src/utils";
import { Card } from "../Card";

export function CropsChart() {
  const { clients } = useClientsContext();

  const colors = generateColors(crops.length);

  const frequenciaCulturas = clients.reduce((acc, client) => {
    client.plantedCrops.forEach((crop) => {
      const { value } = crop;
      acc[value] = (acc[value] || 0) + 1;
    });
    return acc;
  }, {});

  const data = {
    labels: crops.map((cultura) => cultura.label),
    datasets: [
      {
        data: crops.map((cultura) => frequenciaCulturas[cultura.value] || 0),
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return (
    <Card title="Total por Cultura">
      <Pie data={data} />
    </Card>
  );
}
