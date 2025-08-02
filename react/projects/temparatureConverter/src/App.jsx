import { useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState('');
  const [converted, setConverted] = useState(0);
  const [fromUnit, setFromUnit] = useState('celsius');
  const [toUnit, setToUnit] = useState('fahrenheit');

  const handleConvert = () => {
    if (!temperature || isNaN(temperature)) {
      alert("Please enter a valid temperature!");
      return;
    }

    let result = 0;
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      result = (parseFloat(temperature) * 9) / 5 + 32; // Celsius to Fahrenheit
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      result = ((parseFloat(temperature) - 32) * 5) / 9; // Fahrenheit to Celsius
    } else {
      result = parseFloat(temperature); // Same units
    }
    setConverted(result.toFixed(2));
  };

  return (
    <>
      <div className="container">
        <p>Enter Temperature:</p>
        <div className="temps">
          <div
            className="temp-input"
            contentEditable="true"
            suppressContentEditableWarning={true} 
            onBlur={(e) => setTemperature(e.target.innerText)}
          >
            {temperature}
          </div>
          <select
            name="temp"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </select>
        </div>
        <button className="convert" onClick={handleConvert}>
          Convert
        </button>
        <div className="result">
          <p>
            Converted Temperature: <span>{converted}</span>
          </p>
          <select
            name="temp"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default App;
