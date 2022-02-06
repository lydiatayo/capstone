import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import Capstone from '../components/Capstone.css';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import Navbar from './Navbar';



function Contact() {

    return (
        <div>
            <Navbar />
            <header className="py-5" style={{ backgroundColor: '#40A5E9' }}>
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-10">
                            <div class="text-center my-5">
                            <h1 class="fw-bolder text-white">Contact Us</h1>
                                <p class="lead fw-normal text-white-50 mb-0">Egestas id senectus tellus aliquam, volutpat diam.</p>
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
                            <div class="form-floating mb-3">
                                        <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label for="name">Full name</label>
                                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">Email address</label>
                                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                                        <label for="message">Message</label>
                                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-success btn-lg" id="submitButton" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
                                        </div>
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
    );
}

export default Contact;