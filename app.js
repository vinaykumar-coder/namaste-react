import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";

const Title = () =>  ( <h1 className="head">
    Namaste react using JSX
    </h1>);

// React functional component.


const HeadingComponent = () => (
  <div>
    {Title()}
    <h1 className="heading">Namaste React functional component.</h1>
  </div>
);

const root = createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent />);
