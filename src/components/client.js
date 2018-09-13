import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel2';
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../style/client.css';

const options = {
  items: 1,
  nav: true,
  rewind: true,
  navText : ["<div></div>","<div></div>"],
  navClass:['fa fa-angle-left','fa fa-angle-right'],
  // autoplay: true,
  dots:false
}

class Client extends Component{
  render(){
    return(
        <section className="client_main">

          <Grid>
            <h1>What our client say</h1>
            <Col md={10} mdOffset={1}>
              <Row>
                <OwlCarousel options={options}>
                  <div className="items">
                    <Row>
                      <Col md={3}>
                        <div className="image_border_client">
                          <div className="img_section_client">
                            <img src={require('../assets/staff2.jpg')} />
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="client_content">
                          <h4>Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est.</h4>
                          <h5>Amar Gurung</h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="items">
                    hey there friends 2
                  </div>
                  <div className="items">
                    hey there friends 3
                  </div>
                  <div className="items">
                    hey there friends 4
                  </div>
                  <div className="items">
                    hey there friends 5
                  </div>
                </OwlCarousel>
              </Row>
            </Col>
            </Grid>
        </section>
    );
  }
}
export default Client;
