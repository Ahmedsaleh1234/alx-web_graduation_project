import React, { useContext } from 'react'
import Item from '../../components/item/item'
import { CartContext } from '../../context/Context'

const Dash = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className='populer'>
      
      <h1>Your orders</h1>
      <hr/>
      <div className='uplaod' >
        
      </div>

      <div className='populer-item'>
      {
        cart.map((item, i) =>{
          return <div className='comp'>
            <Item key={i} 
                id={item.id} name={item.name} image={item.image} 
                new_price={item.new_price} old_price ={item.old_price} />
                 
          </div>
        })

      }
      </div>
     
    </div>
  )
}

export default Dash