import { useState, useEffect } from "react";

import steakImg from "../img/steak.jpeg";
import ReviewCard from "../components/ReviewCard";

import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";



function BestSteak({ steaks, user, setUser }){

    const [steak, setSteak] = useState("tbd");

    useEffect(() => {
        fetch("/steaks/highest-rated")
            .then(r => r.json())
            .then(steak => setSteak(steak));
    }, []);


    const reviewCards = steak.reviews ? 
        steak.reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
        )) : null ;


    

    return ( 
        <Container>
            <h2 className="best-steak-h2">Top Steak: {steak.restaurant}</h2>
            <h3 className="best-steak-h3">What People are Saying</h3>
            <Image fluid="true" src={steakImg}/>
            <CardGroup className="reviews-card-group">
                {reviewCards}
            </CardGroup>
        </Container>
    )
    // const topThree = steaks.slice(0, 3)

    // const steakCards = topThree.map(steak => (
    //     <SteakCard key={steak.id} steak={steak} user={user} setUser={setUser}/>
    // ))

    // return (
    //     <Container>
    //         <h1 className="vote-h1">Vote for the Best Steak!</h1>
    //         <ListGroup>
    //             {steakCards}
    //         </ListGroup>
    //     </Container>
    // )
}

export default BestSteak;