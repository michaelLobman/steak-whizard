import ListGroup from "react-bootstrap/ListGroup";


function SteakCard({ steak }){
    return (
        <ListGroup.Item>{steak.restaurant} | Rating: {steak.rating}</ListGroup.Item>

    )
}

export default SteakCard;