import { useMemo, useState } from "react";
import "./style.css";

const DEFAULT_WEIGHT = 0;
const DEFAULT_HEIGHT = 100;

export default function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(2);
  }, [weight, height]);

  return (
    <main>
      
      <div >
        <p >Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          
        />
        <p class="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}
