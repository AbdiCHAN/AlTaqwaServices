import { useEffect, useState } from "react";
import { apiGet } from "./useApi";

export default function useFetchPackageById(id) {
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    apiGet(`/packages/${id}`).then(setPkg);
  }, [id]);

  return pkg;
}