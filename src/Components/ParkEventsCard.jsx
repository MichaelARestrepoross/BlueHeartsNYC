import React, { useState } from 'react';
import { stripHtmlTagsAndDecode, getRandomParkImage } from '../Helpers/htmlRemoverHelper';

function ParkEventsCard({ event }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

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
    <div className="max-w-sm rounded flex flex-col relative">
      <div className="relative">
        <img src={imageUrl} alt="Park" className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
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
          {stripHtmlTagsAndDecode(event.description)}
        </div>
        <div className="flex justify-center items-end mt-auto">
          <button
            onClick={handleModalToggle}
            className="inline-block mt-4 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact us
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-4 roundedtext-center">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            {event.phone && <p>Phone: {event.phone}</p>}
            {event.email && (
              <p>
                Email:{' '}
                <a href={`mailto:${event.email}`} className="text-blue-600">
                  {event.email}
                </a>
              </p>
            )}
            <button
              onClick={handleModalToggle}
              className="mt-4 px-4 py-2 border  text-white bg-blue-600 hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ParkEventsCard;
