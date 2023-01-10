import React from 'react'
import { Button, Form } from 'react-bootstrap';
import './style.css';
import Rating from './Rating';
import { CartState } from '../context/Context';

const Filters = () => {
   
    const {productState:{byStock, sort, byRating,SearchQuery},
     productDispatch} = CartState();

     console.log(byStock,byRating,SearchQuery);
    
  return (
    <div className='filters'>
        <span className='title'> Filter by Products</span>
        <span>
            <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={()=>
            productDispatch({
                type :'SORT_BY_PRICE',
                payload:"lowToHigh",
            })
            }
            checked={sort === "lowToHigh" ? true : false}
            />
            </span>
        
        <span> 
            <Form.Check
            inline
            label="descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={()=>
                productDispatch({
                    type :'SORT_BY_PRICE',
                    payload:"highToLow",
                })
                }
            checked={sort ==="highToLow"? true : false}
            />
        </span>
        <span> 
            <Form.Check
            inline
            label="Include out of stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={()=>
            productDispatch({
                type: 'SORT_BY_STOCK',
            })
            }
            />
        </span>
        
        <span>
            <label style={{padding:10}}>Rating</label>
            <Rating 
            rating={byRating} 
            onClick={(i)=>
            productDispatch({
                type: "SORT_BY_RATING",
                payload:i+1,
            })
            }
            style={{cursor:"pointer"}}
            />
        </span>
        
        <span>
        <Button variant="light"
        onClick={()=>
            productDispatch({
                type: 'CLEAR_FILTERS',
            })
        }>
            Clear Filters
            </Button>
        </span>

    </div>
  )
}

export default Filters