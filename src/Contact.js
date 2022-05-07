import React from "react";
import { Form, Button } from "react-bootstrap";
import './App.css';

class Contact extends React.Component {
  render() {
    return (
      <div id="form">
        <Form>
          <Form.Text id='connect'> YOU WRITE, I CONNECT</Form.Text>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control id='colName' type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control id='colName' type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label id='emailLabel'>Email</Form.Label>
                <Form.Control id='emailControl' type="text" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label>Concerns</Form.Label>
                <Form.Control type="text" as='textarea' placeholder="Enter text here" />
              </Form.Group>
          <Button variant="danger"  >Connect</Button>
        </Form >
      </div>
    )
  }
}
export default Contact;
