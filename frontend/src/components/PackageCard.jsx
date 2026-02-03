// frontend/src/components/PackageCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PackageCard.css"; // separate styling

export default function PackageCard({ id, title, price, description, image }) {
  const navigate = useNavigate();

  return (
    <div className="package-card">
      <div
        className="package-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="package-body">
        <h3>{title}</h3>
        <span className="price">{price}</span>
        <p>{description}</p>
        <div className="card-actions">
          <button
            className="primary-btn"
            onClick={() => navigate(`/packages/${id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
