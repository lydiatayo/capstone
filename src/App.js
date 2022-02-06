import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Volunteer from './components/Volunteer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Donate from './components/Donate';
import Therapy from './components/Therapy';
import { Navbar } from 'react-bootstrap';
import Location from './components/Location';
import About from './components/About';
import Faq from './components/Faq';
import Blog from './components/Blog';
import { Link } from 'react-router-dom';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import QuickHelp from './components/QuickHelp';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/volunteer" element={<Volunteer/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/therapy" element={<Therapy/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/quickhelp" element={<QuickHelp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
