import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"


function Home() {
  const navigate = useNavigate();

  return (
    <div className='home-wrapper'>
      <div className="space-y-4">
        <div className="pillar p-4 border rounded shadow" >
          <h2 className="text-2xl font-semibold">Connect</h2>
          <p>
            Strengthen social ties by engaging in community activities and forming meaningful relationships.
          </p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => navigate('/connect')}>
            Learn More
          </button>
        </div>
        <div className="p-4 border rounded shadow" >
          <h2 className="text-2xl font-semibold">Eat Wisely</h2>
          <p>
            Embrace a nutritious diet with healthy recipes and tips to make smarter food choices.
          </p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => navigate('/eatWisely')}>
            Learn More
          </button>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-2xl font-semibold">Move Naturally</h2>
          <p>
            Incorporate natural physical activities into your daily routine by exploring local parks and trails.
          </p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => navigate('/moveNaturally')}>
            Learn More
          </button>
        </div>
        <div className="p-4 border rounded shadow"  >
          <h2 className="text-2xl font-semibold">Outlook</h2>
          <p>
            Cultivate a positive mindset and improve mental health through mindfulness and stress reduction techniques.
          </p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => navigate('/rightoutlook')}>
            Learn More
          </button>
        </div>
      </div>

        <section className='four-pillars-frame'> 
          <img src="https://res.cloudinary.com/drsj2l9it/image/upload/v1717704610/A6947A2B-9D6E-40A3-83D1-F2195AF0CA83_4_5005_c_x8ccti.jpg" alt="Move Naturally Image" onClick={() => navigate('/moveNaturally')}/>
          <img src="https://res.cloudinary.com/drsj2l9it/image/upload/v1717704610/575FD410-7711-49CE-9BB6-98976EF76957_4_5005_c_hg20wu.jpg" alt="Outlook Image" onClick={() => navigate('/rightoutlook')}/>
          <img src="https://res.cloudinary.com/drsj2l9it/image/upload/v1717704611/D1465795-5A30-4FF2-BDD6-4E6307BE879D_4_5005_c_nddizu.jpg" alt="Connect Image" onClick={() => navigate('/connect')}/>
          <img src="https://res.cloudinary.com/drsj2l9it/image/upload/v1717704610/F91A164B-D1EB-455A-95E5-C1CEAD8D7ACC_4_5005_c_bi1pn9.jpg" alt="Eat Wisely Image" onClick={() => navigate('/eatWisely')}/>
        </section>
    </div>
  )
}

export default Home