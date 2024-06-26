import React, { createContext, useReducer } from 'react'
import CartReducer from './Reducer'

export const CartContext = createContext()

const ContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, [])
  return (
    <CartContext.Provider value={{cart, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider