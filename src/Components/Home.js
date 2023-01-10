import React from 'react'
import { CartState } from '../context/Context';
import './style.css';
import SingleProduct from './SingleProduct';
import Filters from './Filters';

const Home = () => {

  const { 
    state:{products},
  productState : { byRating, sort, SearchQuery},}=CartState();

  const transformProducts =()=>{

    let sortedProducts =products;

    if(sort){
     sortedProducts = sortedProducts.sort((a,b)=>
      sort === 'lowToHigh' ? a.price-b.price : b.price-a.price)
    }
    if(byRating){
      sortedProducts = sortedProducts.filter((prod)=>prod.ratings >= byRating)
    }
    if(SearchQuery){
      sortedProducts = sortedProducts.filter((prod)=>
        prod.name.toLowerCase().includes(SearchQuery)
      )
    }
    return sortedProducts;
  }

  return (
    <div className='home'>
      <Filters />
      <div className="productContainer"> 
      {
        transformProducts().map((prod)=>{
          return <SingleProduct prod={prod} key={prod.id} />
        })
      }

      </div>
    </div>
  )
}

export default Home