import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

export const useFetch = (query, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  const getFetch = async () => {
    setLoading(true);

    const data = await client.fetch(query, params);

    setTimeout(() => {
      setData(data);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getFetch();
  }, [query, params]);

  return {
    data: data || [],
    isLoading: isLoading,
    hasError: hasError,
  };
};
