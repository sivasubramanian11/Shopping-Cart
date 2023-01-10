import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown  from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import './style.css';
import { Button } from 'react-bootstrap';

const Header = () => {
  const {state:{cart},
    dispatch, productDispatch
      } = CartState();

  return (
    <Navbar bg="dark" variant="dark">
      <Container >
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text>
          <FormControl style={{width:500}}
           type="search"
           placeholder="search a product"
           onChange={(e)=>
            productDispatch({
              type:'FILTER_BY_SEARCH',
              payload:e.target.value
            })
          }
            />
        </Navbar.Text>
        <Nav>
          <Dropdown className="Dropdown">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart 
              color='white' font-size="25px" />
              { <Badge>{cart.length}</Badge> }
            </Dropdown.Toggle>

            <Dropdown.Menu  style={{ maxwidth: 100}}>
             {
               cart.length > 0 ? (
                <>
               {
                  cart.map((prod)=>(
                 <span className="cartItem" key={prod.id}>
                <img 
                 src={prod.image}
                 className="cartitemImg"
                alt={prod.name}
                 />
                <div className="cartItemdetail">
                <span>{prod.name}</span>
                <span>{prod.price}</span>
                </div>
          
                  <AiFillDelete
                   style={{cursor:"pointer", fontSize:20}}
                     onClick={()=>
                      dispatch({
                        type:"Remove_From_Cart",
                        payload:prod,
                          })
                     }
                     />
                     </span>
                 ))}
                 <Link to="/cart">
                  <Button style={{width:"95%", margin:"0 10px"}} >
                    Go to Cart
                  </Button>
                 </Link>
               </>
               ) :
               (
                <span>Cart is empty!</span>
              )}      
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
