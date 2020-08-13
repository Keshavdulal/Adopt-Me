import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";
import ThemeContext from "./ThemeContext";
import Navbar from "./components/Navbar.js";

// lazy loading (aka code splitting)Details Component
// Recommended for 30kb+ files or comps
// import Details from "./components/Details";
const Details = lazy(() => import("./components/Details"));

const App = () => {
  // hook usage
  // const themeHook = useState("peru");
  return (
    <React.StrictMode>
      {/* <ThemeContext.Provider use={themeHook}> */}
      <div>
        <Navbar />
        {/* <header>
          <Link to="/">Adopt me</Link>
        </header> */}
        <Suspense fallback={<h1>Loading Lazy Comp...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
      {/* </ThemeContext.Provider> */}
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
