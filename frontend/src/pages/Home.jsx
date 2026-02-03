// frontend/src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/Navbar"; // correct component import
import Footer from "../components/Footer"; // correct component import
import usePrayerTimes from "../hooks/usePrayerTimes";
import "./Home.css"; // only import CSS here

export default function Home() {
  const times = usePrayerTimes("Makkah");

  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Prayer Times */}
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

      {/* Footer */}
      <Footer />
    </>
  );
}
