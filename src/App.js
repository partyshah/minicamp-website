import React, { useState } from 'react';
import logo from './logo.svg';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MiniCamps from "./components/MiniCamps";
import Figma from "./components/Figma";
import Teaching from "./components/Teaching";


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
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li className={toggle.home ? 'active' : ''}>
            <Link onClick={() => setToggle({home: true, about: false, minicamps: false})} to="/">home</Link>
          </li>
          <li className={toggle.about ? 'active' : ''}>
            <Link onClick={() => setToggle({home: false, about: true, minicamps: false})} to="/about">about</Link>
          </li>
        </ul>
        <p>mini camp's mission is to spark your love for learning through playful communities</p>
        <div id="mailchimp-signup">
          <form action="https://fun.us2.list-manage.com/subscribe/post?u=f69a43d82d0c255d1968f08e5&amp;id=a8c4e3fdfb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
            	<input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="💌 email address" required />
              <div id="hidden-input" aria-hidden="true"><input type="text" name="b_f69a43d82d0c255d1968f08e5_a8c4e3fdfb" tabIndex="-1" /></div>
              <input type="submit" value="subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
          </form>
        </div>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/figma">
          <Figma />
        </Route>
        <Route path="/teaching">
          <Teaching />
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
