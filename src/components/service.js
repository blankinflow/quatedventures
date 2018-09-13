import React, {Component} from 'react';
import '../style/service.css'
class Service extends Component {
  render() {
    return (
      <section class="services">

        <div class="container">
          <div class="title_heading">
            <h1>Features of Services</h1>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="service_product ">
                <img className="pulse" src="http://crystalinfosys.com/wp-content/uploads/2018/01/web.png"/>
                <h2>Website Design and Development</h2>
                <p>An attractive website determines your brand to reach the utmost level by leaving congested of digital marketing. Our Expert Team surveys your scenario of requirement and formulate an idea to create a custom website that reflects your investment.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="service_product">
                <img className="pulse" src="http://crystalinfosys.com/wp-content/uploads/2018/01/mobile.png"/>
                <h2>Mobile App Development</h2>
                <p>Mobile apps have control an absolute necessity of business market by its' flexibility, Interface, cross-device capabilities, Interactivity and other features. We dispatch a complete App developer for all devices, including iPhone, Android and more.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="service_product">
                <img className="pulse" src="http://crystalinfosys.com/wp-content/uploads/2018/01/design.png"/>
                <h2>Creative Design</h2>
                <p>We believe in creating a distinctive creative design using present-day components. Understanding the unique requirement of any profession, then we discharge grant reliable return. We are professional at website design, marketing, and graphic design.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="service_product">
                <img className="pulse" src="http://crystalinfosys.com/wp-content/uploads/2018/01/seo.png"/>
                <h2>Search Engine Optimizations</h2>
                <p>SEO heightens the rank of internet traffic to your website. We take a control of your business with our organic search engine optimization services and create the most powerful SEO solution, and deal a custom website optimization strategy for your business.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="service_product">
                <img className="pulse" src="http://crystalinfosys.com/wp-content/uploads/2018/01/digital.png"/>
                <h2>Digital Media Marketing</h2>
                <p>Digital Media Marketing is a modern method of quick business promotion. We offer customized Digital Marketing for Organization to maximize their businesses and help them to develop the best strategy for the global competition.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="service_product">
                <img className="pulse" src="http://crystalinfosys.com/wp-content/uploads/2018/01/business.png"/>
              <h2>Business Applications</h2>
              <p>A Well established organization needs business application to grow productivity, to measure progress and to perform other business role precisely. We develop Customized Business Application that helps to organize your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}
export default Service;
