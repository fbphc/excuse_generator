/* eslint-disable */ 
import "./App.css";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
const dataset = [
  "Wifi problem",
  "No electricity",
  "I'm sick",
  "Bathroom-break",
  "The meeting is not working",
  "Clashing-meetings",
  "I didn't know",
  "Timezone differences",
  "Didn't get the invite",
  "Blame it on the family/the pets /the spouse/the boogie",
];


function App() {
  const [excuse, SetExcuse] = useState("Sorry but...");
  const [excuseText, setExcuseText] = useState("");

 
  function dajeForte() {
    const randomNumber = Math.floor(Math.random() * dataset.length);
    SetExcuse(dataset[randomNumber]);
  }
  function addTheExcuse(e) {
    e.preventDefault();
    const isInAlready = dataset.some((excuse) => excuse === excuseText);
    if (isInAlready)
      return window.alert("Already in the dataset, try something else...");
    if (excuseText === "") return window.alert("Add a valid excuse!");
    dataset.push(excuseText);
  }

  return (
    <div className="App">
      <div className="main-container w-75">
      <h1 className="container mt-5 mb-3 text-center">Excuses Generator</h1>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Button className="my-3" variant="primary" onClick={dajeForte}>
          Generate
        </Button>
        <p className="h2 text-center" >{excuse}</p>
      </div>
      <form onSubmit={addTheExcuse} className="container my-5 d-flex justify-content-center align-items-center flex-column">
        <label className="my-1" htmlFor="Add">Suggest an excuse:</label>
        <input className="my-1"
          type="text"
          id="add"
          name="Add"
          placeholder="Your excuse..."
          onChange={(e) => setExcuseText(e.target.value)}
        />
        <Button className="my-1" variant="primary" type="submit">
          Add your excuse
        </Button>
      </form>
      </div>
    </div>
  );
}

export default App;
