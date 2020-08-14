import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";
// import ThemeContext from "./ThemeContext";
import Navbar from "./components/Navbar.js";

// Redux
import { Provider } from "react-redux";
import store from "./store.js";

// lazy loading / code splitting - Details Comp - 30kb+ rec
// import Details from "./components/Details";
const Details = lazy(() => import("./components/Details"));

const App = () => {
  // hook usage
  // const themeHook = useState("peru");
  return (
    <React.StrictMode>
      {/* <ThemeContext.Provider use={themeHook}> */}
      <Provider store={store}>
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
      </Provider>
      {/* </ThemeContext.Provider> */}
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
