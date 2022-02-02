import * as ReactBootStrap from "react-bootstrap"
import combined from './images/combined.jpg';
import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import insta from '../components/images/instagram.png'
import logo from '../components/images/logo.png'
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar() {
  return ( 
    <div>
      <nav class="navbar" style={{backgroundColor: '#40A5E9'}}>
    <div class="container-fluid">
      <div className="col-3">
      <img src={insta} alt="" />
      <img src={insta} alt="" />
      <img src={insta} alt="" />
      </div>
      <p style={{textAlign: 'center'}}>Helpline +23448594954453</p>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </nav>
    <div className="row" style={{height: 20, marginBottom: 60, marginTop: 40}}>
      <div className="col-3">
        <Link to="/">
        <img src={logo} alt=""  style={{ width: 50, height: 50, marginLeft: 30}}/>
        </Link>
      </div>
      <div className="col-4" style={{ display: "flex", justifyContent: 'space-between'}}>
        <Link to="/" style={{textDecoration: 'none'}}>
        <span>Home</span>
        </Link>
        <span>About Us</span>
        <span>Resources</span>
        <span>Contact Us</span>
      </div>
      <div className="col-5" style={{ display: 'flex', justifyContent:'end'}}>
        <Link to="/volunteer">
        <button type="button" class="btn btn-outline-primary" style={{marginRight:30}}>Volunteer</button>
        </Link>
        <Link to="/donate">
        <button type="button" class="btn btn-primary" style={{marginRight:30}}>Donate Now</button>
        </Link>
      </div>
    </div>
    </div>
   );
}

export default Navbar;

