import { createContext, useContext, useState, useEffect } from "react";
import { getClients, postClient, putClient, deleteClient } from "src/services";

export const ClientsContext = createContext({});
export const useClientsContext = () => useContext(ClientsContext);

export function ClientsProvider({ children }) {
  const [clients, setClients] = useState([]);

  function handleAddClient(client) {
    postClient(client).then((data) => setClients([...clients, data]));
  }

  function handleUpdateClient(clientNewData) {
    putClient(clientNewData.id, clientNewData).then((data) => {
      const newClients = clients.map((client) =>
        client.id === clientNewData.id ? data : client
      );
      setClients(newClients);
    });
  }

  function handleDeleteClient(id) {
    deleteClient(id).then(() => {
      const newClients = clients.filter((client) => client.id !== id);
      setClients(newClients);
    });
  }

  const value = {
    clients,
    onAddClient: handleAddClient,
    onUpdateClient: handleUpdateClient,
    onDeleteClient: handleDeleteClient,
  };

  useEffect(() => {
    getClients().then((data) => setClients(data));
  }, []);

  return (
    <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
  );
}
