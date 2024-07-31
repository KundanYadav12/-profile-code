// src/components/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ContactForm.css'
import circle4 from '../image/circle3.png'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('file', formData.file);

    try {
      await axios.post('/api/contact', data);
      alert('Form submitted successfully!');
    } catch (err) {
      console.error(err);
      alert('Successful');
    }
  };

  return (
    <div className='contact'>
        <div className='contact-page'>

        <div className='contact-approve'>
            <img src={circle4} alt="image" />
        </div>
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} required />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" onChange={handleChange} required />
      </label>
      <label>
        File:
        <input type="file" name="file" onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
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
};

export default ContactForm;
