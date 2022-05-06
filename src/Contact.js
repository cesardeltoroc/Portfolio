import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import './App.css';

class Contact extends React.Component {
  render() {
    return (
      <Form>
        <Form.Text style={{fontSize: '3rem', color: 'white'}}>YOU WRITE, I CONNECT</Form.Text>
        <div id="form">
          <Row className="justify-content-md-center">
            <Col lg="4">
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control id='col' type="text" placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col lg="4">
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control id='col' type="text" placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="8">
              <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label id='emailLabel'>Email</Form.Label>
                <Form.Control id='emailControl' type="text" placeholder="Enter email" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="8">
              <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label>Concerns</Form.Label>
                <Form.Control type="text" as='textarea' placeholder="Enter text here" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="danger"   style={{marginBottom: '20px'}}>Connect</Button>
        </div>
      </Form >
    )
  }
}
export default Contact;