import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaAlignRight } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

import { useState, useEffect } from 'react';

function Header() {

    const navBrandStyle = {
        fontFamily: 'Lobster, sans-serif',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'red',
        textTransform: 'uppercase',
        letterSpacing: '0.2rem',
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
        transition: 'color 0.3s ease',
    };

    const redAccentStyle = {
        // color: '#ff5733',
        color: 'white',
        fontSize: '1rem'
    };
    
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true); // Change navbar background opacity
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Navbar
                expand='lg'
                data-bs-theme='dark'
                fixed="top"
                className={`navbar ${scrolling ? "scrolled" : ""}`}
                style={{
                    transition: "background-color 0.3s ease",
                    backgroundColor: scrolling ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.1)"
                }}
            >
                <Container fluid >
                    <Navbar.Brand href="/"
                        style={navBrandStyle}
                        >
                        E<span style={redAccentStyle}>xplore </span>I<span style={redAccentStyle}>NDIA</span>
                    </Navbar.Brand>

                    <Navbar.Toggle>
                        <FaAlignRight />
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
                            <Nav className="flex-grow-1 gap-1 fw-lg-bold fw-normal">

                                <Nav.Link href="#Destination">Destination</Nav.Link>
                                <Nav.Link href="#Things To Do">Things To Do</Nav.Link>
                                <Nav.Link href="#Plan Your Trip">Plan Your Trip</Nav.Link>
                                {/* <Nav.Link href="#India Calender">India Calender</Nav.Link> */}
                                <Nav.Link href="#India Map">India Map</Nav.Link>

                                <Nav.Link><div className="border border-1 border-dark d-lg-none"></div></Nav.Link>
                            </Nav>

                            <Nav className='fw-bold gap-2'>

                                <Nav.Link> Language <TbWorld /> </Nav.Link>
                                <Nav.Link className='fw-light d-block d-lg-none p-0'> English </Nav.Link>
                                <Nav.Link className='fw-light d-block d-lg-none p-0'> Hindi </Nav.Link>
                                <Nav.Link className='fw-light d-block d-lg-none p-0'> Telugu </Nav.Link>
                                <Nav.Link className='fw-light d-block d-lg-none p-0'> Malayalam </Nav.Link>

                                <Nav.Link><div className="border border-1 border-dark d-lg-none"></div></Nav.Link>

                                <Nav.Link href='Signup' style={{ color: '' }}> LOG IN <span style={redAccentStyle}>/</span> SIGN UP </Nav.Link>


                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;