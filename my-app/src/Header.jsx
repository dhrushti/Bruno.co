import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BasicModal from './Pages/BasicModal';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Header() {
  const [menu, setMenu] = useState("")
  const textarr = ["Sign in", "Search", "Favorites", "Shopping bag"]
  const iconarr = [<PermIdentityIcon />, <SearchIcon />, <FavoriteBorderIcon />, <LocalMallIcon />]
  const hstyle = {
    display: 'flex',
    paddingTop: '1.1rem',
  }
  
  const history = useNavigate();
  function handlecart(){
   history("/cartitems")
  }
  return (
    <Navbar
      expand="lg"
      // className="bg-body-tertiary" 
      style={
        {
          height: '6.5rem',
          backgroundColor: '#5F8670',
          color: '#FAEED1',
          position:'fixed',
          width:'96rem',
        }
      }>
      <Container fluid>
        {/* <Navbar.Brand href="#" style={{color: '#FAEED1',}}>Navbar scroll</Navbar.Brand> */}
        <img src="../assets/logo/png/logo-no-background.png" alt='logo' style={{ width: '10rem', marginRight: '2rem' }} />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              onClick={() => {
                setMenu("home")
              }}
              style={{ color: '#FAEED1', textDecoration: 'none' }}
            >
              <Link style={{ color: '#FAEED1', textDecoration: 'none' }} to='/'> Home</Link>
              {menu === "home" ? <hr /> : <></>}
            </Nav.Link>
            <Nav.Link onClick={() => { setMenu("bestsellers") }} style={{ color: '#FAEED1', }}><Link style={{ color: '#FAEED1', textDecoration: 'none' }} to='/bestsellers'>Best Sellers </Link>{menu === "bestsellers" ? <hr /> : <></>}</Nav.Link>
            <NavDropdown className="nav-menu"
              title="Shop"
              id="navbarScrollingDropdown"
              style={{ color: '#FAEED1', textDecoration: 'none' }}>
              <NavDropdown.Item onClick={() => { setMenu("kids") }} style={{ color: '#5F8670', textDecoration: 'none' }}><Link to='/kids'> Kids</Link>{menu === "kids" ? <hr /> : <></>}  </NavDropdown.Item>
              <NavDropdown.Item onClick={() => { setMenu("women") }} style={{ color: '#5F8670', }}><Link to='/women'>Women</Link>{menu === "women" ? <hr /> : <></>}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { setMenu("men") }} style={{ color: '#5F8670', }}><Link to='/men'>Men</Link> {menu === "men" ? <hr /> : <></>}    </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" style={{ color: '#FAEED1', }}>
              About
            </Nav.Link>
          </Nav>
          <BasicModal text={"Sign Up"} icon={<PermIdentityIcon />} />
          <button style={
            {
              background: 'transparent',
              color: '#FAEED1',
              border: 'none',
            }
          }>
            <div style={{
              display: 'flex',
              paddingTop: '1.1rem',
              marginRight: '1rem'

            }}>
              <FavoriteBorderIcon />
              <p>Favorites</p>
            </div>


          </button>
          <button onClick={handlecart}
          style={
            {
              background: 'transparent',
              color: '#FAEED1',
              border: 'none',
              
            }}>

            <div
              style={{
                display: 'flex',
                paddingTop: '1.1rem',
                marginRight: '1rem'
              }}>
              <LocalMallIcon />
              <p>Shopping bag</p>
            </div>
          </button>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Go</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;