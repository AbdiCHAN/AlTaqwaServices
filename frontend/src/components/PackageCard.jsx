import "./PackageCard.css";
import React from "react";
import NavBar from "./Navbar";

import { Link } from "react-router-dom";

export default function PackageCard({ pkg }) {
  return (
    <div className="package-card">
      <img src={pkg.image} alt={pkg.name} />
      <h3>{pkg.name}</h3>
      <p>{pkg.duration} Days • {pkg.type}</p>
      <strong>${pkg.price}</strong>
      <Link to={`/packages/${pkg.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}