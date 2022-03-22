import Container from "react-bootstrap/Container";
import ReviewCard from "../components/ReviewCard";


function Reviews({ user }){
    const reviewCards = user.reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
    ))

    return (
        <Container>
            <h1 className="reviews-h1">Your Reviews</h1>
            {reviewCards}
        </Container>
    )
}

export default Reviews;