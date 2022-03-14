import React, { useState } from "react";
// import NavBar from "./NavBar";
import Login from "../pages/Login";

function App() {

  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <p>You are logged in</p>
  )


}

export default App;
