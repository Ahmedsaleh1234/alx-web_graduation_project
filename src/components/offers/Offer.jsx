import React from 'react'
import image from '../assets/ex_images/lap.jpeg'
import './offer.css'
const Offer = () => {
  return (
    <div>
      <div className='offer'>
        <div className='left-offer'>
          <h1> Our Offers</h1>
          <button>Check Now</button>
        </div>
        <div className="right-offer">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Offer