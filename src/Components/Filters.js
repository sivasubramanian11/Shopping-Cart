import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './style.css';
import Rating from './Rating';

const Filters = () => {
    const [Rate, setRate] = useState(2);
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
            />
            </span>
        
        <span> 
            <Form.Check
            inline
            label="descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            />
        </span>
        <span> 
            <Form.Check
            inline
            label="Include out of stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            />
        </span>
        <span> 
            <Form.Check
            inline
            label="Fast delivery only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            />
        </span>
        <span>
            <label style={{padding:10}}>Rating</label>
            <Rating 
            rating={Rate} 
            onClick={(i)=>setRate(i+1)}
            style={{cursor:"pointer"}}
            />
        </span>
        
        <span>
        <Button variant="light">Clear Filters</Button>
        </span>

    </div>
  )
}

export default Filters