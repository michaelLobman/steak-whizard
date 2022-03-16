import { useEffect, useState } from "react";

import steakImg from "../img/steak.jpeg";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import SteakCard from "../components/SteakCard"




function SteakLanding({ steaks, user, setUser }){

    const [topSteak, setTopSteak] = useState("");

    useEffect(() => {
        fetch("/steaks/highest-rated")
            .then(r => r.json())
            .then(steak => setTopSteak(steak));
    }, []);

    const steakCards = steaks.map(steak => (
        <SteakCard key={steak.id} steak={steak} user={user} setUser={setUser}/>
    ))

    return (
        <Container>
            <h2>Top Steak: {topSteak.restaurant}</h2>
            <ListGroup>
                {steakCards}
            </ListGroup>
            <Image fluid="true" src={steakImg}/>
        </Container>
    )
}

export default SteakLanding;