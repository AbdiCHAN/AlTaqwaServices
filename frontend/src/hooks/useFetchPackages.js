import { useEffect, useState } from "react";
import { apiGet } from "./useApi";

export default function useFetchPackages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet("/packages")
      .then(setPackages)
      .finally(() => setLoading(false));
  }, []);

  return { packages, loading };
}