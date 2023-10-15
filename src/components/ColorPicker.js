import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const handleButtonClick = () => {
    setShowColors(!showColors);
  }

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  }

  const colorOptions = showColors && colors.map((color, index) => (
    <div
      key={index}
      style={{
        backgroundColor: color,
        width: '30px',
        height: '30px',
        display: 'inline-block',
        margin: '5px',
        cursor: 'pointer'
      }}
      onClick={() => handleColorClick(color)}
    ></div>
  ));

  return (
    <div className="color-picker-container">
      <div className="color-display" style={{ backgroundColor: selectedColor }}></div>
      <button onClick={handleButtonClick}>
        Pick a color
      </button>
      <div className="color-options">
        {colorOptions}
      </div>
    </div>
  );
}

export default ColorPicker;
