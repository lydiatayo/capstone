import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import headerhero from '../components/images/headerhero.png';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Location () {
    return(
        <div>
            <Navbar/>

            <header className="px-4 py-5">
                 <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" style={{ backgroundImage: `url(${headerhero}`}}>
        <div class="carousel-caption">
        <div className="my-5 text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">Need emergency help from an abusive situation?</h1>
                                <Link to="/quickhelp"> <button className="btn btn-primary btn-lg px-4 me-sm-3">Get Quick Help</button> </Link>
                                <Link to="/therapy"> <button className="btn btn-primary btn-lg px-4">Get Therapy Help</button> </Link>
                            </div>
        </div>
      </div>
      <div class="carousel-item" style={{ backgroundImage: `url(${headerhero}`}}>
        <div class="carousel-caption">
        <div className="my-5 text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">Need emergency help from an abusive situation?</h1>
                                <Link to="/quickhelp"> <button className="btn btn-primary btn-lg px-4 me-sm-3">Get Quick Help</button> </Link>
                                <Link to="/therapy"> <button className="btn btn-primary btn-lg px-4">Get Therapy Help</button> </Link>
                            </div>
        </div>
      </div>

      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</header>


            <section>
                <div className="container">
                  <div className="row">
                      <div className="col">

                      </div>
                  </div>
                </div>
            </section>



            <Footer />
        </div>
    )
}

export default Location;