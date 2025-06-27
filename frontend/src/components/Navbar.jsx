import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { token, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Fitness Tracker</h2>
      <div className="navbar-links">
        {token ? (
          <>
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/history" className="navbar-link">History</Link>
            <button onClick={logout} className="navbar-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/register" className="navbar-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
