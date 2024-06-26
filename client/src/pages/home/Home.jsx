import React from 'react'
import Populer from '../../components/populer/Populer'
import Offer from '../../components/offers/Offer'
import New from '../../components/new/New'
import Mail from '../../components/mail/Mail'
import Footer from '../../components/footer/footer'


const Home = () => {
  return (
    <div>
      <New />
      <Populer />
      <Offer />
      <Mail />
      <Footer />
      
    </div>
  )
}

export default Home