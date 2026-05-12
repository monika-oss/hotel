import React from 'react';
import './Navbar.css';
import { FiPlus } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="floating-navbar">
      <div className="nav-container">
        <div className="nav-logo">
          HotelApp<span>™</span>
        </div>
        
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Search</a>
          <a href="#" className="nav-link active">Packages</a>
          <a href="#" className="nav-link">Stories</a>
          <span className="nav-divider">|</span>
          <a href="#" className="nav-link-special">
            <FiPlus size={16} /> List your property
          </a>
        </div>
        
        <div className="nav-actions">
          <a href="#" className="login-link">Log in</a>
          <button className="join-now-btn">Join Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
