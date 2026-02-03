import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Al-Taqwa Travels</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}