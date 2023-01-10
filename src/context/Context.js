import products from '../productData.json';
import React, { createContext, useContext,useReducer } from 'react';
import {cartReducer,productReducer} from './useReducer'

export const Cart= createContext(null);

const Context = ({children}) => {
    
    const [state, dispatch] = useReducer(cartReducer, {
        products:products,
        cart:[]
    });

    const [productState, productDispatch] = useReducer(productReducer,{
      byStock : false,
      SearchQuery:"",
      byRating: 0,
    })
  return (
    <Cart.Provider value={{state,dispatch,productState, productDispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState=()=>{
    return useContext(Cart);
}

