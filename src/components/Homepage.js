import React from 'react';
import Capstone from '../components/Capstone.css';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import testi from './images/testi.png';
import test2 from './images/test2.png';
import test3 from './images/test3.png';
import Navbar from './Navbar';
import headerhero from '../components/images/headerhero.png';
import { Link } from 'react-router-dom';
import impact2 from '../components/images/impact2.png';
import { height } from 'dom-helpers';
import abuseg from './images/abuseg.png';
import therapyg from './images/therapyg.png';




function Homepage() {
    return (
        <div>
            <Navbar />
            {/* HomePage Header */}
            <section>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner" style={{ height: 500 }}>
                        <div class="carousel-item active">
                            <div className="overlay" style={{
                                width: '500px',
                                color: 'white',
                                position: 'absolute',
                                zIndex: 12,
                                top: 150,
                                marginLeft: 82,
                                textAlign: 'left'
                            }}>
                                 <h1 class="fw-bolder text-white" style={{fontSize:'50px'}}>Need emergency help from an abusive situation?</h1>
                                 <Link to="/quickhelp"> <button className="btn btn-primary btn-lg px-4 me-sm-3">Get Quick Help</button> </Link>
                            </div>
                            <img src={abuseg} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <div className="overlay" style={{
                                width: '500px',
                                color: 'white',
                                position: 'absolute',
                                zIndex: 12,
                                top: 150,
                                marginLeft: 82,
                                textAlign: 'left'
                            }}>
                                 <h1 class="fw-bolder text-white" style={{fontSize:'50px'}} >Get help from qualified therapists and counsellors</h1>
                               
                                <Link to="/therapy"> <button className="btn btn-primary btn-lg px-4 me-sm-3">Get Therapy</button> </Link>
                            </div>
                            <img src={therapyg} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="py-5">
                                <h2 className="fw-bolder mb-4 text-center">About Us</h2>
                                <p className="fw-normal mb-4" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum velit egestas non cursus faucibus mus. Sit orci, ornare ut et. Aliquam purus id sem hac. Arcu urna convallis facilisis neque quis molestie.</p>
                                <p className="fw-normal mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum velit egestas non cursus faucibus mus. Sit orci, ornare ut et. Aliquam purus id sem hac. Arcu urna convallis facilisis neque quis molestie.</p>
                                <a href="#scroll-target" style={{ color: '#40A5E9', fontSize: '16px' }}> Read our story.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5" style={{ backgroundColor: '#40A5E9' }}>
                <div className="container px-5 py-5">
                    <div className="row gx-5 justify-content-center">
                        <div classNmae="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder mb-5" style={{ color: '#fff' }}>Testimonials</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card shadow border-0" style={{ backgroundColor: '#40A5E9' }}>
                                <img className="card-img-top" src={testi} alt="..." />
                                <div className="card-body p-4">
                                    <h5 className="card-title mb-3 text-align-center" style={{ color: '#fff', fontSize: '20px' }}>Fatima Shaibu</h5>
                                    <p className="card-text mb-3" style={{ color: '#fff', fontSize: '16px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-5">
                            <div className="card  shadow border-0" style={{ backgroundColor: '#40A5E9' }} >
                                <img className="card-img-top" src={testi} alt="..." />
                                <div className="card-body p-4">
                                    <h5 className="card-title mb-3 text-align-center" style={{ color: '#fff', fontSize: '20px' }}>Joke Balogun</h5>
                                    <p className="card-text mb-3" style={{ color: '#fff', fontSize: '16px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-5">
                            <div className="card  shadow border-0" style={{ backgroundColor: '#40A5E9' }}>
                                <img className="card-img-top" src={testi} alt="..." />
                                <div className="card-body p-4">
                                    <h5 className="card-title mb-3 text-align-center" style={{ color: '#fff', fontSize: '20px' }}>Derca Mensah</h5>
                                    <p className="card-text mb-3" style={{ color: '#fff', fontSize: '16px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <div className="row gx-5 justify-content-center">
                            <div className="col">
                                <button className="btn contact-outline-footer btn-lg px-4 me-sm-3">Read Testimonials</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Impact */}

            <section className="py-5 bg-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder mb-5">Our Impact in Numbers</h2>
                    </div>
                    <div className="row py-5" style={{ alignItems: 'center' }}>
                        <div className="col-2">
                            <h2 className='counter'> 30000 </h2>
                        </div>
                        <div className="col-4">
                            <span style={{ textAlign: 'left' }}>Abuse survivors connected to therapists and counsellors</span>

                        </div>
                        <div className="col-2">
                            <h2 className='counter'> 6000 </h2>
                        </div>
                        <div className="col-4">
                            <span style={{ textAlign: 'left' }}>Abuse survivors connected to therapists and counsellors</span>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Homepage;