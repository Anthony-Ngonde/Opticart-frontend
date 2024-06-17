import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar mb-5">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">OptiCart</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" />
          <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Item className="nav-link">
                <NavLink to="/lens-customization">
                  <button className="custom-button">Lens Customization</button>
                </NavLink>
              </Nav.Item>
              <Nav.Item className="nav-link">
                <NavLink to="/admin">
                  <button className="custom-button">Admin</button>
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="description-container">
        <p className="description-text">
          Welcome to OptiCart, your reliable source for premium glasses and sunglasses. We pride ourselves on offering top-quality products with exceptional customer service. Our extensive catalogue features the latest styles and lens customization options to meet your unique needs. Trust OptiCart for fast delivery and a seamless shopping experience.
        </p>
      </Container>
    </>
  );
}

export default NavBar;