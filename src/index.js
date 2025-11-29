// src/index.js (CORRECTED CODE)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- REMOVED: basename="/my-portfolio" */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
