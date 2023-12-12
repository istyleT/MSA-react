import { useEffect, useState } from "react";
const APIKEY = process.env.REACT_APP_API_BASE_URL;

export function useQueryInit(query) {
  const [loading, setLoading] = useState(true);
  const [datainit, setDatainit] = useState([]);
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchDatainit() {
        try {
          const res = await fetch(`${APIKEY}/${query}`, {
            method: "GET",
            signal: controller.signal,
            headers: {
              infoept: "application/form-data",
              "Content-Type": "application/json",
            },
          });
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
