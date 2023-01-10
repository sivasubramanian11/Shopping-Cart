import React from 'react';
import './style.css';
import { Button, Card } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/Context';


const SingleProduct = ({prod}) => {

   const {state:{cart},
   dispatch,
   } = CartState()
   
  return (
    <div className="products">
      <Card style={{width:250}}>
        <Card.Img variant="top" src={prod.image} className='productImages'/>
        <Card.Body className='productBody'>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingbottom:10}}>
            <span>₹{prod.price.split(".")[0]}</span>
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p)=>p.id === prod.id)
          ?
          (<Button variant="danger" onClick={
              ()=>{
                dispatch({
                  type: 'Remove_From_Cart',
                  payload:prod
                })
              }
            }>
            Remove from cart
          </Button>)
           :
           (<Button onClick={()=>{
            dispatch({
              type:"Add_To_Cart",
              payload:prod
            })
          }}>
             Add to Cart
          </Button>)
          }
        </Card.Body>
      </Card>
     
    </div>
  )
}

export default SingleProduct