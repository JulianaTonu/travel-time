

import {  NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import {FaUser } from "react-icons/fa";
import {GiHorizonRoad } from "react-icons/gi";

const Header = () => {

  const {user} =useContext(AuthContext)
    return (
        <div>


<Navbar className='navbar  ' expand="lg">
      <Container>
        <Navbar.Brand className='title text-warning fs-4' href="#home"><GiHorizonRoad className='fs-3 '></GiHorizonRoad>Travel Time</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavLink className="px-3 ms-5 nav" to="/">Home</NavLink>
            {/* <NavLink className="px-3  nav" to="/booking">Booking</NavLink> */}
            <NavLink className="px-3  nav" to="/login">Login</NavLink>
            <NavLink className="px-3  nav" to="/register">Register</NavLink>
            <NavLink className="px-3  nav" to="/hotel">Hotel</NavLink>
            <NavLink className="px-3  nav">{user?.email && <span className=' fs-5 fw-bold'>{user?.displayName}<FaUser className='me-2'></FaUser></span>}</NavLink>

            
            {/* {user?.email && <span className='text-info fs-5 fw-bold'>{user?.displayName}<FaUser className='me-2'></FaUser></span>} */}
           
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