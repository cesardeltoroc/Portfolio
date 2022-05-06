import React from "react";
import './bio.css'
import { Container, Row, Col } from 'react-bootstrap'
import selfie from './selfie.jpeg'

class Bio extends React.Component {
  render() {
    return (
      <Container id='container'>
        <h1 id='bio'>BIO</h1>
        <Row>
          <Col sm={8} className="bio">Hello, I'm Cesar Deltoro a Software Engineer based out of Seattle, WA. My journey into tech began in 2020 and I have been able to build applications with other developers throughout the last 2 years. I am always looking to learn new skills to sharpen my technical abilities, and focused on growth with an inclusive company of which I can develop user friendly applications.</Col>
          <Col><img src={selfie} alt='Selfie' id='selfie'/></Col>
        </Row>
      </Container>
    )
  }
}

export default Bio;
