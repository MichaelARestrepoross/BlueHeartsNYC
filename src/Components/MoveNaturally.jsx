import React from 'react'
import ArticleIndex from './ArticleIndex'

function MoveNaturally() {
  return (
    <>
    <div>Move Naturally</div>

    <h3>"Centenarians in the Blue Zones areas live in environments that nudge them to move naturally every twenty minutes, rather than separating fitness into a different part of their day. It's built into their lifestyles subconsciously. Their habits may make you want to abandon fitness altogether." -Dan Buettner</h3>

    <h2>Our Goal: encourage a lifestyle that includes physical activity around planned as well as unplanned daily exercise.</h2>

    <p>Make New York City: Transform the cityscape to facilitate natural movement throughout the day. Promote walking or biking to work, using stairs instead of elevators, and engaging in community activities that involve physical participation. By making subtle changes to daily routines and urban infrastructure, New Yorkers can seamlessly integrate more movement into their lives, leading to healthier, more active lifestyles!  </p>
    <img 
        src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1717692433/BlueHeartsNYC-MoveNaturally_duwdd7.jpg" 
        alt="Blue Hearts NYC Slide"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    <ArticleIndex topic ={"sports"}/>
    </>
  )
}

export default MoveNaturally