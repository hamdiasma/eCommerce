import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";


ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
