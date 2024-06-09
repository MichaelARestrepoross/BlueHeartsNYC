import React from 'react'
import ParkEventsIndex from './ParkEventsIndex'
import './Pillars.css'

function Connect() {
  return (
    <div className='pillar-wrapper'>
      <div className='pillar-descrip'>

        <h1>Connect</h1>

        <h3>In the Blue Zones, centurions put their families first, belong to a faith-based community, and have close social circles that support healthy behaviors..</h3>
      </div>

    <img 
        src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1717692432/BlueHeartsNYC-Slide-connect_cmvwao.jpg" 
        alt="Blue Hearts NYC Slide"
        style={{ maxWidth: '100%', height: 'auto' }}
       className='pillar-image'/>
       <br />
    <section className='goal-wrapper'>

      <h2>Our Goal </h2>
       <p>  
         Foster strong family bonds, community connections, and social networks that support healthy living.
        </p>
      <br />

      <p>Make New York City: Strengthen family ties and create opportunities for community engagement through events, activities, and faith-based gatherings. Encourage New Yorkers to build and maintain supportive social circles, enhancing their emotional well-being and reinforcing positive lifestyle habits. </p> <br />
    </section>
      <div className='article-wrapper'>
        <ParkEventsIndex />
      </div>
    </div>
  )
}

export default Connect