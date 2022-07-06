import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

function Menu() {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
          <Container>
            <LinkContainer to="/"><Navbar.Brand>Dashboard</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/data"><Nav.Link>Data</Nav.Link></LinkContainer>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default Menu;