import React, { useReducer, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './images/Header.jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FeaturedImage from './images/FeaturedImage.jpeg';
import Footer from './Footer'


function Blog() {
    return (
        <div>
            <Container fluid className="blog-header" style={{ backgroundImage: `url(${Header}` }}>
                <Row>
                    <Col />
                    <Col sm={8}> Blog </Col>
                    <Col />
                </Row>
            </Container>

            <Container fluid className='container'>
                <Row>
                    <Col />
                    <Col sm={7} className='blog-preview'>
                        <Card style={{ width: '100%' }} className='preview'>
                            <Card.Img variant="top" src={FeaturedImage} style={{width:"100%", height:"483px"}}/>
                            <Card.Body>
                                <Card.Title className='blog-title'> Lorem Ipsum Generator </Card.Title>
                                <Card.Text className='p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor. Ac tortor vitae purus faucibus ornare suspendisse sed. Sit amet tellus cras adipiscing enim. Egestas sed sed risus pretium quam vulputate. Vel pretium lectus quam id leo in vitae. 
                                </Card.Text>
                                <a href= "#" className='text-button'> Read More...</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>

                <Row>
                    <Col />
                    <Col sm={7} className='blog-preview'>
                        <Card style={{ width: '100%' }} className='preview'>
                            <Card.Img variant="top" src={FeaturedImage} style={{width:"100%", height:"483px"}}/>
                            <Card.Body>
                                <Card.Title className='blog-title'> Lorem Ipsum Generator </Card.Title>
                                <Card.Text className='p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor. Ac tortor vitae purus faucibus ornare suspendisse sed. Sit amet tellus cras adipiscing enim. Egestas sed sed risus pretium quam vulputate. Vel pretium lectus quam id leo in vitae. 
                                </Card.Text>
                                <a href= "#" className='text-button'> Read More...</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>

                <Row>
                    <Col />
                    <Col sm={7} className='blog-preview'>
                        <Card style={{ width: '100%' }} className='preview'>
                            <Card.Img variant="top" src={FeaturedImage} style={{width:"100%", height:"483px"}}/>
                            <Card.Body>
                                <Card.Title className='blog-title'> Lorem Ipsum Generator </Card.Title>
                                <Card.Text className='p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor. Ac tortor vitae purus faucibus ornare suspendisse sed. Sit amet tellus cras adipiscing enim. Egestas sed sed risus pretium quam vulputate. Vel pretium lectus quam id leo in vitae. 
                                </Card.Text>
                                <a href= "#" className='text-button'> Read More...</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>

                <Row>
                    <Col />
                    <Col sm={7} className='blog-preview'>
                        <Card style={{ width: '100%' }} className='preview'>
                            <Card.Img variant="top" src={FeaturedImage} style={{width:"100%", height:"483px"}}/>
                            <Card.Body>
                                <Card.Title className='blog-title'> Lorem Ipsum Generator </Card.Title>
                                <Card.Text className='p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor. Ac tortor vitae purus faucibus ornare suspendisse sed. Sit amet tellus cras adipiscing enim. Egestas sed sed risus pretium quam vulputate. Vel pretium lectus quam id leo in vitae. 
                                <a href= "#" className='text-button'> Read More...</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>
                
            </Container>

            <Footer />
        </div>
    );
}

export default Blog;