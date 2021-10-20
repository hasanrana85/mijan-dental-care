import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
            
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                    <Container>
                    <Navbar.Brand href="#home">Mijan Dental Care</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home#home" className="text-white">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services#services" className="text-white">Services</Nav.Link>
                            <Nav.Link as={Link} to="/about#about" className="text-white">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/doctors#doctors" className="text-white">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/contact#contact" className="text-white">Contact Us</Nav.Link>
                            { user.email ?
                                <button onClick={logOut}>Log Out</button>
                                :
                                <Nav.Link as={Link} to="/login#login" className="text-white">Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/registration#registration" className="text-white">Registration</Nav.Link>
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        
    );
};

export default Header;