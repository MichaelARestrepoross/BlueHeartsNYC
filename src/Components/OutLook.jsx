import React from 'react'
import ArticleIndex from './ArticleIndex'
import './Pillars.css'

function Outlook() {
  return (
    <div className='pillar-wrapper'>
      <div className='pillar-descrip'>

        <h1>Outlook</h1>

        <h3>People in the Blue Zones have a sense of purpose, a reason to wake up in the morning, which can add up to seven years of extra life expectancy. They also take time to downshift, pray, meditate, or nap.</h3>
      </div>
    <img 
        src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1717784086/BlueHeartsNYC-GIFOutlook_yvntbi.gif" 
        alt="Blue Hearts NYC Slide"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <br />
      <section className='goal-wrapper'>

    <h2>Our Goal </h2> 
    <p>
    Cultivate a sense of purpose and integrate practices that reduce stress and promote mental well-being.
    </p> 
    <br />

    <p>Make New York City: Encourage New Yorkers to find and nurture their sense of purpose, whether through career, hobbies, or community service. Promote daily practices such as meditation, mindfulness, or simply taking moments to relax and decompress, contributing to overall mental health and longevity. </p>
      </section>

    <ArticleIndex topic = {"books/review"}/>
    </div>
  )
}

export default Outlook





