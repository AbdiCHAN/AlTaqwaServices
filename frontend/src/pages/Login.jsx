import HeroSection from "../components/HeroSection";
import usePrayerTimes from "../hooks/usePrayerTimes";
import "./Home.css";

export default function Home() {
  const times = usePrayerTimes("Makkah");

  return (
    <>
      <HeroSection />

      <section className="prayer">
        <h2>Prayer Times – Makkah</h2>
        {times && (
          <ul>
            <li>Fajr: {times.Fajr}</li>
            <li>Dhuhr: {times.Dhuhr}</li>
            <li>Asr: {times.Asr}</li>
            <li>Maghrib: {times.Maghrib}</li>
            <li>Isha: {times.Isha}</li>
          </ul>
        )}
      </section>
    </>
  );
}