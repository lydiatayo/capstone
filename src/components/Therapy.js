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

function Therapy () {
    return (
        <div>
            <Navbar />

            <header className="py-5" style={{ backgroundColor: '#40A5E9' }}>
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-10">
                            <div class="text-center my-5">
                            <h1 class="fw-bolder text-white">Get Therapy</h1>
                                <p class="lead fw-normal text-white-50 mb-0">Fill in the details below to be connected with an expert.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
<section>
                <div className="container px-5 py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-6"  style={{backgroundColor:'#fff', marginTop:'-100px' }}>
                            <div className="my-5 mx-5">
                                
                            <Form>
                            <Form.Group className="floating form mb-3" controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupLocation">
                            <Form.Label>State</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupLocation">
                            <Form.Label>Local Govt Area</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="Lagos">Ifako</option>
                                    <option value="Lagos">Ijaiye</option>
                                    <option value="Lagos">Surulere</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label> Message for therapist
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Upload supporting documents</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                            
                            <Button type="submit" id="submitButton" data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-success btn-lg'>
                                Submit
                            </Button>
                        </Form>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

        

            <Footer />
        </div>
    )
}

export default Therapy;