import { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function NewSteak({ setSteaks }){

    const [restaurant, setRestaurant] = useState("");
    const [rating, setRating] = useState(0);
    const [favSteak, setFavSteak] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const favBoolean = favSteak === "true" ? true : false

        const newSteak = {
            restaurant,
            rating,
            favBoolean
        };

        console.log(newSteak);
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
                    <Form.Label>Rating</Form.Label>
                    <Form.Control   
                        type="number"
                        min="0"
                        max="10"
                        onChange={(e => setRating(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
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
            </Form>
        </Container>
    )
}

export default NewSteak;