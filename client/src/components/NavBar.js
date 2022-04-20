import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";


function NavBar( { user, setUser }){

    const navbarText = user ? <Navbar.Text>Welcome, {user.username}!</Navbar.Text> : <Navbar.Text>Welcome!</Navbar.Text>

    function handleClick(e){
        e.preventDefault();
        fetch("/logout", {
            method: "DELETE"
        })
            .then(r => {
                if (r.ok){
                    setUser(null);
                }
            });
    }


    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Steak Whizard</Navbar.Brand>
                {navbarText}
                <Nav className="nav-links">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/best-steak">Best Steak</Nav.Link>
                    <Nav.Link as={NavLink} to="/reviews">My Reviews</Nav.Link>
                    <Nav.Link as={NavLink} to="/new-steak">Add Steak</Nav.Link>
                </Nav>
                <Button variant="outline-danger" onClick={handleClick}>Logout</Button>
            </Container>
        </Navbar>

    )
}

export default NavBar;