import combined from './images/combined.jpg';
import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import Capstone from '../components/Capstone.css';
import Footer from './Footer';
import Navbar from '../components/Navbar';

const Donate = () => {
    return (
        <div>
            <Navbar />

         <header className="py-5" style={{ backgroundColor: '#40A5E9' }}>
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xxl-8">
                            <div className="text-center my-5">
                            <h1 className="fw-bolder text-white">Donate</h1>
                                <p className="lead fw-normal text-white-50 mb-0">EEvery woman and girl has the right to live a life free from violence. Your donation can help them break the cycle of violence,
                                    assist survivors, and drive economic inclusion. You donation will help survivors of violence to receive confidential assistance
                                    and support to stay safe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-xl-8">
                        <h5 className="mb-3">Donation Information</h5>
                                <form className="needs-validation" novalidate>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label for="firstName" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label for="lastName" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                            <div className="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                        </div>

                                        <div className="col-md-6">
                                            <label for="country" className="form-label">Country</label>
                                            <select className="form-select" id="country" required>
                                                <option value="">Choose...</option>
                                                <option>Nigeria</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label for="state" className="form-label">State</label>
                                            <select className="form-select" id="state" required>
                                                <option value="">Choose...</option>
                                                <option>Lagos</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                    </div>


                                    <h5 className="mb-3">Payment</h5>

                                    <div className="my-3">
                                        <div className="form-check">
                                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                                            <label className="form-check-label" for="credit">Credit card</label>
                                        </div>
                                        <div className="form-check">
                                            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                            <label className="form-check-label" for="debit">Debit card</label>
                                        </div>
                                        <div className="form-check">
                                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                            <label className="form-check-label" for="paypal">PayPal</label>
                                        </div>
                                    </div>

                                    <div className="row gy-3 mb-5">
                                        <div className="col-md-6">
                                            <label for="cc-name" className="form-label">Name on card</label>
                                            <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                            <small className="text-muted">Full name as displayed on card</small>
                                            <div className="invalid-feedback">
                                                Name on card is required
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label for="cc-number" className="form-label">Credit card number</label>
                                            <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                            <div className="invalid-feedback">
                                                Credit card number is required
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label for="cc-expiration" className="form-label">Expiration</label>
                                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                            <div className="invalid-feedback">
                                                Expiration date required
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label for="cc-cvv" className="form-label">CVV</label>
                                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                            <div className="invalid-feedback">
                                                Security code required
                                            </div>
                                        </div>
</div>
                                    <button className="btn btn-success btn-lg" type="submit">Make Donation</button>
                                </form>
                        </div>
                        <div className="col-xl-4">
                            <div className="card border-0 bg-light mt-xl-5">
                                <div className="card-body p-4 py-lg-5">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className>
                                        <h5 className="mb-3">Bank Transfer</h5>
                                            <p className="text-muted mb-4"> Account Name: Unbound Organization.</p>
                                            <p className="text-muted mb-4"> Account Number: 0029876773</p>
                                            <p className="text-muted mb-4"> Bank: GTB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <Footer />
        </div>

    )
}







export default Donate;
