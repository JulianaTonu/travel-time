

import {  NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Header = () => {

  const {user} =useContext(AuthContext)
    return (
        <div>


<Navbar className='navbar  ' expand="lg">
      <Container>
        <Navbar.Brand className='title text-info' href="#home">Travel Time</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavLink className="px-3 ms-5 nav" to="/">Home</NavLink>
            <NavLink className="px-3  nav" to="/booking">Booking</NavLink>
            <NavLink className="px-3  nav" to="/login">Login</NavLink>
            <NavLink className="px-3  nav" to="/register">Register</NavLink>
            {user?.email && <span className='text-white'>welcome , {user?.email}</span>}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>








            
            {/* <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/Register'>Register</Link> */}

{/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hotel Website</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="px-3 text-info" to='/'>Home</NavLink>
            <NavLink className="px-3 text-info" to='/login'>Login</NavLink>
            <NavLink className="px-3 text-info" to='/Register'>Register</NavLink>
          </Nav>
        </Container>
      </Navbar> */}



        </div>
    );
};

export default Header;