import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    // const {user, logOut} = useFirebase();
    const {user, logOut} = useAuth();
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div>
            <div className="p-3 purple ">
                <div className="w-75 mx-auto d-flex justify-content-between align-items-center">
                    <div>
                        {element} <span className="mx-3">{element}</span> {element}
                    </div>
                    <div>
                        <h6>mijandoctor@gmail.com <span className="ms-3"> +01940190030</span></h6>
                    </div>
                </div>
            </div>
            
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
        </div>
    );
};

export default Header;