export function makePostRequest(token: string) {
  const url = `http://localhost:4334/tickets/fetch?page=1`;

  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
      return data; // Resolve the data to the caller
    })
    .catch((error) => {
      throw error; // Rethrow the error to be handled by the caller
    });
}

// Example usage:
const token = "your-bearer-token";
makePostRequest(token)
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
