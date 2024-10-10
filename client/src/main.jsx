import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { DataProvider } from "./contexts/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </DataProvider>
);
