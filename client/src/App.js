import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Books from "./pages/Books";
import Saved from "../src/pages/Saved";

function App() {
  return ( <Search /> );
}

export default App;