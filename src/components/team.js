import React,{ Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel2';
import './styles.css';
import '../style/team.css';
// import 'owl-carousel2/owl.theme.css';


const options = {
  items: 1,
  // nav: true,
  rewind: true,
  // autoplay: true,
  dots:true

};

const events = {
  onDragged: function(event) {},
  onChanged: function(event) {}
};

class Team extends Component{
  render(){
    return(
      	<div className="team">
          <Grid>
            <div className="title_service">
              <h1>Our Team</h1>
            </div>
            <OwlCarousel  options={options}>
              <div className="items">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="single-team">
                        <div class="row items">
                          <div class="col-md-6">
                            <div class="team-img">
                              <img src={require('../assets/staff4.jpeg')} alt=""/>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="team-desc">
                              <span>Backend Developer</span>
                              <h2>Saroj Gautam</h2>
                              <p>Lorem ipsum dolo sametiaculis dui luctus non elem vulputate risus wisi amet congue and too</p>
                              <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-skype"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="single-team">
                        <div class="row items">
                          <div class="col-md-6">
                            <div class="team-img">
                              <img src={require('../assets/staff3.jpg')} alt=""/>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="team-desc">
                              <span>Front End developer</span>
                              <h2>Amar Thapa</h2>
                              <p>Lorem ipsum dolo sametiaculis dui luctus non elem vulputate risus wisi amet congue and too</p>
                              <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-skype"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="single-team">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="team-desc">
                              <span>Front End developer</span>
                              <h2>Gyanu Shah</h2>
                              <p>Lorem ipsum dolo sametiaculis dui luctus non elem vulputate risus wisi amet congue and too</p>
                              <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-skype"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="team-img">
                              <img src={require('../assets/staff.jpg')} alt=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="single-team">
                        <div class="row">

                          <div class="col-md-6">
                            <div class="team-desc">
                              <span>Front End Developer</span>
                              <h2>Prakhayat Shrestha</h2>
                              <p>Lorem ipsum dolo sametiaculis dui luctus non elem vulputate risus wisi amet congue and too</p>
                              <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-skype"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="team-img">
                              <img src={require('../assets/staff2.jpg')} alt=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items">Hey there friends</div>
            </OwlCarousel>
          </Grid>
        </div>



      );
   }
 }
export default Team;
