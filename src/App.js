import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  //hook usage
  // const themeHook = useState("peru");
  return (
    <React.StrictMode>
      {/* <ThemeContext.Provider use={themeHook}> */}
      <div>
        <header>
          <Link to="/">Adopt me</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
      {/* </ThemeContext.Provider> */}
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
