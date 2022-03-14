import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import SteakLanding from "../pages/SteakLanding";
import NewSteak from "../pages/NewSteak";

function App() {

  const [user, setUser] = useState(null);
  const [steaks, setSteaks] = useState([]);

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
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route path="/new-steak">
          <NewSteak user={user} />
        </Route>
        <Route path="/">
          <SteakLanding user={user} steaks={steaks}/>
        </Route>
      </Switch>
    </div>
  )


}

export default App;
