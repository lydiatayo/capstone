import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';


        
function Contact () {

    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
      );

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTextarea(event.target.value)
        setInputs (values => ({...values, [name]: value}))
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('We Got Your Submission')
  }

    return (
        <div>
            <Container fluid className='contact-header'>
                <Row>
                    <Col> </Col>
                    <Col sm={8}>
                        <h1> Contact Us </h1>
                        <br />
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </Col>
                    <Col> </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col> </Col>
                    <Col sm={6} className='form-col'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="John Doe"  value={inputs.username || ""} 
        onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="john@doe.com" value={inputs.email || ""} 
          onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} value={textarea} onChange={handleChange}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className='button'>
                                Send
                            </Button>
                        </Form>

                    </Col>
                    <Col> </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Contact;