import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Tuna",
      animal: "fish",
      breed: "aquatic",
    }),
    React.createElement(Pet, {
      name: "Muna",
      animal: "cat",
      breed: "mixed",
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
