import React from 'react'
import { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch as Switcher,Route } from "react-router-dom";
// import { UserContext } from "./context/userContext";

import './App.css';
import Home from './pages/Home'
import Admin from './pages/Admin'
function App() {
  return (
    <Router>
      <Switcher>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
      </Switcher>
    </Router>
  );
}

export default App;
