import { useEffect, useState } from "react";

export default function useFetchCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data =>
        setCountries(
          data
            .map(c => ({ name: c.name.common, code: c.cca2 }))
            .sort((a, b) => a.name.localeCompare(b.name))
        )
      );
  }, []);

  return countries;
}