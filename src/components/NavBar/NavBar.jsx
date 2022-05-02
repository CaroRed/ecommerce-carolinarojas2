import {Container , Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

import './NavBar.css'

function NavBar() {
    return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand><Link to="/">React Ecommerce</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link">Inicio</NavLink>
            
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/categoria/electro">Electro</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categoria/gamer">Gamer</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categoria/retro">Retro</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Otros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <CartWidget/>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar