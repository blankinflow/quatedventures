import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CustomNavbar from './components/CustomNavbar';
import Ev from './components/Ev';
import Projects from './components/Projects';
import Carrier from './components/Carrier';
import Contact from './components/Contact';
import Scroll from 'react-scroll';
import ImgSlider from './components/carousel';
import OwlCarousel from './components/team';
import Service from './components/service';
import Client from './components/client';

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* <Route path="/" component={Home}/> */}
          <Route path="/" component={ImgSlider}/>
          <Route path="/" component={About}/>
          <Route path="/" component={Projects}/>
          <Route path="/" component={Service}/>
          <Route path="/" component={Carrier}/>
          <Route path="/" component={OwlCarousel}/>
          <Route path="/" component={Client}/>
          <Route path="/" component={Ev}/>
          <Route path="/" component={Contact}/>
        </div>
      </Router>

    );
  }
}

export default App;
