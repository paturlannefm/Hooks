import { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Tasks";

function App() {
  const [userQuery, setUserQuery] = useState("");

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  const updateUserQuery = (event) => {
    setUserQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello Franco</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
