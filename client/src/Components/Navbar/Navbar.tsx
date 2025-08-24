import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar" role="banner">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          ☕ Coffee Shop
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
            Products
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
