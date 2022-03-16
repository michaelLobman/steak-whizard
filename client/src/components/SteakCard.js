import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";



function SteakCard({ steak, user, setUser }){

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

    const variant = user.fav_steak === steak.id ? "danger" : "success" 
    const text = user.fav_steak === steak.id ? "Unfavorite" : "Favorite"
    return (
        <ListGroup.Item>
            {steak.restaurant} | Rating: {steak.rating} <Button onClick={handleClick} variant={variant}>{text}</Button>
        </ListGroup.Item>

    )
}

export default SteakCard;