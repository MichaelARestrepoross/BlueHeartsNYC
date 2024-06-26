import React, { useState, useEffect } from 'react';
import ArticleIndex from './ArticleIndex';
import MapView from './MapView'; 
import { useNavigate } from 'react-router-dom';

const VITE_MARKETS_BASE_URL = import.meta.env.VITE_MARKETS_BASE_URL;
const VITE_NYC_TOKEN = import.meta.env.VITE_NYC_TOKEN;
const VITE_GOOGLE_MAPS_TOKEN = import.meta.env.VITE_GOOGLE_MAPS_TOKEN;
const VITE_GOOGLE_MAP_ID = import.meta.env.VITE_GOOGLE_MAP_ID;

function MoveNaturally() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    // move to move Naturally

    //map
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const fetchURL = `${VITE_MARKETS_BASE_URL}?$$app_token=${VITE_NYC_TOKEN}`
          const response = await fetch(fetchURL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          // Ensure the data contains valid latitude and longitude
          const validData = data.filter(event => 
            event.multipolygon && 
            event.multipolygon.coordinates && 
            event.multipolygon.coordinates[0] && 
            event.multipolygon.coordinates[0][0] && 
            event.multipolygon.coordinates[0][0][0] && 
            !isNaN(event.multipolygon.coordinates[0][0][0][1]) && 
            !isNaN(event.multipolygon.coordinates[0][0][0][0])
          ).map(event => ({
            ...event,
            latitude: event.multipolygon.coordinates[0][0][0][1],
            longitude: event.multipolygon.coordinates[0][0][0][0]
          }));
          setEvents(validData);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };
  
      fetchEvents();
    }, []);

  return (
      <div className='pillar-wrapper'>
        <div className='pillar-descrip'>

      <h1>Move Naturally</h1>

      <h3>"Centenarians in the Blue Zones areas live in environments that nudge them to move naturally every twenty minutes, rather than separating fitness into a different part of their day. It's built into their lifestyles subconsciously. Their habits may make you want to abandon fitness altogether." -Dan Buettner</h3>

        </div>
        <div className='image-wrapper'>

    <img 
        src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1717692433/BlueHeartsNYC-MoveNaturally_duwdd7.jpg" 
        alt="Blue Hearts NYC Slide"
        style={{ maxWidth: '100%', height: '55rem' }}
        className='pillar-image'
        />
        </div>
        <br />

<section className='goal-wrapper'> 
      <h2>Our Goal</h2> 
      <p>

      Encourage a lifestyle that includes physical activity around planned as well as unplanned daily exercise.
      </p>
      <br />

    <p>Make New York City: Transform the cityscape to facilitate natural movement throughout the day. Promote walking or biking to work, using stairs instead of elevators, and engaging in community activities that involve physical participation. By making subtle changes to daily routines and urban infrastructure, New Yorkers can seamlessly integrate more movement into their lives, leading to healthier, more active lifestyles!  </p>
</section>

      <MapView 
        GOOGLE_MAPS_TOKEN={VITE_GOOGLE_MAPS_TOKEN} 
        GOOGLE_MAP_ID={VITE_GOOGLE_MAP_ID} 
        locations={events}
        MapTopic = "Gardens" 
        />
<div className='article-wrapper'>

    <ArticleIndex topic ={"sports"} />
</div>

   </div>
  )
}

export default MoveNaturally