 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Achievements from './components/Achievements';
import Technology from './components/Technology';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;

