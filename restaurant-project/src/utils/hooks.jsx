import { useEffect, useState } from "react";

export function useFetchData(url = "") {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getMeals() {
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

    getMeals();
  }, [url]);

  return data;
}
