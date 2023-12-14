import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { useClientsContext } from "src/context";
import { generateColors } from "src/utils";
import { Card } from "../card";

ChartJS.register(ArcElement, Tooltip, Legend);

export function AgriculturalAndVegetationChart() {
  const { clients } = useClientsContext();

  const totalAgriculturalArea = clients.reduce(
    (total, client) => total + client.agriculturalArea,
    0
  );

  const totalVegetationArea = clients.reduce(
    (total, client) => total + client.vegetationArea,
    0
  );

  const colors = generateColors(2);

  const data = {
    labels: ["Área agricultável", "Área de Vegetação"],
    datasets: [
      {
        data: [totalAgriculturalArea, totalVegetationArea],
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return (
    <Card title="Total por uso de solo">
      <Pie data={data} />
    </Card>
  );
}
