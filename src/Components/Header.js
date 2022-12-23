import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown  from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
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
            />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart 
              color='white' font-size="25px" />
              { <Badge></Badge> }
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minwidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header

