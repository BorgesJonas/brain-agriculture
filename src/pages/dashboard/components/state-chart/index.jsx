import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { useClientsContext } from "src/context";
import { states, generateColors } from "src/utils";
import { Card } from "../card";

ChartJS.register(ArcElement, Tooltip, Legend);

export function StateChart() {
  const { clients } = useClientsContext();
  const colors = generateColors(states.length);

  const totalsByState = clients.reduce((acc, user) => {
    const state = user.state.value;
    acc[state] = (acc[state] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: states.map((estado) => estado.label),
    datasets: [
      {
        data: states.map((estado) => totalsByState[estado.value] || 0),
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return (
    <Card title="Total por Estado">
      <Pie data={data} />
    </Card>
  );
}
