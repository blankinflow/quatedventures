import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faCopyright,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-solid-svg-icons';

import '../style/contact.css';

class Contact extends Component {
  render() {
    return (
      <section>
        <footer>
          <Grid>
            <Col md="12">
              <Row>
                <Col md="3">
                  <h4>Quick Link</h4>
                  <Row>
                    <Col md="6">
                      <ul>
                        <li><h5><a href="#">Contact Us</a></h5></li>
                        <li><h5><a href="#">Ev state</a></h5></li>
                        <li><h5><a href="#">Our Service</a></h5></li>

                      </ul>
                    </Col>
                    <Col md="6">
                      <ul>
                        <li><h5><a href="#">Services</a></h5></li>
                        <li><h5><a href="#">Client</a></h5></li>
                        <li><h5><a href="#">Team</a></h5></li>

                      </ul>
                    </Col>
                  </Row>
                </Col>
                <Col md="5">
                  <div>
                    <h4>About Us</h4>
                    <p>Equated ventures is a recent venture into technology-enabled services,
                      to enhance and empower lives of customers. We provide business
                      conceptualization and development service along with all the technical Services from
                    designing, developing, testing and monitoring.</p>
                  </div>
                </Col>
                <Col md="4">
                  <div>
                    <h4>Get in Touch</h4>
                    <ul>
                      <li>
                        <h5>Address :</h5>
                        <span>Thapa Gaun, Kathmandu</span>
                      </li>
                      <li>
                        <h5>Phone :</h5>
                        <span>+977 01-4496193</span>
                      </li>
                      <li>
                        <h5>Email :</h5>
                        <span>info@equatedventures.com</span>
                      </li>
                    </ul>
                  </div>
                  <div className="social_icons_footer">
                    <ul>
                      <li><i class="fa fa-github"></i></li>
                      <li><i class="fa fa-linkedin"></i></li>
                      <li><i class="fa fa-google"></i></li>
                      <li><i class="fa fa-facebook"></i></li>
                      <li><i class="fa fa-twitter"></i></li>
                      <li><i class="fa fa-instagram"></i></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Grid>
          </footer>
          <div className="copyright_footer">
            <Grid>
              <Row>
                <Col md="3">
                  <span>Powered by <a>equatedventures.com</a></span>
                </Col>
                <Col md="9" className="text-right">
                  <span> &copy; 2018 Equated Ventures. All Rights Reserved </span>
                </Col>
              </Row>

          </Grid>
        </div>
      </section>

        );
        }
        }
        export default Contact;
