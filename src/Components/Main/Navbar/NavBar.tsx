import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="navbar flex-column sticky-top">
      <Navbar.Brand href="/home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-icons d-flex flex-column">
          <Nav.Link href="/characters">Characters</Nav.Link>
          <Nav.Link href="/places">Places</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
