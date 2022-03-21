import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar( { user, setUser }){

    const navbarText = user ? <Navbar.Text>Welcome, {user.username}!</Navbar.Text> : <Navbar.Text>Welcome!</Navbar.Text>

    function handleClick(e){
        e.preventDefault();
        console.log("Logging out");
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
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">Steak Whizard</Navbar.Brand>
                {navbarText}
                {/* <Navbar.Text>
                    Welcome, {user.username}!
                </Navbar.Text> */}
                <Nav className="nav-links">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/best-steak">Best Steak</Nav.Link>
                    <Nav.Link href="/reviews">My Reviews</Nav.Link>
                    <Nav.Link href="/new-steak">Add Steak</Nav.Link>
                </Nav>
                <Button variant="outline-danger" onClick={handleClick}>Logout</Button>
            </Container>
        </Navbar>

    )
}

export default NavBar;