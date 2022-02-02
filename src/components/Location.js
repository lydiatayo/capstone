import React, { useReducer, useState } from 'react';
import Capstone from '../components/Capstone.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import Footer from './Footer';

function Location () {
    return(
        <div>
            <Navbar/>
            <Footer />
        </div>
    )
}

export default Location;