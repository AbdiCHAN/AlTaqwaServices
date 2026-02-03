import { useEffect, useState } from "react";

export default function usePrayerTimes(city = "Makkah") {
  const [times, setTimes] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Saudi Arabia`
    )
      .then(res => res.json())
      .then(data => setTimes(data.data.timings));
  }, [city]);

  return times;
}