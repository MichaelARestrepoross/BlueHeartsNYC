import React from 'react'
import ParkEventsIndex from './ParkEventsIndex'

function Connect() {
  return (
    <>
    <div>Connect</div>

    <h3>In the Blue Zones, centurions put their families first, belong to a faith-based community, and have close social circles that support healthy behaviors..</h3>

    <h2>Our Goal: Foster strong family bonds, community connections, and social networks that support healthy living.</h2>

    <p>Make New York City: Strengthen family ties and create opportunities for community engagement through events, activities, and faith-based gatherings. Encourage New Yorkers to build and maintain supportive social circles, enhancing their emotional well-being and reinforcing positive lifestyle habits. </p>
    <img 
        src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1717692432/BlueHeartsNYC-Slide-connect_cmvwao.jpg" 
        alt="Blue Hearts NYC Slide"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    <ParkEventsIndex/>
    </>
  )
}

export default Connect