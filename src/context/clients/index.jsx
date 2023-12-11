/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ClientsContext = createContext({});
export const useClientsContext = () => useContext(ClientsContext);

export function ClientsProvider({ children }) {
  const [clients, setClients] = useState([{ id: 1 }]);

  function handleAddClient(client) {
    setClients([...clients, client]);
  }

  const value = {
    clients,
    onAddClient: handleAddClient,
  };

  return (
    <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
  );
}
