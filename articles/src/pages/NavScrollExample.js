import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

const NavScrollExample = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Nav.Link as={Link} to="/">    
            <Navbar.Brand>Domů</Navbar.Brand>
      </Nav.Link>

        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="article_array">
                    Seznam článků
            </Nav.Link>
            <NavDropdown title="Akce" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="new_article">Nový článkek</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="contact">
                O nás
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Zadejte text"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Vyhledat</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;