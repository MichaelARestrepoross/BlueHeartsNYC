import React, { useState } from 'react';
import { stripHtmlTagsAndDecode, getRandomParkImage } from '../Helpers/htmlRemoverHelper';

function ParkEventsCard({ event }) {

  function convertDateFormat(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const suffix =
      (day >= 10 && day <= 20) || day % 10 === 0
        ? 'th'
        : ['st', 'nd', 'rd'][day % 10 - 1] || 'th';
    return `${month} ${day}${suffix}`;
  }

  const imageUrl = getRandomParkImage();

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col relative">
      <div className="relative">
        <img src={imageUrl} alt="Park" className="w-full h-48 object-cover" style={{ maxHeight: '200px' }} />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="bg-gray-900 bg-opacity-50 text-center text-white p-4 rounded">
            <div className="font-bold text-xl mb-2">{event.title}</div>
            <p className="text-base mb-2">
              {convertDateFormat(event.date)}
            </p>
            <p className="text-base mb-2">
              Time: {event.start_time} - {event.end_time}
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 flex flex-col flex-grow">
        <div className="text-gray-700 text-base" style={{ height: '160px', overflowY: 'auto' }}>
          {stripHtmlTagsAndDecode(event.description)}
        </div>

      </div>



    </div>
  );
}

export default ParkEventsCard;
