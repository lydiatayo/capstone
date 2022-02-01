import React,  {  useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function ContactAlert() {
    return (
        <Container>
            <Row>
                <Col> </Col>
                <Col sm={8}>
                <Alert>
  <Alert.Heading> Thanks! </Alert.Heading>
  <p>
    We got your submission and we will reach out shortly. Enjoy your day.
  </p>
</Alert>
                </Col>
                <Col> </Col>
            </Row>
        </Container>
    );
}

export default ContactAlert;