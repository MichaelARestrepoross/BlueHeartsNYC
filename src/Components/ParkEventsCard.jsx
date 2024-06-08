import React, { useState } from 'react';
import { getRandomParkImage } from '../Helpers/htmlRemoverHelper';

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
    <div className="">
      <div className="">
        <img src={imageUrl} alt="Park" className=""/>
        <div className="">
          <div className="bg-gray-900 ">
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
        <div className="text-gray-700 text-base" >
          {event.description}
        </div>

      </div>
    </div>
  );
}

export default ParkEventsCard;
