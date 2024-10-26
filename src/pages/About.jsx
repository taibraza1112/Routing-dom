import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      {/* Heading Section */}
      <h1 className="text-center mb-4 display-4">About Us</h1>
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <p className="text-center lead">
            We are a leading e-commerce platform committed to providing quality products and outstanding customer service. Our mission is to make shopping easy, accessible, and enjoyable for everyone.
          </p>
        </Col>
      </Row>
      
      {/* Cards Section */}
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <Card.Title className="fw-bold text-primary">Our Mission</Card.Title>
              <Card.Text>
                To offer an exceptional shopping experience with a diverse range of products that cater to our customers' needs and preferences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <Card.Title className="fw-bold text-primary">Our Vision</Card.Title>
              <Card.Text>
                To become the preferred platform for all shopping needs, celebrated for our commitment to quality, innovation, and customer satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <Card.Title className="fw-bold text-primary">Our Values</Card.Title>
              <Card.Text>
                Integrity, customer focus, innovation, and teamwork are at our core. We strive to make a positive impact on both our community and the environment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
