import React from 'react';
import { Navbar,Nav,NavDropdown,Figure} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar=()=>{
return(
    <React.Fragment>
        <Navbar fixed="top" expand="xl" bg='light' variant='light'>
            <Nav>
                <Nav.Link href="/">ORDER</Nav.Link>
                <Nav.Link href="/">RESTAURANTS</Nav.Link>
                <Nav.Link href="/">OFFERS</Nav.Link>
                <Nav.Link href="/">TRENDING</Nav.Link>
                <Nav.Link href="/">OFFERS</Nav.Link>
                <NavDropdown title="MORE">
                    <NavDropdown.Item href="/">About</NavDropdown.Item>
                    <NavDropdown.Item href="/">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="/">CONTACT US</NavDropdown.Item>
                    <NavDropdown.Item href="/">Privacy Policy</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Navbar.Brand href="/" className="justify-content-center">
                <Figure>
                    <Figure.Item alt="img" src="../New folder/1012px-Burger_King_logo.svg.png"/>
                </Figure>
            </Navbar.Brand>
        </Navbar>
    </React.Fragment>
)
}
export default NavBar;