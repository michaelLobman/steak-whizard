import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import SteakCard from "../components/SteakCard"




function Home({ steaks, user, setUser }){

    const steakCards = steaks.map(steak => (
        <SteakCard key={steak.id} steak={steak} user={user} setUser={setUser}/>
    ))

    return (
        <Container>
            <h2 className="home-h2">Steaks</h2>
            <ListGroup>
                {steakCards}
            </ListGroup>
        </Container>
    )
}

export default Home;