import React from 'react'
import ArticleIndex from './ArticleIndex'

function EatWisely() {
  return (
    <>
    <div>Eat Wisely</div>

    <h3>Inspired by the recipes of the best-selling Blue Zones Kitchen cookbooks, Dan Buettner leads you through a step-by-step cooking course full of plant-forward recipes, including convenient store locators for your nearby healthiest groceries to shop items. Don't feel like cooking? Receive the nutrition info and tips for longevity from our meal and food coaches to make wiser choices when eating out.</h3>

    <h2>Our Goal: Ensure that you learn to eat like the world's longest-lived people!</h2>

    <p>Make New York City: Adopt, adapt and embrace a plant-forward diet with an emphasis on locally sourced vegetables, legumes, and nuts. Implement mindful eating habits such as smaller portion sizes and strategies to avoid overeating, helping to foster a healthier relationship with food and a more sustainable lifestyle. </p>
    <img 
        src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1717692433/BlueHeartsNYC-EatWisely_ut3vlf.jpg" 
        alt="Blue Hearts NYC Slide"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    <ArticleIndex topic = {"food"}/>
    </>
  )
}

export default EatWisely