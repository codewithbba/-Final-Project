import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/events" style={{ color: '#fff', textDecoration: 'none' }}>Events</Link></li>
        <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
        <li><Link to="/signup" style={{ color: '#fff', textDecoration: 'none' }}>Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
