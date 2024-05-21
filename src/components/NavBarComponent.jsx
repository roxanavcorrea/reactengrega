import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidgetComponent from './CartWidgetComponent.jsx';

const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">JB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Tienda</Nav.Link>
                        <NavDropdown title="Musica" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Album</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Info
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Registro</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Contactanos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CarWidgetComponent/> 
            </Container>
        </Navbar>
    )
}


export default NavBarComponent;