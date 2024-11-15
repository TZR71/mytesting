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
    <h3>
      {" "}
      This project can be found also in{" "}
      <a
        href="https://github.com/TZR71/mytesting"
        target="_blank"
        rel="noreferrer"
      >
        here.{" "}
      </a>
    </h3>
  </React.StrictMode>
);
