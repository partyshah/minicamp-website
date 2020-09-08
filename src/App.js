import React, { useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MiniCamps from "./components/MiniCamps";

import './App.scss';

function App() {
  const [toggle, setToggle] = useState({
    home: true,
    about: false,
    minicamps: false
  });

  return (
    <Router>
    <div className="content">
      <nav>
        <img className="logo" src={logo} />
        <ul>
          <li className={toggle.home ? 'active' : ''}>
            <Link onClick={() => setToggle({home: true, about: false, minicamps: false})} to="/">home</Link>
          </li>
          <li className={toggle.about ? 'active' : ''}>
            <Link onClick={() => setToggle({home: false, about: true, minicamps: false})} to="/about">about</Link>
          </li>
          <li className={toggle.minicamps ? 'active' : ''}>
            <Link onClick={() => setToggle({home: false, about: false, minicamps: true})} to="/minicamps">mini camps</Link>
          </li>
        </ul>
        <p>mini camp's mission is to spark your love for learning through playful communities</p>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/minicamps">
          <MiniCamps />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
