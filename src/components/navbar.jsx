import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaSearch, FaAlignRight } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';


function Header() {
    
    return (
        <>
            <Navbar expand='lg' style={{backgroundColor:'rgba(0, 0, 0, 0.8)'}} data-bs-theme='dark' fixed="top">
                <Container fluid >
                    <Navbar.Brand href="#" className='p-0'>
                        <img
                            src='images/brand.jpg'
                            width="80"
                            height="40"
                            className="align-top d-md-none d-lg-none"
                            alt="React Bootstrap logo"

                        />
                        <img
                            src='images/brand.jpg'
                            width="100"
                            height="50"
                            className="align-top d-none d-md-block d-lg-block"
                            alt="React Bootstrap logo"

                        />
                    </Navbar.Brand>

                    <Navbar.Toggle>
                        <FaAlignRight/>
                    </Navbar.Toggle>

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Offcanvas
                            </Offcanvas.Title> */}
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="flex-grow-1 gap-2 fw-lg-bold fw-normal">

                                <Nav.Link href="#Destination">Destination</Nav.Link>
                                <Nav.Link href="#Things To Do">Things To Do</Nav.Link>
                                <Nav.Link href="#Plan Your Trip">Plan Your Trip</Nav.Link>
                                {/* <Nav.Link href="#India Calender">India Calender</Nav.Link> */}
                                <Nav.Link href="#India Map">India Map</Nav.Link>

                                <Nav.Link><div className="border border-1 border-dark d-lg-none"></div></Nav.Link>
                            </Nav>

                            <Nav className='fw-bold gap-2'>

                                <Nav.Link> Language <TbWorld/> </Nav.Link>
                                <Nav.Link className='fw-light d-block d-lg-none p-0'> English </Nav.Link>
                                <Nav.Link className='fw-light d-block d-lg-none p-0'> Hindi </Nav.Link>
                                <Nav.Link className='fw-light d-block d-lg-none p-0'> Telugu </Nav.Link>
                                <Nav.Link className='fw-light d-block d-lg-none p-0'> Malayalam </Nav.Link>
                                
                                <Nav.Link><div className="border border-1 border-dark d-lg-none"></div></Nav.Link>

                                <Nav.Link href='Signup' style={{color:'#AA98A9'}}> LOG IN / SIGN UP </Nav.Link>
                                

                            </Nav>
                            
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;