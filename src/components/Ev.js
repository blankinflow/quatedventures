import React, { Component } from 'react';
import { render } from 'react-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import CountUp, { startAnimation } from 'react-countup';
import '../style/ev.css';
class Ev extends Component{
  render(){
    return(
        <div className="ev">
          <Grid>
            <Col md={3} sm={6}>
              <div className="ev-single">
                <Image className="hvr-bob" src={require('../assets/innovation.svg')} responsive />
                <h4>Projects On-going</h4>

                <CountUp className="CountUp" start={0} end={11} duration={3} ref={(countUp) => {
                  this.myCountUp = countUp;
                }} />
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="ev-single">
                <Image className="hvr-bob" src={require('../assets/team.svg')} responsive />
                <h4>Professionals In-house</h4>
                <CountUp className="CountUp" start={0} end={70} duration={3} ref={(countUp) => {
                  this.myCountUp = countUp;
                }} />+
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="ev-single">
                <Image className="hvr-bob" src={require('../assets/execution.svg')} responsive />
                <h4>Years in Operation</h4>

                <CountUp className="CountUp" start={0} end={2} duration={3} ref={(countUp) => {
                    this.myCountUp = countUp;
                }} />
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="ev-single">
                <Image className="hvr-bob" src={require('../assets/conversation.svg')} responsive />
                <h4>Customers Touched</h4>
                <CountUp className="CountUp" start={0} end={300} duration={3} ref={(countUp) => {
                  this.myCountUp = countUp;
                }} /> +
              </div>
            </Col>
          </Grid>
        </div>
            );
            }
            }
            export default Ev;
