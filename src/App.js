import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from "./Home";
import Parks from "./Parks";
import Trails from "./Trails";
import './App.css';
function App() {
  return (
  <Router>
    <nav>
    <Link to = "/" className="link">Home</Link>
    <Link to="/trails" className="link">Trails</Link>
    <Link to="/parks" className="link">Parks</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/trails" element={<Trails/>}/>
      <Route path="/parks" element={<Parks/>}/>
    </Routes>
  </Router>
  );
}

export default App;
