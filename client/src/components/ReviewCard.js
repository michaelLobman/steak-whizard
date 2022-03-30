import Card from "react-bootstrap/Card";

function ReviewCard({ review }){

    const { rating, title, comment, toppings, restaurant } = review

    let ratingClass;
    if (rating > 7) ratingClass = "high-rating";
    if (rating < 4) ratingClass = "low-rating";
    

    return (
        <Card className="review-card">
            <Card.Header as="h3">{restaurant} | <span className={ratingClass}>{rating}</span></Card.Header>
            <Card.Body>
                <Card.Title className="review-title mx-auto">{title}</Card.Title>
                <Card.Text>{comment}</Card.Text>
                <Card.Text>With: {toppings}</Card.Text>
            </Card.Body>
        </Card>
    
        )
}

export default ReviewCard;