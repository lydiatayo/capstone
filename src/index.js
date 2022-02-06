import React from 'react';
import ReactDOM from 'react-dom';
import Capstone from './components/Capstone.css';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Volunteer from './components/Volunteer';
import Homepage from './components/Homepage';
import Therapist from './components/Therapist';
import Donate from './components/Donate';
import Navbar from './components/Navbar';


ReactDOM.render(
  <React.StrictMode>
    <Homepage/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

