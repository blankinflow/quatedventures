import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

class Carrier extends Component{
  render(){
  return(
    <div className="carrier">
      <Grid>
        <h2>Grow with us</h2>
        <Col md="12">

          <Row>
            <Col>
              <p>We at equated ventures, celebrate people’s participation. Our work environment fosters Initiative, collaboration, and communication.
              We offer an environment that encourages people to learn more and grow together. We also provide technical and soft skill training to empower our employees to reach their fullest potential and feel part of the team. </p>
              <p>
                We always welcome self-motivated people with ready to learn attitude. Send your resume at <a> info@equatedventures.com </a></p>
            </Col>
          </Row>
        </Col>
      </Grid>
    </div>
      );
      }
      }

      export default Carrier;
