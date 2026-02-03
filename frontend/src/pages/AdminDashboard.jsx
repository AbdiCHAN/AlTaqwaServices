import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [packages, setPackages] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then(res => res.json())
      .then(setPackages);

    fetch("http://localhost:5000/bookings")
      .then(res => res.json())
      .then(setBookings);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>

      <h2>Packages</h2>
      {packages.map(p => (
        <p key={p.id}>{p.name} — ${p.price}</p>
      ))}

      <h2>Bookings</h2>
      {bookings.map(b => (
        <p key={b.id}>
          {b.firstName} {b.lastName} — {b.packageName}
        </p>
      ))}
    </div>
  );
}