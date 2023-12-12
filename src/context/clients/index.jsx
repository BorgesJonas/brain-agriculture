/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

export const ClientsContext = createContext({});
export const useClientsContext = () => useContext(ClientsContext);

export function ClientsProvider({ children }) {
  const [clients, setClients] = useState([]);

  function handleAddClient(client) {
    setClients([...clients, client]);
  }

  function handleUpdateClient(clientNewDatA) {
    const newClients = clients.map((client) =>
      client.id === clientNewDatA.id ? clientNewDatA : client
    );
    setClients(newClients);
  }

  function handleDeleteClient(id) {
    const newClients = clients.filter((client) => client.id === id);
    setClients(newClients);
  }

  const value = {
    clients,
    onAddClient: handleAddClient,
    onUpdateClient: handleUpdateClient,
    onDeleteClient: handleDeleteClient,
  };

  useEffect(() => {
    if (clients.length)
      localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    const savedClients = JSON.parse(localStorage.getItem("clients"));
    if (savedClients) setClients(savedClients);
  }, []);

  return (
    <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
  );
}
