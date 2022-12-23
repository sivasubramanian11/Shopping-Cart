import products from '../productData.json';
import React, { createContext, useContext,useReducer } from 'react';
import {cartReducer} from './useReducer'

export const Cart= createContext(null);

const Context = ({children}) => {
    
    const [state, dispatch] = useReducer(cartReducer, {
        products:products,
        Cart:[]
    });

  return (
    <Cart.Provider value={{state,dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState=()=>{
    return useContext(Cart);
}

