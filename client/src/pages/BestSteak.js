import { useState, useEffect } from "react";

import steakImg from "../img/steak.jpeg";
import ReviewCard from "../components/ReviewCard";

import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function BestSteak(){

    const [steak, setSteak] = useState("tbd");

    useEffect(() => {
        fetch("/steaks/highest-rated")
            .then(r => r.json())
            .then(steakArr => setSteak(steakArr[0]));
    }, []);

    const reviewCards = steak.reviews ? 
        steak.reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
        )) : null ;

    return ( 
        <Container>
            <h2 id="best-steak-h2">Top Steak: {steak.restaurant}</h2>
            <h3 id="best-steak-h3">What People are Saying</h3>
            <CardGroup className="reviews-card-group">
                {reviewCards}
            </CardGroup>
            <Image fluid="true" src={steakImg}/>
        </Container>
    )
}

export default BestSteak;