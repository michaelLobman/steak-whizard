import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function SignUpForm(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [favSteak, setFavSteak] = useState("");


    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text"
                        size="large"
                        onChange={(e => setUsername(e.target.value))}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        size="large"
                        onChange={(e => setPassword(e.target.value))}
                    />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default SignUpForm;