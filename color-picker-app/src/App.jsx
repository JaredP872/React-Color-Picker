// import React from "react";
import { useState } from "react";

// import "./App.css";
import ColorPicker from "./components/ColorPicker";

// This line defines an array of color strings.
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

// This line defines a functional React component called App.
function App() {
  // This line defines a state variable called selectedColor and a function called setSelectedColor to update the state variable.
  const [selectedColor, setSelectedColor] = useState("white");

  // This line defines a function called handleColorSelect that takes a color as an argument and sets the selectedColor state variable to that color.
  const handleColorSelect = (color) => {
    // This line defines a function called handleReset that sets the selectedColor state variable to white.
    setSelectedColor(color);
  };

  // this line defines a function called handleReset that sets the selectedColor state variable to white.
  const handleReset = () => {
    // This line sets the selectedColor state variable to white.
    setSelectedColor("white");
  };

  // This return statement defines what the component renders. It displays a color picker component with a list of color buttons and a reset button.
  return (
    // The color picker component is passed the colors array, selectedColor state variable, handleColorSelect function, and handleReset function as props.
    <div className="app">
      <ColorPicker
        colors={colors}
        selectedColor={selectedColor}
        onColorSelect={handleColorSelect}
        onReset={handleReset}
      />
    </div>
  );
}

// This line exports the App component.
export default App;
