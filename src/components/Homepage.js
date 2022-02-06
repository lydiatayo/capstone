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




function Homepage() {
    return (
        <div>
<Navbar />
{/* HomePage Header */}
            <header className="px-4 py-5" style={{ backgroundImage: `url(${headerhero}`}} >
                <div className="container px-5 pt-5">
                    <div className="row">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">Need emergency help from an abusive situation?</h1>
                                <p className="lead fw-normal text-white-50 mb-2" style={{fontSize:'25px'}}>Get help from qualified therapists and counsellors today.</p>
                                <Link to="/quickhelp"> <button className="btn btn-primary btn-lg px-4 me-sm-3">Get Quick Help</button> </Link>
                                <Link to="/therapy"> <button className="btn btn-outline-light btn-lg px-4">Get Therapy Help</button> </Link>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



            <section>
                <div className="container px-5 py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className=" my-5">
                                <h2 className="fw-bolder mb-4 text-center">About Us</h2>
                                <p className="fw-normal mb-4" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum velit egestas non cursus faucibus mus. Sit orci, ornare ut et. Aliquam purus id sem hac. Arcu urna convallis facilisis neque quis molestie.</p>
                                <p className="fw-normal mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum velit egestas non cursus faucibus mus. Sit orci, ornare ut et. Aliquam purus id sem hac. Arcu urna convallis facilisis neque quis molestie.</p>
                                <a href="#scroll-target" style={{color:'#40A5E9', fontSize:'16px'}}> Read our story.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-5" style={{backgroundColor:'#40A5E9'}}>
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div classNmae="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder mb-5" style={{color:'#fff'}}>Testimonials</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card shadow border-0" style={{backgroundColor:'#40A5E9'}}>
                                <img className="card-img-top" src={testi} alt="..." />
                                <div className="card-body p-4">
                                   <h5 className="card-title mb-3 text-align-center" style={{color:'#fff', fontSize:'20px'}}>Fatima Shaibu</h5>
                                    <p className="card-text mb-3" style={{color:'#fff', fontSize:'16px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-5">
                        <div className="card  shadow border-0" style={{backgroundColor:'#40A5E9'}} >
                        <img className="card-img-top" src={testi} alt="..." />
                                <div className="card-body p-4">
                                   <h5 className="card-title mb-3 text-align-center" style={{color:'#fff', fontSize:'20px'}}>Joke Balogun</h5>
                                    <p className="card-text mb-3" style={{color:'#fff', fontSize:'16px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-5">
                        <div className="card  shadow border-0" style={{backgroundColor:'#40A5E9'}}>
                        <img className="card-img-top" src={testi} alt="..." />
                                <div className="card-body p-4">
                                   <h5 className="card-title mb-3 text-align-center" style={{color:'#fff', fontSize:'20px'}}>Derca Mensah</h5>
                                    <p className="card-text mb-3" style={{color:'#fff', fontSize:'16px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

<section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder mb-5">Our Impact in Numbers</h2>
                    </div>
                    <div className="row gx-5">
                        <div className="col mb-5 mb-5 mb-xl-0 justify-content-center">
                            <div className="text-center" >
                            <h2 className="fw-bolder mb-5" style={{width:'150px', height:'150px', border:'6px solid #40A5E9', borderRadius:'50%', paddingTop:'50px', color:'#40A5E9', fontSize:'30px',  marginLeft:'250px'}}>60000</h2>
                                <h5 className="fw-bolder">Abuse survivors connected 
to therapists and counsellors</h5>
                            </div>
                        </div>
                        <div className="col mb-5 mb-5 mb-xl-0 justify-content-centerr">
                            <div className="text-center">
                            <h2 className="fw-bolder mb-5" style={{width:'150px', height:'150px', border:'6px solid #40A5E9', borderRadius:'50%', paddingTop:'50px', color:'#40A5E9', fontSize:'30px', marginLeft:'250px'}}>3000</h2>
                                <h5 className="fw-bolder">Women and girls accessed quick help
to prevent abusive situation</h5>
                            </div>
                        </div>
            
                    </div>
                </div>
            </section>

            <Footer />
            </div>
    );
}

export default Homepage;