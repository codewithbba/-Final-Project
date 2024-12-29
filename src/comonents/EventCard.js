import React from 'react';

const EventCard = ({ title, description, date }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <h2 style={{ color: '#333' }}>{title}</h2>
      <p>{description}</p>
      <p><strong>Date:</strong> {date}</p>
      <button style={{
        background: '#007BFF',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>View Details</button>
    </div>
  );
};

export default EventCard;
