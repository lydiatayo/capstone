import React, { useReducer, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import FeaturedImage from './images/FeaturedImage.jpeg';
import Footer from './Footer'
import Navbar from './Navbar';


function Blog() {
    return (
        <div>
            <Navbar />
            <section className= 'py-5 justify-content-center bg-white'>
                <div className="container px-5">
                    <div className="row">
                        <div className="col">
                        <h1 className="fw-bolder mb-3 text-center text-dark" >Blog</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Container */}

            <section className="py-5">
                <div className="container px-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={FeaturedImage} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2" style={{backgroundColor:'#40A5E9'}}>Domestic Violence</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">Blog post title</div></a>
                                    <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={FeaturedImage} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Workplace Harrassment</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">Another blog post title</div></a>
                                    <p className="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={FeaturedImage} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Mental Health</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">The last blog post title is a little bit longer than the others</div></a>
                                    <p className="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={FeaturedImage} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2" style={{backgroundColor:'#40A5E9'}}>Domestic Violence</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">Blog post title</div></a>
                                    <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={FeaturedImage} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Workplace Harrassment</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">Another blog post title</div></a>
                                    <p className="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={FeaturedImage} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Mental Health</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">The last blog post title is a little bit longer than the others</div></a>
                                    <p className="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-end mb-5 mb-xl-0">
                        <a className="text-decoration-none" href="#!">
                            More stories
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Blog;