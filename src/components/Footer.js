import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";


function Footer() {

    return (
        <div>
            <section className="py-5" style={{ backgroundColor: '#40A5E9', color:'#fff' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-4 p-5">
                            <h6 className='mb-4'>Send us a message</h6>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Full Name"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Control type="email" placeholder="Email Address"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={5} placeholder="Message"/>
                                </Form.Group>
                                <Button variant="secondary" type="submit" className='contact-footer-btn'>
                                    Send
                                </Button>
                            </Form>
                        </div>

                        <div className="col-5 p-5">
                            <h6 className='mb-4'>Subscribe to our Newsletter</h6>
                            <div className="row">
                            <div className="row">
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="janedoes@gmail.com" aria-label="Email" />
                                </div>
                                <div className="col">
                                    <button type="button" className="contact-footer-btn ">Subscribe</button>
                                </div>
                            </div>
                               
                            </div>
                            <br />
                            <div className="row mb-3">
                                <h6 className='mb-3'>Contact Us</h6>
                                <ul className='unordered-list' style={{color:'#fff', textDecoration:'none'}}>
                                <li> <i class="fas fa-phone"></i> +2348012345678 </li>
                                    <li> <i className="bi bi-geo-alt"></i> 123 John Doe St, Lagos.</li>
                                </ul>
                            </div>
                            <div className="row">
                            <a class="btn btn-light btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-light btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-light btn-social mx-2" href="#!"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="col-3 p-5">
                        <h6 className='mb-4'>Quick Links</h6>
                        <ul className='unordered-list'>
                        <li className='unordered-list'> <Link to="/About" style={{color:'#fff', textDecoration:'none'}}>About Us</Link> </li>
                                <li className='unordered-list'> <Link to="/QuickHelp" style={{color:'#fff', textDecoration:'none'}}>Get Help</Link> </li>
                                <li className='unordered-list'> <Link to="/Therapy" style={{color:'#fff', textDecoration:'none'}}>Get Therapy</Link> </li>
                                <li className='unordered-list'> <Link to="/Volunteer" style={{color:'#fff', textDecoration:'none'}}>Volunteer</Link> </li>
                                <li className='unordered-list'> <Link to="/Blog" style={{color:'#fff', textDecoration:'none'}}>Blog</Link> </li>
                                <li className='unordered-list'> <Link to="/Faq" style={{color:'#fff', textDecoration:'none'}}>FAQ</Link> </li>

                        </ul>
                        </div>
                    </div>
                </div>
            </section>
{/*Copyright */}
<section className='p-3' style={{ backgroundColor: '#0972B8', color:'#fff' }}>
    <div className="container">
        <div className="row">
            <div className="col">
            <p className="lead fw-normal text-white-50 text-center mb-2" style={{fontSize:'14px'}}>COPYRIGHT 2022 | UNBOUND.COM.</p>
            </div>
        </div>
    </div>
</section>
        </div>

    );
}


export default Footer;