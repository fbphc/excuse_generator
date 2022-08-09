/* eslint-disable */
import "./App.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { dataset } from "./dataset.js";

function App() {
  const [excuse, SetExcuse] = useState("Sorry but...");
  const [excuseText, setExcuseText] = useState("");
  const [userEx, setUserEx] = useState([]);

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
    setUserEx([...userEx, excuseText]);
    e.target.reset();
  }

  return (
    <div className="App">
      <div className="main-container w-75">
        <h1 className="container mt-5 mb-2 text-center">Excuses Generator</h1>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Button className="my-3" variant="primary" onClick={dajeForte}>
            Generate
          </Button>
          <p className="h2 text-center excuse">{excuse}</p>
        </div>
        <form
          onSubmit={addTheExcuse}
          className="container my-1 d-flex justify-content-center align-items-center flex-column"
        >
          <label className="my-1" htmlFor="Add">
            Suggest an excuse:
          </label>
          <input
            className="my-1 input"
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
        <div className="text-center mt-4 mb-3 mx-auto w-75">
          <h4>Our Excuses:</h4>
          {dataset.map((item) => (
            <h5 className="d-inline">{item} / </h5>
          ))}

          <h4 className="mt-2 usEx">Your Excuses:</h4>
          {userEx.map((item) => (
            <h5 className="d-inline">{item} / </h5>
          ))}
        </div>
        <div className="line mt-3 mb-5 w-25 mx-auto"></div>
      </div>
    </div>
  );
}

export default App;
