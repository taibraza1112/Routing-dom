import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4 display-4">Contact Us</h1>
      <p className="text-center lead mb-5">We're here to help! Please reach out with any questions or feedback.</p>
      
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
              <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
              <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
              <Form.Text muted>Optional</Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message" required />
              <Form.Control.Feedback type="invalid">Please enter your message.</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
