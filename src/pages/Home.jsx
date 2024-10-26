import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css'; // Create a separate CSS file for additional styles

function Home() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4 text-primary">Welcome to Our E-commerce Platform</h1>
      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <p className="text-center">
            Discover a wide range of quality products at unbeatable prices. Shop with confidence and enjoy exceptional customer service.
          </p>
        </Col>
      </Row>
      
      <Row className="g-4">
        {['Featured Product 1', 'Featured Product 2', 'Featured Product 3'].map((product, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 text-center shadow-lg rounded">
              <Card.Img variant="top" src={`https://via.placeholder.com/300x200?text=${product}`} alt={product} />
              <Card.Body>
                <Card.Title className="text-success">{product}</Card.Title>
                <Card.Text>
                  {index === 0 ? 'Explore our top-selling product that offers great value and quality.' : 
                   index === 1 ? 'Check out this amazing product that customers love for its reliability.' : 
                   'Don\'t miss our latest addition, a must-have for every household.'}
                </Card.Text>
                <Button variant="primary" className="rounded-pill">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="success" size="lg" className="rounded-pill">
            Browse All Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
