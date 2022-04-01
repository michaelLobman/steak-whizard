import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function LoginForm({ onLogin }){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        const user = {
            username,
            password
        };

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(user => onLogin(user));
                } else {
                    r.json().then(error => setErrors(error.errors))
                }
            })
    }




    const renderedErrors = errors.map(error => (
        <Alert key={error} variant="danger">{error}</Alert>
    ))

    return (

        <Container className="form-container">
            <Form id="login-form" onSubmit={handleSubmit}>
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
                    <Button type="submit" variant="primary">Submit</Button>
                </Form.Group>
                <Form.Group className="form-group">
                    {renderedErrors}
                </Form.Group>
            </Form>
        </Container>

    )
}

export default LoginForm;