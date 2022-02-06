import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import Footer from './Footer';

function QuickHelp () {
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

export default QuickHelp;

