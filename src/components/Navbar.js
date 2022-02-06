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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from "./images/twitter.png";
import logo from "./images/logo.png";
import { Link } from 'react-router';





function Navbar() {
  return (
    <>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <p style={{textAlign:"center"}}> Helpline: +2349057645523 </p>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

<div className="row">
  <div className="col">
    <p>IMAGE</p>
  </div>
  <div className="col">
  <img src={logo} />
  <p>IMAGE</p>
  <p>IMAGE</p>
  <p>IMAGE</p>
  </div>

</div>
</>
  );
}

export default Navbar;
