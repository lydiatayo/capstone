import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import FeaturedImage from './images/FeaturedImage.jpeg';
import Footer from './Footer';
import Navbar from './Navbar';


function Testimonials() {
    return (
        <div>

            <Navbar />
            <section className= 'py-5 my-5 justify-content-center bg-white'>
                <div className="container px-5">
                    <div className="row">
                        <div className="col">
                        <h1 className="fw-bolder mb-3 text-center text-dark" >Testimonials</h1>
                        </div>
                    </div>
                </div>
            </section>


            
            <section>
                <div className="container px-5 py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-xl-10"  style={{backgroundColor:'#fff', marginTop:'-100px' }}>
                            <div className="my-5 mx-5">
                            <div className="row gx-5 align-items-center">
                        <div className="col-lg-3"><img className="img-fluid rounded mb-5 mb-lg-0" src={FeaturedImage} style={{width:'200px', height:'200px'}} alt="..." /></div>
                        <div className="col-lg-9">
                            <h2 className="fw-bolder">Mission</h2>
                            <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-3"><img className="img-fluid rounded mb-5 mb-lg-0" src={FeaturedImage} style={{width:'200px', height:'200px'}} alt="..." /></div>
                        <div className="col-lg-9">
                            <h2 className="fw-bolder">Mission</h2>
                            <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-3"><img className="img-fluid rounded mb-5 mb-lg-0" src={FeaturedImage} style={{width:'200px', height:'200px'}} alt="..." /></div>
                        <div className="col-lg-9">
                            <h2 className="fw-bolder">Mission</h2>
                            <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-3"><img className="img-fluid rounded mb-5 mb-lg-0" src={FeaturedImage} style={{width:'200px', height:'200px'}} alt="..." /></div>
                        <div className="col-lg-9">
                            <h2 className="fw-bolder">Mission</h2>
                            <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                    <hr />

                            </div>
                        </div>

                    </div>

                </div>
            </section>

<Footer />
        </div>
    )
}

export default Testimonials;