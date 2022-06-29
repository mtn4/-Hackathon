import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import About from "./pages/about/About";

const URI = (() => {
  if (process.env.NODE_ENV === "production") {
    return "/api";
  } else {
    return "http://localhost:5050/api";
  }
})();

function App() {
  return (
    <div>
      <About />
    </div>
  );
}

export default App;
