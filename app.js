import React from "react";
import ReactDOM from "react-dom/client";


// ReactElement(object) => HTML (browser understands);

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "This is Namaste React."),React.createElement("h2", {}, "I'm an h2 element")]
      ),
      React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "I'm an h1 tag"),React.createElement("h2", {}, "I'm an h2 element")]
      )
  ]
);

// const heading = React.createElement("h1", {id: "heading"}, "Hello World! from React....");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
