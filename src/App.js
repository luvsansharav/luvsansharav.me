import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./pages/Home";

const customHistory = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={customHistory}>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
