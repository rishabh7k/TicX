export async function makePostRequest(token: string) {
  const url = `http://localhost:4334/tickets/fetch?page=1`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// Example usage:
const token = "your-bearer-token";
makePostRequest(token)
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
