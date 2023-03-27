import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

function AboutUs() {
  return (
    <div className="about-us" >
      <div className="about-us-section" >
        <Container >
          <Row >
            <Col >
              <div className="about-us-text"  >
                <h1 className="about-us-title">About Us</h1>
                <br></br>
                <div className="about-us-image">
                  <img src="logo.png" alt="about us" />
                </div>
                <br></br>
                <br></br>
                <div style={{width: "75%", paddingLeft:"25%"}}>
                <p className="about-us-description" style={{textAlign: "justify"}}>Welcome to Baichday, the ultimate online bidding platform that connects buyers and sellers from all around the world. Our mission is to provide a safe and reliable platform for users to buy and sell goods and services through a transparent bidding process. At Baichday, we understand the importance of creating a trustworthy and user-friendly platform for online bidding. That's why we have designed our website to be intuitive and easy to navigate, making it simple for anyone to use.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <br></br>
      <br></br>
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
