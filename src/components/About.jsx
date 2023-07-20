import React from 'react'
function About({detail}) {
  return (
    <>
      <div className='aside'>
        <img src={detail.image} alt="blog logo" srcset="" />
        <p>{detail.about}</p>
      </div>
    </>
  )
}

export default About
