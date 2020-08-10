import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      {/* <Pet name="luna" animal="dog" breed="havanese" />
      <Pet name="tuna" animal="fish" breed="aquatic" />
      <Pet name="muna" animal="cat" breed="mixed" /> */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
