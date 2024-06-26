import React, { useContext } from 'react'
import Item from '../../components/item/item'
import { CartContext } from '../../context/Context'
import { totalItem, totalPrice } from '../../context/Reducer'
import './card.css'
const Card = () => {
  const {cart, dispatch} = useContext(CartContext)
  return (
    <div className='populer'>
      
      <h1>Your Items</h1>
      <hr/>
      <div className='checkout'>
     
      
        <h5>Total Items: {totalItem(cart)}</h5>
        <h5>Total Price: ${totalPrice(cart)} </h5>
        <button className='btn btn-warning'>Checkout</button>
      </div>
      <div className='populer-item'>
      {
        cart.map((item, i) =>{
          return <div className='comp'>
            <Item key={i} 
                id={item.id} name={item.name} image={item.image} 
                new_price={item.new_price} old_price ={item.old_price} />
                 <button className="btn" 
                 onClick={() => dispatch({ type: "Remove", id: item.id })}>
                    Remove From Cart</button>
          </div>
        })

      }
      </div>
     
    </div>
  )
}

export default Card