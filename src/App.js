import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Light from "./components/Light";
import Button from "./components/Button";

function App() {
  const [lights, setLights] = useState({
    light1: true,
    light2: false,
    light3: false,
  });
  const change = () => {
    if (lights.light1 === true) {
      setLights({
        light1: false,
        light2: true,
        light3: false,
      });
    }
    if (lights.light2 === true) {
      setLights({
        light1: false,
        light2: false,
        light3: true,
      });
    }
    if (lights.light3 === true) {
      setLights({
        light1: true,
        light2: false,
        light3: false,
      });
    }
  };

  return (
    <div className="App">
      <Button onclick={change} />
      <div className="light-box">
        <Light on={lights.light1} className="red" />
        <Light on={lights.light2} className="yellow" />
        <Light on={lights.light3} className="green" />
      </div>
    </div>
  );
}

export default App;
