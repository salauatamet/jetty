import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "../src/components/Header/Header.scss";
import "../src/components/Main/Main.scss";
import "../src/components/Search/Search.scss";
import "../src/components/Results/Results.scss";
import "./root.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
