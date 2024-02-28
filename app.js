import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";

// JSX - HTML -like or XML -like syntax.
// JSX (transpiled before it reaces the JS engine) - Parcel - Babel
// JSX => React.createElement => ReactElement-JS oject => HTMLElement(render).
const jsxHeading = <h1 className="head">Namaste react using JSX</h1>;

const root = createRoot(document.getElementById("root"));
root.render(jsxHeading);
