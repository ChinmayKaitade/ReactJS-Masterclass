import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  // const [name, setName] = useState("Love");

  // variation 1 --> Works on Every Render
  // useEffect(() => {
  //   console.log("UI Rendering Done...");
  // });

  // variation 2 --> First Render
  // useEffect(() => {
  //   console.log("UI RENDERING DONE...");
  // }, []);

  // variation 3 --> Whenever dependency changes
  // useEffect(() => {
  //   console.log("Changed Observed");
  // }, [text]);

  // if name will change then rendering will done --> First Render + on name value change

  // useEffect(() => {
  //   console.log("Changed Observed");
  // }, [name]);

  // variation 4 --> To Handle unmounting of a component
  useEffect(() => {
    // add event listener
    console.log("Listener Added");

    return () => {
      console.log("Listener Removed");
    }; // return code will execute first in this case of useEffect hook
  }, [text]);

  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="app">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
