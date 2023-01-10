import React,{useEffect, useState} from 'react';
import { Button, Col,  Image, ListGroup,  Row } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';


const Cartpage = () => {

  const {state:{cart}, dispatch} = CartState();

  const [total, setTotal] = useState();

      useEffect(()=>{
           setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price)*curr.qty, 0))
      },[cart])
      
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
            {
              cart.map((prod)=>(
                <ListGroup.Item key={prod.id}>
                  <Row>
                  <Col md={2}>
                  <Image  src={prod.image} alt={prod.name} fluid rounded/>
                  </Col>
                  <Col md={2}>
                    {prod.name}
                  </Col>
                  <Col md={2}>
                    ₹ {prod.price}
                  </Col>
                  <Col>
                  <Rating rating={prod.ratings} />
                  </Col>
                  
                  
                  <Col>
                  <Button
                     type="button"
                     variant="white"
                     onClick={()=>
                      dispatch({
                        type:"Remove_From_Cart",
                        payload:prod,
                          })
                     }>
                     <AiFillDelete style={{cursor:"pointer", fontSize:20}}/>
                   </Button>
                  </Col>
                  </Row>  
                </ListGroup.Item>
              ))
            }
        </ListGroup>
      </div>
      <div className='filters summary'>
          <span className='title'>Subtotal({cart.length}) items</span>
          <span style={{fontWeight:700, fontSize:20}}>Price ₹  {total} </span>
            <Button type="submit" disabled ={cart.length === 0}>
              Proceed to Payment
            </Button>
        </div>
    </div>
  )
}

export default Cartpage