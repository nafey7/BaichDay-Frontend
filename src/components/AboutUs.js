import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-section">
        <Container>
          <Row>
            <Col md={6}>
              <div className="about-us-text">
                <h1 className="about-us-title" style={{fontSize: "10rem"}} >About Us</h1>
                <p className="about-us-description">BaichDay promises to bring to you the chance to sell your products at the highest price. Our mission is to empower every person with the ability to improve their circumstances.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-us-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IqoSvSkzDueGxTSssTGCUPxA_YucqEZ93w&usqp=CAU" alt="about us" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="features-section">
        <Container>
          <h2 className="section-title">Our Features</h2>
          <Row>
            <Col md={4}>
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-gift"></i>
                </div>
                <div className="feature-content">
                  <h4>Quality Products</h4>
                  <p>Our team works tirelessly to ensure that you receive only the best quality products. We believe in delivering excellence and quality to our customers.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="feature-content">
                  <h4>User Experience</h4>
                  <p>We prioritize our customer's experience above all else. Our team works around the clock to make sure your experience with us is smooth and enjoyable.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="feature-content">
                  <h4>Customer Support</h4>
                  <p>We have a dedicated team of customer support representatives that are always available to assist you with any issues you may face. We are committed to providing you with exceptional support.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default AboutUs;
