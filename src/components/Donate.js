import combined from './images/combined.jpg';
import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';

const Donate = () => {
    return (
<div> 

<Container fluid className="blog-header" style={{ backgroundImage: `url(${combined}` }}>
                <Row>
                    <Col />
                    <Col sm={8}> Donate </Col>
                    <Col />
                </Row>
            </Container>

            <Container className='faq-header'>
                <Row>
                    <Col className='therapist-h1'>Your donation can enable a brighter future for women and girls</Col>
                    <p className='therapist-p'> Every woman and girl has the right to live a life free from violence.Your donation can help them break the cycle
                   of violence,assist survivors and drive economic inclusion. Your donation will help survivors of violence receive
                   confidential assistance and support to stay safe.</p>
                </Row>
            </Container>

            <div className='container'>
               <div className="row">
                   <div className="col-6">
                     <p className="mt-5"><b><u>Donation Information</u></b></p>
                        <form>
                            <div className="mb-3">
                                 <label for="amount" class="form-label"><b>Amount</b></label>
                                 <input type="amount" class="form-control" id="amount" aria-describedby="amount" placeholder="$20"></input>
                            </div>
                               <p className="mt-5 mb-5"><b>Billing Details:</b></p>

                                <div className="mb-3">
                                  <label for="name" class="form-label"><b>First and Last Name</b></label>
                                  <input type="name" class="form-control" id="name" aria-describedby="name" placeholder="Joe Doe"></input>
                                </div>

                                <div className="mb-3">
                                    <label for="company" class="form-label"><b>Company name</b></label>
                                    <input type="company" class="form-control" id="company" aria-describedby="company" placeholder="Rhino Inc"></input>
                                </div>

                                    <div className="mb-3">
                                         <label for="country" class="form-label"><b>Country*</b></label>
                                        <input type="country" class="form-control" id="country" aria-describedby="country" placeholder="Nigeria" required></input>
                                    </div>

                                        <div className="mb-3">
                                          <label for="city" class="form-label"><b>City*</b></label>
                                           <input type="city" class="form-control" id="city" aria-describedby="city" placeholder="Lagos" required></input>
                                        </div>

                                         <button type="Submit" class="but">Make Donation</button>

                        </form>
                   </div>
                   <div className="col-6">
                       <p className="trans mt-5"><b><u>Bank Transfer</u></b></p>
                       <p className="bank mb-2"><b>Account Name:</b>Unbound Organization</p>
                       <p className="bank mb-2"><b>Account number:</b> 0034672574</p>
                       <p className="bank mb-2"><b>Bank Name:</b> Guaranty Trust Bank</p>

                       <p className="cards"><b>Card Information:</b></p>
                      <form className="formseh">
                            <div className="mb-3">
                                <label for="nom" class="form-label"><b>Card Number</b></label>
                                <input type="nom" class="form-control" id="nom" aria-describedby="nom" placeholder="**** **** **** ****"></input>                                       
                            </div>
                            <div className="mb-3">
                                <label for="exp" class="form-label"><b>Expiry Date</b></label>
                                <input type="exp" class="form-control" id="exp" aria-describedby="exp" placeholder="04/25"></input>                                       
                            </div>
                            <div className="mb-3">
                                <label for="cvv" class="form-label"><b>CVV</b></label>
                                <input type="cvv" class="form-control" id="cvv" aria-describedby="cvv" placeholder="***"></input>                                       
                                          
                            </div>
                       </form>
                   </div>
                   <p className="mt-5"><b>By donating, you are sharing your information with us. We do not sell or trade your information to anyone. 
                             For more information please read our privacy policy.</b></p>
               </div>

            </div>

<Footer />
</div>

    )
}







export default Donate;
 