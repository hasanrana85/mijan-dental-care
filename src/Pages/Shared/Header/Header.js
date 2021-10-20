import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo.png';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
            
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                    <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo" src={logo} alt="" />
                        <span className="logo_head">Mijan Dental Care</span>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home#home" className="text-white text-uppercase">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services#services" className="text-white text-uppercase">Services</Nav.Link>
                            <Nav.Link as={Link} to="/about#about" className="text-white text-uppercase">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/doctors#doctors" className="text-white text-uppercase">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/contact#contact" className="text-white text-uppercase">Contact Us</Nav.Link>
                            { user.email ?
                                <button onClick={logOut}>Log Out</button>
                                :
                                <Nav.Link as={Link} to="/login#login" className="text-white text-uppercase">Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/registration#registration" className="text-white">Registration</Nav.Link>
                            <Navbar.Text>
                                <h5><span className="text-info">Signed as:</span> <span className="text-danger">{user.displayName}</span></h5>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        
    );
};

export default Header;