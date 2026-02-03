import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetchPackageById from "../hooks/useFetchPackageById";
import useCreateBooking from "../hooks/useCreateBooking";
import useFetchCountries from "../hooks/useFetchCountries";
import "./Checkout.css";

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pkg = useFetchPackageById(id);
  const { createBooking, loading } = useCreateBooking();
  const countries = useFetchCountries();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    passport: "",
    nationality: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await createBooking({
      ...form,
      packageId: id,
      packageName: pkg.name,
      price: pkg.price
    });

    navigate("/confirmed");
  }

  if (!pkg) return null;

  return (
    <section className="checkout">
      {/* FORM */}
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Traveler Information</h2>

        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input name="email" placeholder="Email Address" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input name="passport" placeholder="Passport Number" onChange={handleChange} required />

        <select name="nationality" onChange={handleChange} required>
          <option value="">Select Nationality</option>
          {countries.map(c => (
            <option key={c.code} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <button disabled={loading}>
          {loading ? "Processing..." : "Confirm Booking"}
        </button>
      </form>

      {/* SUMMARY */}
      <div className="checkout-summary">
        <h3>Booking Summary</h3>

        <img
          src={pkg.image}
          alt={pkg.name}
        />

        <p className="title">{pkg.name}</p>
        <p>{pkg.duration}</p>

        <div className="price">${pkg.price}</div>
      </div>
    </section>
  );
}