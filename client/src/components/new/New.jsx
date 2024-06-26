import React from 'react'
import data from '../assets/new_data'
import Item from '../item/item'
import '../populer/populer.css'
const New = () => {
  return (
    <div>
        <h1>Just Arrieved</h1>
        <hr/>
        <div className='populer-item'>
            {data.map((item, i)=>{
                return <div className='comp'>
                    <Item key={i} id={item.id} name={item.name} 
                    image={item.image} new_price={item.new_price} 
                    old_price={item.old_price} />
                    <button className='btn'>Add to cart</button>
                </div>
            })}

        </div>
    </div>
  )
}

export default New