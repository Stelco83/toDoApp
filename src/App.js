import React from "react";
import "./styles.css";
import ToDo from "./containers/ToDo.js";

export default function App() {
  return (
    <div className="App">
      <h1>ToDo App Simple</h1>
      <h2>Please add your ToDo list:</h2>
      <ToDo />
    </div>
  );
}
