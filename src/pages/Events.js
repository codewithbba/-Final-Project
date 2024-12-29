import React from 'react';
import EventCard from '../comonents/EventCard';

const Events = () => {
  const eventList = [
    { title: 'Music Fest', description: 'A grand music festival.', date: '2024-12-31' },
    { title: 'Tech Conference', description: 'Explore the latest in technology.', date: '2024-01-20' },
    { title: 'Art Expo', description: 'Showcasing modern art.', date: '2024-02-15' }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Upcoming Events</h1>
      {eventList.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
};

export default Events;
