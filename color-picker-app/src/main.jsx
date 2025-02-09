// This line imports the React library.
import { StrictMode } from "react";

// This line imports the ReactDOM library.
import { createRoot } from "react-dom/client";

import "./index.css";

// This line imports the App component from the App.js file.
import App from "./App.jsx";

// This line renders the App component to the root element in the HTML file.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
