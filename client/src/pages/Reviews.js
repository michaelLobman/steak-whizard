import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import ReviewCard from "../components/ReviewCard";


function Reviews({ user }){
    const reviewCards = user.reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
    ))

    return (
        <Container>
            <h1 className="reviews-h1">Your Reviews</h1>
            <CardGroup className="reviews-card-group">
                {reviewCards}
            </CardGroup>
        </Container>
    )
}

export default Reviews;