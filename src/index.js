import React from "react";
import ReactDOM from "react-dom";
import Index from "./RouteJSON";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  rootElement
);
