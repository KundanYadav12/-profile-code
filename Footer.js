import React from 'react';
import '../styles/Footer.css';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
    <a href="https://wa.me/7738533830" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="footer-icon" />
    </a>
    <a href="mailto:kundanyadav96197@gmail.com">
      <FaEnvelope className="footer-icon" />
    </a>
  </div>
);

export default Footer;

