import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import Homeheader from '../components/images/Homeheader.png';
import Card from 'react-bootstrap/Card';
import testi from './images/testi.png';
import test2 from './images/test2.png';
import test3 from './images/test3.png';
import hero from './images/hero.png';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div>
            <Navbar />
            <Container fluid className="home-header" style={{ backgroundImage: `url(${hero}` }}>
                <Row>
                    <Col sm={1}/>
                    <Col sm={6}>
                        <h1 className='title'> Need emergency help from an abusive situation? </h1>
                        <h3 className='subtitle'> Get help from qualified therapists and counsellors today.</h3>
                        <Link to="/location"> <Button className='home-button'> GET QUICK HELP</Button> </Link>
                         <Link to="/therapist">
                            <Button className='button'> GET  THERAPY</Button>
                         </Link>
                         
                    </Col>
                <Col />
                </Row>
            </Container>

            <Container className='home-container'>
                <Row>
                    <Col />
                    <Col sm={7}>
                        <h2 className='h2'> About Us</h2>
                        <p className='p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum velit egestas non cursus faucibus mus. Sit orci, ornare ut et. Aliquam purus id sem hac. Arcu urna convallis facilisis neque quis molestie. </p>
                        <p className='p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum velit egestas non cursus faucibus mus. Sit orci, ornare ut et. Aliquam purus id sem hac. Arcu urna convallis facilisis neque quis molestie. </p>
                        <p className='home-text-button'>Read More </p>
                    </Col>
                    <Col />
                </Row>
            </Container>

            <Container fluid className='testimonial-container'>
                <Row>
                    <Col>
                        <h1 className='card-h1'> Testimonials </h1>
                    </Col>
                </Row>

                <Row className='card-row'>
                    <Col />
                    <Col>
                    <Card className="card" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={testi} />
                            <Card.Body>
                                <Card.Title className='testimonail-title'>Lorep Ipsum</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={testi} />
                            <Card.Body>
                                <Card.Title className='testimonail-title'>Lorep Ipsum</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={testi} />
                            <Card.Body>
                                <Card.Title className='testimonail-title'>Lorep Ipsum</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col> 
                    <Button variant="outline" justify='center' className='card-button'> VIEW TESTIMONIALS </Button>
                    </Col>
                    <Col />
                </Row>
            </Container >

            <Container className='counter-container'> 
            <Row>
            <Col>
                        <h1 className='counter-h1'> Impact Numbers </h1>
                    </Col>
                 </Row>
                <Row>
                    <Col sm={6}> 
                    <Col> <p className='counter'> 30000 </p> </Col>
                    <Col> <p className='counter-p' >Abuse survivors connected 
to therapists and counsellors </p> </Col>
                    </Col>

                    <Col sm={6}>
                    <Col> <p className='counter'> 6000 </p> </Col>
                    <Col> <p className='counter-p'>Women and girls accessed quick help
to prevent abusive situation </p> </Col>
                    </Col>
                </Row>
            </Container>

<Footer />
        </div>
    )
}

export default Homepage;