import { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";


function SignUpForm({ steaks, onSignUp }){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [favSteak, setFavSteak] = useState("");
    const [errors, setErrors] = useState([]);

    const steakOptions = steaks.map(steak =>  (
        <option value={steak.id} key={steak.id}>{steak.restaurant}</option>
    ));

    const renderedErrors = errors.map(error => (
        <Alert key={error} variant="danger">{error}</Alert>
    ))

    function handleSubmit(e){
        e.preventDefault();
        const user = {
            username,
            password,
            password_confirmation: passwordConfirmation,
            fav_steak: parseInt(favSteak)
        }
        console.log(user);


        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(r => {
            if (r.ok) {
                r.json().then(user => onSignUp(user));
            } else {
                r.json().then(error => setErrors(error.errors))
            }
        })

    }



    return (
        <Container className="form-container">
            <Form id="signup-form" onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text"
                        value={username}
                        onChange={(e => setUsername(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e => setPassword(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e => setPasswordConfirmation(e.target.value))}
                        value={passwordConfirmation}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Favorite Steak</Form.Label>
                    <Form.Select 
                        aria-label="Fav-steak select"
                        onChange={(e => setFavSteak(e.target.value))}
                    >
                        <option disabled selected>Select a Fav</option>
                        {steakOptions}
                        <option value="0">Still Deciding...</option>
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
                <Form.Group>
                    {renderedErrors}
                </Form.Group>
            </Form>
        </Container>
    )
}

export default SignUpForm;