import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import insta from '../components/images/instagram.png'
import logo from '../components/images/logo.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ClockHistory } from 'react-bootstrap-icons';




function Navbar() {
  return (
    <div>

      <header className="p-2" style={{backgroundColor:'#40A5E9'}}>
      <div class="container-fluid">
        <div className="row m-2 justify-space-evenly">
        <div className="col">
              <a className="btn btn-light btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-light btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-light btn-social mx-2" href="#!"><i className="fab fa-instagram"></i></a>
              </div>
              
              <div className='col-6' style={{display:'flex', justifyContent:'center'}}>
                    <p className='fw-normal pt-2 text-center' style={{ color: '#fff', fontSize: '16px' }}>Helpline +23448594954453</p>
                    </div>
                    <div className='col' style={{display:'flex', justifyContent:'flex-end'}}>
                    <form className="d-flex me-2">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          </form>
                    </div>
        </div>
             

                </div>
      </header>
        
{/* Menu Nav*/}
      <nav className="navbar navbar-expand-lg p-4" id="mainNav" style={{backgroundColor:"#fff"}}>
            <div className="container ">
              <div classNameName="col">
              <img src={logo} alt="" style={{width:'50px', height:'50px'}} />
              </div>
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <div className='col'>
                    <ul className="navbar-nav ms-auto" style={{display:'flex', justifyContent:'space-around'}} >
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/testimonials" className="nav-link">Testimonials</Link></li>
                        <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                        <li className="nav-item"><Link to="/faq" className="nav-link">FAQ</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                    </div>
                    <div classNameName='col' style={{display:'flex', justifyContent:'flex-end'}}>
                    <Link to="/volunteer">
        <button type="button" className="btn btn-outline-success" style={{marginRight:30}}>Volunteer</button>
        </Link>
        <Link to="/donate">
        <button type="button" className="btn btn-success" style={{marginRight:30}}>Donate Now</button>
        </Link>
                    </div>

                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;

