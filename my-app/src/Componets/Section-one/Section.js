import React from 'react'
import img1 from './img/360_F_484876187_u6HIlCgA2iZdfkoOamuQa43OJH2zaDVR.jpg'
import img2 from './img/young-woman-wearing-colorful-clothes_273609-21046.avif'


const Section = () => {
  return (
    <div>
      <div id='section'>

      <div id='NewCollection'>

        <img src={img1} alt='' />

        <div className='text'>
        <span>Limited Time Only</span>
        <h3>
        Super Sale
        <br/>
        <span>Up To 60%</span>
        </h3>
        <h1>New Collection</h1>
        </div>

        </div>
        <div id='Newsession'>
        <img src={img2} alt='' />

        <div className='text'>
        <h3 className='con'>
        Easy Shopping With Better Price
        </h3>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Section
