import { useState } from "react";

import AddSteak from "../components/AddSteak";
import ReviewForm from "../components/ReviewForm";

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
        <>
            <AddSteak setSteaks={setSteaks} />
            <h3>Leave a Review</h3>
            <ReviewForm />
        </>
    )
}

export default NewSteak;