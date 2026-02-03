// frontend/src/pages/Packages.jsx
import React, { useState } from "react";
import "./Packages.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import PackageCard from "../components/PackageCard";

// Dummy data for now
const allPackages = [
  {
    id: 1,
    title: "Elite Umrah February",
    price: "$4,250",
    description: "14-day luxury stay in Makkah & Madinah",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfBrGNP-wctMQFdWcXDclxi_fPu3YVN6QAES1hs7XEf_FfxfLd80e5_7hhUCkpU5o6DKRLywnLoJ_8NaqAl4a3WF536T2GWMbJ3oWKiKOyODuOK5KOjQJnT4xzB-u7S_MX_91Y15OpCrRbcdSSrXywi12ZEWhd7NDbRJcUsGVEvhNFfVMwdmP1MH-G5pebW4yibhMmpgeYr13YB4ftiWQCALTxvit-iGCuCFNLg1UoSjnFZ5u4_EczVwgAJGdZga-RTXxlhQOBRQKP",
    category: "Premium",
    duration: 14,
  },
  {
    id: 2,
    title: "Ramadan Spiritual Journey",
    price: "$7,800",
    description: "Exclusive Ramadan experience with Haram views",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoL7X2-EVm3gw5jd3Z4YqxUA-Xt9UlgCxkM-5ukQUgjSgAzGqMZCPAKQRU9BkaLYpKdVjypXJo9-WG8gJX181XCh21hrp5pQCB0qjzbG9K-SXlbAmVegI5NFqbXit9zIxp4QrouSyW4JkEP109o3p7374jSmkjvmXFXAsTSL-25TTh4DeKiY8AHSL1pI8JpFNp6DnMFoY1MSTdknzhTKkAMqOqgipIf6ccji1CWxnFAlZeYNKZ-dJjS7x6QUj_JFyXYSrFH_-2pCcG",
    category: "VIP",
    duration: 21,
  },
  // Add more packages here
];

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [durationFilter, setDurationFilter] = useState(null);

  const filteredPackages = allPackages.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || pkg.category === categoryFilter;
    const matchesDuration =
      !durationFilter ||
      (durationFilter === "short" && pkg.duration <= 10) ||
      (durationFilter === "medium" && pkg.duration > 10 && pkg.duration <= 21) ||
      (durationFilter === "long" && pkg.duration > 21);

    return matchesSearch && matchesCategory && matchesDuration;
  });

  return (
    <div className="packages-page">
      <NavBar />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="/">Home</a> <span>/</span> <span>Our Pilgrimage Packages</span>
      </div>

      {/* Header */}
      <header className="packages-header">
        <h1>Our Pilgrimage Packages</h1>
        <p>Discover curated spiritual journeys with comfort & devotion.</p>
      </header>

      {/* Search Bar */}
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <div className="packages-layout">
        {/* Sidebar filters */}
        <aside className="filters">
          <h3>Filters</h3>
          <div className="filter-group">
            <h4>Category</h4>
            {["All", "Economy", "Premium", "VIP"].map((cat) => (
              <label key={cat}>
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={categoryFilter === cat}
                  onChange={() => setCategoryFilter(cat)}
                />
                {cat}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Duration</h4>
            <label>
              <input
                type="radio"
                name="duration"
                checked={durationFilter === "short"}
                onChange={() => setDurationFilter("short")}
              />
              7-10 Days
            </label>
            <label>
              <input
                type="radio"
                name="duration"
                checked={durationFilter === "medium"}
                onChange={() => setDurationFilter("medium")}
              />
              14-21 Days
            </label>
            <label>
              <input
                type="radio"
                name="duration"
                checked={durationFilter === "long"}
                onChange={() => setDurationFilter("long")}
              />
              22+ Days
            </label>
            <button onClick={() => setDurationFilter(null)}>Clear Duration</button>
          </div>
        </aside>

        {/* Packages Grid */}
        <section className="packages-content">
          <div className="packages-grid">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} {...pkg} />
              ))
            ) : (
              <p className="no-results">No packages found.</p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
