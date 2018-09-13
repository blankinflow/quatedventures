import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

class About extends Component{
  render(){
  return(
    <div className="banner-main">
      <Grid>
        <h3> Who Are We </h3>
        <Row>
          <Col xs={12} sm={4} md={4} >
            <h4>Equated ventures</h4>
            <p> is a recent venture into technology-enabled services, to enhance and empower lives of customers by making information more precise and accurate and yet more accessible and efficient. We provide business conceptualization and development service along with all the technical Services from designing, developing, testing and monitoring.
            We understand there is a lot to learn and a lot of stones to be turned in the journey of creating a venture that enables equal opportunities for ALL because we firmly believe everybody deserves better, everybody does!!! </p>
          </Col>
          <Col xs={12} sm={4} md={4} className="bannerImg">
            {/* <Image src={"/assets/journey.jpg"} /> */}
            <Image src={require('../assets/who_we.jpg')} responsive />
          </Col>
          <Col xs={12} sm={4} md={3} className="banner-main2">
            <h4>We Beleive</h4>
            <p>Degital Technology that turns new business opportunities into progressive value.</p>
            <h4>We Are Passionate</h4>
            <p>to enhance and empower lives of customers by making information more precise and accurate and yet more accessible and efficient.</p>
          </Col>
      </Row>
    </Grid>
    </div>
  );
}
}
export default About;
