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