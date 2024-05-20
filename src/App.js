import "./App.css";
import React from "react";
import Sapa from "./sapa/Sapa";
import Click from "./click/Click.js";
import Paragraph from "./paragraph/Paragraph.js";
import Log from "./log/Log.js";

function App() {
  return (
    <div className="App">
      <Sapa name="Napa" />
      <Click />
      <Log />
      <Paragraph kata="Hallo aku Props PROPS DISINI" />
    </div>
  );
}

export default App;
