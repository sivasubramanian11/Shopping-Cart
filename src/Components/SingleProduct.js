import React from 'react';
import './style.css';
import { Card } from 'react-bootstrap';
import Rating from './Rating';


const SingleProduct = ({prod}) => {
  return (
    <div >
      <Card>
        <Card.Img variant="top" src={prod.image} style={{width:200, padding:50}}/>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingbottom:10}}>
            <span>₹{prod.price.split(".")[0]}</span>
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
        </Card.Body>
      </Card>
     
    </div>
  )
}

export default SingleProduct