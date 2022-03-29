import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [light1, setLight1] = useState(true);
  const [light2, setLight2] = useState(false);
  const [light3, setLight3] = useState(false);
  const change = () => {
    if (light1 === true) {
      setLight1("light1-off");
      setLight2(true);
    } else {
      if (light2 === true) {
        setLight2("light2-off");
        setLight3(true);
      } else {
        if (light3 === true) {
          setLight3("light3-off");
          setLight1(true);
        }
      }
    }
  };

  return (
    <div className="App">
      <button className="next" onClick={change}>
        Next
      </button>
      <div
        className={light1 === true ? "light1-on led" : "light1-off led"}
      ></div>
      <div
        className={light2 === true ? "light2-on led" : "light2-off led"}
      ></div>
      <div
        className={light3 === true ? "light3-on led" : "light3-off led"}
      ></div>
    </div>
  );
}

export default App;
