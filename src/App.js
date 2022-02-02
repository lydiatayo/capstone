import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Volunteer from './components/Volunteer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Donate from './components/Donate';
import Therapist from './components/Therapist';
import { Navbar } from 'react-bootstrap';
import Location from './components/Location';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/volunteer" element={<Volunteer/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/therapist" element={<Therapist/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
    </Router>
  );
}

export default App;
