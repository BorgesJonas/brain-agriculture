import { useClientsContext } from "src/context";
import { FaEdit } from "react-icons/fa";

import { numberMask, documentMask } from "src/utils";
import { NoClientsPage } from "src/components";

import * as Styles from "./styles";

export function Clients() {
  const { clients } = useClientsContext();

  return (
    <>
      {clients.length ? (
        <Styles.Section>
          <Styles.UsersList>
            {clients.map((client) => (
              <li key={client.document}>
                <Styles.Panel>
                  <Styles.Header>
                    {client.productorName}
                    <Styles.EditLink to={`/cadastro/${client.id}`}>
                      <FaEdit />
                    </Styles.EditLink>
                  </Styles.Header>
                  <Styles.PanelContent>
                    <Styles.PanelRow>
                      <p>
                        <strong>CPF/CNPJ:</strong>{" "}
                        {documentMask(client.document)}
                      </p>
                      <p>
                        <strong>Nome da Fazenda:</strong> {client.farmName}
                      </p>
                    </Styles.PanelRow>

                    <Styles.PanelRow>
                      <p>
                        <strong>Estado:</strong> {client.state.label}
                      </p>
                      <p>
                        <strong>Cidade:</strong> {client.city}
                      </p>
                    </Styles.PanelRow>

                    <Styles.PanelRow>
                      <p>
                        <strong>Área Total:</strong>{" "}
                        {numberMask(client.totalArea.toString())} ha
                      </p>
                      <p>
                        <strong>Área Agricultável:</strong>{" "}
                        {numberMask(client.agriculturalArea.toString())} ha
                      </p>
                      <p>
                        <strong>Área de Vegetação:</strong>{" "}
                        {numberMask(client.vegetationArea.toString())} ha
                      </p>
                    </Styles.PanelRow>

                    <Styles.PanelRow>
                      <p>
                        <strong>Culturas plantadas:</strong>
                      </p>
                    </Styles.PanelRow>
                    <Styles.Crops>
                      {client.plantedCrops.map((crop) => (
                        <li key={crop.label}>
                          <p>{crop.label}&nbsp;</p>
                        </li>
                      ))}
                    </Styles.Crops>
                  </Styles.PanelContent>
                </Styles.Panel>
              </li>
            ))}
          </Styles.UsersList>
        </Styles.Section>
      ) : (
        <NoClientsPage />
      )}
    </>
  );
}
