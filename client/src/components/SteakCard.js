import { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import ReviewForm from "./ReviewForm";



function SteakCard({ steak, user, setUser }){

    const [showReviewForm, setShowReviewForm] = useState(false);

    function handleClick(){
        let newFav;
        if (steak.id === user.fav_steak) {
            newFav = 0;
        } else {
            newFav = steak.id;
        }

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fav_steak: newFav })
        })
            .then(r => r.json())
            .then(user => setUser(user))
    }

    const previouslyReviewed = user.reviews.find(review => review.steak_id === steak.id) ? true : false
    // const reviewText = previouslyReviewed ? "Already Reviewed" : "Review"

    let reviewText;

    if (previouslyReviewed) {
        reviewText = "Already Reviewed";
    } else if (showReviewForm) {
        reviewText = "Hide"
    } else {
        reviewText = "Review"
    }
    const rating = steak.rating ? steak.rating : "N/A"
    const variant = user.fav_steak === steak.id ? "danger" : "success" 
    const favText = user.fav_steak === steak.id ? "Unfavorite" : "Favorite"

    // const active = 
    return (
        <ListGroup.Item>
            {steak.restaurant} | Rating: {rating} <Button onClick={handleClick} variant={variant}>{favText}</Button>
            <Button onClick={(() => setShowReviewForm(!showReviewForm))} variant="primary" disabled={previouslyReviewed}>{reviewText}</Button>
            {showReviewForm ? 
            <ReviewForm steak={steak} user={user} setUser={setUser} show={showReviewForm} setShow={setShowReviewForm} /> : 
            null}
        </ListGroup.Item>

    )
}

export default SteakCard;