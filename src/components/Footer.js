import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Footer() {
    const [textarea, setTextarea] = useState(
        "Message"
    );

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTextarea(event.target.value)
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('We Got Your Submission')
    }


    return (
        <div>
            <Container fluid className='footer-container'>
            <Row>
            <Col sm={5} className='contact-footer'>
                    <h5> Send us a Message</h5>
                    <br />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Full Name" value={inputs.username || ""}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control type="email" placeholder="Email Address" value={inputs.email || ""}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={5} value={textarea} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='contact-footer-btn'>
                            Send
                        </Button>
                    </Form>
                </Col>

                <Col sm={4} className='contact-sub'>
                    <h5> Signup for Newsletter</h5>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit" className='newsletter-button'> Subscribe </Button>
                            </Col>
                        </Row>
                    </Form>

                    <br />

                    <h5> Contact Us </h5>
                    <p><i className="bi bi-telephone-inbound"></i>..+2348047297374</p>
                   <p><i className="bi bi-geo-alt"></i>123 John Doe St. Lagos</p>
                   <i className="bi bi-facebook" ></i>
                   <i className="bi bi-facebook" ></i>
                   <i className="bi bi-facebook" ></i>
                </Col>
                <Col sm={3} className='contact-quick-links'>
                    <h5> Quick Links </h5>
                    <br />
                <a>Home</a>
                <br />
                    <a>About us</a>
                    <br />
                    <a>Contact us</a>
                    <br />
                    <a>Blogs</a>
                    <br />
                    <a>FAQs</a>
                    <br />
                    <a>Volunteer</a>
                </Col>
            </Row>
        </Container>

        <Container fluid className='footer-copyright'>
            <Row>
                <Col>
                <p className='p-footer'>COPYWRIGHT @ UNBOUND.COM</p>
                </Col>
            </Row>
        </Container>
        
        </div>
        
    );
}


export default Footer;