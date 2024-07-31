// src/components/Education.js
import React from 'react';
import '../styles/Education.css';
import college from '../image/Ecell_Group.jpg'

const Education = () => (
  <div className="education">
    <h2>Education</h2>
    <p>MCA from TIMSCDR</p>
    <div className="images">
        <img src={college} alt="college" />
      {/* Add your images here */}
    </div>
    <div className="map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5018267788413!2d72.85807811476188!3d19.211176786991263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64d1a118cf7%3A0x2c8b6f97d1c8b9c6!2sThakur%20College%20of%20Science%20and%20Commerce!5e0!3m2!1sen!2sin!4v1625588245437!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default Education;
