const apiUrl = "http://localhost:3001/clients";

export async function getClients() {
  const response = await fetch(apiUrl);
  return response.json();
}

export async function postClient(client) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  });
  return response.json();
}

export async function putClient(id, client) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  });
  return response.json();
}

export async function deleteClient(id) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
