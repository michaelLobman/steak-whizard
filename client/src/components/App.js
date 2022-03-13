import React, { useState } from "react";
// import NavBar from "./NavBar";
import Login from "../pages/Login";

function App() {

  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;


}

export default App;
