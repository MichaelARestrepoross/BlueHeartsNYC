import React from 'react'
import ArticleIndex from './ArticleIndex'
import './Pillars.css'

function EatWisely() {
  return (
    <div className='pillar-wrapper'>
      <div className='pillar-descrip'>
        <h1>Eat Wisely</h1>

        <h3>Inspired by the recipes of the best-selling Blue Zones Kitchen cookbooks, Dan Buettner leads you through a step-by-step cooking course full of plant-forward recipes, including convenient store locators for your nearby healthiest groceries to shop items. Don't feel like cooking? Receive the nutrition info and tips for longevity from our meal and food coaches to make wiser choices when eating out.</h3>

      </div>
    <img 
        src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1717692433/BlueHeartsNYC-EatWisely_ut3vlf.jpg" 
        alt="Blue Hearts NYC Slide"
        style={{ maxWidth: '100%', height: 'auto' }}
        />
        <br />

    <section className='goal-wrapper'>

    <h2>Our Goal</h2>
    <p>
    Ensure that you learn to eat like the world's longest-lived people!
    </p>
    <br />

    <p>Make New York City: Adopt, adapt and embrace a plant-forward diet with an emphasis on locally sourced vegetables, legumes, and nuts. Implement mindful eating habits such as smaller portion sizes and strategies to avoid overeating, helping to foster a healthier relationship with food and a more sustainable lifestyle. </p>
        </section>
    <ArticleIndex topic = {"food"} />
    </div>
  )
}

export default EatWisely