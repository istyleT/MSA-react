import { useEffect, useState } from "react";

export function useQueryInit(query) {
  const [loading, setLoading] = useState(true);
  const [datainit, setDatainit] = useState([]);
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchDatainit() {
        try {
          const res = await fetch(
            // `https://servermsasalecar-ce20833080b1.herokuapp.com/${query}`,
            `http://localhost:4000/${query}`,
            {
              method: "GET",
              signal: controller.signal,
              headers: {
                infoept: "application/form-data",
                "Content-Type": "application/json",
              },
            }
          );
          if (!res.ok) throw new Error("Data fetching failed");
          const data = await res.json();
          setDatainit(data.data);
        } catch (err) {
          console.log(err);
          if (err.name !== "AbortError") {
            console.log(err);
          }
        } finally {
          setLoading(false);
        }
      }
      fetchDatainit();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { loading, datainit };
}
