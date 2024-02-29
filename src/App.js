import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aqi from "./components/Aqi";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import axios from "axios";

import {
  Link as lk,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";
const logo = require("./cleanlogo.png");
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="flex-div">
            <img src={logo} alt="a" className="logo" />
            <span>BREATHWELL.COM</span>
          </div>
          <div className="nav-div">
            <Link to="/">
              <span>HOME</span>
            </Link>
            <Link to="/aqi">
              <span>AQI</span>
            </Link>
            <Link to="/contact">
              <span>CONTACT-US</span>
            </Link>
            <Link to="/privacy">
              <span>PRIVACY</span>
            </Link>
          </div>
        </header>
        <section>
          <Routes>
            <Route path="/" exact element={<Home Link={lk} />} />
            <Route path="/aqi" element={<Aqi />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
