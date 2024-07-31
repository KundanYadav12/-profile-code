 
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu =()=>{
        setIsActive(!isActive);
    };

    return(

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <h1>Kundan Developer</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/achievements" onClick={toggleMenu}>Achievements</Link></li>
          <li><Link to="/technology" onClick={toggleMenu}>Technology</Link></li>
          <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    );
    };

export default Navbar;
