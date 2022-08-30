import { Navbar, Nav } from "react-bootstrap";

// se si hanno più props allora accediamo alle props con props.brand
// se la props è unica possiamo richiamare la proprietà con { brand }
const CustomNavbar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="c-nav">
          <Navbar.Brand href="#home">MyNav</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">
                About
              </Nav.Link>
              <Nav.Link href="#"> Browse </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
)

export default CustomNavbar;