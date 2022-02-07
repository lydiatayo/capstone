import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import Rectangle from './images/Rectangle.png';
import { Link } from 'react-router-dom';

function QuickHelp () {
    return(
        <div>
            <Navbar />

            <section className="py-5" style={{backgroundImage:`url(${Rectangle})`, alignItems:'center', height:'600px'}}>
                <div className="ccontainer px-5">
                    <div className="row justify-content-center align-items-center py-5">
                        <div className="col-lg-8 col-xxl-6 py-5 bg-white" style={{border:'2px solid white', borderRadius:'10px'}}>
                        <h3 className="fw-bolder text-center mb-5" style={{color:'#40A5E9'}}>Turn on your location</h3>
                        <form className="d-flex">
        <input class="form-control me-2 mx-1" type="search" placeholder="Search" aria-label="Search" />
        <Link to='/location'> <button className="btn btn-success btn-lg px-4 me-sm-3" type="submit">Search</button> </Link>
      </form> 
                        </div>
                    </div>
                </div>
            </section>
       
            


        
            <Footer />
        </div>
    );
}

export default QuickHelp;

