import React from "react";
import './bio.css'
import { Container, Row, Col } from 'react-bootstrap'
import selfie from './selfie.png'


class Bio extends React.Component {
  render() {
    return (
      <Container id='container'>
        <Row>
          <Col><img src={selfie} alt='Selfie' id='selfie'/></Col>
          <Col sm={8} className="bio"><h1 id="hi">Hello </h1><h1 id="name">I'm Cesar Deltoro-lemire</h1> a Software Engineer based out of Seattle, WA. <br></br>My journey into tech began in 2020 and I have been able to build applications with other developers throughout the last 2 years. I am always looking to learn new skills to sharpen my technical abilities, and focused on growth with an inclusive company where I can craft a future.</Col>
        </Row>
      </Container>
    )
  }
}

export default Bio;
