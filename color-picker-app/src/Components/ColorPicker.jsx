import "./ColorPicker.css";
// defines a functional React component called color picker.
// SelecetedColor is the color that is currently selected. Thisnis used for stylng the color picker.
// oncolorSelect is a function that is called when a color is selected. It takes the selected color as an argument.
// onreset is a function that is called when the reset button is clicked. This resets the background color to white.
function ColorPicker({ colors, selectedColor, onColorSelect, onReset }) {
  // This return statments defines what the cpmopnent renders. It displays a header, color picker with a list of color buttons and a reset button.
  return (
    // The color picker div has a class name of color-picker that applies the styles from my ciolor picker css class and a style attribute that sets the background color to the selected color using the selectedColor prop.
    <div className="color-picker" style={{ backgroundColor: selectedColor }}>
      <h2>Pick a Color</h2>
      {/* The buttons div contains a list of color buttons. Each button has a class name of color-button that applies the styles from my color picker css file. The background color of each button is set to the color using the color prop. The onClick event handler calls the onColorSelect function with the color as an argument. */}
      <div className="buttons">
        {colors.map((color) => (
          <button
            key={color}
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
          >
            {color}
          </button>
        ))}

        {/* The reset button has a class name of reset-button that applies the styles from my color picker css file. The onClick event handler calls the onReset function when the button is clicked. */}
      </div>
      <button onClick={onReset} className="reset-button">
        Reset
      </button>
    </div>
  );
}

export default ColorPicker;
