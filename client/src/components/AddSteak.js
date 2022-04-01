import { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function AddSteak({ setSteak }){

    const [restaurant, setRestaurant] = useState("");
    const [favSteak, setFavSteak] = useState("");
    const [errors, setErrors] = useState([]);

    const renderedErrors = errors.map(error => (
        <Alert key={error} variant="danger">{error}</Alert>

    ))

    function handleSubmit(e){
        e.preventDefault();

        const favBoolean = favSteak === "true" ? true : false

        const newSteak = {
            restaurant,
            fav_boolean: favBoolean
        };

        fetch('/steaks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newSteak)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(steak => setSteak(steak));
            } else {
                r.json().then(error => setErrors(error.errors))
            }
        })
    }

    return (
        <Container className="form-container">
            <Form id="new-steak-form" onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Restaurant</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e => setRestaurant(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Favorite?</Form.Label>
                    <Form.Select 
                        aria-label="Favorite Steak?"
                        onChange={(e => setFavSteak(e.target.value))}
                    >
                        <option value="true">Absolutely!</option>
                        <option value="false">Not quite</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="form-group">
                    <Button type="submit">Add Steak</Button>
                </Form.Group>
                <Form.Group className="form-group">
                    {renderedErrors}
                </Form.Group>
            </Form>
        </Container>
    )
}

export default AddSteak;