import React from 'react'
import "./item.css"
const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className='price'>
            <div className='new_price'>
                ${props.new_price}
            </div>
            <div className='old_price'>
                ${props.old_price}
            </div>
        </div>

    </div>
  )
}

export default Item