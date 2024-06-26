// ParkEventsIndex.js
import React, { useEffect, useState } from 'react';
import ParkEventsCard from './ParkEventsCard';

const ParkEventsIndex = () => {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_PARKEVENTS_BASE_URL}?$$app_token=${import.meta.env.VITE_NYC_TOKEN}&$order=date DESC`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => 
    event.title &&
    event.date &&
    event.start_time &&
    event.end_time &&
    event.description
  );

  return (
    <div className="flex flex-wrap justify-center">
      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => (
          <ParkEventsCard key={event.event_id} event={event} />
        ))
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

export default ParkEventsIndex;
