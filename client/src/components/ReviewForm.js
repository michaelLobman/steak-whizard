import { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";



function ReviewForm({ steak, setUser, show, setShow }){

    const [rating, setRating] = useState(10);
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [toppings, setToppings] = useState("");

    const [errors, setErrors] = useState([]);
    

    // send steak.restaurant in fetch, id as well
    // user

    function handleSubmit(e){
        e.preventDefault();
        const review = {
            steak_id: steak.id,
            title,
            comment,
            rating,
            toppings
        }
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review)
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(updatedUser => setUser(updatedUser))
                } else {
                    r.json().then(err => setErrors(err.errors));
                }
            });

        setTitle("");
        setComment("");
        setRating("");
        setToppings("");
        setShow(!show)
    }


    return (
        <Container className="form-container">
            <Form className="review-form" onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e => setTitle(e.target.value))}
                        value={title}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        type="text"
                        as="textarea"
                        rows="4"
                        onChange={(e => setComment(e.target.value))}
                        value={comment}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        type="number"
                        min="0"
                        max="10"
                        value={rating}
                        onChange={(e => setRating(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Toppings</Form.Label>
                    <Form.Control
                        type="text"
                        value={toppings}
                        onChange={(e => setToppings(e.target.value))}
                    />
                </Form.Group>
                <Button type="submit" variant="success">Submit</Button>

            </Form>

        </Container>
    )
}

export default ReviewForm;