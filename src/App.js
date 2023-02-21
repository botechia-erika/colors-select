import React from 'react';
import './style.css';
import { useState } from 'react';
export default function App() {
  const listColors = ['blue', 'black', 'crimson'];
  const [colorsSelect, setColorsSelect] = useState([]);
  const handleCheckedColor = (e) => {
    console.log(e.target.checked);
    e.target.checked
      ? setColorsSelect([...colorsSelect, e.target.value])
      : setColorsSelect(
          [...colorsSelect].filter((color) => color !== e.target.value)
        );
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          value="blue"
          onChange={(e) => {
            handleCheckedColor(e);
          }}
        />
      </div>

      <div>
        {colorsSelect.length < 1
          ? listColors.map((color) => (
              <div
                key={color}
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: '15px',
                  backgroundColor: color,
                }}
              ></div>
            ))
          : colorsSelect.map((color) => (
              <div
                key={color}
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: '15px',
                  backgroundColor: color,
                }}
              ></div>
            ))}
      </div>
    </div>
  );
}
