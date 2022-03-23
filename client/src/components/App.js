import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import BestSteak from "../pages/BestSteak";
import Login from "../pages/Login";
import Reviews from "../pages/Reviews";
import Home from "../pages/Home";
import NewSteak from "../pages/NewSteak";

function App() {

  const [user, setUser] = useState(null);
  const [steaks, setSteaks] = useState([]);
  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/me").then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/steaks")
      .then(r => r.json())
      .then(fetchedSteaks => setSteaks(fetchedSteaks))
  }, [])

  if (!user) return <Login onLogin={setUser} steaks={steaks} />;

  return (
    <div>
      {user ? <NavBar user={user} setUser={setUser} /> : null }
      <Switch>
        <Route path="/best-steak">
          <BestSteak user={user} setUser={setUser} steaks={steaks} />
        </Route>
        <Route path="/reviews">
          <Reviews user={user} />
        </Route>
        <Route path="/new-steak">
          <NewSteak user={user} setSteaks={setSteaks} />
        </Route>
        <Route path="/">
          <Home user={user} setUser={setUser} steaks={steaks}/>
        </Route>
      </Switch>
    </div>
  )


}

export default App;
