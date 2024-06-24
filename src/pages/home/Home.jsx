import React from 'react'
import Populer from '../../components/populer/Populer'
import Offer from '../../components/offers/Offer'
import New from '../../components/new/New'
import Mail from '../../components/mail/Mail'

const Home = () => {
  return (
    <div>
      <New />
      <Populer />
      <Offer />
      <Mail />
      
    </div>
  )
}

export default Home