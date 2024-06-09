import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from './CartWidgetComponent.jsx';
import { Link } from "react-router-dom";
import { getAllCategories } from '../services/products.js';

const NavBarComponent = () => {
    const [categories, setCategories] = React.useState([])

    React.useEffect(() => {
        getAllCategories()
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">JB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
                        <NavDropdown title="Música" id="basic-nav-dropdown">
                            {categories.map((category) => (
                                <NavDropdown.Item key={category.slug}>
                                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
                                </NavDropdown.Item>
                            ))}
                            <NavDropdown.Item as={Link} to="/album">Album</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/info">Info</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/registro">Registro</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/contactanos">Contáctanos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidgetComponent />
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;