import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./SearchCity.css";

import SearchCity from "./SearchCity";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather Search Engine</h1>
    <SearchCity />
  </React.StrictMode>
);
