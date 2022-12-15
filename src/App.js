import Display from "./components/Display";
import Pad from "./components/Pad";
import { useState, useEffect } from "react";
import playAudio from "./helpers/playAudio";
import drums from "./drums.json";
import "./App.css";

export default function App() {
  const [actualDrum, setActualDrum] = useState('');

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = e => {
    for (let i = 0; i < drums.length; i++) {
      if (e.key.toUpperCase() === drums[i].id) {
        playAudio(drums[i].id);
        setActualDrum(drums[i].id);
      }
    }
  };

  return (
    <div id="drum-machine">
      <Display content={actualDrum} />
      <Pad drums={drums} setActualDrum={setActualDrum} />
    </div>
  );
};
