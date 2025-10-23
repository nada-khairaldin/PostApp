import axios from "axios";
import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [fetchedData, setFetchedData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true);
        try {
          const res = await axios.get(url);
          setFetchedData(res.data);
        } catch (err) {
          if (typeof err === "string") setError(err);
          else if (err instanceof Error) setError(err.message);
          else setError("Something went wrong!");
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );
  return { fetchedData, error, isLoading };
}

export default useFetch;
