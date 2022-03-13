import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function SignUpForm(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [favSteak, setFavSteak] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const user = {
            username,
            password,
            password_confirmation: passwordConfirmation,
            fav_steak: favSteak
        }

        console.log(user);
    }


    return(
        <Container className="form-container">
            <Form id="signup-form" onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e => setUsername(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e => setPassword(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e => setPasswordConfirmation(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Select 
                        aria-label="Fav-steak select"
                        onChange={(e => setFavSteak(e.target.value))}
                    >
                        # Steak options mapped and go here 
                        <option>Placeholder</option>
                        <option>Placeholder 2</option>
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