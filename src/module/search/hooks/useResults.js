import { useEffect, useState } from "react";

import yelp from "../../../api/yelp";

function useResults() {
  const [results, setResults] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return { searchApi, results, errorMessage };
}

export default useResults;
