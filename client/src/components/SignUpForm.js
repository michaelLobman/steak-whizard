import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function SignUpForm(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [favSteak, setFavSteak] = useState("");


    return(
        <Container id="signup-container">
            <Form id="signup-form">
                <Form.Group className="form-group">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text"
                        size="large"
                        onChange={(e => setUsername(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        size="large"
                        onChange={(e => setPassword(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Select 
                        aria-label="Fav-steak select"
                    >
                        # Steak options mapped and go here 
                        <option>Placeholder</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="form-group">
                    <Button 
                        type="submit" 
                        variant="primary"
                    >
                        Submit 
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default SignUpForm;