import { useEffect, useState } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [typeRequest, setTypeRequest] = useState(null);

  const postData = (data) => {
    setTypeRequest({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    setLoading(true);
    if (method === "GET") {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = response.json();
          return data;
        })
        .then((response) => {
          setData(response);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }
    if (method === "POST" && typeRequest) {
      fetch(url, typeRequest)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = response.json();
          return data;
        })
        .then((response) => {
          setData(response);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }
  }, [url, typeRequest, method]);

  return {
    data,
    loading,
    error,
    postData,
  };
};

export default useFetch;
