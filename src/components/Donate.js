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
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-10 col-xxl-8">
                            <div class="text-center my-5">
                            <h1 class="fw-bolder text-white">Donate</h1>
                                <p class="lead fw-normal text-white-50 mb-0">EEvery woman and girl has the right to live a life free from violence. Your donation can help them break the cycle of violence,
                                    assist survivors, and drive economic inclusion. You donation will help survivors of violence to receive confidential assistance
                                    and support to stay safe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="col-xl-8">
                        <h5 class="mb-3">Donation Information</h5>
                                <form class="needs-validation" novalidate>
                                    <div class="row g-3">
                                        <div class="col-sm-6">
                                            <label for="firstName" class="form-label">First name</label>
                                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                                            <div class="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <label for="lastName" class="form-label">Last name</label>
                                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                                            <div class="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                                            <div class="invalid-feedback">
                                                Please enter a valid email address.
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="address" class="form-label">Address</label>
                                            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                                            <div class="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                                            <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                                        </div>

                                        <div class="col-md-6">
                                            <label for="country" class="form-label">Country</label>
                                            <select class="form-select" id="country" required>
                                                <option value="">Choose...</option>
                                                <option>Nigeria</option>
                                            </select>
                                            <div class="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="state" class="form-label">State</label>
                                            <select class="form-select" id="state" required>
                                                <option value="">Choose...</option>
                                                <option>Lagos</option>
                                            </select>
                                            <div class="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                    </div>

                                    <hr class="my-4" />

                                    <h5 class="mb-3">Payment</h5>

                                    <div class="my-3">
                                        <div class="form-check">
                                            <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                                            <label class="form-check-label" for="credit">Credit card</label>
                                        </div>
                                        <div class="form-check">
                                            <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                                            <label class="form-check-label" for="debit">Debit card</label>
                                        </div>
                                        <div class="form-check">
                                            <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                                            <label class="form-check-label" for="paypal">PayPal</label>
                                        </div>
                                    </div>

                                    <div class="row gy-3 mb-5">
                                        <div class="col-md-6">
                                            <label for="cc-name" class="form-label">Name on card</label>
                                            <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                            <small class="text-muted">Full name as displayed on card</small>
                                            <div class="invalid-feedback">
                                                Name on card is required
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="cc-number" class="form-label">Credit card number</label>
                                            <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Credit card number is required
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="cc-expiration" class="form-label">Expiration</label>
                                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Expiration date required
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="cc-cvv" class="form-label">CVV</label>
                                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Security code required
                                            </div>
                                        </div>
</div>
                                    <button class="btn btn-success btn-lg" type="submit">Make Donation</button>
                                </form>
                        </div>
                        <div class="col-xl-4">
                            <div class="card border-0 bg-light mt-xl-5">
                                <div class="card-body p-4 py-lg-5">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <div class>
                                        <h5 class="mb-3">Bank Transfer</h5>
                                            <p class="text-muted mb-4"> Account Name: Unbound Organization.</p>
                                            <p class="text-muted mb-4"> Account Number: 0029876773</p>
                                            <p class="text-muted mb-4"> Bank: GTB</p>
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
