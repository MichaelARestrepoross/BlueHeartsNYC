import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./LandingPage.css"

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className='landing-page-wrapper'>
      <video autoPlay loop muted playsInline className="landing-page-video">
        <source src="https://res.cloudinary.com/drsj2l9it/video/upload/v1717881379/istockphoto-1499066725-640_adpp_is_ikf3l9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className='landing-info'>
        <h1 className='landing-page-h1'>Blue Hearts NYC</h1>
        <h3> Welcome to Blue Hearts NYC, where our mission is to turn the 'Big Apple' into a Blue Zone!</h3>
        <p>
          At Blue Hearts NYC, we recognize that transforming your lifestyle into a personal Blue Zone can be an inspiring yet complex journey, especially when aligning with the principles of the world's longest-lived communities. That's why we're dedicated to making your path not only fulfilling but seamless! Explore health articles, visit tranquil gardens, and attend vibrant park events to connect with fellow New Yorkers who are equally committed to living a healthier, longer life.
        </p><br />
        <p>
          Embark on a transformative journey by engaging with features designed to enhance physical activity, nurture social connections, and promote stress reduction - essential steps that align seamlessly with your lifestyle goals. With Blue Hearts NYC, you'll never have to second-guess your path to longevity. Discover a world of vibrant park events, tranquil gardens, and enlightening health articles tailored to enrich your life.
        </p><br />
        <p>
          Ready to experience a happier, healthier lifestyle in the heart of the city? Click the button below to start your journey to longevity and see how NYC can become your very own Blue Zone! Your path to a fulfilling and balanced life begins here! 💙
        </p><br />
        <button className ="enter-site-button"  onClick={() => navigate('/homepage')}>
        Start Your Blue <br /> Journey Now
        </button>
      </section>
    </div>
  )
}

export default LandingPage