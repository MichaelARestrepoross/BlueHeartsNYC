import React from 'react'

function Home() {
  return (
    <div>
    <h1>Images</h1>
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