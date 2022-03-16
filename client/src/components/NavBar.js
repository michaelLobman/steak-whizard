import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";

function NavBar( { user, setUser }){
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">Steak Whizard</Navbar.Brand>
                <Navbar.Text>
                    Welcome, {user.username}!
                </Navbar.Text>
                <Nav className="nav-links">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/best-steak">Best Steak</Nav.Link>
                    <Nav.Link href="/reviews">Reviews</Nav.Link>
                    <Nav.Link href="/new-steak">Add Steak</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar;