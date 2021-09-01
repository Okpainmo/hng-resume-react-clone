import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";

// CSS import

import "./index.css";

function Base() {
  return <Navbar />;
}

ReactDOM.render(<Base />, document.getElementById("root"));
