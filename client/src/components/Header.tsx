
import logo from '../assets/digcogsLogo.png';
import { Container, Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap';
import '../styles/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
// import MainNav from './MainNav';
import AuthNav from './AuthNav';
import Dashboard from '../pages/Dashboard';
const Header: React.FC = () => {

  const history = useHistory();

  function homeButton() {
    return (event: React.MouseEvent) => {
      history.push(`/dashboard`);
      event.preventDefault();
    };
  }
  return (
    <Navbar
      fixed="top"
      className="header"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Image className="logo" src={logo} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="#action/3.1"
                onClick={homeButton()}
              >
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <AuthNav />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
