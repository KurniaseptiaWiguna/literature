import React from 'react'
import { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch as Switcher,Route } from "react-router-dom";
// import { UserContext } from "./context/userContext";

import './App.css';
import Home from './pages/Home'
function App() {
  return (
    <Router>
      <Switcher>
        <Route exact path="/" component={Home} />
      </Switcher>
    </Router>
  );
}

export default App;
