import { useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";



function ReviewForm({ user, steak }){

    // send steak.restaurant in fetch, id as well
    // user


    return (
        <Container className="form-container">
            <Form className="review-form">
                <Form.Group className="form-group">
                    <Form.Label>Steak</Form.Label>
                </Form.Group>

            </Form>

        </Container>
    )
}

export default ReviewForm;