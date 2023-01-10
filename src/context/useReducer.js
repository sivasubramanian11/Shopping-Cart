
export const cartReducer =(state,action)=>{
    switch (action.type) {
     case "Add_To_Cart":
        return {...state,cart:[...state.cart, {...action.payload, qty: 1}] };
     case "Remove_From_Cart":
        return {...state,cart:state.cart.filter((c)=>c.id !== action.payload.id)}
      default:
        return state;
    }
}

export const productReducer = (state,action)=>{
  switch(action.type){
    
    case 'SORT_BY_PRICE':
    return{ ...state,sort:action.payload }

    case 'SORT_BY_STOCK':
      return{...state,byStock:!state.byStock}

    case 'SORT_BY_RATING':
      return{...state,byRating:action.payload}

    case 'FILTER_BY_SEARCH':
      return{...state, SearchQuery:action.payload}

    case 'CLEAR_FILTERS':
      return {
      byStock : false,
      byRating:0,
      bySearchQuery:" ",
    };
    
    default:
      return state;
    }
  }
