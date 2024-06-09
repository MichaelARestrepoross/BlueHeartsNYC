import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';

function MapView({ GOOGLE_MAPS_TOKEN, GOOGLE_MAP_ID, locations, MapTopic = "Current Locations" }) {
  const navigate = useNavigate();
  
  // Define coordinates for each borough
  const boroughs = {
    Manhattan: { lat: 40.7831, lng: -73.9712, zoom: 13 },
    Brooklyn: { lat: 40.6782, lng: -73.9442, zoom: 12 },
    Queens: { lat: 40.7282, lng: -73.7949, zoom: 12 },
    Bronx: { lat: 40.8448, lng: -73.8648, zoom: 12 },
    StatenIsland: { lat: 40.5795, lng: -74.1502, zoom: 11 },
  };

  const [center, setCenter] = useState(boroughs.Manhattan);
  const [open, setOpen] = useState(null);
  const [useCenterProp, setUseCenterProp] = useState(false);
  const mapRef = useRef(null);

  // Handle borough change
  const handleBoroughChange = async (event) => {
    const newCenter = boroughs[event.target.value];
    setCenter(newCenter);

    // Use the center prop when dropdown is selected
    setUseCenterProp(true); 

    // Introduce a small delay before setting it to false
    await new Promise(resolve => setTimeout(resolve, 0));
    
    setUseCenterProp(false);
  };

  // Validate latitude and longitude
  const isValidLatLng = (lat, lng) => {
    return !isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
  };

  // Open Google Maps with the provided latitude and longitude
  const openGoogleMaps = (latitude, longitude) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className='w-100 pt-5'>
      <p className='w-400 rounded-xl bg-black/70 p-3 text-xl text-white' style={{ fontFamily: 'Silkscreen, sans-serif', fontStyle: 'normal' }}>
        {MapTopic}
      </p>
      <div>
        <div>
          <label htmlFor="boroughs" style={{ color: 'red', marginRight: '10px', backgroundColor: "white" }}>Select Borough:</label>
          <select id="boroughs" onChange={handleBoroughChange}>
            {Object.keys(boroughs).map((borough) => (
              <option key={borough} value={borough}>{borough}</option>
            ))}
          </select>
        </div>
      </div>
      <APIProvider apiKey={GOOGLE_MAPS_TOKEN}>
        <div className='flex justify-normal' style={{ height: "400px", width: "52vw", borderRadius: "20px", overflow: "hidden" }}>
          {useCenterProp ? (
            <Map
              center={center}
              zoom={center.zoom}
              mapId={GOOGLE_MAP_ID}
              onLoad={(map) => { mapRef.current = map; }}
            >
              {locations.map((location, index) => {
                const { latitude, longitude, gardenname, address } = location;
                if (!isValidLatLng(latitude, longitude)) {
                  console.error(`Invalid coordinates for location: ${gardenname}`);
                  return null;
                }
                return (
                  <AdvancedMarker key={index} position={{ lat: latitude, lng: longitude }} onClick={() => setOpen(index)}>
                    <Pin
                      background={"red"}
                      borderColor={"gray"}
                      glyphColor={"white"}
                    />
                    {open === index && (
                      <InfoWindow position={{ lat: latitude, lng: longitude }} onCloseClick={() => setOpen(null)}>
                        <div>
                          <p>Garden Name: {gardenname}</p>
                          <p>Address: <span style={{ cursor: 'pointer', color: '#1A73E8', textDecoration: 'underline' }} onClick={() => openGoogleMaps(latitude, longitude)}>{address}</span></p>
                        </div>
                      </InfoWindow>
                    )}
                  </AdvancedMarker>
                );
              })}
            </Map>
          ) : (
            <Map
              defaultCenter={center}
              defaultZoom={13}
              mapId={GOOGLE_MAP_ID}
              onLoad={(map) => { mapRef.current = map; }}
            >
              {locations.map((location, index) => {
                const { latitude, longitude, gardenname, address } = location;
                if (!isValidLatLng(latitude, longitude)) {
                  console.error(`Invalid coordinates for location: ${gardenname}`);
                  return null;
                }
                return (
                  <AdvancedMarker key={index} position={{ lat: latitude, lng: longitude }} onClick={() => setOpen(index)}>
                    <Pin
                      background={"red"}
                      borderColor={"gray"}
                      glyphColor={"white"}
                    />
                    {open === index && (
                      <InfoWindow position={{ lat: latitude, lng: longitude }} onCloseClick={() => setOpen(null)}>
                        <div>
                          <p>Garden Name: {gardenname}</p>
                          <p>Address: <span style={{ cursor: 'pointer', color: '#1A73E8', textDecoration: 'underline' }} onClick={() => openGoogleMaps(latitude, longitude)}>{address}</span></p>
                        </div>
                      </InfoWindow>
                    )}
                  </AdvancedMarker>
                );
              })}
            </Map>
          )}
        </div>
      </APIProvider>
    </div>
  );
}

export default MapView;
