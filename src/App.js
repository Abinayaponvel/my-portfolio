// src/App.js (LOOKS CORRECT)
import React from "react";
// You are importing BrowserRouter as Router, which is fine, but slightly confusing.
// It's cleaner to use only one of the names throughout the app.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ... (rest of imports)

function App() {
  return (
    <Router> {/* This is the BrowserRouter imported as Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Your Home path is at the root */}
        {/* ... (rest of routes) ... */}
      </Routes>
    </Router>
  );
}

export default App;
