import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,faCopyright,faFacebook,faTwitter,faInstagram } from '@fortawesome/free-solid-svg-icons';


class Home extends Component{
  render(){
    return(
      <div>
        <CustomNavbar/>
        <section className="tryimg">
          <Grid>
            <h2>We make websites <br/>

            for successful companies </h2>
            <p>As you know, web design encompasses many different skills and disciplines  in <br/>    the production and

              maintenance of websites in our days.
            </p>
            <div className="arrow">
              <Image className="hvr-bob" src={require('../assets/arrow.svg')} responsive />
            </div>
            <div className="learn-more">
              <button> Lean More <i className="fa fa-arrow-circle-right"></i> </button>
                </div>
            </Grid>
        </section>
      </div>
        );
        }
        };

        export default Home;
