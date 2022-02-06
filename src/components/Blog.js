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
                        <h1 class="fw-bolder mb-3 text-center text-dark" >Blog</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Container */}

            <section class="py-5">
                <div class="container px-5">
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src={FeaturedImage} alt="..." />
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2" style={{backgroundColor:'#40A5E9'}}>Domestic Violence</div>
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><div class="h5 card-title mb-3">Blog post title</div></a>
                                    <p class="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src={FeaturedImage} alt="..." />
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">Workplace Harrassment</div>
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><div class="h5 card-title mb-3">Another blog post title</div></a>
                                    <p class="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src={FeaturedImage} alt="..." />
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">Mental Health</div>
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><div class="h5 card-title mb-3">The last blog post title is a little bit longer than the others</div></a>
                                    <p class="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="text-end mb-5 mb-xl-0">
                        <a class="text-decoration-none" href="#!">
                            More stories
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Blog;