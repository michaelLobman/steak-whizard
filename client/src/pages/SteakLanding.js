import ListGroup from "react-bootstrap/ListGroup";
import SteakCard from "../components/SteakCard"

function SteakLanding({ steaks }){

    const steakCards = steaks.map(steak => (
        <SteakCard key={steak.id} steak={steak} />
    ))

    return (
        <ListGroup>
            {steakCards}
        </ListGroup>
    )
}

export default SteakLanding;