import React,{ Component } from 'react';
import { Navbar, Nav, NavItem, Image,Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 500px)").matches) {
    console.log("Screen width is at least 500px");
  } else {
    console.log("Screen less than 500px");
  }
});

export default class CustomNavbar extends Component{
    constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {

    scroll.scrollToTop();
  }

  render(){
    return(
        <Navbar default collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <Image class="logo" src={require('../assets/ev.png')} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

            <Nav pullRight>
              <NavItem eventKey={1} componentClass={Link} href="/" to="/" onClick={() => scroll.scrollTo(0)} >
                <i class="fa fa-home"></i> Home
              </NavItem>

              <NavItem eventKey={2} componentClass={Link} href="/About" to="/About" onClick={() => scroll.scrollTo(500)}>
                <i class="fa fa-info-circle text-center"></i> About Us
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/Projects" to="/Projects" onClick={() => scroll.scrollTo(950)}>
                <i class="fa fa-edit"></i> Projects
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/Projects" to="/Projects" onClick={() => scroll.scrollTo(1230)}>
                <i class="fa fa-briefcase"></i> Services
              </NavItem>
              <NavItem eventKey={4} componentClass={Link} to="/Home" onClick={() => scroll.scrollTo(2300)}>
                <i class="fa fa-users"></i> Team
              </NavItem>
              <NavItem eventKey={4} componentClass={Link} to="/Home" onClick={() => scroll.scrollTo(3055)}>
                <i class="fa fa-user"></i> Clients
              </NavItem>
              <NavItem eventKey={6} componentClass={Link} to="/Home" onClick={() => scroll.scrollTo(3555)}>
                <i class="fa fa-phone"></i> Contact Us
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
