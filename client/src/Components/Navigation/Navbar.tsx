import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner container">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          ☕ Coffee Shop
        </NavLink>
        
        <button 
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Products
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}