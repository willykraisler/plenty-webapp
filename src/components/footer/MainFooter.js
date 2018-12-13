import React, { Component } from 'react';
import {
  CardFooter,
  Container,
  Row,
  Col
} from 'reactstrap';

import logo from '../navbar/logo.png';

class MainFooter extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (<CardFooter>
      <Container>
        <Row>
          <Row>
            <Col class="col-md-2 wow fadeInUp" data-wow-delay="0.1s" >
              <img src={logo} class="img-responsive" />
              <ul class="foot__nav">
                <h2>Who We Are</h2>
                <li><a href="">Green Miners: At a Glance</a></li>
                <li><a href="">Vision &amp; Mission</a></li>
                <li><a href="">Timeline</a></li>
                <li><a href="">Leadership</a></li>
              </ul>
            </Col>

            <Col class="col-md-2 wow fadeInUp" data-wow-delay="0.2s" >
              <ul class="foot__nav">
                <h2>Who We Are</h2>
                <li><a href="">Mining</a></li>
                <li><a href="">Marketing</a></li>
              </ul>

              <ul class="foot__nav">
                <h2>Our Community</h2>
                <li><a href="">Sustainability</a></li>
              </ul>
            </Col>

            <Col class="col-md-2 wow fadeInUp" data-wow-delay="0.1s" >
              <ul class="foot__nav">
                <h2>Work with us</h2>
                <li><a href="">Why Fura</a></li>
                <li><a href="">Current Jobs</a></li>
              </ul>
              <ul class="foot__nav">
                <h2>Investors</h2>
                <li><a href="">Stock information</a></li>
                <li><a href="">Analyst Coverage</a></li>
                <li><a href="">Results</a></li>
                <li><a href="">Announcements</a></li>
                <li><a href="">Technical Reports</a></li>
                <li><a href="">Events and Presentations</a></li>
                <li><a href="">Subscribe</a></li>
              </ul>
            </Col>

            <Col class="col-md-2 wow fadeInUp" data-wow-delay="0.1s" >
              <ul class="foot__nav">
                <h2>Media</h2>
                <li><a href="news">In the news</a></li>
              </ul>
              <ul class="right__social-footer">
                <li><a href="" target="_blank"><i class="fa fa-instagram"
                  aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-facebook"
                  aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-twitter"
                  aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-linkedin"
                  aria-hidden="true"></i></a></li>
              </ul>
            </Col>
            <Col class="col-md-12 wow fadeInUp for-mobile" data-wow-delay="0.1s" >
              <div class="call__btn">
                <p><a href="tel:+971 50 992 0718">+971 50 992 0718</a></p>
                <p> <a href="mailto:info@furagems.com">info@greeminers</a></p>
              </div>
            </Col>

            <Col class="col-md-2 wow fadeInUp hide animated" data-wow-delay="0.1s" >
              <h4>United Emirates Arab</h4>
              <p> Green Miners Inc<br></br>
                65 Queen Street West, Unit 800<br></br>
                Abu Dhabi,  </p>
              <div class="call__btn">
                <p><a href="tel:+971 50 992 0718">+971 50 992 0718</a></p>
              </div>
            </Col>

          </Row>
          <Col class="col-md-8 wow fadeInLeft" data-wow-delay="0.1s" >
            <p class="copy_right_p">© 2018 Green Miners INC. All rights reserved. Designed &amp; Developed by
                <a href="https://www.codeandco.ae/" target="_blank"> Code &amp; Co</a></p>
          </Col>
          <Col>
            <div class="col-md-4 rel__div">
              <div class="abs__div">
                <img src="img/footer-hill.png" class="img-responsive" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </CardFooter>
    );
  }
}
export default MainFooter;