import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/HelloworldFn">HelloworldFn</Nav.Link>
            <Nav.Link href="/condition">Condition</Nav.Link>
            <Nav.Link href="/loop">Loop</Nav.Link>
            <Nav.Link href="/form">Form</Nav.Link>
            <Nav.Link href="/fetch">Fetch</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/count">Counter</NavDropdown.Item>
              <NavDropdown.Item href="/fetchdata2">FetchData by useEffect</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        // <div>
        //     <nav>
        //     <ul>
        //         <li><a href="/">Home</a></li>
        //         <li><a href="/HelloworldFn">HelloworldFn</a></li>
        //         <li><a href="/condition">Condition</a></li>
        //         <li><a href="/loop">Loop</a></li>
        //         <li><a href="/form">Form</a></li>
        //         <li><a href="/fetchdata">Fetch</a></li>
        //     </ul>
        // </nav>
        // </div>
    );
}

export default Menu;