import { useClientsContext } from "src/context";

import { NoClientsPage } from "src/components";

import {
  TotalArea,
  TotalHectares,
  StateChart,
  CropsChart,
  AgriculturalAndVegetationChart,
} from "./components";

import * as Styles from "./styles";

export function DashBoard() {
  const { clients } = useClientsContext();

  return (
    <>
      {clients.length ? (
        <>
          <Styles.Section>
            <Styles.Col>
              <Styles.Totals>
                <TotalArea />
                <TotalHectares />
                <AgriculturalAndVegetationChart />
                <CropsChart />
              </Styles.Totals>
            </Styles.Col>
            <Styles.Col>
              <StateChart />
            </Styles.Col>
          </Styles.Section>
        </>
      ) : (
        <NoClientsPage />
      )}
    </>
  );
}
