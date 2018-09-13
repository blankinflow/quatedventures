import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel2';



class Projects extends Component{
  render(){
  return(
    <div>
      <div className="project">
        <Grid>
          <Col xs={12} sm={4} md={6} className="project-img">
            <a href="https://bhetincha.com" target="_blank" ><h3> Bhetincha.com</h3></a>
          </Col>
          <Col xs={12} sm={4} md={6} className="project-content">
            <h3> Our Latest Projects </h3>
            <p>We started this project with an objective to make people’s life easy and empower businesses with a medium to promote themselves.

            Bhetincha.com is a business information portal where local businesses can list themselves so that the general public can locate the right business for their needs conveniently and quickly</p>

          </Col>

        </Grid>
      </div>
    </div>

  );
}
}
export default Projects;
