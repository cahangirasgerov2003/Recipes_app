import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    loading,
  };
};

export default useFetch;
