import { useContext } from 'react'
import data from '../assets/data'
import Item from '../item/item'
import './populer.css'
import { CartContext } from '../../context/Context'


const Populer = () => {

  
  const { dispatch } = useContext(CartContext);
  return (
    <div className='populer'> 
    <h1>Electriacl</h1>
    <hr />
    <div className='populer-item'>
        {
            data.map((item, i)=>{
                return <div className='comp'> <Item key={i} 
                id={item.id} name={item.name} image={item.image} 
                new_price={item.new_price} old_price ={item.old_price}/>
                <button className='btn' 
                onClick={() => dispatch({ type: "Add", product: item})}>
                  Add to cart</button>
               </div>
            })}
            
     </div>
    </div>
  )
}

export default Populer