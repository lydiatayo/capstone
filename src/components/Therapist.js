import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';

function Therapist () {
    return (
        <div>
            <Navbar />
            <Container fluid className='faq-header'>
                <Row>
                    <Col className='therapist-h1'>Connect with a Therapist</Col>
                    <p className='therapist-p'> Fill in the details below to be connected with an expert </p>
                </Row>
            </Container>
            
            <Container className='therapist-form'>
                <Row>
                    <Col />
                    <Col sm={9}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupAge">
                            <Form.Label>Age</Form.Label>
                                <Form.Control type="name" placeholder="Enter age" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupLocation">
                            <Form.Label>Location</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Leave your therapist a message
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Upload supplementing evidence</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='button'>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col />
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default Therapist;