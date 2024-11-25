import React, { useState } from "react";
import Profile from "./components/Profile";
import "./styles/App.css";

function App() {
  const [shows, setShows] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShows(!shows)} className="toggle-btn">
        {shows ? "Hide Profile" : "Show Profile"}
      </button>
      {shows && <Profile />}
    </div>
  );
}

export default App;
