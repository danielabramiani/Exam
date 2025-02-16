import React, {useState} from "react";
import Auth from "./components/Auth";
import Home from "./components/Home"
import './App.css';

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <div>
      {user ?  <Home user={user} setUser={setUser} /> : <Auth setUser={setUser}/>}
    </div>
  );
};

export default App;
