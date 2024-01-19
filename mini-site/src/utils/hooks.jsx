import { useEffect, useState } from "react";

export function useFetchBooks(url = "") {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const res = await fetch(url);
      try {
        if (res.ok) {
          const dataReceived = await res.json();
          if (dataReceived) {
            setData(dataReceived);
          }
        } else {
          console.log("pas de data");
        }
      } catch (e) {
        console.error("Impossible de récupérer la resource");
      }
    }

    getBooks();
  }, [url]);

  return { data };
}
