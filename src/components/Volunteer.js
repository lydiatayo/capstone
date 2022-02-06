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

const Volunteer = () => {
    return (
        <div>
            <Navbar />

            <header className="py-5" style={{ backgroundColor: '#40A5E9' }}>
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-10">
                            <div class="text-center my-5">
                            <h1 class="fw-bolder text-white">Join Us</h1>
                                <p class="lead fw-normal text-white-50 mb-0">Fill in the details below to be offer assistance and become a part of the good work we do.</p>
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
                            <Form.Label>Location</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupQual">
                            <Form.Label>Qualifications</Form.Label>
                            <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Masters">Masters</option>
                                    <option value="PHD">PHD</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Upload valid ID</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Upload professional certifications</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>In two paragraphs, tell us why you would like to work with UNBOUND
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button type="submit" id="submitButton" data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-success btn-lg disabled'>
                                Submit
                            </Button>
                        </Form>

                            </div>
                        </div>

                    </div>

                </div>
            </section>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog" style={{padding:'40px'}}>
    <div className="modal-content">
      <div className="modal-body">
        <h5> We got your submission and we will reach out to your shortly </h5>
      </div>
      <div className="modal-footer">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


            <Footer />
        </div>

    )
}


export default Volunteer;